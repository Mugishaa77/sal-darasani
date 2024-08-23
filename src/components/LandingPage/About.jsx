import React from 'react';
import { PiGraduationCapBold } from "react-icons/pi";
import { LuBookOpenCheck } from "react-icons/lu";
import { MdOutlineAssessment } from "react-icons/md";

function About() {
    return (
        <div className="about-page mx-[60px] mt-[30px] mb-[40px]">
            <h5 className='font-bold text-[45px] font-playfair text-center pb-[5px]'>Our Services</h5>
            <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className="service-card-container flex mt-[20px] font-sans grid grid-cols-3 gap-[35px]">
                <div className="service-card bg-neutral-100 shadow-md px-[25px] py-[25px] rounded-md text-tan transition-all duration-250 ease-in flex flex-col items-center hover:bg-dark-bg hover:text-baja transform hover:scale-105">
                    <PiGraduationCapBold className='text-[60px] text-center mb-4'/>
                    <h6 className='font-playfair uppercase font-semibold mb-2 underline-on-hover'>Test Preparation</h6>
                    <p className='text-justify text-15 px-[20px]'>Prepare for standardized tests with personalized tutoring sessions tailored to improve test-taking strategies and content knowledge.</p>
                </div>
                <div className="service-card bg-neutral-100 shadow-md px-[25px] py-[25px] rounded-md text-tan transition-all duration-250 ease-in flex flex-col items-center hover:bg-dark-bg hover:text-baja transform hover:scale-105">
                    <LuBookOpenCheck className='text-[60px] text-center mb-4'/>
                    <h6 className='font-playfair uppercase font-semibold mb-2 underline-on-hover'>Academic tutoring</h6>
                    <p className='text-justify text-15 px-[20px]'>Receive assistance with various academic subjects, including math, science, languages, and humanities, to enhance understanding and improve grades.</p>
                </div>
                <div className="service-card bg-neutral-100 shadow-md px-[25px] py-[25px] rounded-md text-tan transition-all duration-250 ease-in flex flex-col items-center hover:bg-dark-bg hover:text-baja transform hover:scale-105">
                    <MdOutlineAssessment className='text-[60px] text-center mb-4'/>
                    <h6 className='font-playfair uppercase font-semibold mb-2 underline-on-hover'>Personalised tutoring</h6>
                    <p className='text-justify text-15 px-[20px]'>Benefit from one-on-one tutoring sessions customized to your learning style and pace, helping you achieve academic success through tailored support and guidance.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
