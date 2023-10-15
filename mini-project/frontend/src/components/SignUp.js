import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        age: '',
        email: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSignUp = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            if (response.ok) {
                alert(data.message)
                console.log('Registration successful');
                navigate("/")
            } else {
                alert(data.message)
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    }

    return (
        <main className="signUpPage">
            <form className="loginForm" onSubmit={handleSignUp}>
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <button type="submit">Sign Up</button>
                <br /><br />
                <Link to="/">Already have an account? Log in</Link>
            </form>
        </main>
    );
}

export default SignUp;
