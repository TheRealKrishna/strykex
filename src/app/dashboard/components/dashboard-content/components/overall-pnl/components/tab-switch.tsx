import React from "react";
import { tabs } from "../constants/tabs";

export default function TabSwitch() {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  return (
    <div className="flex items-center justify-center bg-[#2B2B2B] p-1 rounded-md">
      {tabs.map((tab) => (
        <div
          key={tab.label}
          className={`flex items-center justify-center gap-2 text-sm  cursor-pointer ${
            activeTab.label === tab.label && "bg-white text-black"
          } px-3 py-0.5 rounded`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.label}
          <tab.icon className="w-4 h-4" />
        </div>
      ))}
    </div>
  );
}
