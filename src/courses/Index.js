import React, { useState, useEffect } from "react";
import { getCourses } from "../services/CoursesService";
import { useNavigate } from "react-router-dom";
import CourseCount from "../CourseCount";

export default Index = (props) => {

    // Create a navigation mechanism
    const navigate = useNavigate();

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
            <div className="row">
                <div className="col">
                    <h1>
                        List of Courses
                    </h1>
                    <h2>
                        <CourseCount/>
                    </h2>
                </div>
                <div className="col text-end">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            navigate('/courses/new');
                        }}
                    >
                        New Course
                    </button>
                </div>
            </div>
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
                                        <div className="row">
                                            <div className="col">
                                                <h4>
                                                    {course.name}
                                                </h4>
                                            </div>
                                            <div className="col text-end">
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => {
                                                        navigate(`/courses/${course.id}`);
                                                    }}
                                                >
                                                    Go to Course
                                                </button>
                                            </div>
                                        </div>
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