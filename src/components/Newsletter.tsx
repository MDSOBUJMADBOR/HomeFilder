
"use client";

import React, { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim()) {
      // API call or registration logic can be placed here
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-50 blur-3xl" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-500 shadow-2xl shadow-blue-200/60">
          {/* Decorative Circles */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-[50px] border-white/10" />

          <div className="pointer-events-none absolute right-20 top-20 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-10 left-1/3 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 px-6 py-12 text-center sm:px-10 sm:py-14 md:px-16 md:py-16 lg:px-20">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              Stay Connected
            </div>

            {/* Icon */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/15 shadow-lg shadow-blue-900/10 backdrop-blur-md">
              <Mail className="h-7 w-7 text-white" />
            </div>

            {/* Heading */}
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Stay Updated with{" "}
              <span className="text-cyan-100">HomeFinder</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base">
              Get the latest property listings, real estate deals, market
              insights, and exclusive opportunities delivered directly to your
              inbox.
            </p>

            {/* Form / Success */}
            <div className="mx-auto mt-8 max-w-2xl">
              {isSubscribed ? (
                <div className="rounded-2xl border border-white/25 bg-white/15 p-5 shadow-lg backdrop-blur-md">
                  <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-400/20">
                      <CheckCircle2 className="h-6 w-6 text-green-200" />
                    </div>

                    <div className="text-center sm:text-left">
                      <p className="font-bold text-white">
                        You&apos;re successfully subscribed!
                      </p>
                      <p className="mt-1 text-sm text-blue-100">
                        We&apos;ll keep you updated with the latest properties.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsSubscribed(false)}
                    className="mt-4 text-xs font-semibold text-white/80 underline underline-offset-4 transition-colors hover:text-white"
                  >
                    Subscribe with another email
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-white/20 bg-white/10 p-2 shadow-xl backdrop-blur-md sm:flex sm:items-center sm:gap-2"
                >
                  {/* Email Input */}
                  <div className="relative flex-1">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      aria-label="Email address"
                      className="h-14 w-full rounded-xl border border-white/20 bg-white px-12 pr-4 text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 transition-all duration-300 focus:border-white focus:ring-4 focus:ring-white/20"
                    />
                  </div>

                  {/* Subscribe Button */}
                  <button
                    type="submit"
                    className="group mt-2 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900 hover:shadow-xl active:translate-y-0 sm:mt-0 sm:w-auto"
                  >
                    <span>Subscribe Now</span>

                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Trust / Privacy */}
            {!isSubscribed && (
              <div className="mt-5 flex flex-col items-center justify-center gap-3 text-xs text-blue-100 sm:flex-row">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-200" />
                  No spam
                </div>

                <span className="hidden h-1 w-1 rounded-full bg-blue-200/60 sm:block" />

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-200" />
                  Unsubscribe anytime
                </div>

                <span className="hidden h-1 w-1 rounded-full bg-blue-200/60 sm:block" />

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-200" />
                  Your privacy matters
                </div>
              </div>
            )}

            {/* Bottom CTA */}
            {!isSubscribed && (
              <div className="mt-8 flex items-center justify-center gap-2 text-xs font-medium text-white/70">
                <span>Discover better properties with HomeFinder</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

