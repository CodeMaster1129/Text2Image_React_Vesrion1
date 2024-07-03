import React, { useState, useRef, useEffect } from 'react';

const DropdownCategory = ({ initialLabel, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState(initialLabel);
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
                className="flex w-full items-center justify-between py-2 px-4 border border-[#CAAC94]/50 rounded shadow-sm bg-[#EDE4D5]"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-gray-800">{selectedLabel}</span>
                <span className="ml-2">{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && (
                <ul className="absolute z-10 w-full mt-1 border border-[#CAAC94]/50 bg-[#EDE4D5] shadow-lg">
                    {options.map((option, index) => (
                        <li key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                                console.log(option);
                                setSelectedLabel(option);
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

export default function App() {
    return (
        <div className="">
            <DropdownCategory
                initialLabel="Select Category"
                options={["Men's Clothes", "Women's Clothes", "Children's Clothes"]}
            />
        </div>
    );
}