import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";
import CoursesIndex from "./courses/Index";
import Dashboard from "./Dashboard";

export default App = () => {
    return (
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
    )
}