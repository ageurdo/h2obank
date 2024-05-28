import React, { useState } from "react";

interface DropdownProps {
  backgroundColor: string;
  buttonTextColor: string;
  buttonColor: string;
  items: string[];
  onChange: (value: string) => void;
}
const Dropdown: React.FC<DropdownProps> = ({
  backgroundColor,
  buttonTextColor,
  buttonColor,
  items,
  onChange,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (selectedItem: string) => {
    onChange(selectedItem);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block text-left ${backgroundColor} `}>
      <div>
        <button
          type="button"
          className={`inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 ${buttonColor} ${buttonTextColor} text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          Opções
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
