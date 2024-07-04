import React, {useState} from "react";
import Header from "./Header";
import StudentForm from "./students/Form";
import StudentIndex from "./students/Index";

export default App = () => {

    const [students, setStudents] = useState([]);

    return (
        <div className="container">
            <Header/>
            <StudentForm/>
            <hr/>
            <StudentIndex
                students={[]}
            />
        </div>
    )
}