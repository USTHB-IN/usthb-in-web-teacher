import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import DropdownsAll from "../components/dropdownsAll";
import UploadFile from "../components/uploadFile";
import UploadedFile from "../components/uploadedFile";
import Dropdown, { Option } from "../components/dropdownbox";
import fetchData from "../hooks/fetchData";
import { ISpecialite } from "../types/specialites";
import { ISection } from "../types/section";
import { removeDuplicateLabels } from "../utils/uniqueLabel";

export default function Ressources() {
  const [files, setFiles] = useState<File | null>(null);
  const isSubmitDisabled = files === null;

  const [selectedSpecialite, setSelectedSpecialite] = useState("");
  const [selectedYear, setSelectedSection] = useState("");
  const [selectedSection, setSelectedYear] = useState("");

  const onChange = (
    selectedValue: string,
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setSelectedOption(selectedValue);
  };

  let specialitesData: ISpecialite[];
  const [specialiteOptions, setSpecialiteOptions] = useState<Option[]>([]);
  fetchData("/specialite/filiere/Science").then((data) => {
    specialitesData = data;
    const options: Option[] = specialitesData.map((specialite) => ({
      value: specialite._id,
      label: specialite.abbreviation,
    }));

    setSpecialiteOptions(options);
  });

  let sectionsData: ISection[] = [];
  const [yearsOptions, setYearsOptions] = useState<Option[]>([]);
  useEffect(() => {
    console.log("selectedSpecialite", selectedSpecialite);

    if (selectedSpecialite === "") {
      setYearsOptions([]); // Reset yearsOptions to an empty array
      return;
    }

    fetchData(`/section/specialite/id/${selectedSpecialite}`).then((data) => {
      sectionsData = data;

      let options: Option[] = sectionsData.map((section) => ({
        value: section.academicYear,
        label: section.academicYear,
      }));
      options = removeDuplicateLabels(options);

      setYearsOptions(options);
    });
  }, [selectedSpecialite]);

  let sections: ISection[];
  const [sectionOptions, setSectionsOptions] = useState<Option[]>([]);
  useEffect(() => {
    if (selectedYear === "" || !sectionsData) {
      setSectionsOptions([]); // Reset sectionsOptions to an empty array
      return;
    }

    const filteredSections = sectionsData.filter(
      (section) => section.academicYear === selectedYear
    );
    const sectionDropdownOptions = filteredSections.map((section) => ({
      value: section._id,
      label: section.name,
    }));
    setSectionsOptions(sectionDropdownOptions);
  }, [selectedYear,]);

  return (
    <div className="w-screen">
      <Sidebar />
      <div className="h-screen bg-bgColor pl-[18%] p-4 text-black">
        <div className="h-full bg-white flex flex-col rounded-lg py-4 gap-4">
          <p className="pl-56 font-semibold">Upload Resources</p>
          <div className="bg-[#F1F1F1] h-0.5 w-full"></div>
          <div className="grid grid-cols-5 gap-4 px-8">
            <Dropdown
              placeholder="Select Specialite"
              value="specialite"
              variable={setSelectedSpecialite}
              onChange={onChange}
              options={specialiteOptions}
              className="rounded-lg p-2.5 border-none"
            />
            <Dropdown
              placeholder="Select Year"
              value="year"
              variable={setSelectedYear}
              onChange={onChange}
              options={yearsOptions}
              className="rounded-lg p-2.5 border-none"
            />
            <Dropdown
              placeholder="Select Section"
              value="section"
              variable={setSelectedSection}
              onChange={onChange}
              options={sectionOptions}
              className="rounded-lg p-2.5 border-none"
            />
          </div>
          {/* <UploadFile labelText="Add a file" setFile={setFiles} /> */}
          <div className="flex flex-col items-center gap-2">
            {/* {files && <UploadedFile file={files} setFile={setFiles} />} */}
          </div>
          <div className="flex flex-col flex-grow"></div>
          <div className="flex justify-center">
            <button
              className={`bottom-4 bg-blueMain rounded-lg px-10 py-4 text-white font-semibold ${
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
