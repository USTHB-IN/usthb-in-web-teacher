import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import UploadFile from "../components/uploadFile";
import UploadedFile from "../components/uploadedFile";
import DropdownsAll from "../components/dropdownsAll";

export default function Ressources() {
  const [files, setFiles] = useState<File[]>([]);

  const isSubmitDisabled = files.length === 0;

  return (
    <div className="w-screen">
      <Sidebar />
      <div className="h-screen w-screen bg-bgColor pl-[18%] p-4 text-black">
        <div className="bg-white h-full flex flex-col  rounded-lg pb-4 pt-4 gap-4 relative">
          <p className="pl-56 font-semibold ">Upload Ressources</p>
          <div className="bg-[#F1F1F1] h-0.5 w-full"></div>
          <DropdownsAll page="" />
          <UploadFile labelText="Add a file" setFile={setFiles} />
          <div className="flex flex-col items-center gap-2">
            {files.map((file) => (
              <UploadedFile key={file.name} file={file} setFile={setFiles} />
            ))}
          </div>
          <div className="flex justify-center">
            <button
              className={`absolute bottom-4 bg-blueMain rounded-lg px-10 py-4 text-white font-semibold ${
                isSubmitDisabled ? "bg-desactiveColor cursor-not-allowed" : ""
              }`}
              disabled={isSubmitDisabled}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
