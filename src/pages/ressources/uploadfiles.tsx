import React from "react";
import Sidebar from "../../components/sidebar";
import Dropdowns from "../../components/dropdowns";
import UploadFile from "../../components/uploadFile";
import UploadedFile from "../../components/uploadedFile";

export default function Uploadfiles() {
  return (
    <div className="w-screen">
      <Sidebar />
      <div className="h-screen w-screen bg-bgColor pl-[18%] p-4 text-black">
        <div className="bg-white h-full flex flex-col  rounded-lg pb-4 pt-4 gap-4 relative">
          <p className="pl-56 font-semibold ">Upload Ressources</p>
          {/* items-center */}
          <div className="bg-[#F1F1F1] h-0.5 w-full"></div>
          <Dropdowns />
          <UploadFile labelText="Add a file" />
          <div className="flex flex-col items-center gap-2">
            <UploadedFile />
            <UploadedFile />
          </div>
          <div className="flex justify-center">
            <button className=" absolute bottom-4 bg-blueMain rounded-lg px-10 py-4 text-white font-semibold ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}