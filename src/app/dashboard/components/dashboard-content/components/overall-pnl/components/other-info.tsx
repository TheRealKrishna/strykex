import React from "react";
import { formatPnL } from "../utils/format-pnl";
export default function OtherInfo() {
  return (
    <div className="flex items-center justify-between text-sm gap-1">
      <div className="bg-black border-[#474747] border p-2 text-[#C7C7C7] rounded-lg whitespace-nowrap flex justify-between gap-2 items-center">
        <span>Booked P&L</span>
        <span className="text-green-500"> {formatPnL(12500.5)} </span>
      </div>
      <div className="bg-black border-[#474747] border p-2 text-[#C7C7C7] rounded-lg whitespace-nowrap flex justify-between gap-2 items-center">
        <span>Cap Deployed</span>
        <span className="text-white"> {formatPnL(12500.5).slice(1)} </span>
      </div>
      <div className="bg-black border-[#474747] border p-2 text-[#C7C7C7] rounded-lg whitespace-nowrap flex justify-between gap-2 items-center">
        <span>Active Algos</span>
        <span className="text-white"> 4</span>
      </div>
    </div>
  );
}
