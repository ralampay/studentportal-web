import React, { useState } from "react";

export default Form = (props) => {

    // States of Form
    const [name, setName] = useState("");

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
                    value={name}
                    className="form-control"
                    onChange={(event) => {
                        let val = event.target.value;
                        setName(val);
                    }}
                />
            </div>
            <hr/>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>
                            Name
                        </th>
                        <td>
                            {name}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}