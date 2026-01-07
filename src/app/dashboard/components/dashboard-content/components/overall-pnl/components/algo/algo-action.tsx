import React from "react";
import { IoIosLogIn } from "react-icons/io";

export default function AlgoAction() {
  return (
    <div className="flex-[26%] flex items-center justify-end">
      <div className=" bg-[#3C0101] border border-[#E01212] flex items-center justify-center rounded-md px-2 py-px text-sm gap-2 hover:brightness-75">
        <IoIosLogIn className="text-white" />
        Square Off
      </div>
    </div>
  );
}
