import React, { useEffect, useState } from 'react';
import riderData from '../Fakedata/data.json';
import Driver from '../Driver/Driver';
import { Link } from 'react-router-dom';

const Home = () => {
    const [rider, setRider] = useState({})
    useEffect( () => {
        setRider(riderData [0]);
    },[])

    return (
        <div className="bg-dark" style={{height: '1080px'}}>

               <div className="row row-cols-1 row-cols-md-4 g-5 m-auto">
               {
                   riderData.map(riderData => <Link to={`/destination/from/${riderData.name}`}><Driver riderData={riderData} key={riderData.id}></Driver></Link>)
               }
           </div>


        </div>
    );
};

export default Home;