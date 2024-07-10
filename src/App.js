import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";
import StudentsIndex from "./students/Index";
import StudentsForm from "./students/Form";
import StudentsShow from "./students/Show";
import CoursesIndex from "./courses/Index";
import CoursesShow from "./courses/Show";
import CoursesForm from "./courses/Form";
import Dashboard from "./Dashboard";
import Navigation from "./Navigation";

export default App = () => {
    return (
        <React.Fragment>
            <Navigation/>
            <div className="mt-2"/>
            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={<Dashboard/>}
                    />
                    <Route
                        path="/students"
                        element={<StudentsIndex/>}
                    />
                    <Route
                        path="/students/new"
                        element={<StudentsForm/>}
                    />
                    <Route
                        path="/students/:id/edit"
                        element={<StudentsForm/>}
                    />
                    <Route
                        path="/students/:id"
                        element={<StudentsShow/>}
                    />
                    <Route
                        path="/courses"
                        element={<CoursesIndex/>}
                    />
                    <Route
                        path="/courses/:id"
                        element={<CoursesShow/>}
                    />
                    <Route
                        path="/courses/new"
                        element={<CoursesForm/>}
                    />
                    <Route
                        path="/courses/:id/edit"
                        element={<CoursesForm/>}
                    />
                </Routes>
            </div>
        </React.Fragment>
    )
}