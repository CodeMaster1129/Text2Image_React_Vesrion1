import React, { useState } from 'react';

const ToggleSwitch = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <div className="flex items-center space-x-4">
            <button 
                className={`px-4 py-2 ${!isAnnual ? 'font-bold text-black' : 'text-gray-500'}`}
                onClick={() => setIsAnnual(false)}
            >
                Pay Monthly
            </button>
            <div 
                className="relative w-12 h-6 bg-[#CAAC94] rounded-full"
                onClick={() => setIsAnnual(!isAnnual)}
            >
                <div className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform transition duration-300 ease-in-out ${isAnnual ? 'translate-x-6' : ''}`}></div>
            </div>
            <button 
                className={`px-4 py-2 ${isAnnual ? 'font-bold text-black' : 'text-gray-500'}`}
                onClick={() => setIsAnnual(true)}
            >
                Pay Annually
            </button>
        </div>
    );
};

export default ToggleSwitch;