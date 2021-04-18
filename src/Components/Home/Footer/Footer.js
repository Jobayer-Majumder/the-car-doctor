import React from 'react';
import footer from '../../../images/download-karen-cook-kr-tourism-footer-design-png-transparent-footer-design-png-1920_509.png'
import './footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const quickLinks = [
    {name: "Make Appointment" , link: "/emergency"},
    {name: "About Company" , link: "/checkup"},
    {name: "Team Member" , link: "/personal-treatment"},
    {name: "Gallery Filter" , link: "/tooth-extract"},
    {name: "Latest news" , link: "/checkup"},
]
const contacts = [
    {name: "support@gmail.com" , link: "/emergency", icon: ''},
    {name: "255 Main street, New york" , link: "/checkup", icon: ''},
    {name: "+880 - 12 - 34 - 55 - 99" , link: "/personal-treatment", icon: ''},
    
]
const icons = [
    <FaFacebook />,
    <FaTwitter />,
    <FaYoutube />,
    <FaInstagram />
];
const services = [
    {name: "Emergency Dental Care" , link: "/emergency"},
    {name: "Check Up" , link: "/checkup"},
    {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
    {name: "Tooth Extraction" , link: "/tooth-extract"},
    {name: "Check Up" , link: "/checkup"},
    
];

const Footer = () => {
    return (
        <footer className='footer-bg py-5'>
            <div className="container text-center text-md-start">
                <div className="row row-cols-md-4 py-5">
                    <div className="col-md-3 mb-4">
                        <h2 className="text-brand">The Car-Doctor</h2>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis laborum aliquid consequuntur. Illum, voluptas. Pariatur quo blanditiis assumenda sequi excepturi?</p>
                        
                        {
                            icons.map((icon, index) => <span className='fs-2 text-brand me-3' key={index}>{icon}</span>)
                        }
                    </div>
                    <div className="col-md-3 mb-4">
                        <h3 className="text-brand-lite mb-4">Quick Links</h3>
                        {
                            quickLinks.map((link, index) => <p  key={index}><Link className='text-decoration-none text-brand-lite' to={`${link.link}`}>{link.name}</Link></p>)
                        }
                    </div>
                    <div className="col-md-3 mb-4">
                        <h3 className="text-brand-lite mb-4">Services</h3>
                        {
                            services.map((service, index) => <p  key={index}><Link className='text-decoration-none text-brand-lite' to={`${service.link}`}>{service.name}</Link></p>)
                        }
                    </div>
                    <div className="col-md-3 mb-4">
                        <h3 className="text-brand-lite mb-4">Contact</h3>
                        {
                            contacts.map((contact, index) => <p  key={index}><Link className='text-decoration-none text-brand-lite' to={`${contact.link}`}>{contact.name}</Link></p>)
                        }
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;