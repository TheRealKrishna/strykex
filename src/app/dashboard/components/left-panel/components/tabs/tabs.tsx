"use client";
import React from "react";
import { tabs, tabType } from "./config/tabs";
import Tab from "./components/tab";

export default function Tabs() {
  return (
    <div className="space-y-2">
      {Object.keys(tabs).map((tab) => (
        <Tab key={tab} tab={tab} />
      ))}
    </div>
  );
}
