import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddAProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        axios.post('https://lit-sands-51210.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added a product successfully');
                    reset();
                }
                console.log(res.data);
            })
    }
    return (
        <div className="add-service m-5 p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea {...register("name")} placeholder="Product Name" />
                <textarea {...register("specification")} placeholder="Product Specification" />
                <textarea {...register("description")} placeholder="Product Description" />
                <textarea {...register("img")} placeholder="Product Image" />
                <input type="number" {...register("price")} placeholder="Product Price" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddAProduct;