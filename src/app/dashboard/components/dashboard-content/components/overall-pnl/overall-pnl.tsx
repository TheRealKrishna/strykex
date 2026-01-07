import React from "react";
import Title from "./components/title";

export default function OverallPnL() {
  return (
    <div className="p-[0.8px] bg-linear-to-br from-[#757575] via-[#99999900] to-[#757575] rounded-lg w-full flex-1">
      <div className="bg-radial-[at_50%_75%] from-[#000A26] to-[#000000] to-99% rounded-lg p-4">
        <Title />
      </div>
    </div>
  );
}
