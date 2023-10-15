//Login Page

import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        //Login POST request
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            JSON.stringify(data)
            console.log(username,password)

            if (data.token) {
                setToken(data.token);
                
                console.log(data.token)
                navigate("/Home")
            }
            else {
                alert("cannot login")
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main className="loginPage">
            <form className="loginForm" onSubmit={handleLogin} >
                <label>Username :
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>Password :
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <input type="submit" style={{
                    maxWidth: "fit-content",
                    alignSelf: "center"
                }} />
                <p>Sign up ?</p>
            </form>
        </main>
    )
}

export default LoginPage;