import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";
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