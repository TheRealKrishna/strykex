import React from "react";
import DashboardContent from "./components/dashboard-content/dashboard-content";
import Header from "./components/header/header";
import LeftPanel from "./components/left-panel/left-panel";

export default function Dashboard() {
  return (
    <div className="w-full h-full overflow-hidden flex">
      <LeftPanel />
      <div className="w-full h-full overflow-hidden">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
}
