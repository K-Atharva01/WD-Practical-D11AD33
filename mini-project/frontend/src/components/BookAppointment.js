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
        // alert(inputs);
        const response = await fetch("http://localhost:5000/newAppointment", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs),
        });
        console.log(response.json);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>Enter Appointment time:
                <input
                    type="text"
                    name="time"
                    value={inputs.time || ""}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>Enter your age:
                <input
                    type="text"
                    name="reason"
                    value={inputs.reason || ""}
                    onChange={handleChange}
                />
            </label>
            <br />
            <input type="submit" />
        </form>
    )
}

export default BookAppointment;