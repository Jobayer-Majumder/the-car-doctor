import React, { useEffect, useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import ShowManageService from './ShowManageService';
import manageBanner from '../../../images/undraw_file_manager_j85s.svg';


const ManageServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <section className="row row-cols-md-2 mt-5">
                <div className="col-md-7 bg-white p-4 rounded shadow-sm mb-5">
                    <Zoom left>
                        <div className="table-responsive">
                        <table className="table table-striped table-hover table caption-top">
                            <caption>Services</caption>
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map(service => <ShowManageService key={service._id} service={service} />)
                                }
                            </tbody>
                        </table>
                        </div>
                    </Zoom>
                </div>
                <div className="col-md-5">
                    <Zoom right>
                        <img src={manageBanner} alt="" className='img-fluid' />
                    </Zoom>
                </div>
            </section>
    );
};

export default ManageServices;