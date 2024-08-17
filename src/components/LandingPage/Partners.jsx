import React from 'react';
import logo5 from './../../pictures/logo-5.png';
import logo4 from './../../pictures/alx-bg.png';
import logo3 from './../../pictures/mastercard-bg.png';
import './landing.css';

function Partners(){
    return (
        <div className="relative w-full overflow-hidden py-[20px] mt-[25px] mb-[30px]">
            <h5 className='font-bold text-[45px] font-playfair text-center pb-[20px]'>Our Partners</h5>
            <div className="flex w-[200%] h-[70px] animate-slide">
                <img src={logo3} alt="Slide 1" className="w-1/8 ml-[45px]" />
                <img src={logo4} alt="Slide 2" className="w-1/8 ml-[45px]" />
                <img src={logo5} alt="Slide 3" className="w-1/8 ml-[45px]" />
                <img src={logo3} alt="Slide 4" className="w-1/8 ml-[45px]" />
                <img src={logo4} alt="Slide 5" className="w-1/8 ml-[45px]" />
                <img src={logo5} alt="Slide 6" className="w-1/8 ml-[45px]" />
                <img src={logo3} alt="Slide 7" className="w-1/8 ml-[45px]" />
                <img src={logo4} alt="Slide 8" className="w-1/8 ml-[45px]" />
                <img src={logo5} alt="Slide 9" className="w-1/8 ml-[45px]" />
                <img src={logo3} alt="Slide 10" className="w-1/8 ml-[45px]" />
                <img src={logo4} alt="Slide 11" className="w-1/8 ml-[45px]" />
                <img src={logo5} alt="Slide 12" className="w-1/8 ml-[45px]" />
            </div>
        </div>
    );
};

export default Partners;
