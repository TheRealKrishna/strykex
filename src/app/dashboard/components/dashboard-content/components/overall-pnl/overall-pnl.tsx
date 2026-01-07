import React from "react";
import Title from "./components/title";
import TabSwitch from "./components/tab-switch";
import PowerButton from "./components/power-button";
import PnL from "./components/pnl";
import OtherInfo from "./components/other-info";
import Algos from "./components/algo/algos";

export default function OverallPnL() {
  return (
    <div className="p-[0.8px] bg-linear-to-br from-[#757575] via-[#99999900] to-[#757575] rounded-lg w-full flex-1">
      <div className="bg-radial-[at_50%_75%] from-[#000A26] to-[#000000] to-99% rounded-lg p-2 space-y-2">
        <div className="bg-[#FFFFFF12] p-2 rounded-lg">
          <div className="flex items-start justify-between gap-1">
            <Title />
            <div className="flex items-start justify-end gap-1">
              <TabSwitch />
              <PowerButton />
            </div>
          </div>
          <div className="space-y-4">
            <PnL />
            <OtherInfo />
          </div>
        </div>
        <div className="bg-[#FFFFFF12] rounded-lg">
          <Algos />
        </div>
      </div>
    </div>
  );
}
