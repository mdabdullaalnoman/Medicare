import React from 'react';
import './Footer.css';
import logo from '../../meidia/Header-logo.png';
import recentPostOne from '../../meidia/footer two.jpg';
import recentPostTwo from '../../meidia/footer three.jpg';
import productsOne from '../../meidia/footer one.jpg';

const Footer = () => {
    return (
        <footer className="footer body-padding">
            <div className="col-1">
                <img src={logo} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat cumque, facere delectus ipsum unde quaerat nobis dolore cupiditate ab repellendus.
                </p>
            </div>

            <div className="col-2">
                <h1>Recent Post</h1>
                <div className="image-content-inline">
                    <img src={recentPostOne} alt="" />
                    <div className="footer-col-content">
                        <h3>October 18 , 2015</h3>
                        <p>2015 best USA</p> <br />
                        <p>Hospital and clinic</p>
                    </div>
                </div>
                <div className="image-content-inline">
                    <img src={recentPostTwo} alt="" />
                    <div className="footer-col-content">
                        <h3>October 18 , 2019</h3>
                        <p>2019 best USA</p> <br />
                        <p>Are drugs the best solution ?</p>
                    </div>
                </div>
            </div>

            <div className="col-3">
                <h1>Products</h1>
                <div className="image-content-inline">
                    <img src={productsOne} alt="" />
                    <div className="footer-col-content">
                        <h3>Waiting room chairs</h3>
                        <p>2015 best USA</p>
                    </div>
                </div>
                <div className="image-content-inline">
                    <img src={productsOne} alt="" />
                    <div className="footer-col-content">
                        <h3>Waiting room chairs</h3>
                        <p>2015 best USA</p>
                    </div>
                </div>
            </div>

            <div className="col-4">
                <h1>Our service</h1>
                <ul>
                    <li>Appointment</li>
                    <li>Walking Hour</li>
                    <li>Cost calculator</li>
                    <li>Product</li>
                    <li>Special Offers</li>
                    <li>Testimonials</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;