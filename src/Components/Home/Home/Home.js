import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Tesitmonials/Testimonials';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <>
          <Header />  
          <AboutUs />
          <Services />
          <Testimonials />
          <WhyChooseUs />
          <ContactUs />
          <Footer />
        </>
    );
};

export default Home;