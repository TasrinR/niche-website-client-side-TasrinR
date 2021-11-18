import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container>
            <Row>
            <Col xs={12} md={6} className="justify-content-md-center ">
                <h2>This is the banner</h2>
                <Button variant="outline-dark">Dark</Button>
            </Col>
            <Col xs={12} md={6}>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://www.sunglassoutlet.com/product_images/uploaded_images/banner2.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://www.sunglassoutlet.com/product_images/uploaded_images/banner1.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
        </Container>
    );
};

export default Banner;