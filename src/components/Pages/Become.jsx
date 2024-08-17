import React from 'react';
import WhyDarasani from '../../becomeTutor/WhyDarasani';
import Steps from './../../becomeTutor/Steps';
import RegForm from '../../becomeTutor/RegForm';

export default function Become() {
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
                    <h3>Compensation Details</h3>
                    <p>Our tutors are compensated based on experience and subject expertise. Detailed compensation packages will be discussed upon successful registration.</p>
                </div>
    
                <div className="support-resources">
                    <h3>Support and Resources</h3>
                    <p>We offer comprehensive resources and support to help you excel in your tutoring role. Access our community forums, training materials, and more.</p>
                </div>
    
                <div className="faqs">
                    <h3>Frequently Asked Questions</h3>
                    <ul className="alata-regular">
                        <li><strong>How do I join Darasani Hub?</strong><br />
                            Fill out the form above and submit it to join our waiting list.</li>
                        <li><strong>What qualifications do I need?</strong><br />
                            We require a minimum of a bachelor's degree and relevant teaching experience.</li>
                        <li><strong>How is compensation determined?</strong><br />
                            Compensation is based on your experience, subject expertise, and the level of teaching.</li>
                    </ul>
                </div>
    
                <div className="trust-signals">
                    <h3>What Our Tutors Say</h3>
                    <p>"Darasani Hub has been a fantastic platform for me. The support and resources are top-notch." - John Doe</p>
                    <p>"I love the flexibility and the opportunity to help students achieve their goals." - Jane Smith</p>
                </div>
            </div>
            <div className="text-center pt-2 ds-footer">
                        <p className="text-sm">&copy; 2024 Darasani Hub. All rights reserved.</p>
                    </div>
        </div>
    );
}