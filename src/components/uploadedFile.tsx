import React from "react";
import { TiDelete } from "react-icons/ti";
import { BsFileEarmarkTextFill } from "react-icons/bs";

interface UploadedFileProps {
  file: File;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

export default function UploadedFile({ file, setFile }: UploadedFileProps) {
  const handleDelete = () => {
    setFile(null);
  };

  return (
    <div className="rounded-md border flex flex-row justify-center items-center w-max py-2 px-4 gap-4">
      <BsFileEarmarkTextFill className="text-black w-6 h-6" />
      <p>{file.name}</p>
      <button className="" onClick={handleDelete}>
        <TiDelete className="text-desactiveColor w-8 h-8" />
      </button>
    </div>
  );
}
