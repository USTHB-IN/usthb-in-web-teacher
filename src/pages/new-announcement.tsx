import React from "react";
import Sidebar from "../components/sidebar";
import Dropdowns from "../components/dropdownsAnnouncement";

export default function Newannouncement() {
  return (
    <div className="w-screen">
      <Sidebar />
      <div className="h-screen w-screen bg-bgColor pl-[18%] p-4 text-black">
        <div className="bg-white h-full flex flex-col  rounded-lg pb-4 pt-4 gap-4 relative">
          <p className="pl-56 font-semibold ">New Announcement</p>
          {/* items-center */}
          <div className="bg-[#F1F1F1] h-0.5 w-full"></div>
          <Dropdowns />
          <div className="flex flex-col items-center">
            <div className="w-2/3 py-4">
              <p className="font-semibold">The Announcement's Title :</p>
              <input
                type="text"
                placeholder="Type the title here"
                className="p-2   outline-none rounded-md border w-full"
              />
            </div>
            <div className="w-2/3 py-4">
              <p className="font-semibold">The Announcement :</p>
              <textarea
                placeholder="Type the announcement here"
                className="p-36 pt-2 pl-2  outline-none rounded-md border w-full no-resize"
                style={{ resize: "none" }}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-blueMain rounded-lg text-white font-semibold w-1/5 px-2 py-3 absolute bottom-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
