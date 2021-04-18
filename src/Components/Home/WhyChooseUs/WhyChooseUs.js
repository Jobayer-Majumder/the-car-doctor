import React from 'react';
import customer from '../../../images/customer.png';
import { MdPeopleOutline } from 'react-icons/md';
import { GiGears } from 'react-icons/gi';



const WhyChooseUs = () => {

    return (
        <section className='bg-light'>
            <div className="container mb-5 pt-5">
                <div className="row row-cols-md-1 row-cols-md-2 g-4">
                    <div className="col-md-6 mb-4">
                        <img src={customer} alt="" className='img-fluid' />
                    </div>
                    <div className="col-md-6 mb-4">
                        <h3 className="text-brand-lite lh-base">Take our service with us</h3>
                        <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, officia obcaecati minima vel, voluptates modi aliquid amet, facere dolorem sapiente quam sunt et. Vel harum architecto earum ad, voluptatibus ea?</p>
                        <div className='d-flex justify-content-around mt-5'>
                            <div>
                                <h2 className='text-brand'><MdPeopleOutline /> 500+</h2>
                                <p className="text-secondary">Happy customer</p>
                            </div>
                            <div>
                                <h2 className='text-brand'><GiGears/> 50+</h2>
                                <p className="text-secondary">Total service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;