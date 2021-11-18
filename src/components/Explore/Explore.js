import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Home/Services/Service';
import Header from '../shared/Header/Header';

const Explore = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <>
            <Header></Header>
            <Container>
                <Row xs={1} md={3} className="g-4">
                {services.map(service=><Service
                key={service._id}
                service={service}
                ></Service>)}
            </Row>
            </Container>
        </>
    );
};

export default Explore;