import React from "react";

export default Form = (props) => {
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
                    className="form-control"
                />
            </div>
        </div>
    );
}