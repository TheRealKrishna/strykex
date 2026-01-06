import React from "react";
import { icons } from "./config/icons";
import Icon from "./components/icon";

export default function Icons() {
  return (
    <div className="flex items-center justify-center gap-4">
      {Object.keys(icons).map((key, index) => {
        return (
          <Icon key={index} icon={key} />
        );
      })}
    </div>
  );
}
