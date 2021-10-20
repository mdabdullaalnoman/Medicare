import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceId} = useParams();
   console.log(serviceId);
    return (
        <div>
            <h1>thi is sservece details</h1>
        </div>
    );
};

export default ServiceDetails;