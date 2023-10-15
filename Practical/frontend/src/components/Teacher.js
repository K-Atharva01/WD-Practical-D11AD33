import React, { useState } from "react";

function Teacher() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    console.log(inputs);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:5000/postUpdate", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        });
        console.log(response.json);
    }
    return (
        <div className="teacherpage">
            <form onSubmit={handleSubmit}>
                <label>Enter Teacher Name :
                    <br />
                    <input
                        type="text"
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>Enter Subject Name :
                    <br />
                    <input
                        type="text"
                        name="subject"
                        value={inputs.subject || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>Enter Update Info :
                    <br />
                    <input
                        type="text"
                        name="info"
                        value={inputs.info || ""}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Teacher;