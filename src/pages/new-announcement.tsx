import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { fetchDataAuth, fetchDataRessources } from "../hooks/fetchData";
import { ISection } from "../types/section";
import { removeDuplicateLabels } from "../utils/uniqueLabel";
import { IModule } from "../types/module";
import { postFileRessource } from "../hooks/postData";
import Dropdown, { Option } from "../components/dropdownbox";
import { ResourceType } from "../types/ressource";
import { ISpecialite } from "../types/specialites";
import router from "next/router";

export default function NewAnnouncement() {
  const [files, setFiles] = useState<File[]>([]);

  const [selectedSpecialite, setSelectedSpecialite] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
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
    const token = localStorage.getItem("token");
    if (token) {
      router.replace("/");
    }
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

  const [sectionOptions, setSectionsOptions] = useState<Option[]>([]);
  useEffect(() => {
    if (selectedYear === "" || !sectionsData) {
      setSectionsOptions([]); // Reset sectionsOptions to an empty array
      return;
    }

    console.log(sectionsData);
    const filteredSections = sectionsData.filter(
      (section) => section.academicYear === selectedYear
    );
    console.log("filteredSections", filteredSections);

    const sectionDropdownOptions = filteredSections.map((section) => ({
      value: section._id,
      label: section.name,
    }));
    setSectionsOptions(sectionDropdownOptions);
  }, [selectedYear]);

  let modulesData: IModule[];
  const [moduleOptions, setModuleOptions] = useState<Option[]>([]);
  useEffect(() => {
    if (selectedSection === "" || selectedYear === "") {
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
  }, [selectedSection]);

  const resourceTypeOptions: Option[] = Object.values(ResourceType).map(
    (value) => ({
      value,
      label: value,
    })
  );

  const submitForm = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("type", selectedType);
    formData.append("module", selectedModule);
    files.forEach((file) => {
      formData.append("files", file);
    });
    postFileRessource("/ressources", formData);
  };
  return (
    <div className="w-screen">
      <Sidebar />
      <div className="h-screen w-screen bg-bgColor pl-[18%] p-4 text-black">
        <div className="bg-white h-full flex flex-col  rounded-lg pb-4 pt-4 gap-4 relative">
          <p className="pl-56 font-semibold ">New Announcement</p>
          {/* items-center */}
          <div className="bg-[#F1F1F1] h-0.5 w-full"></div>
          <div className=" grid grid-cols-3 gap-8 gap-y-0 items-center px-56">
            <div className="w-full flex flex-col gap-2">
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
              <label htmlFor="section" className="font-semibold">
                Section :
              </label>
              <Dropdown
                placeholder="Select Section"
                value="section"
                variableChanger={setSelectedSection}
                onChange={onChange}
                options={sectionOptions}
                className="rounded-lg p-2.5 border-none"
              />
            </div>
            <div className="col-span-3 py-4">
              <p className="font-semibold">The Announcement's Title :</p>
              <input
                name="title"
                type="text"
                placeholder="Type the title here"
                className="p-2 outline outline-1 focus:outline-2 focus:outline-blueMain rounded-md border w-full"
              />
            </div>
            <div className="col-span-3 py-4">
              <p className="font-semibold">The Announcement's description :</p>
              <textarea
                name="description"
                placeholder="Type the description here"
                className="h-56 p-16 pt-2 pl-2 outline outline-1 focus:outline-2 focus:outline-blueMain rounded-md border w-full no-resize"
                style={{ resize: "none" }}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-blueMain rounded-lg text-white font-semibold w-1/5 px-2 py-3 absolute bottom-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
