import React from 'react';
import { useForm } from 'react-hook-form';
import Zoom from 'react-reveal/Zoom';
import adminBanner from '../../../images/undraw_Add_user_re_5oib.svg';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        const admin = new FormData()
        admin.append('email', data.email)

        fetch(`https://radiant-woodland-42613.herokuapp.com/addAdmin`, {
            method: 'POST',
            body: admin
        })
        .then(res => res.json())
        .then(result => console.log(result))
    };


    return (
        <section className="row row-cols-md-2">
                <div className="col-md-7 bg-white p-4 rounded shadow-sm">
                    <Zoom left>
                        <h4 className="text-brand-lite mb-3">Make Admin</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-md-8 mb-4">
                                <label htmlFor="email" className="mb-2">Email</label>
                                <input type="email" className="form-control py-2" id='email' {...register("email", { required: true })} placeholder='Enter Email..' />
                                {errors.name && <span className='text-danger'>This field is required</span>}
                            </div>
                            <button className='btn btn-brand' type='submit'>Submit</button>
                        </form>
                    </Zoom>
                </div>
                <div className="col-md-5">
                    <Zoom right>
                        <img src={adminBanner} alt="" className='img-fluid' />
                    </Zoom>
                </div>
            </section>
    );
};

export default MakeAdmin;