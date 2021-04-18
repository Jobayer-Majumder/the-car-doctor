import React from 'react';
import './serviceInfo.css';

const ShowServiceInfo = ({service}) => {
    const { title, desc, icon} = service;

    return (
        <div className="col">
            <div className="card h-100 p-4 text-center shadow-sm border-less">
                <h2 className='text-brand rounded p-4 bg-light'>{icon}</h2>
                <div className="card-body">
                    <h5 className="card-title text-brand">{title}</h5>
                    <small className="card-text text-secondary">{desc}</small>
                </div>
            </div>
        </div>
    );
};

export default ShowServiceInfo;