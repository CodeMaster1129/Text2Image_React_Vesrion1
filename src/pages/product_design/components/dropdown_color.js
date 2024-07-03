import React, { useState, useRef, useEffect } from "react";

const DropdownColor = ({ initialLabel, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(initialLabel);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex w-full items-center justify-between py-2 px-4 border border-[#CAAC94]/50 rounded shadow-sm bg-[#EDE4D5]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row gap-2 w-full">
            <div style={{ height: '100%', width: '10%', backgroundColor: selectedLabel }}></div>
            <span className="text-gray-800">{selectedLabel}</span>
          </div>
          <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
        </div>
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 border border-[#CAAC94]/50 bg-[#EDE4D5] shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                console.log(option);
                setSelectedLabel(option);
                setIsOpen(false);
              }}
            >
              <div className="flex flex-row gap-2 w-full h-[20px]">
                <div style={{ height: '100%', width: '10%', backgroundColor: option }}></div>
                {option}
              </div>
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
      <DropdownColor
        initialLabel="Select Color"
        options={["#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#000000"]}
      />
    </div>
  );
}