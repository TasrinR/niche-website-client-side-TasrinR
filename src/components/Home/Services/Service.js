import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name , specification , description , price , image , _id} = props.service;
    return (
        <Col>
        <Card bg="light" border="light">
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="text-muted"><small>{specification}</small></Card.Subtitle>
            <Card.Text>
                {description}
            </Card.Text>
            <Card.Text>
                <h2>{price}</h2>
            </Card.Text>
            </Card.Body>
            <Link to={`/purchase/${_id}`}>
            <Button variant="outline-secondary">Buy Now</Button>
            </Link>
        </Card>
        </Col>
    );
};

export default Service;