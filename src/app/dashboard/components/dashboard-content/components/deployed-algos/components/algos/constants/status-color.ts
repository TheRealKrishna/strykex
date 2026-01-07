import { VscCircleFilled } from "react-icons/vsc";
import { RiRecordCircleFill } from "react-icons/ri";

export const statusColor: statusColorType = {
  Live: {
    color: "#E01212",
    icon: VscCircleFilled,
    iconColor: "white",
  },
  "Waiting for next Signal": {
    color: "#3A2D00",
    icon: RiRecordCircleFill,
    iconColor: "#FFD000",
  },
  Stopped: {
    color: "#3C0101",
    icon: RiRecordCircleFill,
    iconColor: "#FF0000",
  },
};

export type statusColorType = {
  [key: string]: {
    color: string;
    icon: React.ComponentType<{
      className?: string;
    }>;
    iconColor: string;
  };
};
