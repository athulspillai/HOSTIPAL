import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Ourservices.css';
import Cardiology from '../../../assets/images/heart.png';
import Neurology from '../../../assets/images/brain (1).png';
import Urology from '../../../assets/images/urology (1).png';
import Pulmonary from '../../../assets/images/lungs (1).png';
import Radiology from '../../../assets/images/mri (1).png';
import Physiotherapy from '../../../assets/images/physical-therapy.png';
import ecglines from '../../../assets/images/ecg-lines.png';


const ServiceCard = ({ title, description, image }) => {
    return (
        <Card className='service-card'>
            <Card.Body>
                <div className="image-container">
                    <Card.Img variant="top" src={image} className='service-card-img' />
                </div>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

const Ourservices = () => {
    const services = [
        { image: Cardiology, title: 'Cardiology', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
        { image: Neurology, title: 'Neurology', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' },
        { image: Urology, title: 'Urology', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' },
        { image: Pulmonary, title: 'Pulmonary', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' },
        { image: Radiology, title: 'Radiology', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' },
        { image: Physiotherapy, title: 'Physiotherapy', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' }
    ];

    return (
        <div className='our-services'>
            <Container>
                <div className='our-services-Heading'>
                    <h1>Our Services</h1>
                </div>
                <Row className='mt-5'>
                    {services.map((service, index) => (
                        <Col key={index} md={4} sm={6} xs={6} className='service-col'>
                            <ServiceCard image={service.image} title={service.title} description={service.description} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Ourservices;



