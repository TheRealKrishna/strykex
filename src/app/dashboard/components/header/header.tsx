import React from "react";
import CurrentTab from "./components/current-tab";
import BalanceInfo from "./components/balance-info/balance-info";
import Icons from "./components/icons/icons";
import UserInfo from "./components/user-info/user-info";

export default function Header() {
  return (
    <div className="min-h-14 max-h-14 w-full border-b border-[#303030] flex items-center px-4">
      <CurrentTab />
      <div className="w-full flex justify-end items-center gap-4 py-4">
        <BalanceInfo />
        <Icons />
        <div className="w-px h-full py-4 bg-[#474747]" />
        <UserInfo />
      </div>
    </div>
  );
}
