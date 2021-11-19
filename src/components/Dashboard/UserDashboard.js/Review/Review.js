import React , {useState} from 'react';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user}= useAuth();
    const onSubmit = data =>{
        const formData= data;
        formData.userName = user.displayName;
        axios.post('https://lit-sands-51210.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data._id) {
                    alert('added a review successfully');
                    reset();
                }
                console.log(res.data);
            })
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea {...register("review")} placeholder="Your Review" />
                <input type="number" {...register("rating")} placeholder="Product Rating" />
                <input type="submit" />
            </form>
        </div>
    );
};
}

export default Review;