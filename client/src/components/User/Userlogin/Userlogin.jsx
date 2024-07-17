import React, { useEffect, useState } from 'react';
import './Userlogin.css';
import axios from 'axios';


function Userlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/user/login', {
        email,
        password
      });
      setLoginMessage(response.data.message);
    } catch (error) {
      setLoginMessage(error.response.data.message);
    }
  };
  return (
    <div>
      <form onSubmit={handlelogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Login</button>
      </form>
      {loginMessage && <p>{loginMessage}</p>}
    </div>
  )
}

export default Userlogin