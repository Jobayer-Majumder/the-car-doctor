import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import serviceBanner from '../../../images/undraw_services_5tv9.svg';
import Zoom from 'react-reveal/Zoom';
import axios from 'axios';



const AddService = () => {
    const [imgUrl, setImgUrl] = useState();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const serviceData = new FormData()
        serviceData.append('title', data.serviceName)
        serviceData.append('price', data.price)
        serviceData.append('img', imgUrl.display_url)

        fetch(`https://radiant-woodland-42613.herokuapp.com/addService`, {
            method: 'POST',
            body: serviceData
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Service Added Successfully')
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
          .then( response => {
            setImgUrl(response.data.data);
          })
          .catch(error => {
            console.log(error);
          });
    };

    return (
        <>
            <section className="row row-cols-md-2">
                <div className="col-md-7 bg-white p-4 rounded shadow-sm">
                    <Zoom left>
                        <h4 className="text-brand-lite mb-3">Add Service</h4>
                        <form className='row row-cols-md-2' onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-md-6 mb-4">
                                <label htmlFor="title" className="mb-2">Service Title</label>
                                <input type="text" className="form-control py-3" id='title' {...register("serviceName", { required: true })} placeholder='Service Title' />
                                {errors.name && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className="col-md-6 mb-4">
                                <label htmlFor="price" className="mb-2">Service Price</label>
                                <input type="number" className="form-control py-3" id='price' {...register("price", { required: true })} placeholder='Service Price' />
                                {errors.price && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="image" className="mb-2">Image</label>
                                <input type="file" className="form-control py-3" onChange={handleImgUpload} />
                            </div>
                            {
                                imgUrl ? <button className='btn btn-brand m-auto' type='submit'>Add Service</button>
                                : <button className='btn btn-brand m-auto' type='submit' disabled>Add Service</button>
                            }
                            
                        </form>
                    </Zoom>
                </div>
                <div className="col-md-5">
                    <Zoom right>
                        <img src={serviceBanner} alt="" className='img-fluid' />
                    </Zoom>
                </div>
            </section>
        </>
    );
};

export default AddService;