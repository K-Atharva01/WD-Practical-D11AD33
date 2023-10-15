import React from "react"

function Navbar() {
    return(
        <div className = "header">
            <h1 id="sitename">Updates</h1>
            <nav className="nav">
                <ul>
                    <CustomLink href={"/"}>Home</CustomLink>
                    <CustomLink href={"/NewUpdates"}>New Updates</CustomLink>
                    <CustomLink href={"/History"}>History</CustomLink>
                    <CustomLink href={"/Teacher"}>Teacher</CustomLink>
                </ul>
            </nav>
        </div>    
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

export default Navbar