"use client";
import React from "react";
import Greetings from "./components/greetings";
import HeadIndices from "./components/head-indices/head-indices";
import MarketSentiment from "./components/market-indices/market-sentiment";
import OverallPnL from "./components/overall-pnl/overall-pnl";
import DeployedAlgos from "./components/deployed-algos/deployed-algos";
import Alert from "./components/alert";
import FeaturedAlgos from "./components/featured-algos/featured-algos";

export default function DashboardContent() {
  return (
    // header is h-14 and footer is h-12
    <div className="p-5 space-y-3 bg-black overflow-y-auto customScrollBar h-[calc(100vh-56px-48px)]">
      <Alert />
      <Greetings />
      <div className="flex items-center justify-between gap-2 h-full max-h-18">
        <HeadIndices />
        <MarketSentiment />
      </div>
      <div className="bg-[#101010] border border-[#303030] p-2 rounded-lg flex items-center justify-between gap-1">
        <OverallPnL />
        <DeployedAlgos />
      </div>
      <div className="bg-[#101010] border border-[#303030] p-2 rounded-lg flex items-center justify-between gap-1">
        <FeaturedAlgos />
      </div>
    </div>
  );
}
