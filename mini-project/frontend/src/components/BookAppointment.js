//New Appointments Page

import React from "react";
import { useState } from 'react';

function BookAppointment() {
    return (
        <div className="bookappointment">
            {/* <h1>Appointment Booking</h1> */}
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
                <h2>Book an Appointment</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={inputs.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <input
                        type="text"
                        id="time"
                        name="time"
                        value={inputs.time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="reason">Reason:</label>
                    <input
                        type="text"
                        id="reason"
                        name="reason"
                        value={inputs.reason}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default BookAppointment;