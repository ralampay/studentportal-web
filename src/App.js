import React, {useState, useEffect} from "react";
import Header from "./Header";
import StudentForm from "./students/Form";
import StudentIndex from "./students/Index";
import {
    getStudents
} from "./services/StudentsService";

export default App = () => {
    const [students, setStudents] = useState([]);

    const saveStudent = (student) => {
        console.log("Student object to save:");
        console.log(student);

        // Create a copy of students
        let newStudents = [...students];
        newStudents.push(student);

        setStudents(newStudents);
    }

    const refreshStudents = () => {
        console.log("Students length: ", students.length);
        getStudents().then((payload) => {
            setStudents(payload.data);
        }).catch((payload) => {
            console.log("Error in fetching students");
            console.log(payload);
        });
    }
    

    useEffect(refreshStudents, []);

    return (
        <div className="container">
            <Header/>
            <StudentForm
                onSaveStudent={() => {
                    refreshStudents();
                }}
            />
            <hr/>
            <StudentIndex
                students={students}
            />
        </div>
    )
}