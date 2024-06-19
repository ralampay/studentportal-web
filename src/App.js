import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CourseForm from "./components/courses/Form";

export default App = (props) => {
    return (
        <div>
            <div className="container">
                <Header/>
                <CourseForm/>
                <hr/>
                <Footer/>
            </div>
        </div>
    );
}