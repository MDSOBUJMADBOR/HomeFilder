
"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { toast } from "react-toastify";
import Link from "next/link";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);


const handleContactSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    subject: String(formData.get("subject") || "").trim(),
    message: String(formData.get("message") || "").trim(),
  };

  // Show submitted data in console
  console.log("Contact Form Data:", data);

  // Validation
  if (!data.name || !data.email || !data.subject || !data.message) {
    toast.error("Please fill in all fields.");
    return;
  }

  try {
    setIsSubmitting(true);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      throw new Error("API URL is not configured.");
    }

    const res = await fetch(`${apiUrl}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to send message");
    }

    // Success message
    toast.success("Message sent successfully!");

    // Reset form after successful submission
    form.reset();

    // Confirm reset in console
    console.log("Form submitted successfully:", data);
    console.log("Form has been reset.");
  } catch (error) {
    console.error("Contact form error:", error);
    toast.error("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};



  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+880 1826140440",
      description: "Call us directly",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      href: "tel:+8801826140440",
    },
    {
      icon: Mail,
      title: "Email",
      value: "sobujmadbor660@homefinder.com",
      description: "Send us an email",
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
      href: "mailto:sobujmadbor660@homefinder.com",
    },
    {
      icon: MapPin,
      title: "Office Address",
      value: "Madaripur, Dhaka, Bangladesh",
      description: "Visit our office",
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      icon: Clock,
      title: "Office Hours",
      value: "9:00 AM - 6:00 PM",
      description: "Saturday - Thursday",
      iconBg: "bg-sky-50",
      iconColor: "text-sky-600",
    },
  ];

  return (
    <main className="overflow-hidden bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        {/* Background Decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-50 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage:
                "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
              backgroundSize: "65px 65px",
              maskImage:
                "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-8">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            <Sparkles className="h-4 w-4" />
            Get In Touch
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Let&apos;s Start a
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
            Have a question about a property, renting, buying, or selling?
            Our team is here to help you find the right solution.
          </p>

          {/* Trust Points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              Quick Response
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              Trusted Support
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              Professional Service
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-50/60 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-12">
            {/* =================================================
                LEFT - CONTACT INFORMATION
            ================================================== */}
            <div className="lg:col-span-2">
              {/* Section Heading */}
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600 shadow-sm">
                  <Mail className="h-4 w-4" />
                  Contact Information
                </div>

                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  We&apos;re Here to
                  <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Help You
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                  Reach out to us through any of the following channels. Our
                  team will be happy to answer your questions and help you
                  with your property journey.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="mt-8 space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <>
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor} transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {item.title}
                        </p>

                        <p className="mt-1 truncate text-sm font-bold text-slate-800 transition-colors group-hover:text-blue-600 sm:text-base">
                          {item.value}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {item.description}
                        </p>
                      </div>

                      <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600" />
                    </>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div
                      key={item.title}
                      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Response Card */}
              <div className="mt-6 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Expect a quick response
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Our support team will review your message and get back
                      to you as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT - CONTACT FORM
            ================================================== */}
            <div className="lg:col-span-3">
              <div className="relative">
                {/* Glow */}
                <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-blue-100 to-cyan-100 opacity-70 blur-xl" />

                {/* Form Card */}
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
                  {/* Top Gradient */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400" />

                  <div className="p-6 sm:p-8 lg:p-10">
                    {/* Form Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                          <Send className="h-5 w-5" />
                        </div>

                        <div>
                          <h2 className="text-2xl font-extrabold text-slate-900">
                            Send Us a Message
                          </h2>

                          <p className="mt-1 text-sm text-slate-500">
                            Fill out the form and we&apos;ll get back to you.
                          </p>
                        </div>
                      </div>
                    </div>

                    <form
                      onSubmit={handleContactSubmit}
                      className="space-y-5"
                    >
                      {/* Name + Email */}
                      <div className="grid gap-5 sm:grid-cols-2">
                        {/* Name */}
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-bold text-slate-700"
                          >
                            Full Name
                          </label>

                          <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            autoComplete="name"
                            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-bold text-slate-700"
                          >
                            Email Address
                          </label>

                          <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            autoComplete="email"
                            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="mb-2 block text-sm font-bold text-slate-700"
                        >
                          Subject
                        </label>

                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          placeholder="What would you like to discuss?"
                          className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-sm font-bold text-slate-700"
                        >
                          Message
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          placeholder="Write your message here..."
                          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            Send Message
                          </>
                        )}
                      </button>

                      {/* Privacy */}
                      <p className="text-center text-xs leading-5 text-slate-400">
                        By sending this message, you agree to be contacted by
                        the HomeFinder team regarding your inquiry.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 text-center sm:p-10">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
              <MapPin className="h-5 w-5" />
            </div>

            <h2 className="mt-5 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Looking for Your Perfect Property?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Explore our latest property listings and find a place that feels
              right for you.
            </p>

            <Link
              href="/House"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Browse Properties
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

