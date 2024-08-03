
import React, { useState } from 'react'
import './Userregister.css';
import axios from 'axios';
import { Form } from 'react-bootstrap';

function Userregister() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [registerMessage, setRegisterMessage] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSendOtp = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8000/user/send-otp', { email });
            localStorage.setItem('otp', response.data.otp);
            setOtpSent(true);
            setRegisterMessage('OTP sent to your email.');
        } catch (error) {
            setRegisterMessage(error.response?.data?.message || 'Error sending OTP.');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const storedOtp = localStorage.getItem('otp');
        if (storedOtp !== otp) {
            setRegisterMessage('Incorrect OTP.');
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8000/user/register', {
                username,
                email,
                mobilenumber,
                password
            });
            setRegisterMessage(response.data.message);
        } catch (error) {
            setRegisterMessage(error.response?.data?.message || 'Error registering user.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="containers">
            <div className="forms-container">
                <div className="signin-signup" >
                    <Form onSubmit={handleSubmit} action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fa-solid fa-user"></i>
                            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <i className="fa-solid fa-envelope"></i>
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <i className="fa-solid fa-mobile"></i>
                            <input type="tel" placeholder="Mobile Number" value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        {otpSent && (
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                            </div>
                        )}
                        <div className='text-center'>
                            {!otpSent ? (
                                <button className='Sendotp-button' type="button" onClick={handleSendOtp} disabled={loading}>
                                    {loading ? 'Sending...' : 'Send OTP'}
                                </button>
                            ) : (
                                <button className='Register-button' type="submit" disabled={loading}>
                                    {loading ? 'Registering...' : 'Register'}
                                </button>
                            )}

                        </div>
                        {registerMessage && <p className="text-center text-danger mt-3">{registerMessage}</p>}
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
                    </Form>
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
                    {/* <img src={logo} class="image" alt="" /> */}
                </div>
                
            </div>
        </div>
    )
}

export default Userregister






