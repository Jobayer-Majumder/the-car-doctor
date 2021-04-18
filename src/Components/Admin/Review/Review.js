import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Zoom from 'react-reveal/Zoom';
import reviewBanner from '../../../images/undraw_feedback_h2ft.svg';

const Review = () => {
    const [imgUrl, setImgUrl] = useState();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const reviewData = new FormData()
        reviewData.append('name', data.name)
        reviewData.append('companyName', data.companyName)
        reviewData.append('description', data.description)
        reviewData.append('img', imgUrl.display_url)

        fetch(`https://radiant-woodland-42613.herokuapp.com/addReview`, {
            method: 'POST',
            body: reviewData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Review Added Successfully')
                }
            })
            .catch(err => console.log(err))
    };

    const handleImgUpload = e => {
        const img = e.target.files[0];

        const imgData = new FormData();
        imgData.set('key', 'ab93c14ad00c0733b90a5cf408bcf7a2');
        imgData.append('image', img);

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(response => {
                setImgUrl(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });

    };


    return (
        <section className="row row-cols-md-2">
            <div className="col-md-7 bg-white p-4 rounded shadow-sm">
                <Zoom left>
                    <h4 className="text-brand-lite mb-3">Give Feedback</h4>
                    <form className='row row-cols-md-2' onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-6 mb-4">
                            <input type="text" className="form-control py-3" {...register("name", { required: true })} placeholder='Your Name ' />
                            {errors.name && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className="col-md-6 mb-4">
                            <input type="text" className="form-control py-3" {...register("companyName", { required: true })} placeholder="Company's name. Designation" />
                            {errors.price && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className="col-md-6 mb-4">
                            <textarea type="text" className="form-control py-3" {...register("description", { required: true })} placeholder="Description " />
                            {errors.price && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className="col-md-6 mb-4">
                            <input type="file" className="form-control py-3" onChange={handleImgUpload} />
                        </div>
                        {
                            imgUrl ? <button className='btn btn-brand m-auto' type='submit'>Submit</button>
                                : <button className='btn btn-brand m-auto' type='submit' disabled>Submit</button>
                        }
                    </form>
                </Zoom>
            </div>
            <div className="col-md-5">
                <Zoom right>
                    <img src={reviewBanner} alt="" className='img-fluid' />
                </Zoom>
            </div>
        </section>
    );
};

export default Review;