import React, { useState, useEffect } from "react";
import {
    saveStudent,
    getStudent
} from "../services/StudentsService";
import { useNavigate, useParams } from "react-router-dom";
import { getCourses } from "../services/CoursesService";
import { DEFAULT_STUDENT } from "../Defaults";

export default Form = (props) => {
    let {
        id
    } = useParams();

    // Create states for this component
    // const[stateVariable, setStateVariable] = useState(defaultValue);
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [student, setStudent] = useState(DEFAULT_STUDENT);
    const [courses, setCourses] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getStudent(id).then((payload) => {
                setStudent(payload.data);
            });
        }

        getCourses().then((payload) => {
            setCourses(payload.data);
        }).catch((payload) => {
            console.log("Error in fetching courses");
            console.log(payload);
        })
    }, [id])

    return (
        <div>
            <h2>
                Student Form
            </h2>
            <hr/>
            <div className="form-group">
                <label>
                    First Name:
                </label>
                <input
                    value={student.firstName}
                    disabled={isLoading}
                    className="form-control"
                    onChange={(event) => {
                        let _student = {...student};
                        _student.firstName = event.target.value;

                        setStudent(_student);
                    }}
                />
            </div>
            <div className="mt-2"/>
            <div className="form-group">
                <label>
                    Last Name:
                </label>
                <input
                    value={student.lastName}
                    disabled={isLoading}
                    className="form-control"
                    onChange={(event) => {
                        let _student = {...student};
                        _student.lastName = event.target.value;

                        setStudent(_student);
                    }}
                />
            </div>
            <div className="mt-2"/>
            <div className="form-group">
                <label>
                    Course
                </label>
                <select
                    className="form-control"
                    value={student.courseId}
                    onChange={(event) => {
                        let _student = {...student};
                        _student.courseId = event.target.value;

                        setStudent(_student);
                    }}
                >
                    <option value="">
                        -- SELECT --
                    </option>
                    {courses.map((course) => {
                        return (
                            <option value={course.id} key={`course-${course.id}`}>
                                {course.name}
                            </option>
                        )
                    })}
                </select>
            </div>
            <hr/>
            <h4>{student.lastName}, {student.firstName}</h4>
            <hr/>
            <button
                className="btn btn-primary"
                disabled={isLoading}
                onClick={() => {
                    setIsLoading(true);

                    saveStudent({...student}).then((payload) => {
                        // Clear out the form
                        setStudent(DEFAULT_STUDENT);
    
                        // Allow input again
                        setIsLoading(false);

                        // Go back to index
                        navigate('/students');
                    })
                }}
            >
                Save Record
            </button>
        </div>
    )
}