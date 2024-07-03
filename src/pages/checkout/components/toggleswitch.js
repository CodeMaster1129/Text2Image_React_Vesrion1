import React, { useState } from 'react';

const ToggleSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <label className="flex items-center cursor-pointer">
            {/* Toggle */}
            <div className="relative">
                {/* Input */}
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={isEnabled}
                    onChange={() => setIsEnabled(!isEnabled)}
                />
                <div className="block bg-white border border-[#CAAC94] w-10 h-6 rounded-full"></div>
                <div className={`absolute left-1 top-1 bg-[#CAAC94] w-4 h-4 rounded-full transition-transform ${isEnabled ? 'translate-x-4' : ''}`}></div>
            </div>
        </label>
    );
};

export default ToggleSwitch;