import React from 'react';
import Doctor from './Doctor';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Service from './Service';
import map from '../../meidia/mapsss.png';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Service />
            <Doctor />
            <div className="map">
                <img src={map} alt="" />
            </div>
            <Footer />
        </div>
    );
};

export default Home;