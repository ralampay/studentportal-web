import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CourseForm from "./components/courses/Form";
import CourseIndex from "./components/courses/Index";

export default App = (props) => {
    return (
        <div>
            <div className="container">
                <Header/>
                <CourseForm/>
                <hr/>
                <CourseIndex/>
                <hr/>
                <Footer/>
            </div>
        </div>
    );
}