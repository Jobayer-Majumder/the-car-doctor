import React from 'react';

const ContactUs = () => {
    return (
        <div className='py-5'>
            <form className='container col-md-7 text-center'>
                <h3 className="text-brand my-2">Let's Connect</h3>
                <h5 className="text-secondary mb-5">For all enquiries, please email us </h5>
                <div className="row row-cols-md-2">
                    <div className="col-md-6 mb-3">
                        <input type="text" className="form-control" name="first-name" placeholder='First Name' />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input type="text" className="form-control" name="last-name" placeholder='Last Name' />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input type="email" className="form-control" name="email" placeholder='Email address' />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input type="number" className="form-control" name="number" placeholder='Phone Number' />
                    </div>
                    <div className="col-md-12 mb-3">
                        <textarea className="form-control" name="message" placeholder='Your Message...' />
                    </div>
                </div>
                <button type="submit" className="btn btn-brand">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;