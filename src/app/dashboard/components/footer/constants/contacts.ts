import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";

export const contacts: contactType[] = [
  {
    text: "+91 6377959992",
    href: "tel:+916377959992",
    icon: IoIosCall,
  },
  {
    text: "+91 6377959992",
    href: "tel:+916377959992",
    icon: IoIosCall,
  },
  {
    text: "sambhav@stryke.tech",
    href: "mailto:sambhav@stryke.tech",
    icon: IoMail,
  },
];

export type contactType = {
  text: string;
  href: string;
  icon: React.ComponentType;
};
