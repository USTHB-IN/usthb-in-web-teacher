import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import DropdownsAll from "../../components/dropdownsAll";
import UploadFiles from "../../components/uploadFiles";
import UploadedFiles from "../../components/uploadedFiles";
import Dropdown, { Option } from "../../components/dropdownbox";
import { ResourceType } from "../../types/ressource";
import { fetchDataAuth, fetchDataRessources } from "../../hooks/fetchData";
import { IModule } from "../../types/module";
import { ISpecialite } from "../../types/specialites";
import { ISection } from "../../types/section";
import { removeDuplicateLabels } from "../../utils/uniqueLabel";
import { postFileRessource } from "../../hooks/postData";

export default function NewHomework() {
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
        <div className="h-full w-full bg-white flex flex-col justify-between items-center rounded-lg p-4 gap-4">
          <div className="w-full flex flex-col gap-2">
            <p className="pl-56 font-semibold">New Homework</p>
            <div className="bg-[#F1F1F1] h-0.5 w-full"></div>
            <div className=" grid grid-cols-5 gap-8 gap-y-8 items-center px-36">
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
            </div>
            <div className="flex flex-col items-center">
              <div className="w-2/3 py-4">
                <p className="font-semibold">The Homework's Title :</p>
                <input
                  name="title"
                  type="text"
                  placeholder="Type the title here"
                  className="p-2 outline-none rounded-md border w-full"
                />
              </div>
              <div className="w-2/3 py-4">
                <p className="font-semibold">The Homework's description :</p>
                <textarea
                  name="description"
                  placeholder="Type the description here"
                  className="p-16 pt-2 pl-2 outline-none rounded-md border w-full no-resize"
                  style={{ resize: "none" }}
                />
              </div>
            </div>
            <UploadFiles labelText="Add a file" setFile={setFiles} />
            <div className="flex flex-col items-center gap-2 h-max">
              {files.map((file) => (
                <UploadedFiles key={file.name} file={file} setFile={setFiles} />
              ))}
            </div>
          </div>

            <button
              className="w-1/5 bg-blueMain px-8 py-4 rounded-lg text-white font-semibold"
            >
              Submit
            </button>
        </div>
      </div>
    </div>
  );
}
