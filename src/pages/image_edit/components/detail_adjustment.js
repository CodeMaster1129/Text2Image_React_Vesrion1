import React, { useState } from 'react';
import ColorSlider from './image_edit_slider'; // Make sure the path is correct

const DetailAdjustment = () => {
  const [sharpness, setSharpness] = useState(0);
  const [blur, setBlur] = useState(0);
  const [grain, setGrain] = useState(0);

  return (
    <div className='flex flex-col gap-4'>
      <ColorSlider label="Sharpness" value={sharpness} setValue={setSharpness} min="0" max="100" />
      <ColorSlider label="Blur" value={blur} setValue={setBlur} min="0" max="100" />
      <ColorSlider label="Grain" value={grain} setValue={setGrain} min="0" max="100" />
    </div>
  );
};

export default DetailAdjustment;