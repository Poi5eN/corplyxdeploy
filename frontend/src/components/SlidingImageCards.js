import React from 'react';
import './SlidingImageCards.css';

const SlidingImageCards = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="sliding-image-cards">
      <div className="card-slider">
        <button className="prev-button" onClick={handlePrev}>&lt;</button>
        <button className="next-button" onClick={handleNext}>&gt;</button>
        <div className="card-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`card ${index === currentIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingImageCards;
