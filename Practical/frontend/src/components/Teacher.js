import React, { useRef, useState } from "react";
import { Card, Button, Form } from 'react-bootstrap';

function Teacher() {

    const nameRef = useRef();
    const subRef = useRef();
    const infoRef = useRef();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // alert(inputs);
        const response = await fetch("http://localhost:5000/postUpdate", {
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
        <div className="teacherpage">
            <Card style={{ maxwidth: '200px' }} className="card-customized">

                <Card.Body>
                    <h1>Teacher Page</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="teacherName">
                            <Form.Label>Teacher Name</Form.Label>
                            <Form.Control type="text" ref={nameRef} placeholder="Enter Name" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="subName">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" ref={subRef} placeholder="Enter Subject Name" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="infoText">
                            <Form.Label>Info</Form.Label>
                            <Form.Control type="text" ref={infoRef} placeholder="Enter Update information" onChange={handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Teacher;