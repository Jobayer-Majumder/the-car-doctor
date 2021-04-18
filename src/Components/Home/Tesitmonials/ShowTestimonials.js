import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const ShowTestimonials = ({ review }) => {
    const { name, companyName, description, img } = review;

    return (
        <div className="col">
            <div className="card h-100 p-4 shadow-sm border-less">
                <div className="card-header d-flex justify-content-around border-less" style={{ background: 'none' }}>
                    <img src={img} alt="" className='rounded-circle' style={{ height: '60px', width: '50px' }} />
                    <div>
                        <h5 className="card-title text-brand-lite">{name}</h5>
                        <p className="card-title text-secondary">{companyName}</p>
                    </div>
                </div>
                <div className="card-body">
                    <small className="card-text text-secondary"> {description}</small>
                    <span className='d-block text-brand-lite'><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></span>
                </div>
            </div>
        </div>
    );
};

export default ShowTestimonials;