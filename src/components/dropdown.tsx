// import { useState } from "react";
// import { MdOutlineArrowDropDown } from "react-icons/md";

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative">
//       <button
//         className="flex flex-row items-center justify-center border text-black text-sm py-2 px-4 rounded gap-4"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         Select an option
//         <MdOutlineArrowDropDown className="w-6 h-6 text-[#959595]" />
//       </button>
//       {isOpen && (
//         <div className="absolute z-10 top-full left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//           <a
//             href="#"
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           >
//             ACAD
//           </a>
//           <a
//             href="#"
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           >
//             ISIL
//           </a>
//           <a
//             href="#"
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           >
//             GTR
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;

import { useState, useEffect, useRef } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="relative w-[200px] flex flex-row items-center justify-center border text-black text-sm py-2 px-4 rounded gap-4"
        onClick={() => setIsOpen(!isOpen)}
        ref={buttonRef}
      >
        {selectedOption ? selectedOption : "Select an option"}
        <MdOutlineArrowDropDown className="w-6 h-6 absolute right-1 text-[#959595]" />
      </button>
      {isOpen && (
        <div
          className="absolute z-10 top-full left-0 mt-2 w-[200px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          style={{ minWidth: buttonRef.current?.offsetWidth }}
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => handleOptionClick("ACAD")}
          >
            ACAD
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => handleOptionClick("ISIL")}
          >
            ISIL
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => handleOptionClick("GTR")}
          >
            GTR
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

