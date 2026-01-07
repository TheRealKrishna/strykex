import React from "react";
import { PiRankingBold } from "react-icons/pi";
import { MdVerified } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import Image from "next/image";
import greenGradientBars from "../assets/green-gradient-bars.svg";

export default function MostProfitable() {
  return (
    <div className="w-full h-full bg-[linear-gradient(72.89deg,#FFE476_-4.65%,rgba(37,95,75,0)_52.36%,#4AB446_103.11%)] p-px rounded-lg">
      <div className="bg-[#001506] rounded-lg relative overflow-hidden">
        <Image
          src={greenGradientBars}
          alt="gradient bars"
          className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
        />
        <SlGraph className="text-[#09B20026] absolute right-0 w-30 h-30 p-1" />
        <div className="bg-[linear-gradient(92.49deg,#02A10C_-8.04%,#A17600_101.25%)] flex w-fit absolute right-0 rounded-bl-lg text-sm items-center justify-center px-2 gap-1">
          <SlGraph className="text-white text-2xl p-1" />
          Most Profitable
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
        <div className="bg-[linear-gradient(92.49deg,rgba(2,161,12,0.12)_-8.04%,rgba(161,118,0,0.12)_101.25%)] flex items-center justify-between px-3 py-1 mt-2 mx-3 rounded-lg">
          <p>Most Profitable:</p>
          <div className="text-[#22D606] font-bold text-md [text-shadow:0px_0px_25.59px_0px_rgba(34,214,6,0.59)]">
            +₹2,480 Users
          </div>
        </div>
        <div className="px-3 my-4">
          <button className="bg-[linear-gradient(92.49deg,#02A10C_-8.04%,#A17600_101.25%)] w-full py-1 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:brightness-75">
            <p>Deploy Now</p>
          </button>
        </div>
      </div>
    </div>
  );
}
