import { faBiking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Driver = (props) => {
    const {name, image,id} = props.riderData;
    return (
        <div className="col">
            <div className="card h-100">
                <img style={{width:'50%', margin:'auto', padding:'5%'}} src={image} className="card-img-center" alt="..." />
                    <div class="card-body">
                        <h3 className="card-title text-center"><FontAwesomeIcon icon={faBiking} />   {name}</h3>
                    </div>
            </div>
        </div>
    );
};

export default Driver;