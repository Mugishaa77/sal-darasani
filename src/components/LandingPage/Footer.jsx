import React, {useState} from 'react';
import { Element, Link as ScrollLink } from 'react-scroll';
import logo from './../../pictures/dh.png';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { FaInstagram, FaLinkedinIn, FaTiktok, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
      const [activeLink, setActiveLink] = useState("");

      const handleLinkClick = (label) => {
        setActiveLink(label);
      };
    return (
        <Element name="contacts" className="section bg-dark-bg mb-[0] h-fit-content px-[40px] py-[20px] ">
            <div className="footer-wrapper flex flex-col lg:flex-row text-text-color block mx-auto lg:gap-[40px]">
                 
                <div className="abt-container lg:w-[450px] sm:mb-[20px]">
                    <img src={logo} alt="Darasani Hub Logo" className='w-[280px] h-auto relative mt-[-15px] mb-[25px]  md:block md:mx-auto'/>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis provident quis quia cupiditate, eveniet temporibus tempora excepturi? Aliquam nisi consectetur quisquam assumenda fuga itaque sit quos soluta unde.</p>
                </div>

                <div className="md:flex md:space-x-[100px] md:mt-[20px] sm:mt-[20px]">
                    <div className="sitemap">
                        <h5 className='font-bold text-xl mb-[20px]'>Sitemap</h5>
                        <ul>
                        
                            <NavItem label="Home" to="home" active={activeLink === "Home"} onClick={handleLinkClick} />
                            <NavItem label="Our Services" to="services"active={activeLink === "Featured events"} onClick={handleLinkClick} />
                            <NavItem label="Join Us" to="join-org" active={activeLink === "Create event"} onClick={handleLinkClick} />
                            <NavItem label="Our Partners"to="our-partners" active={activeLink === "Our clients"} onClick={handleLinkClick} />
                            <NavItem label="Contact" to="footer" active={activeLink === "Contact"} onClick={handleLinkClick} />
                          
                        </ul>
                    </div>

                    <div className="contact-box ">
                        <h5 className='font-bold text-xl mb-[20px]'>Connect with us</h5>
                        <div className="web flex gap-[10px] mb-[19px]">
                            <TbWorld className='text-xl'/>
                            <p>https://www.darasanihub.com</p>
                        </div>
                        <div className="phone flex gap-[10px] mb-[19px]">
                            <FaPhoneAlt className='text-xl'/>
                            <p>+254707800048</p>
                        </div>
                        <div className="email flex gap-[10px]">
                            <MdEmail className='text-xl'/>
                            <p>info@darasanihub.com</p>
                        </div>
                    </div>

                    <div className="social-media">
                        <h5 className='font-bold text-xl mb-4'>Follow us</h5>
                        <div className="icon-container flex gap-4">
                            <a href="https://www.linkedin.com/" className="social-icon group p-2 transition-all duration-300 ease-in border border-white rounded-full social-icon group p-2 border border-white rounded-full hover:bg-blue-600 hover:border-none hover:text-dark-bg">
                                <FaLinkedinIn className="icon" />
                            </a>
                            <a href="https://www.instagram.com/" className="social-icon group p-2 transition-all duration-300  border border-white rounded-full social-icon group p-2 border border-white rounded-full hover:bg-blue-600 hover:border-none hover:text-dark-bg">
                                <FaInstagram className="icon" />
                            </a>
                            <a href="https://twitter.com/" className="social-icon group p-2 transition-all duration-300 ease-in border border-white rounded-full hover:bg-blue-600 hover:border-none hover:text-dark-bg">
                                <FaXTwitter className="icon" />
                            </a>
                            <a href="https://www.tiktok.com/" className="social-icon group p-2 transition-all duration-300 ease-in border border-white rounded-full social-icon group p-2 border border-white rounded-full hover:bg-blue-600 hover:border-none hover:text-dark-bg">
                                <FaTiktok className="icon" />
                            </a>
                        </div>
                    </div>
                </div>
               
            </div>
            <br />
            <hr />
            <div className="copyright">
                <p className='text-center pt-[5px] text-text-color text-sm'>&copy; 2024 Darasani Hub. All rights reserved.</p>
            </div>
        </Element>
    );
};

function NavItem({ label, to, active, onClick }) {
  const linkClasses = `text-white ${
    active
      ? "text-text-color py-[5px] rounded-full cursor-pointer"
      : "hover:py-1 cursor-pointer transition-all duration-380 ease-in mx-[20px] hover:text-lighter-grey transform hover:scale-120"
  } text-base font-sans text-sm`;

  return (
    <li>
      <ScrollLink to={to} className={linkClasses} spy={true}
        smooth={true} offset={-70} duration={500} onClick={() => onClick(label)}
      >
        {label}
      </ScrollLink >
    </li>
  );
}

export default Footer;
