import { useState } from "react";
import Sidebar from "../../components/sidebar";
import DropdownsAll from "../../components/dropdownsAll";
import UploadFile from "../../components/uploadFile";
import UploadedFile from "../../components/uploadedFile";

export default function NewHomework() {
  const [files, setFiles] = useState<File[]>([]);

  const isSubmitDisabled = files.length === 0;

  return (
    <div className="w-screen h-full flex ">
      <Sidebar />
      <div className="flex-1 bg-bgColor pl-[18%] p-4 text-black">
        <div className="h-full bg-white flex flex-col rounded-lg pb-4 pt-4 gap-4 relative">
          <p className="pl-56 font-semibold">New Homework</p>
          <div className="bg-[#F1F1F1] h-0.5 w-full"></div>
          <DropdownsAll page="homework" />
          <div className="flex flex-col items-center">
            <div className="w-2/3 py-4">
              <p className="font-semibold">The Homework's Title :</p>
              <input
                type="text"
                placeholder="Type the title here"
                className="p-2 outline-none rounded-md border w-full"
              />
            </div>
            <div className="w-2/3 py-4">
              <p className="font-semibold">The Homework's description :</p>
              <textarea
                placeholder="Type the description here"
                className="p-16 pt-2 pl-2 outline-none rounded-md border w-full no-resize"
                style={{ resize: "none" }}
              />
            </div>
          </div>
          <UploadFile labelText="Add a file" setFile={setFiles} />
          <div className="flex flex-col items-center gap-2 h-max">
            {files.map((file) => (
              <UploadedFile key={file.name} file={file} setFile={setFiles} />
            ))}
          </div>

          <div className="flex justify-center">
            <button className="flex items-center justify-center bg-blueMain px-8 py-4 rounded-lg text-white font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
