import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function Title() {
  return (
    <div className="flex items-center justify-start text-white gap-1">
      <p>Overall Profit/Loss</p>
      <IoIosInformationCircleOutline className="" />
      <span className="cursor-pointer text-xs">View More</span>
    </div>
  );
}
