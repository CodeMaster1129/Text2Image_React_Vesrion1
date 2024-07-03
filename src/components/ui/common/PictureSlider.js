// src/components/PictureSlider.js
import React, { useState, useEffect } from 'react';
const pictures = [
  'images/pictures/good1.png',
  'images/pictures/good2.png',
  'images/pictures/good3.png',
  'images/pictures/good4.png',
  'images/pictures/good5.png',
  'images/pictures/good6.png',
  'images/pictures/good7.png',
  'images/pictures/good8.png',
]

const PictureSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + 4;
  const visiblePictures = pictures.slice(startIndex, endIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % (pictures.length - 3));
    }, 3000); // Change the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex overflow-hidden">
      {visiblePictures.map((picture, index) => (
        <div key={index} className="w-1/4">
          <img src={picture} alt={`Picture ${index + startIndex + 1}`} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default PictureSlider;