"use client";

import { ArrowLeft, Phone, Send, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "agent",
      text: "Hello! 👋 Welcome. How can I help you with this property?",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "me",
      text: "I'm interested in this property. Is it still available?",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "agent",
      text: "Yes, it is available. Would you like to schedule a visit?",
      time: "10:33 AM",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "me",
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="mx-auto flex h-[85vh] max-w-7xl overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* Left Sidebar */}
        <div className="hidden w-80 border-r bg-gray-50 lg:block">
          <div className="border-b p-6">
            <Link
              href="/House"
              className="mb-5 inline-flex items-center gap-2 text-blue-600 hover:underline"
            >
              <ArrowLeft size={18} />
              Back
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                <User className="text-blue-600" />
              </div>

              <div>
                <h2 className="font-bold text-gray-900">
                  Property Agent
                </h2>
                <p className="text-sm text-green-600">🟢 Online</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <a
              href="tel:+8801826140440"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-white transition hover:bg-blue-700"
            >
              <Phone size={18} />
              Call Agent
            </a>
          </div>
        </div>

        {/* Chat Section */}
        <div className="flex flex-1 flex-col">
          {/* Header */}
          <div className="border-b p-5">
            <h2 className="text-xl font-bold">Chat with Agent</h2>
            <p className="text-sm text-gray-500">
              Ask anything about this property
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "me"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-md rounded-2xl px-4 py-3 ${
                    msg.sender === "me"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-900 shadow"
                  }`}
                >
                  <p>{msg.text}</p>

                  <p
                    className={`mt-2 text-xs ${
                      msg.sender === "me"
                        ? "text-blue-100"
                        : "text-gray-400"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t bg-white p-5">
            <div className="flex gap-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
              />

              <button
                onClick={handleSend}
                className="rounded-xl bg-blue-600 px-6 text-white transition hover:bg-blue-700"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;