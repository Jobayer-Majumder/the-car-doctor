import React from 'react';
import { BsFillClockFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { FiPhoneCall } from 'react-icons/fi';
import ShowServiceInfo from './ShowServiceInfo';



const serviceInfo = [
    {
        title: 'Working time',
        desc: 'Daily - 24 Hours',
        icon: <BsFillClockFill />

    },
    {
        title: 'Location',
        desc: 'London, UK 10 Firs Avenue Muswell Hill',
        icon: <ImLocation />

    },
    {
        title: '24 Hours - Hotline',
        desc: '0299999',
        icon: <FiPhoneCall />

    }
];

const ServiceInfo = () => {
    return (
        <div>
            <div className="container mt-5">
                {/* <h1 className="text-brand text-center">Service Info</h1> */}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        serviceInfo.map(service => <ShowServiceInfo key={Math.random()} service={service}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;