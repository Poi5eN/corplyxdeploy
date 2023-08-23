import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY, target } = event;

      const cursorStyle = {
        left: clientX + 'px',
        top: clientY + 'px',
        opacity: 0.8,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        cursor: 'none',
        transition: 'transform 0.3s ease, opacity 0.3s ease, width 0.3s ease, height 0.3s ease',
        transform: 'translate(-50%, -50%) scale(1)',
        backgroundColor: 'rgb(128, 236, 209)',
      };

      // Check if hovering over text
      if (
        target.tagName === 'SPAN' ||
        target.tagName === 'P' ||
        target.tagName === 'H1' ||
        target.tagName === 'H2' ||
        target.tagName === 'H3' ||
        target.tagName === 'H4' ||
        target.tagName === 'H5' ||
        target.tagName === 'H6'
      ) {
        cursorStyle.transform = 'translate(-50%, -50%) scale(1.2)';
      }

      // Check if hovering over images
      if (target.tagName === 'IMG') {
        cursorStyle.backgroundColor = 'rgb(236, 128, 209)';
      }

      setCursorStyle(cursorStyle);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const [cursorStyle, setCursorStyle] = useState({
    left: '0px',
    top: '0px',
    opacity: 0.8,
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 9999,
    cursor: 'none',
    transition: 'transform 0.3s ease, opacity 0.3s ease, width 0.3s ease, height 0.3s ease',
    transform: 'translate(-50%, -50%) scale(1)',
    backgroundColor: 'rgb(128, 236, 209)',
  });

  return <div className="custom-cursor" style={cursorStyle} />;
};

export default CustomCursor;
