import { SlGraph } from "react-icons/sl";
import { BsTv } from "react-icons/bs";

export const tabs: tabType[] = [
  { label: "Live", icon: SlGraph },
  { label: "Virtual", icon: BsTv },
];

type tabType = {
  label: string;
  icon: React.ElementType;
};
