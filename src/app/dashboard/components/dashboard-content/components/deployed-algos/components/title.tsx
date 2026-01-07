import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BsFillLightningChargeFill } from "react-icons/bs";

export default function Title() {
  return (
    <div className="flex items-center justify-start text-white gap-2">
      <BsFillLightningChargeFill className="bg-[#2B2B2B] p-2 text-3xl rounded-md mr-1" />
      <p>Deployed Algos</p>
      <IoIosInformationCircleOutline className="" />
      <span className="cursor-pointer text-xs">View More</span>
    </div>
  );
}
