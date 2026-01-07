"use client";
import React from "react";
import Greetings from "./components/greetings";
import HeadIndices from "./components/head-indices/head-indices";
import MarketSentiment from "./components/market-indices/market-sentiment";
import OverallPnL from "./components/overall-pnl/overall-pnl";
import DeployedAlgos from "./components/deployed-algos/deployed-algos";

export default function DashboardContent() {
  return (
    <div className="p-5 space-y-3 bg-black">
      <Greetings />
      <div className="flex items-center justify-between gap-2 h-full">
        <HeadIndices />
        <MarketSentiment />
      </div>
      <div className="bg-[#101010] border border-[#303030] p-2 rounded-lg flex items-center justify-between gap-1">
        <OverallPnL />
        <DeployedAlgos />
      </div>
    </div>
  );
}
