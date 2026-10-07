
"use client";

import Link from "next/link";
import {
  Home,
  Search,
  ArrowLeft,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 py-16 sm:px-6">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue Glow */}
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />

        {/* Cyan Glow */}
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-100/70 blur-3xl" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/60 blur-3xl" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        {/* Floating Home Icon */}
        <div className="relative mx-auto mb-7 flex h-24 w-24 items-center justify-center">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-[2rem] border border-blue-200 bg-blue-50/80 rotate-6 shadow-xl shadow-blue-100/60" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-200/70">
            <Home className="h-9 w-9" />
          </div>

          {/* Sparkle */}
          <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-white text-blue-600 shadow-md">
            <Sparkles className="h-4 w-4" />
          </div>
        </div>

        {/* Error Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          Error 404
        </div>

        {/* Big 404 */}
        <div className="relative">
          <h1 className="select-none text-[7rem] font-black leading-none tracking-[-0.08em] text-slate-900 sm:text-[9rem] md:text-[11rem]">
            <span className="text-slate-900">4</span>
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              0
            </span>
            <span className="text-slate-900">4</span>
          </h1>

          {/* Decorative Text */}
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <div className="rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-400 shadow-sm backdrop-blur-sm">
              Lost Property
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
          The page you&apos;re looking for doesn&apos;t exist, may have been
          moved, or the URL might be incorrect. Don&apos;t worry, let&apos;s
          help you find your way back home.
        </p>

        {/* CTA Card */}
        <div className="mx-auto mt-9 max-w-2xl rounded-[1.5rem] border border-slate-200 bg-white/90 p-3 shadow-xl shadow-slate-200/60 backdrop-blur-md sm:p-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Home */}
            <Link
              href="/"
              className="group inline-flex flex-1 items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 active:translate-y-0"
            >
              <Home className="h-4.5 w-4.5" />

              <span>Go Home</span>

              <span className="ml-1 text-blue-200 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Properties */}
            <Link
              href="/properties"
              className="group inline-flex flex-1 items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 active:translate-y-0"
            >
              <Search className="h-4.5 w-4.5" />

              <span>Browse Properties</span>

              <span className="ml-1 text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-400">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Back Button */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="group mt-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-slate-500 transition-all duration-300 hover:bg-slate-50 hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />

          <span>Go Back</span>
        </button>

        {/* Bottom Hint */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
          <MapPin className="h-3.5 w-3.5 text-blue-500" />

          <span>Let&apos;s get you back to finding your perfect place.</span>
        </div>
      </div>
    </main>
  );
}

