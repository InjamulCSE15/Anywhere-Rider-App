import React, { useEffect, useState } from 'react';
import riderData from '../Fakedata/data.json';
import Driver from '../Driver/Driver';
import { Link } from 'react-router-dom';

const Home = () => {
    const [rider, setRider] = useState({})
    useEffect( () => {
        setRider(riderData);
        console.log(riderData);
    },[])

    return (
        <div className="bg-dark" style={{height: '1080px'}}>

               <div className="row row-cols-1 row-cols-md-4 g-5 m-auto">
               {
                   riderData.map(ride => <Link to={`/destination/from/${ride.name}`}><Driver ride={ride} key={ride.id}></Driver></Link>)
               }
           </div>


        </div>
    );
};

export default Home;