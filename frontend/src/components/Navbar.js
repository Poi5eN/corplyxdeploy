import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo.png'
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom'



const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!isExpanded);
  };

  return (
    <nav className={`navbar ${isExpanded ? 'expanded' : ''}`}>
      <div className="navbar-logo">
        <Link to='/'>
        <img src={logo} alt="Company Logo" />
        </Link>
        
      </div>
      <ul className={`navbar-links ${isExpanded ? 'expanded' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/work">Our Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"><BiMenuAltLeft/></span>
      </button>
    </nav>
  );
};

export default Navbar;
