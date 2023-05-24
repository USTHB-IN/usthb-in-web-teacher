import React from "react";
import Dropdown from "./dropdown";

export default function DropdownsAnnouncement() {
  return (
    <div className="flex flex-row justify-center gap-24">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Specialite :</p>
        <Dropdown />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold"> Academic Year :</p>
        <Dropdown />
      </div>{" "}
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Section :</p>
        <Dropdown />
      </div>
    </div>
  );
}
