import React, { useState, useEffect } from "react";
import { DEFAULT_COURSE } from "../Defaults";
import { useParams } from "react-router-dom";
import { getCourse, deleteCourse } from "../services/CoursesService";
import { getStudents } from "../services/StudentsService";
import { Link, useNavigate } from "react-router-dom";
import ModalConfirmation from "../commons/ModalConfirmation";

export default Show = (props) => {
    const [course, setCourse] = useState(DEFAULT_COURSE);
    const [students, setStudents] = useState([]);
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

        getStudents({ courseId: id }).then((payload) => {
            setStudents(payload.data);
        }).catch((payload) => {
            console.log("Error in fetching students")
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
            <div className="row">
                <div className="col">
                    <h2>
                        {course.name}
                    </h2>
                </div>
                <div className="col text-end">
                    ({students.length} Students)
                </div>
            </div>
            <hr/>
            {students.length == 0 ?
                <center>
                    <p>
                        No students for this course.
                    </p>
                </center>
                :
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th className="text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => {
                            return (
                                <tr key={`student-${student.id}`}>
                                    <td>
                                        {student.lastName}, {student.firstName}
                                    </td>
                                    <td className="text-center">
                                        <Link to={`/students/${student.id}`}>
                                            Show
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }
            
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