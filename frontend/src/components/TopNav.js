import React from 'react';
import './TopNav.css';
import { MdAttachEmail } from 'react-icons/md';
// import { BsFillPhoneVibrateFill } from 'react-icons/bs';

const TopNav = () => {
  return (
    <nav className="top-nav">
      <div className="top-nav-left">
        <a href="mailto:support@corplyxtechnologies.com">
          <MdAttachEmail />
          support@corplyxtechnologies.com
        </a>
      </div>
      {/* <div className="top-nav-right">
        <a href="tel:+919650388201">
          <BsFillPhoneVibrateFill />
          +919650388201
        </a>
      </div> */}
    </nav>
  );
};

export default TopNav;
