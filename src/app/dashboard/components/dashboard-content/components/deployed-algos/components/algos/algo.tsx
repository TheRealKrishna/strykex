import { algosDeployedType } from "@/app/config/dummy-algo-data";
import React from "react";
import AlgoInfo from "./algo-info";


export default function Algo({
  algosDeployed,
}: {
  algosDeployed: algosDeployedType;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#474747] last:border-0 px-4 py-3 first:pt-0">
      <AlgoInfo algosDeployed={algosDeployed} />
      
    </div>
  );
}
