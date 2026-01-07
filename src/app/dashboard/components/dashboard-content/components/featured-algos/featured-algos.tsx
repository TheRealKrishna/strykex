import React from "react";
import Title from "./components/title";
import HighestWinRate from "./components/highest-win-rate";
import MostDeployed from "./components/most-deployed";
import MostProfitable from "./components/most-profitable";

export default function FeaturedAlgos() {
  return (
    <div className="px-2 w-full">
      <Title />
      <div className="flex items-center justify-between gap-2 w-full">
        <HighestWinRate />
        <MostDeployed />
        <MostProfitable />
      </div>
    </div>
  );
}
