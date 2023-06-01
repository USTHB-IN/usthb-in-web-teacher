import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import UploadFile from "../components/uploadFile";
import UploadedFile from "../components/uploadedFile";
import Dropdown, { Option } from "../components/dropdownbox";
import { ISpecialite } from "../types/specialites";
import { ISection } from "../types/section";
import { removeDuplicateLabels } from "../utils/uniqueLabel";
import { IModule } from "../types/module";
import { fetchDataAuth, fetchDataRessources } from "../hooks/fetchData";
import { ResourceType } from "../types/ressource";
import { postDataRessource, postFileRessource } from "../hooks/postData";

export default function Ressources() {
  const [file, setFile] = useState<File | null>(null);
  const [solution, setSolution] = useState<File | null>(null);
  const isSubmitDisabled = file === null;

  const [selectedSpecialite, setSelectedSpecialite] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedModule, setSelectedModule] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [name, setName] = useState("");

  const onChange = (
    selectedValue: string,
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setSelectedOption(selectedValue);
  };

  let specialitesData: ISpecialite[];
  const [specialiteOptions, setSpecialiteOptions] = useState<Option[]>([]);
  useEffect(() => {
    fetchDataAuth("/specialite/filiere/Science").then((data) => {
      specialitesData = data;
      const options: Option[] = specialitesData.map((specialite) => ({
        value: specialite._id,
        label: specialite.abbreviation,
      }));

      setSpecialiteOptions(options);
    });
  }, []);

  const [sectionsData, setSectionsData] = useState<ISection[]>([]);
  const [yearsOptions, setYearsOptions] = useState<Option[]>([]);
  useEffect(() => {
    console.log("selectedSpecialite", selectedSpecialite);

    if (selectedSpecialite === "") {
      setYearsOptions([]); // Reset yearsOptions to an empty array
      return;
    }

    fetchDataAuth(`/section/specialite/id/${selectedSpecialite}`).then(
      (data) => {
        setSectionsData(data);

        const options: Option[] = data.map((section: ISection) => ({
          value: section.academicYear,
          label: section.academicYear,
        }));
        const updatedYearsOptions = removeDuplicateLabels(options);

        setYearsOptions(updatedYearsOptions);
      }
    );
  }, [selectedSpecialite]);

  let modulesData: IModule[];
  const [moduleOptions, setModuleOptions] = useState<Option[]>([]);
  useEffect(() => {
    if (selectedYear === "") {
      setModuleOptions([]); // Reset moduleOptions to an empty array
      return;
    }

    fetchDataRessources(`/modules/search/search?`, {
      specialite: selectedSpecialite,
      academicYear: selectedYear,
    }).then((data) => {
      modulesData = data;
      const options: Option[] = modulesData.map((module) => ({
        value: module._id,
        label: module.name,
      }));

      setModuleOptions(options);
    });
  }, [selectedYear]);

  const resourceTypeOptions: Option[] = Object.values(ResourceType).map(
    (value) => ({
      value,
      label: value,
    })
  );

  const submitForm = () => {
    console.log(file);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("type", selectedType);
    formData.append("module", selectedModule);
    formData.append("file", file as File);
    formData.append("solution", solution as File);

    postFileRessource("/ressources", formData);
  };

  return (
    <div className="w-screen min-h-screen">
      <Sidebar />
      <div className="h-screen min-h-screen bg-bgColor pl-[18%] p-4 text-black">
        <div className="h-full bg-white flex flex-col rounded-lg py-4 gap-4">
          <p className="pl-56 font-semibold">Upload Resources</p>
          <div className="bg-[#F1F1F1] h-0.5 w-full"></div>
          <div className="grid grid-cols-4 gap-10 gap-y-8 items-center px-20">
            <div className="flex flex-col gap-2">
              <label htmlFor="specialite" className="font-semibold">
                Specialite
              </label>
              <Dropdown
                placeholder="Select Specialite"
                value="specialite"
                variableChanger={setSelectedSpecialite}
                onChange={onChange}
                options={specialiteOptions}
                className="rounded-lg p-2.5 border-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="year" className="font-semibold">
                Year :
              </label>
              <Dropdown
                placeholder="Select Year"
                value="year"
                variableChanger={setSelectedYear}
                onChange={onChange}
                options={yearsOptions}
                className="rounded-lg p-2.5 border-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="module" className="font-semibold">
                Module :
              </label>
              <Dropdown
                placeholder="Select Module"
                value="module"
                variableChanger={setSelectedModule}
                onChange={onChange}
                options={moduleOptions}
                className="rounded-lg p-2.5 border-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="module" className="font-semibold">
                Module :
              </label>
              <Dropdown
                placeholder="Select Type"
                value="type"
                variableChanger={setSelectedType}
                onChange={onChange}
                options={resourceTypeOptions}
                className="rounded-lg p-2.5 border-none"
              />
            </div>

            <div className="col-span-1"></div>
            <div className="flex flex-col gap-2 col-span-2">
              <label htmlFor="name" className="font-semibold">
                Name :
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                className="col-span-2 w-full p-4 rounded-lg outline outline-2 outline-gray-400 focus:outline-blueMain focus:ring-2 focus:ring-blueMain focus:border-transparent"
              />
            </div>
          </div>
          <UploadFile labelText="Add a file" uploadFile={setFile} />
          <UploadFile labelText="Add a solution" uploadFile={setSolution} />
          <div className="flex flex-col items-center">
            {file && <UploadedFile file={file} deleteFile={setFile} />}
          </div>
          <div className="flex flex-col items-center">
            {file && <UploadedFile file={file} deleteFile={setFile} />}
            {solution && (
              <UploadedFile file={solution} deleteFile={setSolution} />
            )}
          </div>
          <div className="flex flex-col flex-grow"></div>
          <div className="flex justify-center">
            <button
              className={`bottom-4 bg-blueMain rounded-lg px-10 py-4 text-white font-semibold ${
                isSubmitDisabled ? "bg-desactiveColor cursor-not-allowed" : ""
              }`}
              disabled={isSubmitDisabled}
              onClick={submitForm}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
