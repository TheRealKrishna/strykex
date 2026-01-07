import React from "react";
import { algosDeployedType } from "@/app/config/dummy-algo-data";

export default function AlgoInfo({
  algosDeployed,
}: {
  algosDeployed: algosDeployedType;
}) {
  return (
    <div className="flex items-center justify-start flex-[40%] whitespace-nowrap">
      <div>
        {algosDeployed.icon && (
          <algosDeployed.icon className="text-white bg-[#3F75FF] border-3 border-[#000860] rounded-full p-1 text-3xl" />
        )}
      </div>
      <div>
        <div className="flex items-center justify-start">
          <p className="text-white ml-2 text-sm group-hover:underline">{algosDeployed.name}</p>
        </div>
      </div>
    </div>
  );
}
