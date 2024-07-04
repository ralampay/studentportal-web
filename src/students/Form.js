import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import {
    saveStudent
} from "../services/StudentsService";

export default Form = (props) => {

    let {
        onSaveStudent
    } = props;

    // Create states for this component
    // const[stateVariable, setStateVariable] = useState(defaultValue);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div>
            <div className="form-group">
                <label>
                    First Name:
                </label>
                <input
                    value={firstName}
                    disabled={isLoading}
                    className="form-control"
                    onChange={(event) => {
                        setFirstName(event.target.value);
                    }}
                />
            </div>
            <div className="mt-2"/>
            <div className="form-group">
                <label>
                    Last Name:
                </label>
                <input
                    value={lastName}
                    disabled={isLoading}
                    className="form-control"
                    onChange={(event) => {
                        setLastName(event.target.value);
                    }}
                />
            </div>
            <hr/>
            <h4>{lastName}, {firstName}</h4>
            <hr/>
            <button
                className="btn btn-primary"
                disabled={isLoading}
                onClick={() => {
                    setIsLoading(true);

                    let student = {
                        firstName: firstName,
                        lastName: lastName
                    }

                    saveStudent(student).then((payload) => {
                        onSaveStudent();

                        // Clear out the form
                        setFirstName("");
                        setLastName("");
    
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