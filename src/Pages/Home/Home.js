import React from 'react';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Service from './Service';

const Home = () => {
    return (
        <div>
           <Navbar/>
           <Hero/>
           <Service/>
           <Footer/>
        </div>
    );
};

export default Home;