import React, { useState } from 'react';
import ColorSlider from './image_edit_slider'; // Make sure the path is correct

const LightAdjustment = () => {
  const [brightness, setBrightness] = useState(0);
  const [exposure, setExposure] = useState(0);
  const [contrast, setContrast] = useState(0);
  const [highlights, setHighlights] = useState(0);
  const [shadows, setShadows] = useState(0);

  return (
    <div className='flex flex-col gap-4'>
      <ColorSlider label="Brightness" value={brightness} setValue={setBrightness} min="-50" max="50" />
      <ColorSlider label="Exposure" value={exposure} setValue={setExposure} min="-50" max="50" />
      <ColorSlider label="Contrast" value={contrast} setValue={setContrast} min="-50" max="50" />
      <ColorSlider label="Highlights" value={highlights} setValue={setHighlights} min="-50" max="50" />
      <ColorSlider label="Shadows" value={shadows} setValue={setShadows} min="-50" max="50" />
    </div>
  );
};

export default LightAdjustment;