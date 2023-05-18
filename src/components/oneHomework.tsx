import React from "react";
import { BsFillFileTextFill } from "react-icons/bs";
import { homework } from "../utils/constants";
import { format } from "date-fns";

interface OneHomeworkProps {
  homework: {
    name: string;
    description: string;
    deadline: Date;
    specialite: string;
    section: string;
    academicYear: string;
    module: string;
  };
}

export default function OneHomework({ homework }: OneHomeworkProps) {
  const formattedDeadline = format(homework.deadline, "MMMM do, yyyy");

  return (
    <div className="flex flex-col justify-center items-center w-4/5 gap-4">
      <button className="flex flex-row justify-between items-center w-full">
        {/* cote gauche */}
        <div className="flex flex-row gap-4 items-center">
          <div className="rounded-full bg-blueMain p-4">
            <BsFillFileTextFill className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2 font-semibold">
              <p>{homework.name}</p>
              <p className="text-blue">-TP</p>
            </div>
            <div className="flex flex-row items-center gap-2 text-xs text-blue">
              <p>{homework.specialite}</p>
              <p>-{homework.academicYear}</p>
            </div>
            <p className="text-xs text-blue self-start">{homework.module}</p>
          </div>
        </div>
        <div className="flex flex-row bg-blue rounded-md px-4 py-2 font-semibold text-sm text-white gap-2">
          <p>Deadline:</p>
          <p>{formattedDeadline}</p>
        </div>
      </button>
      <div className="bg-[#F1F1F1] h-0.5 w-4/5"></div>
    </div>
  );
}
