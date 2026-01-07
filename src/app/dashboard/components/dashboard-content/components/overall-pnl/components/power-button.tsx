import React from "react";
import { FaBolt } from "react-icons/fa6";

export default function PowerButton() {
  return (
    <button className="bg-[#FFFFFF29] p-3 rounded-md hover:bg-[#3A3A3A] transition">
      <FaBolt className="w-4 h-4 text-white" />
    </button>
  );
}
