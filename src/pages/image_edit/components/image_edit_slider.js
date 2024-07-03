import React from "react";
import "./image_edit_slider.css";

const ImageEditSlider = ({ label, value, setValue, min, max }) => {
  const progress = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-2 text-[#485D5E]">
      <div className="flex flex-row justify-between">
        <label>{label}:</label>
        <label>{value}</label>
      </div>
      <input
        style={{
          background: `linear-gradient(to right, #276E70 ${progress}%, #ccc ${progress}%)`,
        }}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default ImageEditSlider;
