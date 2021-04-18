import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { UserContext } from '../../../App';
import AddService from '../AddService/AddService';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';
import OrderList from '../OrderList/OrderList';
import Review from '../Review/Review';


const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState();


    useEffect(() => {
        fetch(`http://localhost:5000/findAdmin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.email))
    }, [loggedInUser.email])

    return (
        <section className="bg-light" style={{ height: '100vh' }}>
            <div className="container">
                {
                    loggedInUser.email === admin ? <Tabs >
                        <TabList className='py-3' style={{ color: '#ec8877' }}>
                            <Tab>Order List</Tab>
                            <Tab>Add Service</Tab>
                            <Tab>Make Admin</Tab>
                            <Tab>Manage Service</Tab>
                        </TabList>

                        <TabPanel>
                            <OrderList />
                        </TabPanel>
                        <TabPanel>
                            <AddService />
                        </TabPanel>
                        <TabPanel>
                            <MakeAdmin />
                        </TabPanel>
                        <TabPanel>
                            <ManageServices />
                        </TabPanel>
                    </Tabs>
                        : <Tabs >
                            <TabList className='py-3' style={{ color: '#ec8877' }}>
                                <Tab>Book</Tab>
                                <Tab>Booking List</Tab>
                                <Tab>Review</Tab>
                            </TabList>

                            <TabPanel>
                                <Book />
                            </TabPanel>
                            <TabPanel>
                                <BookingList />
                            </TabPanel>
                            <TabPanel>
                                <Review />
                            </TabPanel>
                        </Tabs>
                }
            </div>
        </section>
    );
};

export default Admin;