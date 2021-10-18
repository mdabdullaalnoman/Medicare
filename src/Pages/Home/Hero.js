import React from 'react';
import heroImg from '../../meidia/background one.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <div>
            <div className="hero-img">
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;