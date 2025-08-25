import React from 'react';
import './Cursor.css'; // Assuming you will create a CSS file for cursor styles

const Cursor = () => {
  const cursorRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef}></div>
  );
};

export default Cursor;