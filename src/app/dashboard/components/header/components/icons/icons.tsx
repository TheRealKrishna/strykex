import React from "react";
import { icons } from "./config/icons";
// import Icon from "./components/icon";

export default function Icons() {
  return (
    <div className="flex items-center justify-center gap-4">
      {Object.keys(icons).map((key, index) => {
        return (
          <div key={index}>
            <div className="p-2 rounded-md text-white bg-[#2B2B2B] hover:brightness-75 cursor-pointer">
              <div className="text-xl">
                {React.createElement(icons[key].icon)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
