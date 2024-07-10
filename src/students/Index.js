import React, { useState, useEffect } from "react";
import StudentDisplay from "./Display";
import { getStudents, deleteStudent } from "../services/StudentsService";
import { useNavigate } from "react-router-dom";

export default Index = (props) => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    const refreshStudents = () => {
        getStudents().then((payload) => {
            console.log("Students:");
            console.log(payload.data);
            setStudents(payload.data);
        }).catch((payload) => {
            console.log("Error in fetching students");
            console.log(payload);
        })
    }

    useEffect(() => {
        refreshStudents();
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col">
                    <h4>
                        List of Students
                    </h4>
                </div>
                <div className="col text-end">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            navigate('/students/new');
                        }}
                    >
                        New Student
                    </button>
                </div>
            </div>
            <hr/>
            {students.length == 0 ?
                <center>
                    No students found.
                </center> :
                <div>
                    {students.map((student) => {
                        return (
                            <React.Fragment
                                key={`student-${student.id}`}
                            >
                                <StudentDisplay
                                    student={student}
                                    onDelete={() => {
                                        refreshStudents();
                                    }}
                                    onEditClicked={(studentId) => {
                                        navigate(`/students/${studentId}/edit`)
                                    }}
                                />
                                <div className="mb-2"/>
                            </React.Fragment>
                        )
                    })}
                </div>
            }
        </div>
    )
}