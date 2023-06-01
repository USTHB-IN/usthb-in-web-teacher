import React, { useState, ChangeEvent } from "react";

export interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  placeholder: string;
  options: Option[];
  value: string;
  variableChanger: React.Dispatch<React.SetStateAction<string>>;
  onChange: (
    selectedValue: string,
    variable: React.Dispatch<React.SetStateAction<string>>
  ) => void;
  className?: string;
}

const Dropdown = ({
  placeholder,
  options,
  value,
  variableChanger,
  onChange,
  className,
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState(value || "");

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onChange(selectedValue, variableChanger);
  };

  return (
    <select
      value={selectedOption}
      onChange={handleOptionChange}
      className={"outline-none " + className}
    >
      <option value="" selected hidden>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
