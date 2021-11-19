import React, {useState} from 'react';
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../../shared/Header/Header';

const Login = () => {
    const [loginData, setLoginData] = useState([]);
    const {user, handlePasswordSignin , isLoading , error} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const submitHandler = e =>{
        handlePasswordSignin(loginData.email , loginData.password , location , history)
        e.preventDefault();
    }

    return (
        <Container>
            <Header></Header>
            <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" onBlur={handleOnBlur}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" onBlur={handleOnBlur}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            {isLoading && <Spinner animation="border" />}
            {user?.email && <Alert variant="success">Login successfully!</Alert>}
            
        </Form>
        <p>Dont have an account? <Link to='/register'>Sign up</Link></p>
        </Container>
    );
};

export default Login;