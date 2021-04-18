import React from 'react';
import aboutUsImg from '../../../images/undraw_about_me_wa29.svg'
import Zoom from 'react-reveal/Zoom';

const AboutUs = () => {
    return (
        <section className="mb-5 pb-5">
            <div className="container mt-5 pt-5">
                <div className="row row-cols-md-2">
                    <div className="col-md-6 mb-4">
                        <img src={aboutUsImg} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 shadow-sm d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className="text-brand text-center">About Us</h1>
                            <hr className='w-50 m-auto text-brand' />
                            <Zoom right>
                                <h4 className="text-secondary mt-3">We’re Certified & Expert Car Servicing Agency</h4>
                            </Zoom>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas asperiores repudiandae, ullam velit in dicta doloribus voluptate accusantium nulla facilis sint officia itaque magnam molestiae, ipsum omnis, aliquid reprehenderit! Quibusdam ea suscipit dicta inventore?</p>
                            <button className="btn btn-brand mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;