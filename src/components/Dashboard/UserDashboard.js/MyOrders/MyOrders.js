import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth()
    const [myOrders, setMyOrders] = useState([]);
    useEffect(()=>{
        fetch('https://lit-sands-51210.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data => {
            const myData = data.filter(data => data.email === user.email)
            setMyOrders(myData);
            console.log(myData);
        })
    },[])

    const handleDelete = async (id) => {
        const isConfirmed = window.confirm("are you sure you want to delete?!");
         if(isConfirmed){
             const { data } = await axios.delete(`https://lit-sands-51210.herokuapp.com/orders/${id}`)
             if (data.deletedCount === 1) {
                 alert('deleted succesfully!')
                 setMyOrders((orders) => orders.filter(order => order._id !== id))
             }
         }
     }
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
                        <td><img src={myOrder.orderItem.image} alt="" rounded fluid className="w-25"/></td>
                        <td style={{width: '20%'}}>{myOrder.orderItem.name}</td>
                        <td style={{width: '20%'}}>{myOrder.orderItem.price}</td>
                        <td style={{width: '20%'}}>{myOrder.orderStatus}</td>
                        <td style={{width: '20%'}}><button onClick={() => handleDelete(myOrder._id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default MyOrders;