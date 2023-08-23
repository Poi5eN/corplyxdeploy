import React from 'react';
import './About.css';


const About = () => {
  return (
    <div className="about-container">
      <div className="image-container">
        <img src={'https://cdn.dribbble.com/users/614757/screenshots/2271839/you-us-consumer_dribbble.gif'} alt="About" />
      </div>
      <div className="content-container">
        <h2>About Us</h2>
        <p style={{ fontWeight: 'bolder' }}><b>GSTIN:</b><i>   &nbsp;09AAJCC3892L1Z0</i> </p>
        <p style={{ fontSize: 'smaller' }}>Welcome to <i>Corplyx Technologies</i>, your trusted partner in unleashing the power of technology. With our headquarters nestled in the vibrant city of Noida, we are a dynamic and innovative company that offers a comprehensive array of services designed to elevate businesses in the digital age.</p>
      </div>
    </div>
  );
};

export default About;
