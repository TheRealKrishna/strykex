"use client";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

export default function UserInfo() {
  const user = useAppSelector((state) => state.user);
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <img
        src={user.avatarUrl}
        alt="User Avatar"
        className="w-8 h-8 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <p className="text-sm font-medium">{user.name}</p>
        <p className="text-xs text-[#a5a5a5]">@{user.username}</p>
      </div>
    </div>
  );
}
