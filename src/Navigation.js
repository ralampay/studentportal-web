import React from "react";
import { Link } from "react-router-dom";

export default Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    Student Portal
                </Link>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link to="/courses" className="nav-link">
                                Courses
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/students" className="nav-link">
                                Students
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}