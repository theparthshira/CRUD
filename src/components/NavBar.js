import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="NavBar-main">
            <>
                <Link to="/dashboard" className="NavBar-item">
                    Dashboard
                </Link>
                <Link to="/students" className="NavBar-item">
                    Students
                </Link>
                <Link to="/departments" className="NavBar-item">
                    Departments
                </Link>
            </>
        </div>
    );
}

export default NavBar;
