import React from "react";
import { contacts } from "./constants/contacts";
export default function FooterContact() {
  return (
    <div className="flex items-center justify-center gap-4">
      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C7C7C7] hover:text-white text-sm flex items-center justify-center gap-0.5"
        >
          <contact.icon />
          <p className="">{contact.text}</p>
        </a>
      ))}
    </div>
  );
}
