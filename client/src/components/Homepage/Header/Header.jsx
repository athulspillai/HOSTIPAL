import React from 'react'
import './Header.css';
import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className='headers' data-aos='zoom-in'>
            <nav className='nav'>
                <div className='nav__logo'>
                    <img src={logo} alt='logo' />
                </div>
                <Link to={'/user/register'}>
                    <button className='register-button'>REGISTER</button>
                </Link>
            </nav>
        </div>
    )
}

export default Header