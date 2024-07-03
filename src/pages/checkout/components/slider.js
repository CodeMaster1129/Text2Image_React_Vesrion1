import React, { useState } from 'react';

const Slider = () => {
  const [value, setValue] = useState(50); // Default slider value

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="scale-slider" className="text-gray-700">Scale:</label>
      <input
        id="scale-slider"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        style={{ backgroundSize: `${value}% 100%` }}
      />
    </div>
  );
};

export default Slider;