import React, { useState, useEffect } from "react";
import { getCourses } from "../services/CoursesService";

export default Index = (props) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then((payload) => {
            setCourses(payload.data);
        }).catch((payload) => {
            console.log("Error in fetching courses");
            console.log(payload);
        });
    }, []);

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