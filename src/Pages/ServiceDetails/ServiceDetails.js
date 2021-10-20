import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Home/Footer';
import Navbar from '../Home/Navbar';
import './ServiceDetails.css';

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
    console.log(clickedService);
    return (
        <div>
            <Navbar />
            <div className="serviceDetails">
                <h1>{clickedService?.category}</h1>
                <img src={clickedService?.img} alt="" />
                <p>{clickedService.description}</p>
            </div>
            <Footer />
        </div>
    );
};

export default ServiceDetails;