import React, { useState, useEffect } from "react";
import { DEFAULT_COURSE } from "../Defaults";
import { useParams } from "react-router-dom";
import { getCourse, deleteCourse } from "../services/CoursesService";
import { Link, useNavigate } from "react-router-dom";
import ModalConfirmation from "../commons/ModalConfirmation";

export default Show = (props) => {

    const [course, setCourse] = useState(DEFAULT_COURSE);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const navigate = useNavigate();

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
            <ModalConfirmation
                show={isDeleteModalOpen}
                handleClose={() => {
                    setIsDeleteModalOpen(false);
                }}
                onConfirm={() => {
                    deleteCourse(id).then((payload) => {
                        navigate('/courses');
                    })
                }}
            />
            <h2>
                {course.name}
            </h2>
            <hr/>

            <Link to="/courses">
                Back to Courses
            </Link>
            <span className="me-2"/>
            |
            <span className="me-2"/>
            <Link to={`/courses/${course.id}/edit`}>
                Edit Course
            </Link>
            <span className="me-2"/>
            |
            <span className="me-2"/>
            <button
                onClick={() =>{
                    setIsDeleteModalOpen(true);
                }}
            >
                Delete
            </button>
        </div>
    )
}