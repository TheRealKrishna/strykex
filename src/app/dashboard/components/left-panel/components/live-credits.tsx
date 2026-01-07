"use client";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { PiStarFourFill } from "react-icons/pi";

export default function LiveCredits() {
  const credits = useAppSelector((state) => state.user.credits);

  return (
    <div className="">
      <div className="bg-[#2B2B2B] w-full rounded-md flex items-center justify-between p-3">
        <div className="flex items-center justify-center gap-1.5">
          <PiStarFourFill className="text-[#2B2B2B] bg-[#EDF1FF] text-3xl rounded-sm p-1.5" />
          <p className="font-semibold text-sm">Live Credits</p>
        </div>
        <div className="bg-[#FFFFFF14] p-1 rounded-md px-4 tracking-widest">
          <span className="text-lg font-semibold">{credits}</span>
          <span className="text-sm text-[#FFFFFFBF]">/4</span>
        </div>
      </div>
    </div>
  );
}
