
import { Home, LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden bg-white">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />

        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-50 blur-3xl" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          }}
        />
      </div>

      {/* Loading Content */}
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center px-6 text-center">
        {/* Animated Logo */}
        <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
          {/* Outer Pulse Ring */}
          <div className="absolute inset-0 animate-ping rounded-[2rem] border border-blue-200 opacity-30" />

          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-[2rem] border border-blue-100 bg-blue-50/70 shadow-xl shadow-blue-100/60" />

          {/* Gradient Logo */}
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/25">
            <Home className="h-8 w-8" strokeWidth={2.2} />
          </div>

          {/* Spinner Ring */}
          <div className="absolute -inset-2 animate-spin rounded-[2.4rem] border-2 border-transparent border-t-blue-600 border-r-cyan-400" />
        </div>

        {/* Brand */}
        <div className="mb-7">
          <h1 className="text-2xl font-extrabold tracking-tight">
            <span className="text-slate-900">Home</span>
            <span className="text-blue-600">Finder</span>
          </h1>

          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Find Your Place
          </p>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-lg font-bold text-slate-900">
              Loading your experience
            </h2>

            <LoaderCircle className="h-4 w-4 animate-spin text-blue-600" />
          </div>

          <p className="max-w-xs text-sm leading-6 text-slate-500">
            Please wait while we prepare the best experience for you.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-7 w-full max-w-xs">
          <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-2/3 animate-pulse rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
          </div>

          <div className="mt-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            <span>Preparing</span>
            <span className="text-blue-600">Please wait...</span>
          </div>
        </div>

        {/* Bottom Trust Text */}
        <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          <span>Finding your perfect place</span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
        </div>
      </div>
    </div>
  );
}

