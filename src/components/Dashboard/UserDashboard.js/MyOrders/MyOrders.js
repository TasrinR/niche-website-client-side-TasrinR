import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth()
    const [myOrders, setMyOrders] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data => {
            const myData = data.filter(data => data.userMail === user.email)
            setMyOrders(myData);
            console.log(myData);
        })
    },[])
    return (
        <Table responsive>
            <thead>
                <tr>
                <th></th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {myOrders.map(myOrder =>(
                    <tr key={myOrder._id}>
                        <td>{myOrder.orderItem.image}</td>
                        <td>{myOrder.orderItem.name}</td>
                        <td>{myOrder.orderItem.price}</td>
                        <td>{myOrder.orderStatus}</td>
                        <td>Delete</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default MyOrders;