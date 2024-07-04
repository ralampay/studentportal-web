import React, {useState} from "react";

export default Display = (props) => {
    let {
        student
    } = props;

    return (
        <div>
            <h3>
                {student.lastName}, {student.firstName}
            </h3>
            <button>
                Delete
            </button>
        </div>
    )
}