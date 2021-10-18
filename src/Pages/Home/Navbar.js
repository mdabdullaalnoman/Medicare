import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../meidia/Header-logo.png'
import './Navbar.css';

const Navbar = () => {
    // toggle active class on menubar-------------------------------
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    }
    return (

        <header id="home">
            {/* Header - 1 */}
            <div className="header-1">
                <div className="share">
                    <span>follow us:</span>
                    <Link className="fab fa-facebook" to={{ pathname: "https://www.facebook.com/noman.apparel.4003" }} target="_blank" />
                    <Link className="fab fa-twitter" to={{ pathname: "https://www.facebook.com/noman.apparel.4003" }} target="_blank" />
                    <Link className="fab fa-linkedin" to={{ pathname: "https://www.facebook.com/noman.apparel.4003" }} target="_blank" />
                </div>

                <div className="header-contract share">
                    <span>Call us:</span>
                    <Link to="/notFound"> +88 01797701620</Link>
                </div>

            </div>

            <div className="header-2">
                {/* Header ---- 2 */}

                <Link to="/">
                    <img src={logo} alt="" />
                </Link>

                <form action="" className="search-bar-container">
                    <input type="search" id="search-bar" placeholder="search here..." />
                    <label htmlFor="search-bar" className="fas fa-search"></label>
                </form>

            </div>

            <div className="header-3">
                {/* Header - 3 */}

                <div id="menu-bar" onClick={toggleClass} className={isActive ? 'fas fa-times' : 'fas fa-bars'}></div>

                <nav className={isActive ? 'navbar active' : 'navbar'}>
                    <Link to="/home">Home</Link>
                    <Link to="/category">Category</Link>
                    <Link to="/mobile-collection">Product</Link>
                    <Link to="/shiping">Shiping</Link>
                    <Link to="/login">Login</Link>
                </nav>

                <div className="icons">
                    <Link to="/home" className="fas fa-shopping-cart"></Link>
                    <Link to="/home" className="fas fa-heart"></Link>
                    <Link to="/home" className="fas fa-user-circle"></Link>
                </div>
            </div>

        </header>
    );
};

export default Navbar;