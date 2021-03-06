import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import logo from '../../meidia/Header-logo.png'
import './Navbar.css';

const Navbar = () => {

    const { user , handleSignOut} = useAuth();

    // toggle active class on menubar-------------------------------
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    }
    // menu-active class-------------------------------------------- 
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
                        <i className="fas fa-mobile-alt"></i>
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
                    <NavLink to="/aboutUs" activeStyle={menuActive}>About Us</NavLink>
                    <NavLink to="/blogNews" activeStyle={menuActive}>Blog/News</NavLink>
                    <NavLink to="/shop" activeStyle={menuActive}>Shop</NavLink>
                    {
                        !user.displayName 
                        ?
                        <NavLink to="/login" activeStyle={menuActive}>Login</NavLink>
                        :
                        <NavLink to="/login" activeStyle={menuActive} onClick={handleSignOut}>Logout</NavLink>
                    }
                </nav>

                <form action="" className="search-bar-container">
                    <input type="search" id="search-bar" placeholder="search here..." />
                    <label htmlFor="search-bar" className="fas fa-search"></label>
                </form>

                <div className="icons">
                    <Link to="/">{user.displayName}</Link>
                    <Link className="fab fa-facebook" to={{ pathname: "https://www.facebook.com/noman.apparel.4003" }} target="_blank" />
                    <Link className="fab fa-twitter" to={{ pathname: "https://www.facebook.com/noman.apparel.4003" }} target="_blank" />
                    <Link className="fab fa-linkedin" to={{ pathname: "https://www.facebook.com/noman.apparel.4003" }} target="_blank" />
                </div>
            </div>

        </header>
    );
};

export default Navbar;