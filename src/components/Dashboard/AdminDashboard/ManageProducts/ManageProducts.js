import React , {useState , useEffect} from 'react';
import { Table } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://lit-sands-51210.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <Table responsive>
            <thead>
                <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product =>(
                    <tr key={product._id}>
                        <td><img src={product.image} alt="" rounded fluid className="w-25"/></td>
                        <td style={{width: '20%'}}>{product.name}</td>
                        <td style={{width: '20%'}}>{product.price}</td>
                        <td style={{width: '20%'}}><button>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ManageProducts;