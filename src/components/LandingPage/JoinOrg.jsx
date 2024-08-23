import React from 'react'
import { Element } from 'react-scroll'
import bg1 from './../../pictures/custom-image.png'
import './landing.css'
import { IoPersonAdd } from "react-icons/io5";
import { FaCheckDouble, FaChalkboardTeacher, FaMoneyCheckAlt } from 'react-icons/fa';

function JoinOrg() {
  return (
    <Element name='joinorg' className='px-[30px] mt-[10px] mb-[20px] w-full bg-bg-light py-[10px]'>
       
          <div className="joinorg-wrapper flex mx-[30px] gap-[40px]">
            <div className="img-holder">
              <img src={bg1} alt="" className='join-img w-[1600px] pt-[100px]'/>
            </div>

            <div className="joinorg-content-container">
              <div className="joinorg-content mb-[30px]">
                  <h5 className='font-bold text-[45px] font-playfair text-center pt-[15px]'><span className='gradient-text bg-gradient-to-r from-pink-bg to-yellow-bg bg-clip-text text-transparent' >Benefits</span> of joining us as a Tutor</h5>
          
                  <div className="content-card-wrapper flex flex-wrap text-text-color">

                    <div className="content-card flex items-center p-[20px] w-[500px] ">
                      <div className="icon-container bg-pink-bg text-text-color p-[10px] rounded-full">
                        <IoPersonAdd className='text-[60px] p-[10px]' />
                      </div>
                      <div className="cc-phrase text-dark-bg ml-[35px]">
                        <h2 className='font-semibold text-[20px]'>Join the Tutoring Community</h2>
                        <p>Register now and upload your certificates to start teaching.</p>
                      </div>
                    </div>

                    <div className="content-card flex items-center p-[20px] w-[500px]">
                      <div className="icon-container bg-yellow-bg text-text-color p-[10px] rounded-full">
                        <FaCheckDouble className='text-[60px] p-[10px]' />
                      </div>
                      <div className="cc-phrase text-dark-bg ml-[35px]">
                        <h2 className='font-semibold text-[18px] '>Get Approved</h2> 
                        <p>Receive an approval email once your certificates are verified.</p>
                      </div>
                    </div>

                    <div className="content-card flex items-center p-[20px] w-[500px]">
                      <div className="icon-container bg-pink-bg text-text-color p-[10px] rounded-full">
                        <FaMoneyCheckAlt className='text-[60px] p-[10px]' />
                      </div>
                      <div className="cc-phrase text-dark-bg ml-[35px]">
                        <h2 className='font-semibold text-[18px] '>Earn for Your Expertise</h2>
                        <p>Set up your profile, define your rates, and start earning as you teach.</p>
                      </div>
                    </div>
                    
                    <div className="content-card flex items-center p-[20px] w-[500px]">
                      <div className="icon-container bg-yellow-bg text-text-color p-[10px] rounded-full">
                        <FaChalkboardTeacher className='text-[60px] p-[10px]' />
                      </div>
                      <div className="cc-phrase text-dark-bg ml-[35px]">
                        <h2 className='font-semibold text-[18px] '>Inspire and Educate</h2>
                        <p>Interact with students, provide guidance, and make a difference in their learning journey.</p>
                      </div>
                    </div>

                  </div>

              </div>
             
            </div>
          </div>
           <div className="join-btn mb-[20px]">
                <button className='block m-auto rounded-md bg-dark-bg px-[20px] py-[10px] font-semibold font-dm-sans text-text-color'>
                  Join the waitlist
                </button>
           </div>
    </Element>
  )
}

export default JoinOrg
