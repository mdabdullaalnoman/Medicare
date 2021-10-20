import React from 'react';
import './Doctor.css';
import doctor1 from '../../meidia/doctor one.jpg';
import doctor2 from '../../meidia/doctorTwo.jpg';
import doctor3 from '../../meidia/doctorThreesss.jpg';
const Doctor = () => {
    return (
        <div>
            <h1 className="our-doctor">Our Doctor</h1>
            <div className="doctor-warp padding-body">
                <div className="doctor">
                    <img src={doctor1} alt="" />
                    <p>Dr. Troduo poe</p>
                </div>
                <div className="doctor">
                    <img src={doctor2} alt="" />
                    <p>Dr. Nasim Pock</p>
                </div>
                <div className="doctor">
                    <img src={doctor3} alt="" />
                    <p>Dr tmper choe</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;