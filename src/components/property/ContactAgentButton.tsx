
"use client";

import { Phone } from "lucide-react";

export default function ContactAgentButton() {
  const handleContact = () => {
    // TODO:
    // Open Modal
    // Call Agent
    // Navigate to Chat
    console.log("Contact Agent");
    alert("alert")
  };

  return (
    <button
      onClick={handleContact}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
    >
      <Phone size={18} />
      Contact Agent
    </button>
  );
}