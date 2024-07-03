import React from 'react';
import ColorSlider from './image_edit_slider'; // Make sure the path is correct

const ColorAdjustment = ({ colorAdjustmentValues, setColorAdjustmentValues }) => {
  const handleChange = (type, value) => {
    setColorAdjustmentValues((prevValues) => ({
      ...prevValues,
      [type]: value,
    }));
  };

  return (
    <div className='flex flex-col gap-4'>
      <ColorSlider
        label="Saturation"
        value={colorAdjustmentValues.saturation}
        setValue={(value) => handleChange('saturation', value)}
        min="-50"
        max="50"
      />
      <ColorSlider
        label="Temperature"
        value={colorAdjustmentValues.temperature}
        setValue={(value) => handleChange('temperature', value)}
        min="-50"
        max="50"
      />
      <ColorSlider
        label="Tint"
        value={colorAdjustmentValues.tint}
        setValue={(value) => handleChange('tint', value)}
        min="-50"
        max="50"
      />
    </div>
  );
};

export default ColorAdjustment;