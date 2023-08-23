import React from 'react';
import video from './video.mp4';
import './VideoComponent.css'; // Import CSS file for component styling

const VideoComponent = () => {
  return (
    <section className="video-section">
      <h1 className="typewriter-animation">A Complete Web Solutions</h1>
      <video src={video} autoPlay loop muted />
    </section>
  );
};

export default VideoComponent;
