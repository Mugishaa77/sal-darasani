import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import LoginModal from '../AuthComponents/LoginModal';
import logo from '../../pictures/dh.png'
import './landing.css';

function Navbar({ onSignInClick }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1051);
    const [showBars, setShowBars] = useState(window.innerWidth <= 951);
    const [showUserIcon, setShowUserIcon] = useState(window.innerWidth <= 1051 && window.innerWidth > 951);
    const [modalOpen, setModalOpen] = useState(false); 
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('');
    const navigate = useNavigate(); 
    const location = useLocation(); // Use useLocation to get the current path

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

    const handleOpenModal = () => {
        setModalOpen(true); 
    };

    const handleCloseModal = () => {
        setModalOpen(false); 
    };

    const handleLoginAsStudent = () => {
        navigate('/studentlogin'); 
        setModalOpen(false); 
    };

    return (
        <div className="navbar-container fixed z-20 top-[32px] left-1/2 transform -translate-x-1/2 w-full -translate-y-1/2 bg-dark-bg py-[5px] px-[20px] shadow-md flex justify-between items-center">
            <div className="logo">
                <NavLink exact to="/" activeClassName="active">
                    <img className="logo-img w-[70px]" src={logo} alt="Logo" />
                </NavLink>
            </div>
            {showBars && (
                <div className="bars-icon" onClick={toggleMenu}>
                    {isOpen ? <MdClose /> : <FaBars />}
                </div>
            )}

            {!showBars && (
                <div className="nav-links mx-[40px] flex flex-no-wrap font-semibold text-[16px]">
                    <a href="/find" className="text-gray-200 transition-all duration-380 ease-in mx-[20px] hover:text-logo-blue hover:underline transform hover:scale-105">Find Tutor</a>
                    <a href="/become" className="text-gray-200 transition-all duration-380 ease-in mx-[20px] hover:text-logo-blue hover:underline transform hover:scale-105">Become a Tutor</a>
                    <a href="#library" className="text-gray-200 transition-all duration-380 ease-in mx-[20px] hover:text-logo-blue hover:underline transform hover:scale-105">Library</a>
                    <a href="#contact" className="text-gray-200 transition-all duration-380 ease-in mx-[20px] hover:text-logo-blue hover:underline transform hover:scale-105">Contact</a>
                </div>
            )}
            <div className={`menu-toggle ${isMenuActive ? 'active' : ''}`} onClick={() => handleMenuToggle(null)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {window.innerWidth > 939 && (
                <div className="user-auth">
                    <button onClick={onSignInClick}>
                        <span className='button-auth'>Sign In</span>
                    </button>
                </div>
            )}

            <LoginModal isOpen={modalOpen} onClose={handleCloseModal}>
                <div className="flex flex-col space-y-4">
                    <button onClick={handleLoginAsStudent} className="p-2 bg-blue-500 text-white rounded">Log In as Student</button>
                    <button className="p-2 bg-green-500 text-white rounded">Log In as Tutor</button>
                </div>
            </LoginModal>
        </div>
    );
}

export default Navbar;

