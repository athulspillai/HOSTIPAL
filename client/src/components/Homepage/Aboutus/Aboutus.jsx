import React from 'react';
import './Aboutus.css';
import { Container, Row, Col } from 'react-bootstrap';
import Banner from '../../../assets/images/teamdoctor.jpg';
import Features from '../../../assets/images/checkmark.png';


const Ourservice = () => {
    return (
        <div className='about-us'>
            <Container>
                <Row className='aboutus-row' data-aos='fade-down'>
                    <Col md={6} className='aboutus-image-col'>
                        <div className='aboutus-image-overlay'></div>
                        <img src={Banner} alt="About" className='aboutus-image' />
                    </Col>
                    <Col md={6} className='aboutus-content-col'>
                        <h2 className='aboutus-title'> <span className='medico-title'>MEDICO</span> is best healthcare to cure disesease </h2>
                        <p className='aboutus-description'>
                            We provide a range of healthcare services tailored to meet your needs.
                            Our team of experts are dedicated to offering the best possible care
                            to ensure your health and well-being.
                        </p>
                        <p className='aboutus-description'>
                            We provide a range of healthcare services tailored to meet your needs.
                            Our team of experts are dedicated to offering the best possible care
                            to ensure your health and well-being.
                        </p>
                        <div className='aboutus-features'>
                            <Row>
                                <Col xs={6} md={6} className='feature-col'>
                                    <img src={Features} alt="verify" className='feature-icon' />
                                    <p className='feature-text'>15+ years of experience</p>
                                </Col>
                                <Col xs={6} md={6} className='feature-col'>
                                    <img src={Features} alt="verify" className='feature-icon' />
                                    <p className='feature-text'>24*7 hours of services</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} md={6} className='feature-col'>
                                    <img src={Features} alt="verify" className='feature-icon' />
                                    <p className='feature-text'>A multispeciality hospital</p>
                                </Col>
                                <Col xs={6} md={6} className='feature-col'>
                                    <img src={Features} alt="verify" className='feature-icon' />
                                    <p className='feature-text'>A team of professionals</p>
                                </Col>
                            </Row>
                        </div>
                        <button className='aboutus-button'>Know More</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Ourservice;

