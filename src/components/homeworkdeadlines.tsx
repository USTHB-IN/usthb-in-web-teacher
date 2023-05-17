import React from "react";
import Link from "next/link";
import { homework } from "../utils/constants";
import { homework2 } from "../utils/constants";
import { homework3 } from "../utils/constants";
import { dateDiffInDays } from "../utils/date";
import { getDeadlineCss } from "../utils/deadlinestyle";
import HomeworkdeadlineDetails from "./homeworkdeadlineDetails";

export default function Homeworkdeadlines() {
    const all = [homework, homework2, homework3];
  return (
    <div className="col-span-1 bg-white rounded-lg flex flex-col text-black gap-1 ">
      <div className="flex flex-row items-center p-4 gap-4">
        <div className="rounded-sm bg-blue w-4 h-8"></div>
        <p className="font-semibold">Upcoming Homeworks Deadline </p>
      </div>
      {/*all the homeworks deadlines*/}
      <div className="flex flex-col justify-between p-4 gap-4 ">
        {all.map((homework, index) => (
          <HomeworkdeadlineDetails
            name={homework.name}
            description={homework.description}
            deadline={homework.deadline}
          />
        ))}
      </div>
      {/* <div className="h-12 w-full absolute bottom-0 bg-bottomGradient"></div> */}
    </div>
  );
}
