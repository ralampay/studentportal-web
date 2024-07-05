import React, {useState} from "react";
import { deleteStudent } from "../services/StudentsService";

export default Display = (props) => {
    let {
        student,
        onDelete,
        onEditClicked
    } = props;

    return (
        <div>
            <h3>
                {student.lastName}, {student.firstName}
            </h3>
            <button
                className="btn btn-info btn-sm"
                onClick={() => {
                    console.log(`Edit student ${student.id}`);
                    onEditClicked(student.id);
                }}
            >
                Edit
            </button>
            <span className="me-2"/>
            <button
                className="btn btn-danger btn-sm"
                onClick={() => {
                    deleteStudent(student.id).then(() => {
                        onDelete();
                    });
                }}
            >
                Delete
            </button>
        </div>
    )
}