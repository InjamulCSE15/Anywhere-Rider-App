import React from 'react';
import fakedata from '../fakedata/fakedata.json';
import Driver from '../Driver/Driver';
const home = () => {
    const fdata = fakedata;
    
    return (
        <div className="bg-dark">

               <div className="row row-cols-1 row-cols-md-4 g-5 m-auto">
               {
                   fdata.map(rider => <Driver rider={rider}></Driver>)
               }
           </div>


        </div>
    );
};

export default home;