import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Zoom from 'react-reveal/Zoom';
import orderBanner from '../../../images/undraw_order_delivered_p6ba.svg';
import ShowBookingList from './ShowBookingList';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://radiant-woodland-42613.herokuapp.com/getBookings?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email]);


    return (
        <section className="row row-cols-md-2">
                <div className="col-md-7 bg-white p-4 rounded shadow-sm mb-5">
                    <Zoom left>
                        <div className="row row-cols-1 row-cols-md-2 g-3">
                            {
                                orders.map(order => <ShowBookingList key={order._id} order={order} />)
                            }
                            {
                                orders.length === 0 && <h5 className="text-center text-brand-lite">Your Booking List Empty</h5>
                            }
                        </div>
                    </Zoom>
                </div>
                <div className="col-md-5">
                    <Zoom right>
                        <img src={orderBanner} alt="" className='img-fluid' />
                    </Zoom>
                </div>
            </section>
    );
};

export default BookingList;