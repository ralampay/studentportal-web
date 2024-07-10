import React, {useState} from "react";
import { deleteStudent } from "../services/StudentsService";
import ModalConfirmation from "../commons/ModalConfirmation";
import { useNavigate } from "react-router-dom";

export default Display = (props) => {

    let {
        student,
        onDelete,
        onEditClicked
    } = props;

    const navigate = useNavigate();

    const [isOpenDeleteConfirmation, setIsOpenDeleteConfirmation] = useState(false);

    const handleClose = () => {
        setIsOpenDeleteConfirmation(false);
    }

    const handleOpen = () => {
        setIsOpenDeleteConfirmation(true);
    }

    return (
        <React.Fragment>
            <ModalConfirmation
                show={isOpenDeleteConfirmation}
                handleClose={handleClose}
                onConfirm={() => {
                    deleteStudent(student.id).then((payload) => {
                        onDelete();
                        handleClose();
                    })
                }}
            />
            <div className="card">
                <div className="card-body">
                    <h3>
                        {student.lastName}, {student.firstName}
                    </h3>
                    <button
                        className="btn btn-info btn-sm"
                        onClick={() => {
                            navigate(`/students/${student.id}`);
                        }}
                    >
                        Show
                    </button>
                    <span className="me-2"/>
                    <button
                        className="btn btn-info btn-sm"
                        onClick={() => {
                            console.log(`Edit student ${student.id}`);
                            onEditClicked(student.id);
                        }}
                    >
                        Edit
                    </button>
                    <span className="me-2"/>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                            setIsOpenDeleteConfirmation(true);
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </React.Fragment>
        
    )
}