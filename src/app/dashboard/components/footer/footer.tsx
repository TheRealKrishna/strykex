import React from "react";
import FooterContact from "./footer-contact";

export default function Footer() {
  return (
    <div className="w-full flex items-center justify-between px-4 py-2 border-t border-[#474747] min-h-12 max-h-12">
      <div className="text-sm text-[#C7C7C7]">
        © {new Date().getFullYear()} StrykeX. All rights reserved.
      </div>
      <FooterContact />
    </div>
  );
}
