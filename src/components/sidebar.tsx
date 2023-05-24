import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import { FiLogOut } from "react-icons/fi";
import { TiHome } from "react-icons/ti";
import { FaPenSquare } from "react-icons/fa";
import { TbFileFilled } from "react-icons/tb";
import { user } from "../utils/constants";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 bg-white h-screen w-1/6 py-4 flex flex-col justify-between items-center">
      <div className="w-full flex flex-col items-center gap-8">
        <Image priority src={Logo} alt="" className="w-24" />
        <div className="px-4 w-full flex flex-col gap-6">
          {/* <Link
            href=""
            className="flex flex-row items-center gap-4 text-desactiveColor"
          >
            <TiHome className="text-desactiveColor" size={25} />
            <p>Home</p>
          </Link> */}
          <Link
            href="/"
            className={`flex flex-row items-center px-4 py-2 gap-4 ${
              router.pathname === "/"
                ? "text-white bg-blueMain rounded-md"
                : "text-desactiveColor"
            }`}
          >
            <TiHome
              className={
                router.pathname === "/" ? "text-white" : "text-desactiveColor"
              }
              size={25}
            />
            <p>Home</p>
          </Link>
          <Link
            href="/homework"
            className={`flex flex-row items-center px-4 py-2 gap-4 ${
              router.pathname === "/homework"
                ? "text-white bg-blueMain rounded-md"
                : "text-desactiveColor"
            }`}
          >
            <FaPenSquare
              className={
                router.pathname === "/homework"
                  ? "text-white"
                  : "text-desactiveColor"
              }
              size={25}
            />
            <p>Homeworks</p>
          </Link>
          <Link
            href="/ressources"
            className={`flex flex-row items-center px-4 py-2 gap-4 ${
              router.pathname === "/ressources"
                ? "text-white bg-blueMain rounded-md"
                : "text-desactiveColor"
            }`}
          >
            <TbFileFilled
              className={
                router.pathname === "/ressources"
                  ? "text-white"
                  : "text-desactiveColor"
              }
              size={25}
            />
            <p>Resources</p>
          </Link>
        </div>
      </div>
      <div className="w-full px-4 pt-2 flex flex-row justify-between items-center border-[#D9D9D9] border-t-2">
        <div className="flex flex-row justify-between items-center gap-4">
          <div className="rounded-full bg-avatargradient1 p-2 text-white font-semibold">
            {user.nom.charAt(0) + user.prenom.charAt(0)}
          </div>
          <div className="flex flex-col justify-between items-start">
            <p className="text-sm">{user.nom + " " + user.prenom}</p>
            <p className="text-xs">202031032198</p>
          </div>
          <Link href="">
            <FiLogOut className="text-blueMain" />
          </Link>
        </div>
      </div>
    </div>
  );
}
