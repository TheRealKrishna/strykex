import React from "react";
import RightSideBorder from "./components/right-side-border";
import LogoContainer from "../../../components/others/logo";
import Logo from "../../../components/others/logo";
import SearchPanel from "./components/search-panel";
import Tabs from "./components/tabs/tabs";
import ToggleButton from "./components/toggle-button/toggle-button";
import ContactUs from "./components/contact-us/contact-us";

export default function LeftPanel() {
  return (
    <div className="h-dvh min-w-62.5 max-w-62.5 flex flex-col justify-between relative">
      <div className="flex justify-between relative">
        <div className="py-2 m-2 space-y-6">
          <div className="px-3">
            <Logo />
            <SearchPanel />
          </div>
          <Tabs />
        </div>
        <RightSideBorder />
        <ToggleButton />
      </div>
      <div>
        <ContactUs />
      </div>
    </div>
  );
}
