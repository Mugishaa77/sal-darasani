import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import logo from './../../pictures/dh.png';
import { NavLink, useLocation, Link } from 'react-router-dom';
import './landing.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuToggle = (menuItem) => {
        setIsMenuActive(!isMenuActive);
        setActiveMenuItem(menuItem);
    };

    const isActive = (pathname) => {
        return location.pathname === pathname || activeMenuItem === pathname
            ? { color: 'var(--darasani-blue)' }
            : {};
    };

    return (
        <div className="navbar-container absolute z-20 top-[40px] left-1/2 transform -translate-x-1/2 w-[80%] -translate-y-1/2 bg-lighter-grey bg-opacity-80 py-[5px] px-[20px] shadow-md flex justify-between items-center rounded-full">
            <div className="logo">
                <NavLink exact to="/" activeClassName="active">
                    <img className="logo-img w-[70px]" src={logo} alt="Logo" />
                </NavLink>
            </div>
            {window.innerWidth <= 939 && (
                <div className="bars-icon" onClick={toggleMenu}>
                    {isOpen ? <MdClose /> : <FaBars />}
                </div>
            )}
            <div className={`menu-toggle ${isMenuActive ? 'active' : ''}`} onClick={() => handleMenuToggle(null)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`nav-links mx-[40px] flex flex-no-wrap font-semibold text-[18px] ${isOpen ? 'dropdown-menu' : ''}`}>
                <NavLink to="/find" className="text-gray-800 transition-all duration-380 ease-in mx-[20px] hover:text-nav-blue transform hover:scale-105">Find a Tutor</NavLink>
                <NavLink to="/become" className="text-gray-800 transition-all duration-380 ease-in mx-[20px] hover:text-nav-blue transform hover:scale-105">Become a Tutor</NavLink>
                <NavLink to="#library" className="text-gray-800 transition-all duration-380 ease-in mx-[20px] hover:text-nav-blue transform hover:scale-105">Library</NavLink>
                {isOpen && (
                    <NavLink to="#signin" className="text-gray-800 transition-all duration-380 ease-in mx-[20px] hover:text-nav-blue transform hover:scale-105">Sign In</NavLink>
                )}
            </div>
            {window.innerWidth > 939 && (
                <div className="user-auth">
                    <Link to="/signup" style={{ textDecoration: 'none' }}
                    >
                    <button className="button-auth">Sign In</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Navbar;
