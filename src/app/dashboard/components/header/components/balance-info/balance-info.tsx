"use client";
import balanceLogo from "@/assets/balance-logo.png";
import Image from "next/image";
import Balance from "./components/balance";

export default function BalanceInfo() {
  // background: linear-gradient(113.31deg, #000000 12.46%, #46B48D 306.21%);
  return (
    <div className="">
      <div
        style={{
          background:
            "linear-gradient(113.31deg, #000000 12.46%, #46B48D 306.21%)",
        }}
        className="flex items-center justify-between gap-2 border border-[#303030] rounded-md px-3 py-1.5"
      >
        <Image src={balanceLogo} alt="Balance Logo" width={30} height={30} />
        <Balance />
      </div>
    </div>
  );
}
