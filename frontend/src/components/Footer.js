import React from 'react';
import logo from './logo.png';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="left-section">
          <div className="logo">
            <div className="circle">
              <img src={logo} alt="Logo" />
            </div>
            <h4>Corplyx Technologies Pvt. Ltd <br/><span style={{ fontSize: '10px' }}>A complete Web Solutions</span></h4>
            {/* <p>A Complete Web Solutions</p> */}
          </div>
        </div>
        <div className="center-section">
          <div className="hours" >
            <h4 >Working Hours</h4>
            <p>Monday - Friday: 10am - 6pm</p>
          </div>
        </div>
        <div className="right-section">
          <div className="address">
            <h4>Our Address</h4>
            <ul>
              <li>Unit No. 930</li>
              <li>Tower B The i-Thum, Sector 62</li>
              <li>Noida(UP), 201301</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <p className="copyright">
          &copy;{new Date().getFullYear()} Corplyx Technologies Pvt. Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
