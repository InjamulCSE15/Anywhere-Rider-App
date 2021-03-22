import React from 'react';
import fakeData from '../Fakedata/data.json';
import Driver from '../Driver/Driver';
import { Link } from 'react-router-dom';
const home = () => {
    const rawData = fakeData;
    
    return (
        <div className="bg-dark" style={{height: '1080px'}}>

               <div className="row row-cols-1 row-cols-md-4 g-5 m-auto">
               {
                   rawData.map(rider => <Link to={`/destination/from/${rawData.name}`}><Driver rider={rider}></Driver></Link>)
               }
           </div>


        </div>
    );
};

export default home;