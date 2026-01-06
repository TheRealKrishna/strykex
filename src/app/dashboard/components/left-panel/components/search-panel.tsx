"use client";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchPanel() {
  return (
    <div className="my-4">
      <div className="bg-[#2B2B2B] rounded-md flex items-center justify-between pr-2">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-3 pr-10 border-none bg-transparent outline-none text-white placeholder:text-gray-400 placeholder:text-[#C7C7C7]"
        />
        <IoSearchOutline className="text-2xl text-white cursor-pointer hover:brightness-75" />
      </div>
    </div>
  );
}
