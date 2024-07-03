import React, { useState } from 'react';

const FAQAccordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 w-full">
            <button 
                className="flex justify-between w-full py-5 px-5 text-left text-[#053536] font-medium focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <span>{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && (
                <div className="pb-5 px-5">
                    <p className="text-gray-600 text-left">{children}</p>
                </div>
            )}
        </div>
    );
};

export default FAQAccordion;