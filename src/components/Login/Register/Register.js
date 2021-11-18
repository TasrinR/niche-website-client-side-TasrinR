import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const locaiton = useLocation()
    const history = useHistory()
    const { handlePasswordSignup, auth , setIsLoading , setError , error} = useAuth()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData)
    }
    const submitHandler = e => {
        e.preventDefault()
        if (!/^\S+@\S+\.\S+$/.test(loginData.email)) {
            setError('Please insert a valid email');
            return;
        }
        if (loginData.password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return;
        }
        
        handlePasswordSignup(loginData.email , loginData.password , loginData.name , history);
    }

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" name="name" placeholder="Your name" onBlur={handleOnBlur} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" onBlur={handleOnBlur}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" onBlur={handleOnBlur}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword1">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="password2" placeholder="Password" onBlur={handleOnBlur}/> 
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Register;