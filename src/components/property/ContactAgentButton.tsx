"use client";

import { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function ContactAgentButton() {
  const [open, setOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const router = useRouter();

  const phoneNumber = "+8801826140440";

  const handleContact = () => {
    if (!session?.user) {
      toast.info("Please login first.");
      router.push("/signin");
      return;
    }

    setOpen(true);
  };

  return (
    <>
      <button
        onClick={handleContact}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
      >
        <Phone size={18} />
        Contact Agent
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Contact Agent
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Choose how you'd like to contact the agent.
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
              >
                <Phone size={18} />
                Call Now
              </a>

              <button
                onClick={() => {
                  router.push("/chat");
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 font-medium text-gray-700 hover:bg-gray-100"
              >
                <MessageCircle size={18} />
                Start Chat
              </button>

              <button
                onClick={() => setOpen(false)}
                className="w-full rounded-xl bg-gray-100 py-3 font-medium text-gray-700 hover:bg-gray-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}