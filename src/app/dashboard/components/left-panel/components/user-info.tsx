"use client";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { FaGear } from "react-icons/fa6";

export default function UserInfo() {
  const user = useAppSelector((state) => state.user);
  return (
    <div className="flex items-center justify-between">
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={user.avatarUrl}
          alt="User Avatar"
          className="w-10 h-10 rounded-md object-cover"
        />
      </div>
      <div className="flex-1 px-3">
        <p className="font-semibold text-sm">{user.name}</p>
      </div>
      <div className="flex items-center justify-center">
        <FaGear className="text-3xl text-[#FFFFFF3D] hover:text-white cursor-pointer hover:bg-[#2C2C2C] bg-[#1F1F1F] p-1.5 rounded-md" />
      </div>
    </div>
  );
}
