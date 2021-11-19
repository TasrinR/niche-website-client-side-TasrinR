import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ReviewShow = (props) => {
    const {userName}= props.review
    return (
        <Col>
        <Card bg="light" border="light">
            <Card.Body>
            <Card.Title>{userName}</Card.Title>
            {/* <Card.Text>
                {description}
            </Card.Text> */}
            </Card.Body>
        </Card>
        </Col>
    );
};

export default ReviewShow;