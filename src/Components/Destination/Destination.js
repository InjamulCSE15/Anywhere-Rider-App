import React from 'react';
import { useParams } from 'react-router';
import riderData from '../Fakedata/data.json';
import './Destination.css';


const Destination = () => {
    const { ride } = useParams();
    const recentRide = riderData.map(transport => transport.name === ride);

 console.log(riderData);
    
    return (
        <div className="container row m-auto  g-5">
            <div className="col-sm-6 main">
                <h3 className="sign" align="center">Where do you want to go?</h3>
                <form className="form1">
                    <input className="un "  type="text" align="center" placeholder="Pick up from" />
                    <input className="un " type="text"  align="center" placeholder="Enter your destination" />
                    <button className="unNewUser" type="text"  align="center">Search Rider</button>
                </form>
            </div>
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-center">Google Map</h5>
                        <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=CDA%20Market,%20Pahartali,%20Chittagong+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>
            </div>
        </div>
  
    );
};

export default Destination;