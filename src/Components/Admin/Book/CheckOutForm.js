import React, { useContext, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';


const CheckOutForm = ({ service }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [payment, setPayment] = useState();
    const [payError, setPayError] = useState();
    const [paySuccess, setPaySuccess] = useState();

    const { price, title, img } = service;
    const { id } = useParams();
    const stripe = useStripe();
    const elements = useElements();

    const handleBooking = () => {
        const order = {
            ...loggedInUser,
            ...payment,
            serviceName: title,
            serviceImg: img,
            servicePrice: price, 
            status: 'pending'
        };

        fetch(`http://localhost:5000/addOrder`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                if(result){
                    alert('Booking confirmed')
                }
            })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPayError(error.message);
            setPaySuccess()
        } else {
            setPayment(paymentMethod.card)
            setPayError()
            setPaySuccess('Your Payment Successfully Paid')
        }
    };

    return (
        <div>
            {
                id ? <div>
                    <h4 className="text-secondary">Booking</h4>
                    <h6 className="text-brand-lite text-center bg-light py-3 rounded mb-3">{loggedInUser.displayName}</h6>
                    <h6 className="text-brand-lite text-center bg-light py-3 rounded mb-3">{loggedInUser.email}</h6>
                    <h6 className="text-brand-lite text-center bg-light py-3 rounded mb-3">{title}</h6>
                    <h6 className="text-secondary text-center bg-light py-3 rounded mb-3">Your service Charged Will be $ {price}</h6>
                </div>
                    : <h6 className="text-brand-lite text-center bg-light py-3 rounded mb-3">No Product Selected yet</h6>
            }
            <form onSubmit={handleSubmit}>
                <CardElement />
                {
                    paySuccess && <p className='text-success'>{paySuccess}</p>
                }
                {
                    payError && <p className='text-danger'>{payError}</p>
                }
                <button type="submit" className='btn btn-outline-info mt-3' disabled={!stripe}>
                    Pay
                </button>
            </form>
            <div className="text-center">
                {
                    payment && <button className="btn btn-brand tex-center" onClick={handleBooking}>Add Booking</button>
                }
            </div>
        </div>
    );
};

export default CheckOutForm;