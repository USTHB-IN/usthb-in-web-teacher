import React from "react";
import Sidebar from "../../components/sidebar";
import Dropdowns from "../../components/dropdownsAnnouncement";

export default function NewHomework() {

  return (
    <div className="w-screen">
      <Sidebar />
      <div className="h-screen w-screen bg-bgColor pl-[18%] p-4 text-black">
        <div className="bg-white h-full flex flex-col  rounded-lg pb-4 pt-4 gap-4 relative">
          <p className="pl-56 font-semibold ">New Homework</p>
          <div className="bg-[#F1F1F1] h-0.5 w-full"></div>
          <Dropdowns />
          <div className="flex flex-col items-center">
            <div className="w-2/3 py-4">
              <p className="font-semibold">The Homework's Title :</p>
              <input
                type="text"
                placeholder="Type the title here"
                className="p-2   outline-none rounded-md border w-full"
              />
            </div>
            <div className="w-2/3 py-4">
              <p className="font-semibold">The Homework's description :</p>
              <textarea
                placeholder="Type the description here"
                className="p-16 pt-2 pl-2  outline-none rounded-md border w-full no-resize"
                style={{ resize: "none" }}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button className="flex items-center justify-center bg-blueMain px-8 py-4 rounded-lg text-white font-semibold absolute bottom-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
