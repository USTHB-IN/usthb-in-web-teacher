import React from 'react'
import { IHomework } from "../utils/constants";
import Link from "next/link";
import { getDeadlineCss } from '../utils/deadlinestyle';
import { dateDiffInDays } from '../utils/date';


interface Props {
  name: string;
  description: string;
  deadline: Date;
}

export default function Onehomeworkdeadline(homework: Props) {
    return (
    <div className="flex flex-row gap-4">
      <div className="rounded-sm bg-[#9ED6FF] w-2 h-full"></div>
      <div className="flex flex-col justify-between ">
        <p className="font-semibold">{homework.name}</p>
        <p className="text-sm">{homework.description}</p>
      </div>
      {/*extra right param*/}
      <div className="w-full flex flex-col justify-between items-end">
        {/*days left*/}
        <div
          className={`text-xs text-white rounded items-center justify-center pl-3 pr-3 pt-1 pb-1 ${getDeadlineCss(
            homework.deadline
          )}`}
        >
          {dateDiffInDays(new Date(), homework.deadline) + " " + "days"}
        </div>
        <Link href="" className="text-xs font-semibold text-blueMain">
          See more.
        </Link>
      </div>
    </div>
  );
}
