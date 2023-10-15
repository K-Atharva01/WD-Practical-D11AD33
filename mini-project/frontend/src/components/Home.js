//Home Page

import React from "react";
import illustration from "./images/illustration.jpg"

function Home() {
    return (
        <div style={{ display: "flex", marginTop:"30px" }}>
            <img src={illustration} height={"100%"} width={"50%"} />
            <div style={{ padding: "40px", paddingLeft: "50px" }} >
                <h1 style={{ color: "rgb(0, 115, 255)" }}>Appointment Buddy</h1>
                <h2>
                    Welcome to Appointment Buddy, your ultimate destination for streamlined appointment scheduling. Whether you're a business owner, professional, or a client seeking services, we've designed our platform to simplify the scheduling process. Say goodbye to the hassles of back-and-forth emails or phone calls—our user-friendly interface empowers you to effortlessly book, modify, and cancel appointments in just a few clicks. With personalized profiles, real-time updates, and mobile accessibility, we're committed to making appointment management convenient and efficient
                </h2>
            </div>
        </div>
    )
}

export default Home;