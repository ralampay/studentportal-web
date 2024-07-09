import React, { useState, useEffect } from "react";
import { DEFAULT_COURSE } from "../Defaults";
import { useParams } from "react-router-dom";
import { getCourse } from "../services/CoursesService";
import { Link } from "react-router-dom";

export default Show = (props) => {

    const [course, setCourse] = useState(DEFAULT_COURSE);

    let {
        id
    } = useParams();

    useEffect(() => {
        getCourse(id).then((payload) => {
            setCourse(payload.data);
        }).catch((payload) => {
            console.log(payload);
        })
    }, [id])

    return (
        <div>
            <h2>
                {course.name}
            </h2>
            <hr/>

            <Link to="/courses">
                Back to Courses
            </Link>
        </div>
    )
}