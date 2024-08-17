import React from 'react'
import { Element } from 'react-scroll'
import bg1 from './../../pictures/bg-1.jpg'
import './landing.css'
import { IoPersonAdd } from "react-icons/io5";
import { FaCheckDouble } from "react-icons/fa6";
import { FaMoneyCheckAlt } from 'react-icons/fa';

function JoinOrg() {
  return (
    <Element name='joinorg' className='mt-[10px] mb-[20px] w-full bg-lighter-grey py-[10px]'>
         <h5 className='font-bold text-[45px] font-playfair text-center py-[15px]'>Become a Tutor</h5>
           
        <div className="joinorg-wrapper flex mx-[30px] gap-[40px]">
          <div className="img-holder">
            <img src={bg1} alt="" className='join-img'/>
          </div>

          <div className="joinorg-content-container">
            <div className="joinorg-content mb-[30px]">

                <div className="content-card-wrapper flex flex-wrap gap-[30px] text-text-color">

                  <div className="content-card flex bg-dark-bg bg-opacity-60 p-[20px] rounded-md c">
                    <IoPersonAdd className='bg-dark-bg bg-opacity-60 text-text-color text-[60px] p-[10px] rounded-md font-bold mr-[15px]'/>
                    <div className="cc-phrase">
                      <h2 className='font-semibold text-[18px] '>Sign Up</h2>
                      <p>Sign up and upload the required <br />certificates</p>
                    </div>
                  </div>
                  <div className="content-card flex bg-dark-bg bg-opacity-60 p-[20px] rounded-md w-[350px]">
                    <FaCheckDouble className='bg-dark-bg bg-opacity-60 text-text-color text-[60px] p-[10px] rounded-md font-bold mr-[15px]'/>
                    <div className="cc-phrase">
                      <h2 className='font-semibold text-[18px] '>Get Approved</h2>
                      <p>Receive an approval email after  <br />certificate verification</p>
                    </div>
                  </div>
                  <div className="content-card flex bg-dark-bg bg-opacity-60 p-[20px] rounded-md w-[350px]">
                    <FaMoneyCheckAlt className='bg-dark-bg bg-opacity-60 text-text-color text-[60px] p-[10px] rounded-md font-bold mr-[15px]'/>
                    <div className="cc-phrase">
                      <h2 className='font-semibold text-[18px] '> Set Your Rates and Earn Money</h2>
                      <p>Set up your profile, rates and <br /> payment method, and start earning</p>
                    </div>
                  </div>

                </div>

            </div>
            <div className="join-btn mb-[20px]">
              <button className='block m-auto rounded-md bg-dark-bg px-[20px] py-[10px] font-semibold font-dm-sans text-text-color'>
                Join the waitlist
              </button>
            </div>
          </div>
        </div>
    </Element>
  )
}

export default JoinOrg