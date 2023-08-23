import React from 'react';
import './ImageGallery.css';
import corner from './images/corner.png';
import welly from './images/welly.png';
import alias from './images/alias.png';
import mart from './images/super.jpg';

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <div className="image-section">
        <img src={corner} alt="Img" className="zoom-effect" width="100%" />
        <h3>CornerView</h3>
      </div>
      <div className="image-section">
        <img src={welly} alt="Img" className="zoom-effect" width="100%" />
        <h3>WellyWeb</h3>
      </div>
      <div className="image-section">
        <img src={alias} alt="Img" className="zoom-effect" width="100%" />
        <h3>Alias Tech</h3>
      </div>
      <div className="image-section">
        <img src={mart} alt="Img" className="zoom-effect" width="100%" />
        <h3>SuperMart</h3>
      </div>
    </div>
  );
};

export default ImageGallery;
