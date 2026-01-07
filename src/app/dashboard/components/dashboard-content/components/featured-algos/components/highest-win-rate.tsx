import React from "react";
import { PiRankingBold } from "react-icons/pi";
import { FaTrophy } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import blueGradientBars from "../assets/blue-gradient-bars.svg";
import Image from "next/image";

export default function HighestWinRate() {
  return (
    <div className="w-full h-full bg-[radial-gradient(83.87%_243.21%_at_83.87%_21.43%,#59B8FF_0%,rgba(51,108,220,0)_49.49%,#47B4B4_100%)] p-px rounded-lg">
      <div className="bg-[#000820] rounded-lg relative overflow-hidden">
        <Image
          src={blueGradientBars}
          alt="gradient bars"
          className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
        />
        <FaTrophy className="text-[#407AFF29] absolute right-0 w-30 h-30 p-1" />
        <div className="bg-[linear-gradient(93.88deg,#3F72FF_-4.79%,#0036B2_53.84%,#47B4B4_113.68%)] flex w-fit absolute right-0 rounded-bl-lg text-sm items-center justify-center px-2 gap-1">
          <FaTrophy className="text-white text-2xl p-1" />
          Highest Win Rate
        </div>
        <div className="flex items-center justify-start pt-3 px-3">
          <div className="bg-[linear-gradient(297.91deg,#3F72FF_-44.48%,#0036B2_36.06%,#47B4B4_118.27%)] rounded-full p-2 border-4 border-[#3F72FF]">
            <PiRankingBold className="text-white text-2xl" />
          </div>
        </div>
        <div className="p-3">
          <p className="text-white font-semibold text-md">
            Midcap Nifty Option Scalper CE
          </p>
          <div className="flex items-center justify-start gap-1">
            <p className="text-[#C7C7C7] text-xs">By Stockwiz Tech. LLP</p>
            <MdVerified className="text-blue-500 text-md" />
          </div>
        </div>
        <div className="bg-[linear-gradient(113.73deg,rgba(0,188,53,0.17)_7.25%,rgba(0,255,38,0.17)_173.86%)] flex items-center justify-between px-3 py-1 mt-2 mx-3 rounded-lg">
          <p>Win Rate:</p>
          <div className="text-[#22D606] font-bold text-md [text-shadow:0px_0px_25.59px_0px_rgba(34,214,6,0.59)]">+87.5%</div>
        </div>
        <div className="px-3 my-4">
          <button className="border-[#474747] border w-full py-1 rounded-lg flex items-center justify-center gap-2">
            <p>View Details</p>
          </button>
        </div>
      </div>
    </div>
  );
}
