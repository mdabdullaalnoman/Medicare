import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://mdabdullaalnoman.github.io/jsonapi/finalmedicare.json')
            .then(res => res.json())
            .then(data => setServices(data))

            .catch(error => console.log(error))
    }, [serviceId])


    const clickedService = services[serviceId];
    console.log();

    return (
        <div>
            <h1>thi is sservece details</h1>
            <h1>{clickedService?.id}</h1>
            <img src={clickedService?.img} alt="" />
        </div>
    );
};

export default ServiceDetails;