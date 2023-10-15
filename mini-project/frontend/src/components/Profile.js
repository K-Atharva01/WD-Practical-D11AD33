//Profile Page

import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
    const { token } = useAuth();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch user data from the backend using the token
        if (token) {
            fetch('http://localhost:5000/getUserData', {
                method: 'GET',
                headers: {
                    Authorization: token, // Include the token in the request header
                },
            })
                .then((response) => response.json())
                .then((data) => setUserData(data))
                .catch((error) => console.error(error));
            console.log(userData);
        }
    }, [token]);

    return (
        <main>
            <h1>Profile</h1>
            <div className='profilePage'>
                {userData ? (
                    <div className='profileData'>
                        <h1>Welcome {userData.name}</h1>
                        <h2>Username:{userData.username}</h2>
                        <h2>Email:{userData.email}</h2>
                        <h2>Age:{userData.age}</h2>
                    </div>

                ) : (
                    <p>Loading user data...</p>
                )}
            </div>
        </main>
    );
};

export default Profile;
