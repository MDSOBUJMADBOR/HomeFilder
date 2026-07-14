'use client'

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { FormEvent } from "react";
import { toast } from "react-toastify";


const ContactUser = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  // Validation
  if (!data.name || !data.email || !data.subject || !data.message) {
    toast.error("Please fill in all fields.");
    return;
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to send message");
    }

    toast.success("Message sent successfully!");
    form.reset();
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong. Please try again.");
  }
};



export default function ContactPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            We'd love to hear from you. Whether you have a question about
            properties, renting, buying, or anything else, our team is ready
            to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Get In Touch
            </h2>

            <p className="mt-4 text-gray-600">
              Reach out to us through any of the following channels or send us
              a message using the contact form.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                  <Phone size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+880 1826140440</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                <div className="rounded-full bg-green-100 p-3 text-green-600">
                  <Mail size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">
                    sobujmadbor660@homefinder.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                <div className="rounded-full bg-red-100 p-3 text-red-600">
                  <MapPin size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Office Address
                  </h3>
                  <p className="text-gray-600">
                    Madaripur, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                <div className="rounded-full bg-yellow-100 p-3 text-yellow-600">
                  <Clock size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Office Hours
                  </h3>
                  <p className="text-gray-600">
                    Saturday - Thursday
                  </p>
                  <p className="text-gray-600">
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Send Us a Message
            </h2>

            <form onSubmit={ContactUser} className="space-y-5">
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Full Name
                </label>

                <input
  type="text"
  name="name"
  placeholder="Enter your full name"
  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
/>
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Email Address
                </label>

                <input
  type="email"
  name="email"
  placeholder="Enter your email"
  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
/>
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Subject
                </label>

<input
  type="text"
  name="subject"
  placeholder="Message subject"
  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
/>
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Message
                </label>

<textarea
  name="message"
  rows={6}
  placeholder="Write your message..."
  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
/>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}