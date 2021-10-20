import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('./servise.json')
            .then(res => res.json())
            .then(data => setService(data))

            .catch(error => console.log(error))
    })
    return (
        <>
            <h1 className="our-service">Our Service</h1>
            <div className="serviceWarp">
                {
                    service.map(service =>
                        <div key={service.id} className="single-service">

                            <img src={service.img} alt="" />
                            
                            <p>{service.tittle}</p>
                            <h2>{service.category}</h2>
                            <Link to={`service/${service.id}`}>
                                <button>see Details</button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Service;