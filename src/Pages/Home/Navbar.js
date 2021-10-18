import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../meidia/Header-logo.png'
import './Navbar.css';

const Navbar = () => {
    // toggle active class on menubar-------------------------------
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    }
    // menu-active class 
    const menuActive = {
        borderBottom: '2px solid #0cb8b6'
    }
    return (

        <header id="home">
            <div className="header-2">
                {/* Header ---- 2 */}
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>

                <div className="nav-contract">
                    <div className="contract-icon">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div className="contract-content">
                        <p>+880 124365454</p>
                        <p>help@medicare.com</p>
                    </div>

                </div>
            </div>

            <div className="header-3">
                {/* Header - 3 */}

                <div id="menu-bar" onClick={toggleClass} className={isActive ? 'fas fa-times' : 'fas fa-bars'}></div>

                <nav className={isActive ? 'navbar active' : 'navbar'}>
                    <NavLink to="/home" activeStyle={menuActive}>Home</NavLink>
                    <NavLink to="/category" activeStyle={menuActive}>Category</NavLink>
                    <NavLink to="/mobile-collection" activeStyle={menuActive}>Product</NavLink>
                    <NavLink to="/shiping" activeStyle={menuActive}>Shiping</NavLink>
                    <NavLink to="/login" activeStyle={menuActive}>Login</NavLink>
                </nav>

                <form action="" className="search-bar-container">
                    <input type="search" id="search-bar" placeholder="search here..." />
                    <label htmlFor="search-bar" className="fas fa-search"></label>
                </form>

                <div className="icons">
                    <Link className="fab fa-facebook" to={{ pathname: "https://www.facebook.com/noman.apparel.4003" }} target="_blank" />
                    <Link className="fab fa-twitter" to={{ pathname: "https://www.facebook.com/noman.apparel.4003" }} target="_blank" />
                    <Link className="fab fa-linkedin" to={{ pathname: "https://www.facebook.com/noman.apparel.4003" }} target="_blank" />
                </div>
            </div>

        </header>
    );
};

export default Navbar;