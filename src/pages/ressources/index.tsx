import React, { useRef } from "react";
import Sidebar from "../../components/sidebar";
import { useState } from "react";
import Dropdowns from "../../components/dropdowns";
import UploadFile from "../../components/uploadFile";

export default function Ressources() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    // Perform further operations with the selected file
  };

  return (
    <div className="w-screen">
      <Sidebar />
      <div className="h-screen w-screen bg-bgColor pl-[18%] p-4 text-black">
        <div className="bg-white h-full flex flex-col  rounded-lg pb-4 pt-4 gap-4 relative">
          <p className="pl-56 font-semibold ">Upload Ressources</p>
          {/* items-center */}
          <div className="bg-[#F1F1F1] h-0.5 w-full"></div>
          <Dropdowns />
          <UploadFile labelText="Upload New Ressources" />
        </div>
      </div>
    </div>
  );
}
