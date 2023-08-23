import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
// import { BiLogoGmail } from 'react-icons/bi';
import { FcTabletAndroid } from 'react-icons/fc';
import { BsLinkedin } from 'react-icons/bs';
// import { FcFeedback } from 'react-icons/fc';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="contact-info">
        <a href="tel:+919650388201">
          <FcTabletAndroid />
          +919650388201
        </a>
        {/* <a href="mailto:support@corplyxtechnologies.com">
          <FcFeedback />
          support@corplyxtechnologies.com
        </a> */}
        
        
        {/* <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">
          <BiLogoGmail style={{ color: 'red' }} />
        </a> */}
      </div>
      <div className="social-icons">
        <a href="https://linkedin.com/in/corplyx-technologies-9b0965285/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin style={{ color: '#0072b1' }} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100095230572986" className="fb" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={{ color: 'blue' }} />
        </a>
        <a href="https://www.twitter.com/CorplyxTech" className="tw" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={{ color: 'skyblue' }} />
        </a>
        <a href="https://www.instagram.com/corplyx-technologies/" className="ig" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={{ color: 'red' }} />
        </a>
      </div>
    </header>
  );
};

export default Header;
