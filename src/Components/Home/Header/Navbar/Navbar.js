import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                    <Link className="navbar-brand text-brand" to="/home" style={{color: '#ec8877'}}>The Car-Doctor</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link" to="/home">Home</Link>
                            <Link className="nav-link" to="/home">About Us</Link>
                            <Link className="nav-link" to="/admin">Admin</Link>
                            <Link className="nav-link" to="/home">Contact</Link>
                            {
                                loggedInUser.email ?  
                                <button className="btn btn-brand rounded-pill">{loggedInUser.displayName}</button>
                                : 
                                <Link to='/login'>
                                    <button className="btn btn-brand rounded-pill">Login</button>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;