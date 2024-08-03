import { useState } from 'react';
import './Userlogin.css';
import axios from 'axios';
import { Form } from 'react-bootstrap';


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
      localStorage.setItem('token', response.data.token);
      setLoginMessage(response.data.message);
    } catch (error) {
      setLoginMessage(error.response.data.message);
    }
  };






  return (
    <div className='containers'>
      <div className='forms-container'>
        <div className='signin-signup'>
          <Form onSubmit={handlelogin} action='#' className='sign-in-form'>
            <h2 className='title'>Sign in</h2>
            <div className='input-field'>
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type='submit' className='Register-button'>Login</button>
          </Form>
          {loginMessage && <p className='text-center text-danger mt-3'>{loginMessage}</p>}
          <p class="social-text">Or Sign in with social platforms</p>
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button class="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Userlogin