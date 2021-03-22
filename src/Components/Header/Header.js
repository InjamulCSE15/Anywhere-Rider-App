import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><span style={{color: 'red', fontSize: 'x-large', fontWeight: 'bold'}}>A</span>nywhere <span style={{color: 'red', fontSize: 'x-large', fontWeight: 'bold'}}>R</span>ider</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav menubar">
                        <Link to="/home" className="nav-link">Home</Link>
                        <Link to="/destination" className="nav-link">Destination</Link>
                        <Link to="/blog" className="nav-link">Blog</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                        <Link to="/Login" className="nav-link btn btn-outline-warning">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;