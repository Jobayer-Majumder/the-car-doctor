import React from 'react';

const ShowBookingList = ({ order }) => {
    const { serviceName, serviceImg, servicePrice, status } = order;
    return (
        <div className="col">
            <div className="card h-100 p-4 text-center shadow-sm border-less">
                <div className="card-header border-less d-flex justify-content-between" style={{ background: 'none' }}>
                    <img src={serviceImg} alt="" className='rounded border' style={{ height: '60px', maxWidth: '100px' }} />
                    <span className='text-brand-lite'>{status}</span>
                </div>
                <div className="card-body">
                    <h6 className="card-title text-brand-lite">{serviceName} <span>(${servicePrice})</span></h6>
                </div>
            </div>

        </div>
    );
};

export default ShowBookingList;