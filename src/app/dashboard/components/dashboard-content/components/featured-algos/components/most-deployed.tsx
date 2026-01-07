import React from "react";
import { PiRankingBold } from "react-icons/pi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdVerified } from "react-icons/md";
import pinkGradientBars from "../assets/pink-gradient-bars.svg";
import Image from "next/image";

export default function MostDeployed() {
  return (
    <div className="w-full h-full bg-[radial-gradient(133.99%_202.79%_at_98.65%_9.52%,#89CDFF_0%,rgba(175,150,255,0)_42.83%,#E34DFF_100%)] p-px rounded-lg">
      <div className="bg-[#150027] rounded-lg relative overflow-hidden">
        <Image
          src={pinkGradientBars}
          alt="gradient bars"
          className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
        />
        <HiMiniUserGroup className="text-[#64418D54] absolute right-0 w-30 h-30 p-1" />
        <div className="bg-[linear-gradient(92.14deg,#0066B1_-8.09%,#E34DFF_136.29%)] flex w-fit absolute right-0 rounded-bl-lg text-sm items-center justify-center px-2 gap-1">
          <HiMiniUserGroup className="text-white text-2xl p-1" />
          Most Deployed
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
        <div className="bg-[linear-gradient(92.14deg,rgba(0,102,177,0.17)_-8.09%,rgba(227,77,255,0.17)_136.29%)] flex items-center justify-between px-3 py-1 mt-2 mx-3 rounded-lg">
          <p>Most Deployed:</p>
          <div className="bg-[linear-gradient(102.45deg,#89CDFF_26.65%,#E34DFF_159.96%)] text-transparent bg-clip-text font-bold text-md [text-shadow:0px_-1.07px_24.74px_0px_rgba(165,84,234,1)]">2,480 Users</div>
        </div>
        <div className="px-3 my-4">
          <button className="bg-[linear-gradient(92.14deg,#0066B1_-8.09%,#E34DFF_136.29%)] w-full py-1 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:brightness-75">
            <p>Deploy Now</p>
          </button>
        </div>
      </div>
    </div>
  );
}
