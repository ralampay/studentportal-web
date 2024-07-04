import React, {useState} from "react";
import Header from "./Header";
import StudentForm from "./students/Form";

export default App = () => {

    const [students, setStudents] = useState([]);

    return (
        <div className="container">
            <Header/>
            <StudentForm/>
            <hr/>
        </div>
    )
}