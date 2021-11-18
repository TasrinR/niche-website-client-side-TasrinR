import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [ services , setServices ] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
            <Container>
            <Row xs={1} md={3} className="g-4">
                    {
                        services.slice(0,6).map(service=> <Service
                        key={service._id}
                        service={service}
                        ></Service>)
                    }
            </Row>
            </Container>
    );
};

export default Services;