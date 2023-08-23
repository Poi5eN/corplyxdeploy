import React from 'react';
import './Services.css'

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="service-container">
        <div className="image-container" style={{ maxWidth: '450px'}}>
          <img src="https://cdn.dribbble.com/users/1523313/screenshots/13644062/media/26f54111a547f0310118dc9004f99d8b.gif" alt="service" />
        </div>
        <div className="content-container">
          <h3>Server Maintenance</h3>
          {/* <p>GSTIN: 09AAJCC3892L1ZO</p> */}
          <p>Security is a paramount concern in today's digital landscape, and our server maintenance services include robust security measures to safeguard your sensitive data. We implement the latest security patches, conduct vulnerability assessments, and deploy advanced firewall solutions to fortify your servers against potential threats.</p>
        </div>
      </div>
      <div className="service-container">
        <div className="image-container" style={{ maxWidth: '450px'}}>
          <img src="https://cdn.dribbble.com/users/1732368/screenshots/6520221/web_design_development.gif" alt="service" />
        </div>
        <div className="content-container">
          <h3>Web Development</h3>
          {/* <p>GSTIN: 09AAJCC3892L1ZO</p> */}
          <p>Our team of skilled web developers brings together design aesthetics and cutting-edge technology to build websites that resonate with your brand identity and engage your target audience. From responsive design that adapts seamlessly to various devices to intuitive user interfaces that enhance user experience, our websites are a testament to innovation and excellence.</p>
        </div>
      </div>
      <div className="service-container">
        <div className="image-container" style={{ maxWidth: '450px'}}>
          <img src="https://cdn.dribbble.com/users/795597/screenshots/6081444/mobile_development2.gif" alt="service" />
        </div>
        <div className="content-container">
          <h3>App Development</h3>
          {/* <p>GSTIN: 09AAJCC3892L1ZO</p> */}
          <p>Our team of skilled app developers is passionate about bringing your vision to life. Whether you're looking to create a dynamic mobile app for iOS, Android, or both, we combine cutting-edge technology with a user-centric approach to craft applications that seamlessly blend functionality and aesthetics.</p>
        </div>
      </div>
      <div className="service-container">
        <div className="image-container" style={{ maxWidth: '450px'}}>
          <img src="https://cdn.dribbble.com/users/1797155/screenshots/5018207/malware-attack.gif" alt="service" />
        </div>
        <div className="content-container">
          <h3>Cyber Security</h3>
          {/* <p>GSTIN: 09AAJCC3892L1ZO</p> */}
          <p>Data privacy is paramount in today's regulatory landscape. Our cyber security services ensure that your compliance with industry standards and regulations is maintained, helping you avoid legal and financial repercussions.</p>
        </div>
      </div>
      <div className="service-container">
        <div className="image-container" style={{ maxWidth: '450px'}}>
          <img src="https://cdn.dribbble.com/users/1966037/screenshots/6427766/______.gif" alt="service" />
        </div>
        <div className="content-container">
          <h3>Cloud Storage</h3>
          {/* <p>GSTIN: 09AAJCC3892L1ZO</p> */}
          <p>Our cloud storage infrastructure is designed to ensure the highest levels of security for your valuable data. We implement robust encryption protocols, multi-factor authentication, and continuous monitoring to safeguard your information from unauthorized access and potential breaches.</p>
        </div>
      </div>
      <div className="service-container">
        <div className="image-container" style={{ maxWidth: '450px'}}>
          <img src="https://cdn.dribbble.com/users/2344801/screenshots/4774578/alphatestersanimation2.gif" alt="service" />
        </div>
        <div className="content-container">
          <h3>Software Development</h3>
          {/* <p>GSTIN: 09AAJCC3892L1ZO</p> */}
          <p>With a keen eye on technology trends and industry best practices, our software development team is well-versed in a wide range of programming languages, frameworks, and technologies. This enables us to create scalable, efficient, and future-ready solutions that adapt to your business's growth.</p>
        </div>
      </div>
      <div className="service-container">
        <div className="image-container" style={{ maxWidth: '450px'}}>
          <img src="https://cdn.dribbble.com/users/708424/screenshots/2948009/community_newsletter_dribbble.gif" alt="service" />
        </div>
        <div className="content-container">
          <h3>Domain and Hosting Services</h3>
          {/* <p>GSTIN: 09AAJCC3892L1ZO</p> */}
          <p>Whether you're a blogger, an entrepreneur, or a large corporation, our Domain and Hosting Services are designed to empower your online ventures. Join us today and take the first step towards a digital presence that's reliable, secure, and ready to conquer the digital realm.</p>
        </div>
      </div>
      <div className="service-container">
        <div className="image-container" style={{ maxWidth: '450px'}}>
          <img src="https://cdn.dribbble.com/users/104417/screenshots/1891125/writeseo-motvion-800x600.gif" alt="service" />
        </div>
        <div className="content-container">
          <h3>Search Engine Optimisation</h3>
          {/* <p>GSTIN: 09AAJCC3892L1ZO</p> */}
          <p>Our SEO experts are equipped with the latest tools and techniques to enhance your website's search engine rankings, making it easier for potential customers to find you. We understand that being on the first page of search engine results is crucial, and our tailored SEO strategies are designed to get you there.</p>
        </div>
      </div>
      <div className="service-container">
        <div className="image-container" style={{ maxWidth: '450px'}}>
          <img src="https://cdn.dribbble.com/users/2344801/screenshots/4774578/alphatestersanimation2.gif" alt="service" />
        </div>
        <div className="content-container">
          <h3>Digital Marketing</h3>
          {/* <p>GSTIN: 09AAJCC3892L1ZO</p> */}
          <p>Whether you're a startup looking to establish your presence or a well-established business seeking to expand, our digital marketing services are a catalyst for growth. With a focus on innovation, creativity, and measurable impact, we guide you through the ever-evolving digital landscape, ensuring your brand shines brightly in the virtual realm.</p>
        </div>
      </div>
      {/* Repeat the card component for other services */}
    </section>
  );
};

export default Services;
