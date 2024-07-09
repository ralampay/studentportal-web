import React, { useState } from "react";

export default Index = (props) => {

    const [courses, setCourses] = useState([]);

    return (
        <div>
            <h1>
                List of Courses
            </h1>
            <hr/>
            {courses.length == 0
                ?
                <center>
                    <p>
                        No courses found
                    </p>
                </center>
                :
                <div>
                    Courses Here
                </div>
            }
        </div>
    )
}