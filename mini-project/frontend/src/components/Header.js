import React from "react";
import "../App.css"

function Header() {
    return(
        <header className = "header">
            <h1 id="sitename">Scheduler</h1>
            <nav className="nav">
                <ul>
                    <CustomLink href={"/"}>Home</CustomLink>
                    <CustomLink href={"/BookAppointment"}>New appointment</CustomLink>
                    <CustomLink href={"/MySchedule"}>Schedule</CustomLink>
                    <CustomLink href={"/Profile"}>Profile</CustomLink>
                </ul>
            </nav>

        </header> 
    )
}

function CustomLink({href,children,...props}){
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}

export default Header;