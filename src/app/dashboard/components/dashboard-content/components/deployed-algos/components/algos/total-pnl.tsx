import React from "react";
import { algosDeployedType } from "@/app/config/dummy-algo-data";

export default function TotalPnl({
  algosDeployed,
}: {
  algosDeployed: algosDeployedType;
}) {
  return (
    <div className="flex flex-col items-end justify-center">
      <p className="text-[#C7C7C7] text-xs">Total P&L</p>
      <p
        className={`font-semibold ml-2 ${
          algosDeployed.profitLoss > 0
            ? "text-green-500"
            : algosDeployed.profitLoss < 0
            ? "text-red-500"
            : "text-white"
        }`}
      >
        {algosDeployed.profitLoss > 0
          ? `+${algosDeployed.profitLoss}`
          : algosDeployed.profitLoss}
      </p>
    </div>
  );
}
