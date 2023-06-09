import { useRouter } from "next/router";
import Sidebar from "../components/sidebar";
import { announcement } from "../utils/constants";
import AnnouncementDetail from "../components/announcementDetails";
import DropdownsAll from "../components/dropdownsAll";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/signin");
    }
  }, []);
  const all = [announcement, announcement, announcement, announcement];

  const goToNewAnnouncement = () => {
    router.push("/new-announcement");
  };

  return (
    <div className="w-screen">
      <Sidebar />
      <div className="h-screen w-screen bg-bgColor pl-[18%] p-4 text-black">
        <div className="bg-white h-full flex flex-col  rounded-lg pb-4 pt-4 gap-4 relative">
          <p className="pl-56 font-semibold ">Announcements</p>
          {/* items-center */}
          <div className="bg-[#F1F1F1] h-0.5 w-full"></div>
          {/* Dropdowns */}
          <DropdownsAll page="" />
          <div className="flex flex-col justify-center items-center gap-4 ">
            {all.map((announcement, index) => (
              <AnnouncementDetail
                title={announcement.title}
                description={announcement.description}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <button
              onClick={goToNewAnnouncement}
              className=" bg-blueMain rounded-lg text-white font-semibold w-1/3 px-2 py-3 absolute bottom-4"
            >
              Create New Announcement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
