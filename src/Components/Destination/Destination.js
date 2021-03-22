import React from 'react';
import { useParams } from 'react-router';
import rawData from '../Fakedata/data.json';


const Destination = () => {
    const { ride } = useParams();
    const recentRide = rawData.find(transport => transport.name === ride);
 console.log(rawData);
    
    return (
        <div>
        {/* <img src={recentRide.image} alt= "" /> */}
        <div className="container row m-auto  g-5">
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                    </div>
                </div>
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
        </div>
    );
};

export default Destination;