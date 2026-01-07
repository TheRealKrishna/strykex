import React, { useState } from "react";
import { statusTabs } from "../../config/status-tabs";
import StatusTab from "./status-tab";

export default function StatusTabs() {
  const [currentTab, setCurrentTab] = useState<string>("All");

  return (
    <div className="flex items-center justify-end gap-2">
      {statusTabs.map((tab, index) => (
        <StatusTab key={index} tab={tab} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      ))}
    </div>
  );
}
