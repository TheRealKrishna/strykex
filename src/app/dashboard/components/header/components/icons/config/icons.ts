import { MdOutlineSupportAgent } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import React from "react";

export type IconType = {
  [key: string]: {
    icon: React.ComponentType;
    Label: string;
    action: () => void;
  };
};

export const icons: IconType = {
  support: {
    icon: MdOutlineSupportAgent,
    Label: "Support",
    action: () => {
      console.log("Support icon clicked");
    },
  },
  notifications: {
    icon: IoNotificationsOutline,
    Label: "Notifications",
    action: () => {
      console.log("Notifications icon clicked");
    },
  },
};
