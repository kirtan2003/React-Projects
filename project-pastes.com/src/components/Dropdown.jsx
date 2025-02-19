import React, { useState } from "react";

const Dropdown = ({setOption}) => {
  const [selectedOption, setSelectedOption] = useState("Code");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Code", "Text", "Json"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOption(option)
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-36 text-left">
      {/* Dropdown Button */}
      <div
        className="bg-gray-800 text-gray-100 border-2 border-gray-700 rounded-lg px-8 py-2 cursor-pointer flex justify-between items-center hover:border-purple-500"
        onClick={toggleDropdown}
      >
        <span>{selectedOption}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-gray-800 text-gray-100 border-2 border-purple-700 rounded-lg shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-700 ${
                selectedOption === option ? "bg-gray-700" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
