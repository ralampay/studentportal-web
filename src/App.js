import React, {useState, useEffect} from "react";
import Header from "./Header";
import StudentForm from "./students/Form";
import StudentIndex from "./students/Index";
import {
    getStudents
} from "./services/StudentsService";

export default App = () => {

    const saveStudent = (student) => {
        console.log("Student object to save:");
        console.log(student);

        // Create a copy of students
        let newStudents = [...students];
        newStudents.push(student);

        setStudents(newStudents);
    }

    const refreshStudents = () => {
        getStudents().then((payload) => {
            setStudents(payload.data);
        }).catch((payload) => {
            console.log("Error in fetching students");
            console.log(payload);
        });
    }

    useEffect(refreshStudents, []);

    const [students, setStudents] = useState([]);

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