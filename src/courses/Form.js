import React, { useEffect, useState } from "react";
import { DEFAULT_COURSE } from "../Defaults";
import { saveCourse, getCourse } from "../services/CoursesService";
import { useParams, useNavigate } from "react-router-dom";

export default Form = (props) => {

    const [course, setCourse] = useState(DEFAULT_COURSE);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    let {
        id
    } = useParams();

    useEffect(() => {
        if (id) {
            getCourse(id).then((payload) => {
                setCourse(payload.data);
            }).catch((payload) => {
                console.log("Error in fetching course");
                console.log(payload);
            })
        }
    }, [id]);

    const handleSave = () => {
        setIsLoading(true);
        setErrors({});

        saveCourse({...course}).then((payload) => {
            navigate(`/courses/${payload.data.id}`);
            setCourse(DEFAULT_COURSE);
        }).catch((payload) => {
            console.log("Error in saving course");
            console.log(payload);

            setErrors(payload.response.data);
        }).finally(() => {
            setIsLoading(false);
        })
    }

    return (
        <div>
            <h1>
                Course Form
            </h1>
            <div className="form-group">
                <label>
                    Name
                </label>
                <input
                    value={course.name}
                    disabled={isLoading}
                    className="form-control"
                    onChange={(event) => {
                        let _course = {...course}
                        _course.name = event.target.value;

                        setCourse(_course);
                    }}
                />
            </div>
            <hr/>
            <button 
                disabled={isLoading}
                className="btn btn-primary"
                onClick={handleSave}
            >
                Save
            </button>
        </div>
    )
}