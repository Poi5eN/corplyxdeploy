import React from 'react';
import { motion } from 'framer-motion';
import './AboutPage.css';
import logo from './logo.png';

const AboutPage = () => {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: '#dde9f0' }}
    >
      <div className="content-container" style={{ backgroundColor: '#dde9f0' }}>
        <h2>About Us</h2>
        <p>Welcome to our website! We are a passionate team dedicated to providing the best user experience.</p>
        <div className="image-container">
          <img src={logo} alt="About" className="responsive-image" style={{ borderRadius: '70%' }} />
        </div>
        <div className="team-membersx">
          {/* Render your team member cards here */}
          At Corplyx Technologies, we're more than just a service provider - we're your collaborators in crafting a digital footprint that stands out in the ever-evolving landscape. Our journey began with a vision to revolutionize the way businesses leverage technology, and today, we stand as a beacon of excellence in software development, web development, app development, digital marketing, SEO, cloud storage, and cyber security. 

          Our dedicated team of seasoned experts is fueled by a passion for innovation and a commitment to exceeding expectations. With years of industry experience under our belts, we possess the expertise to transform your ideas into reality. Whether you're a startup seeking to make your mark or an established enterprise looking to stay ahead, our tailor-made solutions are designed to align seamlessly with your goals. 

          In the realm of software development, we breathe life into your concepts, creating robust, scalable, and intuitive solutions that cater to your unique needs. Our web development services encapsulate the essence of user-centric design, ensuring a captivating online presence that resonates with your audience. With app development, we craft mobile experiences that bridge the gap between your brand and your users, enhancing engagement and functionality. 

          The digital world is ever-dynamic, and our digital marketing and SEO strategies are finely tuned to keep you in the spotlight. We understand the algorithms, the trends, and the nuances of the online ecosystem, ensuring your brand maintains its visibility and relevance. 

          Security is paramount in today's interconnected world, and our comprehensive cyber security solutions safeguard your digital assets from the lurking threats. We offer peace of mind as we fortify your data against breaches and vulnerabilities. 

          Furthermore, our cloud storage services redefine the way you manage and access your data. Seamlessly integrating convenience and reliability, we ensure your information is at your fingertips, securely stored in the cloud. 

          We take immense pride in being your one-stop destination for a suite of services that redefine your digital presence. Join us at Corplyx Technologies as we embark on a journey to unlock infinite possibilities in the realm of technology. Your success is our motivation, and together, we'll shape a future that's technologically empowered, secure, and boundless. 

          Welcome to the future of digital excellence. Welcome to Corplyx Technologies.
        </div>
        <div className="team-members">
          <h3>Our Mission</h3>
          <p>Our mission at Corplyx Technologies is to empower businesses with innovative technology solutions that drive growth, enhance efficiency, and create lasting impact. We are committed to being a beacon of excellence in the digital realm, providing services that not only meet but exceed the evolving needs of our clients.</p>
          <h3>Our Expertise</h3>
          <p>At Corplyx Technologies, we stand at the forefront of technology, offering a comprehensive suite of services that cater to the diverse needs of businesses in the digital age. With our headquarters based in Noida, we have established ourselves as a dynamic and innovative force in the industry, driven by a passion for excellence and a commitment to empowering businesses through technology.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
