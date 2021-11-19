import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../../Dashboard/UserDashboard.js/Review/Review';

const Reviews = () => {
    const[reviews, setReviews] = useState([]);
    useEffect(()=>{
    fetch('https://lit-sands-51210.herokuapp.com/reviews')
    .then(res=>res.json())
    .then(data=>setReviews(data))
    },[])
    return (
        <Container>
            <Row xs={1} md={3} className="g-4">
                    {
                        reviews.map(review=> <Review
                        key={review._id}
                        review={review}
                        ></Review>)
                    }
            </Row>
            </Container>
    );
};

export default Reviews;