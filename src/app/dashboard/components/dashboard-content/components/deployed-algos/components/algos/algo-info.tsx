import React from "react";
import { algosDeployedType } from "@/app/config/dummy-algo-data";
import { statusColor } from "../../utils/status-color";
import { BsLightningChargeFill } from "react-icons/bs";
import { dateDecorator } from "./utils/date-decorator";

export default function AlgoInfo({
  algosDeployed,
}: {
  algosDeployed: algosDeployedType;
}) {
  return (
    <div className="flex items-center justify-start">
      <div>
        {algosDeployed.icon && (
          <algosDeployed.icon className="text-white bg-[#3F75FF] border-3 border-[#000860] rounded-full p-2 text-4xl" />
        )}
      </div>
      <div>
        <div className="flex items-center justify-start">
          <p className="text-white font-semibold ml-2">{algosDeployed.name}</p>
          <div
            className={`flex items-center justify-start gap-1 rounded-full px-2 text-xs py-px ml-2`}
            style={{ background: statusColor[algosDeployed.status].color }}
          >
            <p style={{ color: statusColor[algosDeployed.status].iconColor }}>
              {React.createElement(statusColor[algosDeployed.status].icon)}
            </p>
            {algosDeployed.status}
          </div>
        </div>
        <p className="text-[#C7C7C7] flex items-center justify-start gap-1 ml-1 text-xs">
          <BsLightningChargeFill className="inline-block" />
          Deployed on:
          <span className="text-white">
            {dateDecorator(algosDeployed.deploymentDate)}
          </span>
        </p>
      </div>
    </div>
  );
}
