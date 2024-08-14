import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Controls from "./Controls";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import store from "./store";
import Counter from "./Counter";
import CourseCount from "./CourseCount";
import { getCourses } from "./services/CoursesService";
import { updateCourseCount } from "./actions";
import { useDispatch } from "react-redux";

export default Dashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        getCourses().then((payload) => {
            console.log(payload.data);

            const courseCount = payload.data.length;
            dispatch(updateCourseCount(courseCount));
        }).catch((payload) => {
            console.log("Something went wrong");
            console.log(payload);
        })
    }, []);

    return (
        <div>
            Dashboard
            <hr/>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h4>
                                Number of Students
                            </h4>
                            <h6>
                                0
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h4>
                                Number of Courses
                            </h4>
                            <h6>
                                <CourseCount/>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <Counter/>
            <Controls/>
        </div>
    )
}