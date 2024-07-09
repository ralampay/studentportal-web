import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";
import CoursesIndex from "./courses/Index";
import CoursesShow from "./courses/Show";
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
                </Routes>
            </div>
        </React.Fragment>
    )
}