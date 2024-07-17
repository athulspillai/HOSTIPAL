import React, { useEffect, useState } from 'react';
import './Userregister.css';
import axios from 'axios';


function Userregister() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [password, setPassword] = useState('');
    const [registerMessage, setRegisterMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/user/register', {
                username,
                email,
                mobilenumber,
                password
            });
            setRegisterMessage(response.data.message);
        } catch (error) {
            setRegisterMessage(error.response.data.message);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Mobile Number:
                    <input
                        type="number"
                        value={mobilenumber}
                        onChange={(e) => setMobilenumber(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Register</button>
            </form>
            {registerMessage && <p>{registerMessage}</p>}
        </div>
    )
}

export default Userregister