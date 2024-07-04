import React, { useState } from "react";

export default Index = (props) => {
    let {
        students
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
                            <div>
                                <h3>
                                    {student.lastName}, {student.firstName}
                                </h3>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}