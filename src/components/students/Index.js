import React, {useState, useEffect} from  "react";
import { getStudents } from "../../services/StudentsService";

export default Index = (props) => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents().then((payload) => {
            setStudents(payload.data);
        })
    });

    return (
        <React.Fragment>
            <h2>
                Student List
            </h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Full Name
                        </th>
                        <th>
                            Course
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => {
                        return (
                            <tr key={`student-${student.id}`}>
                                <td>
                                    {student.id}
                                </td>
                                <td>
                                    {`${student.lastName}, ${student.firstName}`}
                                </td>
                                <td>
                                    {student.courseId}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </React.Fragment>
        
    )
}