import React from "react";
import Dropdown from "./dropdown";
import DropdownSection from "./dropdownSection";
import DropdownYear from "./dropdownYear";
import DropdownDate from "./dropdownDate";
import DropdownModule from "./dropdownModule";

interface DropdownsAllProps {
  page: string;
}

const DropdownsAll: React.FC<DropdownsAllProps> = ({ page }) => {
  let dropdownsToRender = [
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-sm">Specialite :</p>
      <Dropdown />
    </div>,
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-sm">Academic Year :</p>
      <DropdownYear />
    </div>,
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-sm">Section :</p>
      <DropdownSection />
    </div>,
    <div className="flex flex-col gap-2">
      <p className="font-semibold text-sm">Module :</p>
      <DropdownModule />
    </div>,
  ];

  if (page === "homework") {
    dropdownsToRender.push(
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-sm">Deadline :</p>
        <DropdownDate />
      </div>
    );
  }

  return (
    <div className="flex flex-row justify-center gap-8">
      {dropdownsToRender}
    </div>
  );
};

export default DropdownsAll;
