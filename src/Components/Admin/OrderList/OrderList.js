import React, { useEffect, useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import ShowOrderList from './ShowOrderList';


const OrderList = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://radiant-woodland-42613.herokuapp.com/getOrders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    return (
        <>
            <section className="row">
                <div className="col-md-12 bg-white p-4 rounded shadow-sm">
                    <Zoom left>
                        <div className="table-responsive">
                        <table className="table table-striped table-hover table caption-top">
                            <caption>Order List</caption>
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Pay with</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(order => <ShowOrderList key={order._id} order={order} />)
                                }
                            </tbody>
                        </table>
                        </div>
                    </Zoom>
                </div>
            </section>

        </>
    );
};

export default OrderList;