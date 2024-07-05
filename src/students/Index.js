import React, { useState } from "react";
import StudentDisplay from "./Display";

export default Index = (props) => {
    let {
        students,
        onDelete
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
                            <StudentDisplay
                                key={`student-${student.id}`}
                                student={student}
                                onDelete={onDelete}
                            />
                        )
                    })}
                </div>
            }
        </div>
    )
}