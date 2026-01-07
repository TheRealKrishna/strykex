import React from "react";
import { FaTrophy } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function Title() {
  return (
    <div className="w-full flex justify-start items-center gap-2">
      <FaTrophy className="inline text-white text-xl" />
      <span className="text-white font-medium text-lg">Featured Algos🔥</span>
      <IoMdInformationCircleOutline className="inline text-white text-lg" />
    </div>
  );
}
