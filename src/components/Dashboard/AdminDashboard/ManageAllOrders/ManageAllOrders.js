import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        fetch('https://lit-sands-51210.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data => setOrders(data))
    },[])
    const approveHandler = (id) => {
        console.log(id);
        console.log(id);
        axios.put(`https://lit-sands-51210.herokuapp.com/orders/${id}`).then(({data}) => {
            if(data.modifiedCount){
               setOrders(prevOrders => prevOrders.map(order => {
                   if(order._id === id){
                       order.orderStatus = 'shipped';
                       return order;
                   }
                   return order;
               }))
               alert('Approved')
            }
        })
    }
    const handleDelete = async (id) => {
        const isConfirmed = window.confirm("are you sure you want to delete?!");
         if(isConfirmed){
             const { data } = await axios.delete(`https://lit-sands-51210.herokuapp.com/orders/${id}`)
             if (data.deletedCount === 1) {
                 alert('deleted succesfully!')
                 setOrders((orders) => orders.filter(order => order._id !== id))
             }
         }
     }
    return (
        <Table responsive>
            <thead>
                <tr>
                <th>image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Approve</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order =>(
                    <tr key={order._id}>
                        <td><img src={order.orderItem.image} alt="" rounded fluid className="w-25"/></td>
                        <td style={{width: '20%'}}>{order.orderItem.name}</td>
                        <td style={{width: '20%'}}>{order.orderItem.price}</td>
                        <td style={{width: '20%'}}>{order.orderStatus}</td>
                        <td style={{width: '20%'}}><button onClick={() => approveHandler(order._id)}>Approve</button></td>
                        <td style={{width: '20%'}}><button onClick={() => handleDelete(order._id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ManageAllOrders;