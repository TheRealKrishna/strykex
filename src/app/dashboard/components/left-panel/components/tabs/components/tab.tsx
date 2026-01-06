import React, { useMemo } from "react";
import { tabs, tabType } from "../config/tabs";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setTab } from "@/redux/slices/tabs";

export default function Tab({ tab }: { tab: keyof tabType }) {
  const currentTab = useAppSelector((state) => state.tabs.currentTab);

  const isCurrentTab = useMemo(() => currentTab === tab, [currentTab]);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setTab(tab));
  };

  return (
    <div className="w-full h-full flex gap-2 pr-3">
      <div
        className={`bg-[#407AFF] rounded-r-2xl w-1 ${
          !isCurrentTab && "invisible"
        }`}
      />
      <div
        className={`p-px ${
          isCurrentTab && "bg-linear-to-r"
        } from-[#FFFFFF00] to-[#407AFF] rounded-lg w-full cursor-pointer`}
        onClick={handleClick}
      >
        <div
          className={`min-h-11 max-h-11 flex items-center justify-start gap-2 ${
            isCurrentTab && "bg-radial-[at_80%_5%]"
          } from-[#407AFF] via-[#00172D] to-[#00172D] rounded-lg w-full px-3`}
        >
          <div className="text-2xl">{React.createElement(tabs[tab].icon)}</div>
          <div className="text-md">{tabs[tab].label}</div>
        </div>
      </div>
    </div>
  );
}
