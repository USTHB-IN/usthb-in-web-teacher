import React from 'react'
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";

interface UploadFilesProps {
  labelText: string;
}

export default function UploadFiles({ labelText }: UploadFilesProps) {
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
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
}
