import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function ToggleButton() {
  return (
    <div className="absolute right-[-16px] top-[80px] -translate-y-1/2 rounded-full bg-black cursor-pointer border border-[#4b4b4b]">
      <MdOutlineKeyboardArrowLeft className="text-white text-3xl p-1" />
    </div>
  );
}
