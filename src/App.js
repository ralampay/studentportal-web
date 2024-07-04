import React, {useState} from "react";
import Header from "./Header";
import StudentForm from "./students/Form";
import StudentIndex from "./students/Index";

export default App = () => {

    const saveStudent = (student) => {
        console.log("Student object to save:");
        console.log(student);

        // Create a copy of students
        let newStudents = [...students];
        newStudents.push(student);

        setStudents(newStudents);
    }

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
            <StudentForm
                handleSave={saveStudent}
            />
            <hr/>
            <StudentIndex
                students={students}
            />
        </div>
    )
}