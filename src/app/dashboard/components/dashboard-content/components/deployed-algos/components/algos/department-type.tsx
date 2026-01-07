import React from "react";
import { algosDeployedType } from "@/app/config/dummy-algo-data";
import { departmentColor } from "./constants/department-color";

export default function DepartmentType({
  algosDeployed,
}: {
  algosDeployed: algosDeployedType;
}) {
  return (
    <div className="flex flex-col items-end justify-center">
      <p className="text-[#C7C7C7] text-xs">Department Type</p>
      <div
        className="flex items-center justify-center gap-1 rounded-full px-2 text-xs py-px mt-1"
        style={{ background: departmentColor[algosDeployed.department].color }}
      >
        {React.createElement(departmentColor[algosDeployed.department].icon, {
          className: "text-white",
        })}
        <p className="text-white">{algosDeployed.department}</p>
      </div>
    </div>
  );
}
