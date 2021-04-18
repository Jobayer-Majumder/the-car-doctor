import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Zoom from 'react-reveal/Zoom';
import bookingBanner from '../../../images/undraw_Booking_re_gw4j.svg'
import CheckOutForm from './CheckOutForm';
import { useParams } from 'react-router-dom';


const stripePromise = loadStripe('pk_test_51Ie1ptESnaKgiiesduxGkGMCQIdnEjhX22znTK6LJFMJZCbGp28yA8VbrzPFn8vqXkX0I73j9yVWSY0BMZYufK7900u4jPVfvf');

const Book = () => {
    const [service, setService] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/serviceById/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])

    return (
        <section className="row row-cols-md-2">
            <div className="col-md-7 bg-white p-4 rounded shadow-sm mb-5">
                <Zoom left>
                    <Elements stripe={stripePromise}>
                        <CheckOutForm service={service} />
                    </Elements>
                </Zoom>
            </div>
            <div className="col-md-5">
                <Zoom right>
                    <img src={bookingBanner} alt="" className='img-fluid' />
                </Zoom>
            </div>
        </section>
    );
};

export default Book;