import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { IoMdRefresh } from "react-icons/io";
import { RiLinkM } from "react-icons/ri";

export default function Balance() {
  const user = useAppSelector((state) => state.user);
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between gap-4">
        <div className="text-[11px] flex items-center gap-1">
          Margin Available{" "}
          <IoMdRefresh className="text-[#DCDCDC] text-[15px] cursor-pointer" />
        </div>
        <div className="text-[11px] font-medium">
          {user.balance.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-[9px] flex items-center gap-1 text-[#a5a5a5]">
          Token Expiry:
          <span>
            {new Date(user.tokenExpiry).toLocaleDateString("en-GB")} |{" "}
            {new Date(user.tokenExpiry).toLocaleTimeString("en-GB")}
          </span>
        </p>
        <div className="text-[9px] font-medium flex items-center gap-1 text-[#22D606]">
          Connected
          <RiLinkM />
        </div>
      </div>
    </div>
  );
}
