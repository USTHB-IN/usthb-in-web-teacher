import React from "react";
import { useRouter } from "next/router";
import Sidebar from "../../../components/sidebar";
import { homework, user } from "../../../utils/constants";
import OneHomework from "../../../components/oneHomework";
import Link from "next/link";

export default function Homework() {
  const router = useRouter();

  const goToNewHomework = () => {
    router.push("/homework/new-homework");
  };

  return (
    <div className="w-screen">
      <Sidebar />
      <div className="h-screen w-screen bg-bgColor pl-[18%] p-4 text-black">
        <div className="bg-white h-full flex flex-col  rounded-lg pb-4 pt-4 gap-4 relative">
          <p className="pl-56 font-semibold ">Homeworks</p>
          <div className="bg-[#F1F1F1] h-0.5 w-full"></div>
          <div className="flex flex-col items-center justify-center gap-4 ">
            <OneHomework homework={homework} />
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <Link
              href=""
              className="flex flex-row justify-between items-center w-3/4"
            >
              <div className="flex flex-row justify-center items-center gap-4">
                <div className="rounded-full bg-avatargradient1 p-2 text-white font-semibold">
                  {user.nom.charAt(0) + user.prenom.charAt(0)}
                </div>
                <p>{user.nom + " " + user.nom}</p>
              </div>
              <div className="flex items-center justify-center rounded-md text-white text-sm bg-green px-6 py-2">
                Submit
              </div>
            </Link>
            <Link
              href=""
              className="flex flex-row justify-between items-center w-3/4"
            >
              <div className="flex flex-row justify-center items-center gap-4">
                <div className="rounded-full bg-avatargradient2 p-2 text-white font-semibold">
                  {user.nom.charAt(0) + user.prenom.charAt(0)}
                </div>
                <p>{user.nom + " " + user.nom}</p>
              </div>
              <div className="flex items-center justify-center rounded-md text-white text-sm bg-desactiveColor px-6 py-2">
                Unsubmit
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
