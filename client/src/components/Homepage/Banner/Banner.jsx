import React, { useEffect } from 'react';
import './Banner.css';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import Banner1 from '../../../assets/images/file (9).png';
import Banner2 from '../../../assets/images/file (12).png';
import plus from '../../../assets/images/sign.png';
import firstaid from '../../../assets/images/heart-beat.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const BannerSlide = ({ title, subtitle, text, image, altText, buttonText }) => (
  <Container>
    <Row className="align-items-center banner-head">
      <Col md={6} className="text-md-left">
        <h1 className='banner-text-head'>
          Welcome To <span className="medico-title">MEDICO</span>
        </h1>
        <h1 className='banner-sec-text'>{subtitle}</h1>
        <p className='banner-para'>{text}</p>
        <Link to="/user/register">
          <button className='banner-button'>{buttonText}</button>
        </Link>
      </Col>
      <Col md={6} className="d-flex justify-content-center banner-img-wrapper">
        <div className="banner-img-background"></div>
        <img
          className="d-block banner-img"
          src={image}
          alt={altText}
        />
        <div className='plus-images'>
          <img src={plus} alt="plus" className="plus-image plus-image-1" />
          <img src={plus} alt="plus" className="plus-image plus-image-2" />
          <img src={plus} alt="plus" className="plus-image plus-image-3" />
        </div>
        <div className='firstaid-images'>
          <img src={firstaid} alt="medicine" className="firstaid-image firstaid-image-1" />
          <img src={firstaid} alt="medicine" className="firstaid-image firstaid-image-2" />
          <img src={firstaid} alt="medicine" className="firstaid-image firstaid-image-3" />
        </div>
      </Col>
    </Row>
  </Container>
);


function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className='homepage'>
      <div className='doctor-banner' data-aos='zoom-in'>
        <Carousel>
          <Carousel.Item>
            <BannerSlide
              title="Welcome To MEDICO"
              subtitle="KEEP SMILING FOR BETTER HEALTH AND LONG LIFE"
              text="We Provide The Best Healthcare For You"
              image={Banner1}
              altText="First slide"
              buttonText="REGISTER NOW"
            />
          </Carousel.Item>
          <Carousel.Item>
            <BannerSlide
              title="Welcome To MEDICO"
              subtitle="KEEP SMILING FOR BETTER HEALTH AND LONG LIFE"
              text="We Provide The Best Healthcare For You"
              image={Banner2}
              altText="First slide"
              buttonText="REGISTER NOW"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;


