import React, {useState, useEffect} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { DEFAULT_STUDENT } from "../Defaults";
import { getStudent } from "../services/StudentsService";

export default Show = (props) => {
    let {
        id
    } = useParams();

    const [student, setStudent] = useState(DEFAULT_STUDENT);

    useEffect(() => {
        getStudent(id).then((payload) => {
            setStudent(payload.data);
        }).catch((payload) => {
            console.log("Error in fetching student");
            console.log(payload);
        })
    }, []);

    return (
        <div>
            <h3>
                {student.lastName}, {student.firstName}
            </h3>
            <hr/>
            <Link to="/students">
                Back to Students
            </Link>
        </div>
    )
}