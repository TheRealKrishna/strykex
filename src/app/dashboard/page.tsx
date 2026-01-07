import React from "react";
import DashboardContent from "./components/dashboard-content/dashboard-content";
import Header from "./components/header/header";
import LeftPanel from "./components/left-panel/left-panel";
import Footer from "./components/footer/footer";
import Alert from "./components/dashboard-content/components/alert";

export default function Dashboard() {
  return (
    <div className="w-full h-full max-h-dvh overflow-hidden flex">
      <LeftPanel />
      <div className="w-full h-full overflow-hidden">
        <Header />
        <DashboardContent />
        <Footer />
      </div>
    </div>
  );
}
