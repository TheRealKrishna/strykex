import React from "react";
import { FiAlertCircle } from "react-icons/fi";

export default function Alert() {
  return (
    <div className="px-5 pt-5">
      <div className="bg-[#3C0101] flex items-center gap-2 p-2 px-3 rounded-md">
        <FiAlertCircle className="text-xl text-[#FB5A5A]" />
        <p className="font-semibold">Order failed</p>
        <p className="text-sm text-[#C7C7C7]">
          Order failed in 3 strategies have failed orders
        </p>
        <button className="text-black bg-white px-2 py-px text-sm font-semibold rounded-[5px] cursor-pointer hover:brightness-75">
          View All
        </button>
      </div>
    </div>
  );
}
