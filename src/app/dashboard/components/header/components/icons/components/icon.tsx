import React from "react";
import { IconType } from "../config/icons";
import { icons } from "../config/icons";

export default function Icon({ icon }: { icon: keyof IconType }) {
  return (
    <div>
      <div className="p-2 rounded-md text-white bg-[#2B2B2B] hover:brightness-75 cursor-pointer">
        <div className="text-xl">{React.createElement(icons[icon].icon)}</div>
      </div>
    </div>
  );
}
