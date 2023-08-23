import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const Contact = { name, mobile, email, message };

    axios.post('http://localhost:5000/api/contact', Contact)
      .then((response) => {
        console.log('Form submitted:', Contact);
        setName('');
        setMobile('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile:</label>
            <input type="text" id="mobile" value={mobile} onChange={handleMobileChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" value={message} onChange={handleMessageChange} />
          </div>
          <button type="submit" style={{ backgroundColor: '#008CBA', color: 'white', fontFamily: 'Russo One', borderRadius: '10%', fontSize: '20px' }}>Connect</button>
        </form>
      </div>
      <div className="contact-map" style={{ backgroundColor: '#e4efef'}}>
        <iframe
          title="Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5377.6981343126!2d77.36958057185076!3d28.625428203971556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce550ad7aaaab%3A0xc955c75178e3cb40!2sCorplyx%20Technologies!5e0!3m2!1sen!2sin!4v1690885839027!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
