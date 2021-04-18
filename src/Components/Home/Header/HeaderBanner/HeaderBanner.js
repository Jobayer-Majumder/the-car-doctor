
import React from 'react';
import banner from '../../../../images/doorstep-homepage-banner.png';
import Zoom from 'react-reveal/Zoom';


const HeaderBanner = () => {


    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center" style={{ height: '550px' }}>
                <div className="row row-cols-md-2">
                    <div className="col-md-6 mb-5">
                        <Zoom left>
                            <h1 className='text-brand lh-base'>REPAIR SUSPENSION</h1>
                            <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dolorum, impedit, itaque qui veniam similique labore eum, magnam porro possimus ipsa consequuntur est? Sit, nesciunt?</p>
                            <button className="btn btn-brand mt-3">Get Service</button>
                        </Zoom>
                    </div>
                    <div className="col-md-6">
                        <Zoom right>
                            <img src={banner} className='img-fluid' alt="" />
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;