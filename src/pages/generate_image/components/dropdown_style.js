import React, { useState, useRef, useEffect } from 'react';

const DropdownStyle = ({ setStyle }) => {
    const options = ['Classic painting', 'Vaporwave', 'Gothic', 'Cybernetic, sci-fi', 'Can Gogh', 'Comic', 'Steampunk', 'Cyberpunk', 'Black & White', 'Realistic']
    const [isOpen, setIsOpen] = useState(false);
    const [selected_label, setSelected_label] = useState(options[0])
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className="flex w-full items-center justify-between p-1 pr-4 border border-gray-300 rounded shadow-sm bg-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img src='images/style_dropdown.png' alt='style_dropdown' />
                <span className="text-gray-800">{selected_label}</span>
                <span className="ml-2">{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && (
                <ul className="absolute z-10 w-full mt-1 border border-gray-300 bg-white shadow-lg">
                    {options.map((option, index) => (
                        <li key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                                setSelected_label(option)
                                setStyle(option)
                                setIsOpen(false);
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownStyle;

