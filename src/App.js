import React, {useState} from "react";
import Header from "./Header";
import StudentForm from "./students/Form";
import StudentIndex from "./students/Index";

export default App = () => {

    const [students, setStudents] = useState([
        {
            id: 1,
            firstName: "Raphael",
            lastName: "Alampay"
        },
        {
            id: 2,
            firstName: "Leonardo",
            lastName: "Alampay"
        }
    ]);

    return (
        <div className="container">
            <Header/>
            <StudentForm/>
            <hr/>
            <StudentIndex
                students={students}
            />
        </div>
    )
}