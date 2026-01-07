import { BsTv } from "react-icons/bs";
import { SlGraph } from "react-icons/sl";

export const departmentColor: departmentColorType = {
  Live: {
    color: "#244BA6",
    icon: SlGraph,
  },
  Virtual: {
    color: "#612A00",
    icon: BsTv,
  },
};

export type departmentColorType = {
  [key: string]: {
    color: string;
    icon: React.ComponentType<{
      className?: string;
    }>;
  };
};
