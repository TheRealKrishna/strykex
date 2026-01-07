import { dashboardState } from "@/redux/slices/dashboard";
import React from "react";

export default function Stock({
  stock,
}: {
  stock: NonNullable<dashboardState["headIndices"]>[number];
}) {
  return (
    <div
      key={stock.name}
      className="px-4 my-2 flex flex-col items-start bg-[#101010] border-[#474747] border-l first:border-l-0 space-y-2"
    >
      <span className="text-sm text-[#e3e3e3]">{stock.name}</span>
      <span className="text-md text-[#FFFFFF] font-medium flex items-center gap-2">
        {new Intl.NumberFormat("en-IN", {
          maximumFractionDigits: 2,
        }).format(stock.value)}
        <span
          className={`text-sm ${
            stock.change >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {stock.change >= 0
            ? `+${stock.change.toFixed(2)}`
            : stock.change.toFixed(2)}
           &nbsp;<span>
            ({stock.change >= 0 ? "+" : ""}
            {((stock.change / (stock.value - stock.change)) * 100).toFixed(2)}%)
          </span>
        </span>
      </span>
    </div>
  );
}
