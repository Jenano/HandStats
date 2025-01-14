import React, { useState } from "react";
import down_arrow from "../../assets/elements/arrow-down.svg";

interface DropdownPickerProps {
  defaultValue: string; // Default selected value
  options: string[]; // Array of options
  onSelect: (value: string) => void; // Callback to pass the selected value
}

function DropdownPicker({
  defaultValue,
  options,
  onSelect,
}: DropdownPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option); // Pass the selected value to the parent
  };

  return (
    <div className="grow text-start mt-5">
      {/* Dropdown Button */}
      <div
        className="h-5 justify-start items-center gap-0.5 inline-flex cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="text-[#56ccf2] text-lg">{selected}</div>
        <div className="w-5 h-5 relative">
          <img
            src={down_arrow}
            alt="See more"
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute mt-1 bg-white shadow-lg rounded-lg z-10 w-full">
          {options.map((option, index) => (
            <div
              key={index}
              className="text-[#404145] text-[15px] font-normal font-['Roboto'] px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownPicker;
