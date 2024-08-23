import React from 'react';
import './landing.css'
import heroimg from './../../pictures/img-bkg.png'


function Hero() {
    return (
        <div className="hero-section relative w-full h-screen bg-cover bg-center" >
           
            <div className="nav-cont  flex flex-col items-center justify-center">
                
               
                

            </div>
            
           <div className="hero-section-wrapper flex mx-[30px] mt-[12%] ">
                <div className="text-left text-dark-bg w-full md:w-1/2 px-4 md:px-0">
                    <h1 className=" hero-h1 text-5xl md:text-[55px] font-bold">Get connected to the best tutors, <br />anytime, anywhere, for free!</h1>
                    <p className="w-[90%] text-[10px] italic md:text-xl mt-[40px] font-playfair text-justify">Unlock Your Potential with Expert Guidance, Anytime, Anywhere. Join us and experience personalized learning that fits your schedule and budget.</p>
                </div>
                <img src={heroimg} alt="" className="hero-img mt-[-110px] w-[400px] h-auto ml-[100px]" />
            </div>
          

           <div className="hero-buttons mx-[30px] flex gap-[50px] mt-[-100px]">
            <button className='w-fit-content bg-dark-bg py-[10px] px-[50px] text-text-color rounded:md font-semibold hover:bg-lighter-slate'>Get Started</button>
            <button className='w-fit-content bg-neutral-500 py-[10px] px-[50px] text-text-color rounded:md font-semibold hover:bg-lighter-slate'>Learn More</button>
           </div>
          
        </div>
    );
};

export default Hero;