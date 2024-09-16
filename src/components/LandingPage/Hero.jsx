import React, { useState } from 'react';
import Navbar from './Navbar';
import LoginModal from './../AuthComponents/LoginModal';
import './landing.css';
import { useNavigate } from 'react-router-dom';
import heroimg from './../../pictures/hero-img.png';
import { FaBookOpenReader } from 'react-icons/fa6';


function Hero() {
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

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

    const handleLoginAsTutor = () => {
        navigate('/tutorlogin'); 
        setModalOpen(false); 
    };
    return (
        <div className="hero-section relative w-full h-screen bg-cover bg-center">
            <div className="nav-cont flex flex-col items-center justify-center">
                <Navbar onSignInClick={handleOpenModal} />
            </div>

            <div className="hero-section-wrapper flex mx-[30px] mt-[12%] ">
                <div className="text-left text-dark-bg w-full md:w-1/2 px-4 md:px-0 ml-[30px]">
                    <h1 className="hero-h1 leading-loose text-5xl md:text-[55px] font-bold">
                        Connect with Top Tutors Anytime, Anywhere – For Free!
                    </h1>
                    <p className="w-[90%] text-[10px] italic md:text-xl mt-[40px] font-playfair text-justify">
                        Unlock Your Potential with Expert Guidance, Anytime, Anywhere. Join us and experience personalized learning that fits your schedule and budget.
                    </p>
                </div>
                <img src={heroimg} alt="" className="hero-img mt-[-60px] w-[600px] h-auto ml-[100px] mr-[20px]" />
            </div>

           <div className="hero-buttons flex gap-[50px] mt-[-150px] ml-[60px]">
            <button className='w-fit-content bg-dark-bg py-[10px] px-[50px] text-text-color rounded-md font-semibold hover:bg-lighter-slate'>Get Started</button>
            
            <button className="flex items-center rounded px-4 py-2">
                <FaBookOpenReader className="mr-2 bg-dark-bg text-text-color rounded-full p-2 text-3xl" /> 
                <span className="underline font-semibold text-dark-bg">Learn More</span>
            </button>
           </div>

            <LoginModal isOpen={modalOpen} onClose={handleCloseModal}>
                <div className="flex flex-col space-y-4">
                    <button onClick={handleLoginAsStudent} className="py-[5px] bg-blue-500 text-white rounded">As Student</button>
                    <button onClick={handleLoginAsTutor}className="py-[5px] px-[15px] bg-green-500 text-white rounded">As Tutor</button>
                </div>
            </LoginModal>
        </div>
    );
}

export default Hero;
