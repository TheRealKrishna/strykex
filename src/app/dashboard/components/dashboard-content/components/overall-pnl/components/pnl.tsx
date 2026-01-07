import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { dateDecorator } from "../../deployed-algos/components/algos/utils/date-decorator";
import { formatPnL } from "../utils/format-pnl";

export default function PnL() {
  const overallPnL = useAppSelector((state) => state.dashboard.overallPnL);
  const lastUpdated = useAppSelector((state) => state.dashboard.lastUpdated);
  return (
    overallPnL &&
    lastUpdated && (
      <div>
        <div
          className={`text-2xl font-bold ${
            overallPnL > 0
              ? "text-[#22D606]"
              : overallPnL < 0
              ? "text-red-400"
              : "text-white"
          }`}
        >
          {formatPnL(overallPnL)}
          <span className="text-xs text-white ml-2 underline cursor-pointer hover:brightness-75 font-light">
            in 5 transactions
          </span>
        </div>
        <div className="text-sm text-gray-400 mt-1">
          Last updated:{" "}
          <span className="text-white">{dateDecorator(lastUpdated)}</span>
        </div>
      </div>
    )
  );
}
