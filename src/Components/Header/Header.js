import React from 'react';

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
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Destination</a>
                        <a className="nav-link" href="#">Blog</a>
                        <a className="nav-link" href="#">Contact</a>
                        <a className="nav-link" href="#"><button type="button" className="btn btn-outline-warning">Login</button></a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;