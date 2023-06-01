import React, { ChangeEvent } from "react";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";

interface UploadFilesProps {
  labelText: string;
  setFile: React.Dispatch<React.SetStateAction<File[]>>;
}

export default function UploadFiles({ labelText, setFile }: UploadFilesProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setFile((prevSelectedFiles) => [...prevSelectedFiles, file]);
      console.log(file);
    }
  };
  return (
    <div className="flex justify-center p-4">
      <div className="flex items-center justify-center w-1/3">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-16 rounded-xl bg-blueMain hover:bg-blue"
        >
          <div className="flex flex-row items-center justify-center gap-4 text-white">
            <p className="font-semibold">{labelText}</p>
            <TbSquareRoundedArrowDownFilled className="w-6 h-6" />
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
}
