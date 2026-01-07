import React from "react";
import xLogo from "./assets/x-logo.svg";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="min-h-16 flex flex-col items-start justify-start gap-5 text-white py-4 px-4 rounded-lg bg-linear-to-t from-[#51b1ff]  to-[#00206C] relative">
      <div className="space-y-1">
        <Image
          src={xLogo}
          alt="X Logo"
          className="mb-2"
          width={32}
          height={32}
        />
        <p className="font-semibold text-lg">Contact Us</p>
        <p className="text-xs text-[#C7C7C7]">
          A.I Trading Bots Trading Bots Lorem Ipsum
        </p>
      </div>
      <button className="text-black bg-white w-full py-1 rounded-full text-xl cursor-pointer hover:brightness-75 hover:ring-1">Support</button>
    </div>
  );
}
