import React from "react";
import Title from "./components/title";
import StatusTabs from "./components/status-tabs/status-tabs";
import AlgosMap from "./components/algos/algos-map";

export default function DeployedAlgos() {
  return (
    <div className=" flex-[1.3] bg-black border border-[#474747] rounded-lg pt-4 space-y-4">
      <div className="flex items-center justify-between px-4">
        <Title />
        <StatusTabs />
      </div>
      <div className="overflow-y-auto max-h-76 customScrollBar">
        <AlgosMap />
      </div>
    </div>
  );
}
