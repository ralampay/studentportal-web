import React, { useState } from "react";
import StudentDisplay from "./Display";

export default Index = (props) => {
    let {
        students,
        onDelete,
        onEditClicked
    } = props;

    return (
        <div>
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
                                    onDelete={onDelete}
                                    onEditClicked={onEditClicked}
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