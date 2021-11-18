import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';

const Purchase = () => {
    const {id} = useParams()
    
    const {user}= useAuth();

    const { register, handleSubmit, reset } = useForm();

    const [selectedData, setSelectedData] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
           setSelectedData(data)
        })
    },[id])

    const onSubmit = data => {
        console.log(data)
        const formData= data;
        formData.userMail = user.email;
        formData.orderItem = selectedData;
        formData.orderStatus = "pending";

        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data._id) {
                    
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <Row className="shipping">
            <Col style={{textAlign:"left"}} xs={12} md={6} className="ps-5">
                <Card bg="light" border="light">
                <Card.Img variant="top" src={selectedData.image} />
                <Card.Body>
                <Card.Title>{selectedData.name}</Card.Title>
                <Card.Subtitle className="text-muted"><small>{selectedData.specification}</small></Card.Subtitle>
                <Card.Text>
                    {selectedData.description}
                </Card.Text>
                <Card.Text>
                    <h2>{selectedData.price}</h2>
                </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={6}>
            <h2>Please add shipiing info</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" defaultValue={user.displayName}/>
                <input {...register("email")} placeholder="Email" defaultValue={user.email}/>
                <textarea {...register("address")} placeholder="Enter your address" />
                <textarea {...register("country")} placeholder="Country" />
                <textarea {...register("city")} placeholder="City" />
                <input type="number" {...register("contactNo")} placeholder="Contact No" />
                <input type="submit" />
            </form>
            </Col>
        </Row>
    );
};

export default Purchase;