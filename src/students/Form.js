import React, { useState, useEffect } from "react";
import {
    saveStudent,
    getStudent
} from "../services/StudentsService";
import { DEFAULT_STUDENT } from "../Defaults";

export default Form = (props) => {

    let {
        onSaveStudent,
        id
    } = props;

    // Create states for this component
    // const[stateVariable, setStateVariable] = useState(defaultValue);
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [student, setStudent] = useState(DEFAULT_STUDENT);

    useEffect(() => {
        if (id) {
            getStudent(id).then((payload) => {
                setStudent(payload.data);
            });
        }
    }, [id])

    return (
        <div>
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
            <hr/>
            <h4>{student.lastName}, {student.firstName}</h4>
            <hr/>
            <button
                className="btn btn-primary"
                disabled={isLoading}
                onClick={() => {
                    setIsLoading(true);

                    saveStudent({...student}).then((payload) => {
                        onSaveStudent();

                        // Clear out the form
                        setStudent(DEFAULT_STUDENT);
    
                        // Allow input again
                        setIsLoading(false);
                    })
                }}
            >
                Save Record
            </button>
        </div>
    )
}