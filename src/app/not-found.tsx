'use client'
import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6">
      <div className="mx-auto max-w-2xl text-center">
        {/* 404 Badge */}
        <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
          Error 404
        </div>

        {/* Big Number */}
        <h1 className="text-7xl font-extrabold tracking-tight text-gray-900 md:text-9xl">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-3xl font-bold text-gray-900 md:text-4xl">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-gray-600 md:text-lg">
          The page you're looking for doesn't exist, may have been moved,
          or the URL might be incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
          >
            <Home size={18} />
            Go Home
          </Link>

          <Link
            href="/properties"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-600"
          >
            <Search size={18} />
            Browse Properties
          </Link>
        </div>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-blue-600"
        >
          <ArrowLeft size={16} />
          Go Back
        </button>
      </div>
    </main>
  );
}