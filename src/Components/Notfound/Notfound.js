import React from 'react';

const Notfound = () => {
    return (
        <div className="card text-white bg-danger w-100" style={{maxWidth: '75%', margin: 'auto', marginTop: '5%'}}>
            <div className="card-header text-center"><h2>Error 404</h2></div>
            <div className="card-body">
                <h5 className="card-title">Server- or Client-Side Not Found!</h5>
                <p className="card-text"> Technically, an Error 404 is a client-side error, implying that it's your mistake, either because you typed the URL incorrectly or the page has been moved or removed from the website and you should have known.
Another possibility is if a website has moved a page or resource but did so without redirecting the old URL to the new one. When that happens, you'll receive a 404 error instead of being automatically routed to the new page. </p>
            </div>
        </div>
    );
};

export default Notfound;