import React from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className='bg-light'>
            <Navbar />
            <HeaderBanner />
            <ServiceInfo />
        </div>
    );
};

export default Header;