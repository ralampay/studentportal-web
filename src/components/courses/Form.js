import React, { useState } from "react";
import { DEFAULT_COURSE } from "../../helpers/defaults";

export default Form = (props) => {

    const [course, setCourse] = useState(DEFAULT_COURSE);

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
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>
                            Name
                        </th>
                        <td>
                            {course.name}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Category
                        </th>
                        <td>
                            {course.category}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}