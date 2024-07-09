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
                    {courses.map((course) => {
                        return (
                            <React.Fragment key={`course-${course.id}`}>
                                <div className="card">
                                    <div className="card-body">
                                        <h4>
                                            {course.name}
                                        </h4>
                                    </div>
                                </div>
                                <div className="mb-4"/>
                            </React.Fragment>
                        )
                    })}
                </div>
            }
        </div>
    )
}