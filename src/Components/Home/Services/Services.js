import React, { useEffect, useState } from 'react';
import ShowService from './ShowService';
import Zoom from 'react-reveal/Zoom';


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(service => setServices(service))
    }, [])


    return (
        <section className='mt-5 pt-5 mb-5 pb-5 bg-light'>
            <div className="container text-center">
                <Zoom left>
                    <h2 className="text-secondary text-center mb-5">We Provide Quality Service</h2>
                </Zoom>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <ShowService key={service._id} service={service} />)
                    }
                </div>
                <button className="btn btn-brand mt-4">Explore More</button>
            </div>
        </section>
    );
};

export default Services;