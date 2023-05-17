import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";


export default function Searchbar() {
  return (
    <div className="bg-[#F5F5F5] flex flex-row justify-between items-center rounded-lg ">
      <input
        type="text"
        placeholder="Search"
        className="pl-4 pt-2 pb-2 text-sm rounded-lg outline-none bg-[#F5F5F5]"
      />
      <button className="pr-2">
        <AiOutlineSearch className="" />
      </button>
    </div>
  );
}
