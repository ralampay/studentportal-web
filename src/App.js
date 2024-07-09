import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";
import CoursesIndex from "./courses/Index";
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
                </Routes>
            </div>
        </React.Fragment>
    )
}