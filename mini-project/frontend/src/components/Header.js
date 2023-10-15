import React from "react";
import "../App.css"
import { Link, useLocation } from "react-router-dom";

function Header() {
    return(
        <header className = "header">
            <h1 id="sitename">Scheduler</h1>
            <nav className="nav">
                <ul>
                    <CustomLink href={"/Home"}>Home</CustomLink>
                    <CustomLink href={"/BookAppointment"}>New appointment</CustomLink>
                    <CustomLink href={"/MySchedule"}>Schedule</CustomLink>
                    <CustomLink href={"/Profile"}>Profile</CustomLink>
                </ul>
            </nav>
        </header> 
    )
}

function CustomLink({href,children}){
    const path =  useLocation().pathname
    return (
        <li className={path === href ? "active" : ""}>
            <Link to={href}>{children}</Link>
        </li>
    )
}

export default Header;