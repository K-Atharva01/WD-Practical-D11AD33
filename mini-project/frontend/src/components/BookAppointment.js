//New Appointments Page

import React from "react";
import { useState } from 'react';

function BookAppointment() {
    return (
        <div className="bookappointment">
            <h1>Appointment Booking</h1>
            <div>
                <MyForm />
            </div>
        </div>
    )
}

function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        //New Appointement POST request
        const response = await fetch("http://localhost:5000/newAppointment", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs),
        });
        console.log(response.json);
        setInputs({ name: '', time: '', reason: '' });
        alert("Appointment added");     
    }

    return (
        <div className="bookingPage">
            <form onSubmit={handleSubmit} className="bookingForm">
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <label>Enter your name :
                        <input
                            type="text"
                            name="name"
                            value={inputs.name || ""}
                            onChange={handleChange} required
                        />
                    </label>

                    <label>Enter Appointment time :
                        <input
                            type="text"
                            name="time"
                            value={inputs.time || ""}
                            onChange={handleChange} required
                        />
                    </label>

                    <label>Enter your reason :
                        <input
                            type="text"
                            name="reason"
                            value={inputs.reason || ""} 
                            onChange={handleChange} required
                        />
                    </label>

                    <input type="submit" style={{
                        maxWidth: "fit-content",
                        alignSelf: "center"
                    }} />
                </div>
            </form>
        </div>
    )
}

export default BookAppointment;