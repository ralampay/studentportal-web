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
                <center>
                    students list
                </center>
            }
        </div>
    )
}