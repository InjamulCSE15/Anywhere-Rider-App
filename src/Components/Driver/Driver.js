import React from 'react';

const Driver = (props) => {
    const {name, image} = props.rider
    return (
        <div className="col">
            <div className="card h-100">
                <img style={{width:'50%', margin:'auto', padding:'5%'}} src={image} className="card-img-top" alt="..." />
                    <div class="card-body">
                        <br/>
                        <h3 className="card-title text-center">{name}</h3>
                    </div>
            </div>
        </div>
    );
};

export default Driver;