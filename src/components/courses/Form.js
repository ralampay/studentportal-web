import React, { useState } from "react";
import { DEFAULT_COURSE } from "../../helpers/defaults";
import { saveCourse } from "../../services/CoursesService";

export default Form = (props) => {

    const [course, setCourse] = useState(DEFAULT_COURSE);
    const [isLoading, setIsLoading] = useState(false);

    const handleSave = () => {
        setIsLoading(true);

        saveCourse({...course}).then((payload) => {
            console.log(payload.data);
            alert("Added a new course!");
            setIsLoading(false);
            setCourse(DEFAULT_COURSE);
        })
    }

    return (
        <div>
            <h4>
                Course Form
            </h4>
            <hr/>
            <div className="form-group">
                <label>
                    Name:
                </label>
                <input
                    value={course.name}
                    className="form-control"
                    disabled={isLoading}
                    onChange={(event) => {
                        let val = event.target.value;

                        let obj = {...course};
                        obj.name = val;

                        setCourse(obj);
                    }}
                />
            </div>
            <div className="form-group">
                <label>
                    Category
                </label>
                <select 
                    value={course.category}
                    className="form-control"
                    disabled={isLoading}
                    onChange={(event) => {
                        let obj = {...course};
                        obj.category = event.target.value;

                        setCourse(obj);
                    }}
                >
                    <option value="">-- SELECT --</option>
                    <option value="Undergrad">Undergrad</option>
                    <option value="Graduate">Graduate</option>
                </select>
            </div>
            <hr/>
            <button
                className="btn btn-success"
                disabled={isLoading}
                onClick={() => {
                    handleSave();
                }}
            >
                Save Course
            </button>
        </div>
    );
}