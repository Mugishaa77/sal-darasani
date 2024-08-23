import React, { useState, useEffect } from 'react';
import WhyDarasani from '../../becomeTutor/WhyDarasani';
import Steps from './../../becomeTutor/Steps';
import RegForm from '../../becomeTutor/RegForm';

export default function Become() {
        // State to manage the visibility of each section
        const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
        const [openSections, setOpenSections] = useState({
          compensationDetails: !isMobile,
          supportResources: !isMobile,
          faqs: !isMobile,
          trustSignals: !isMobile,
        });
      
        // Function to toggle the visibility of a section
        const toggleSection = (section) => {
          setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
          }));
        };
      
        // Effect to handle window resize and update isMobile state
        useEffect(() => {
          const handleResize = () => {
            const mobileView = window.innerWidth < 768;
            setIsMobile(mobileView);
            setOpenSections({
              compensationDetails: !mobileView,
              supportResources: !mobileView,
              faqs: !mobileView,
              trustSignals: !mobileView,
            });
          };
      
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
      
      
    return (
        <div className="become-a-tutor">
            <h2 className="hero-h1 text-5xl md:text-[35px] font-bold">
                Join Darasani as a Tutor Today!
            </h2>
           
              
            <div>
                    <Steps />
                </div>
            <div >
                            
                    <WhyDarasani />
                
            </div>
            
    
            <div>
                <RegForm />
            </div>
    
            <div className="extraa lusitana-regular">
      <div className="compensation-details">
        <h3 onClick={() => isMobile && toggleSection('compensationDetails')}>Compensation Details</h3>
        {openSections.compensationDetails && (
          <p>Our tutors are compensated based on experience and subject expertise. Detailed compensation packages will be discussed upon successful registration.</p>
        )}
      </div>

      <div className="support-resources">
        <h3 onClick={() => isMobile && toggleSection('supportResources')}>Support and Resources</h3>
        {openSections.supportResources && (
          <p>We offer comprehensive resources and support to help you excel in your tutoring role. Access our community forums, training materials, and more.</p>
        )}
      </div>

      <div className="faqs">
        <h3 onClick={() => isMobile && toggleSection('faqs')}>Frequently Asked Questions</h3>
        {openSections.faqs && (
          <ul className="alata-regular">
            <li><strong>How do I join Darasani Hub?</strong><br />Fill out the form above and submit it to join our waiting list.</li>
            <li><strong>What qualifications do I need?</strong><br />We require a minimum of a bachelor's degree and relevant teaching experience.</li>
            <li><strong>How is compensation determined?</strong><br />Compensation is based on your experience, subject expertise, and the level of teaching.</li>
          </ul>
        )}
      </div>

      <div className="trust-signals">
        <h3 >What Our Tutors Say</h3>
       
            <p>"Darasani Hub has been a fantastic platform for me. The support and resources are top-notch." - John Doe</p>
            <p>"I love the flexibility and the opportunity to help students achieve their goals." - Jane Smith</p>
         
      </div>
    </div>
        </div>
    );
}