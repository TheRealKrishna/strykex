"use client"
import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { tabs } from "../../left-panel/components/tabs/config/tabs";

export default function CurrentTab() {
  const currentTab = useAppSelector((state) => state.tabs.currentTab);
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="text-2xl">
        {React.createElement(tabs[currentTab].icon)}
      </div>
      <div className="text-md break-keep whitespace-nowrap">{tabs[currentTab].label}</div>
    </div>
  );
}
