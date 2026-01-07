import { useAppSelector } from "@/redux/hooks";
import React from "react";

export default function Greetings() {
  const user = useAppSelector((state) => state.user);
  return (
    <div className="flex items-center justify-start">
      <p className="text-2xl">
        👋
        <span className="text-[#FFFFFFBF]">Good Morning, </span>
        <span className="font-semibold">{user.name}</span>
      </p>
    </div>
  );
}
