import React from 'react'
import { TiDelete } from "react-icons/ti";
import { BsFileEarmarkTextFill } from "react-icons/bs";

export default function UploadedFile() {
  return (
    <div className="rounded-md border flex flex-row justify-center items-center w-max py-2 px-4 gap-4">
      <BsFileEarmarkTextFill className="text-black w-6 h-6" />
      <p>FileName</p>
      <button className="">
        <TiDelete className="text-desactiveColor w-8 h-8" />
      </button>
    </div>
  );
}

