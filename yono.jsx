import React, { useState, useEffect } from 'react';
import './Stars.css'; // Create a CSS file for styling your stars

function Stars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStar = () => {
      const star = {
        size: Math.random() * 2 + 1, // Random size between 1 and 3 pixels
        x: Math.random() * window.innerWidth, // Random horizontal position
        y: 0, // Starts from top
        speed: Math.random() * 3 + 1, // Random speed between 1 and 3 pixels per frame
      };
      return star;
    };

    const updateStars = () => {
      setStars(prevStars => {
        const newStars = prevStars.map(star => {
          star.y += star.speed;
          // Reset position if star goes below the screen
          if (star.y > window.innerHeight) {
            star.y = 0;
            star.x = Math.random() * window.innerWidth;
          }
          return star;
        });
        return newStars;
      });
    };

    // Create stars initially
    const initialStars = [];
    for (let i = 0; i < 1000; i++) { // You can adjust the number of stars here
      initialStars.push(createStar());
    }
    setStars(initialStars);

    // Update stars position in intervals
    const intervalId = setInterval(updateStars, 50); // Adjust the interval for animation smoothness

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            width: star.size + 'px',
            height: star.size + 'px',
            top: star.y + 'px',
            left: star.x + 'px',
          }}
        />
      ))}
    </div>
  );
}

export default Stars;