import React from 'react'

function Home() {
  return (
    <div className="home">
        <div className="top">
            <div className="hero">
                Get connected to the best tutors
                <br/>
                anywhere, anytime for free
            </div>
        
            <div className="cta">
                <button>
                    <a>
                        Get Started
                    </a>
                </button>
                <button>
                    <a>
                        Learn More                    
                    </a>
                </button>
            </div>

            <div className="partners">
                <h1>Our Partners</h1>
                <div classname="sliders">

                </div>
            </div>

            <div className="tutor">

                <h1>Become a tutor</h1>

                <ul>
                    <li>
                        <div>
                            <h2>
                                Sign Up
                            </h2>
                            <p>
                                Sign up and download the required certificates
                            </p>
                        </div>
                    </li>

                    <li>
                    <div>
                            <h2>Get Approved</h2>
                            <p>
                                Our Team will send an email of approval
                                after all your certificates are verified
                            </p>
                        </div>
                    </li>

                    <li>
                        <div>
                            <h2>
                                Set Your rates and Earn money
                            </h2>
                            <p>
                                Create your profile, and set your rates 
                                and payment method. Hooray! Start earning.
                            </p>
                        </div>
                    </li>
                </ul>

            </div>

            <div className="sign-up">
                <h1>Sign Up Today</h1>
                <button>Join Waitlist</button>
            </div>

            {/* FOOTER */}
            <div className="contact-container">
                <h1>Contact Us</h1>
               
            </div>

        </div>
        
    </div>
   );
}

export default Home