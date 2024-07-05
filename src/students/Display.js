import React, {useState} from "react";
import { deleteStudent } from "../services/StudentsService";

export default Display = (props) => {
    let {
        student,
        onDelete
    } = props;

    return (
        <div>
            <h3>
                {student.lastName}, {student.firstName}
            </h3>
            <button
                className="btn btn-danger btn-sm"
                onClick={() => {
                    deleteStudent(student.id);
                    onDelete();
                }}
            >
                Delete
            </button>
        </div>
    )
}