import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MyOrders from './UserDashboard.js/MyOrders/MyOrders';

const Dashboard = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let { path, url } = useRouteMatch();

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Launch
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
        </Offcanvas>
        <Switch>
            <Route exact path={path}>
                <MyOrders></MyOrders>
            </Route>
        </Switch>
        </>
    );
};

export default Dashboard;