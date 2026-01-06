import { MdDashboard } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { ImStatsBars } from "react-icons/im";
import { FaUserLarge } from "react-icons/fa6";

export const tabs: tabType = {
  dashboard: {
    label: "Dashboard",
    icon: MdDashboard,
  },
  portfolio: {
    label: "Portfolio",
    icon: FaBriefcase,
  },
  "pre-built-algos": {
    label: "Pre-built Algos",
    icon: SlGraph,
  },
  "my-algos": {
    label: "My Algos",
    icon: ImStatsBars,
  },
  "my-account": {
    label: "My Account",
    icon: FaUserLarge,
  },
};

export type tabType = {
  [key: string]: {
    label: string;
    icon: React.ComponentType;
  };
};
