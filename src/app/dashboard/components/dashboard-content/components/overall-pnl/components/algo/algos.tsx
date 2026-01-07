import { useAppSelector } from "@/redux/hooks";
import React from "react";
import Algo from "./algo";

export default function Algos() {
  const algosDeployed = useAppSelector(
    (state) => state.dashboard.algosDeployed
  );

  return (
    <div className=" max-h-44 overflow-y-auto customScrollBar">
      <div className="flex items-center justify-between p-2 px-4 text-[#C7C7C7] text-sm">
        <p>Algo Name</p>
        <p>Multiplier</p>
        <p>P&L</p>
        <p>Action</p>
      </div>
      {algosDeployed &&
        algosDeployed.map((algo, index) => (
          <Algo key={index} algosDeployed={algo} />
        ))}
    </div>
  );
}
