
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiMagnifyingGlass,
  HiArrowDown,
  HiArrowRight,
  HiCheckCircle,
  HiMapPin,
} from "react-icons/hi2";

const slides = ["/image.jpg", "/image2.jpg", "/image3.jpg"];

const slideInfo = [
  {
    location: "Dhaka, Bangladesh",
    title: "Modern Luxury Living",
    price: "$250,000",
  },
  {
    location: "Chattogram, Bangladesh",
    title: "Beautiful Family Home",
    price: "$185,000",
  },
  {
    location: "Sylhet, Bangladesh",
    title: "Peaceful Dream Residence",
    price: "$320,000",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-100/50 blur-3xl" />

        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-50/70 blur-3xl" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8 lg:py-16">
        {/* =======================================================
            LEFT CONTENT
        ======================================================= */}
        <div className="z-10 pt-8 lg:pt-0">
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-70" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
            </span>

            Trusted Real Estate Platform
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Find a place
            <br />

            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              you&apos;ll love
            </span>

            <br />

            to call home.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Discover hand-picked properties in the best locations. Buy, rent,
            or sell with confidence through our trusted real estate platform.
          </p>

          {/* =====================================================
              SEARCH BOX
          ===================================================== */}
          <div className="mt-9 max-w-2xl rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/60">
            <div className="flex flex-col gap-2 sm:flex-row">
              {/* Input */}
              <div className="flex min-h-[58px] flex-1 items-center rounded-xl bg-slate-50 px-4 transition focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">
                <HiMagnifyingGlass className="mr-3 shrink-0 text-xl text-slate-400" />

                <input
                  type="text"
                  placeholder="Search city, location or property..."
                  className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>

              {/* Search button */}
              <button
                type="button"
                className="flex min-h-[58px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-600/30 active:scale-[0.98]"
              >
                <HiMagnifyingGlass className="text-lg" />
                Search
              </button>
            </div>
          </div>

          {/* =====================================================
              CTA BUTTONS
          ===================================================== */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            {/* Primary */}
            <Link
              href="/House"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/30"
            >
              Browse Properties

              <HiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Secondary */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              Contact Agent
            </Link>
          </div>

          {/* =====================================================
              TRUST ITEMS
          ===================================================== */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <HiCheckCircle className="text-lg text-blue-600" />
              Verified Properties
            </div>

            <div className="flex items-center gap-2">
              <HiCheckCircle className="text-lg text-blue-600" />
              Trusted Agents
            </div>

            <div className="flex items-center gap-2">
              <HiCheckCircle className="text-lg text-blue-600" />
              Secure Process
            </div>
          </div>

          {/* =====================================================
              STATS
          ===================================================== */}
          <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-slate-200 pt-7">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                12K+
              </h3>

              <p className="mt-1 text-xs font-medium text-slate-500">
                Properties
              </p>
            </div>

            <div className="h-10 w-px bg-slate-200" />

            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                8K+
              </h3>

              <p className="mt-1 text-xs font-medium text-slate-500">
                Happy Customers
              </p>
            </div>

            <div className="h-10 w-px bg-slate-200" />

            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                500+
              </h3>

              <p className="mt-1 text-xs font-medium text-slate-500">
                Trusted Agents
              </p>
            </div>
          </div>
        </div>

        {/* =======================================================
            RIGHT IMAGE SLIDER
        ======================================================= */}
        <div className="relative z-10">
          {/* Decorative frame */}
          <div className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-blue-100 bg-blue-50" />

          {/* Main image */}
          <div className="group relative h-[430px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-300/50 sm:h-[520px] lg:h-[610px]">
            <Image
              key={slides[current]}
              src={slides[current]}
              alt={slideInfo[current].title}
              fill
              priority={current === 0}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Image gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

            {/* Top badge */}
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-white/90 px-4 py-2 text-xs font-bold text-slate-800 shadow-lg backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Featured Property
            </div>

            {/* ===================================================
                PROPERTY INFORMATION
            =================================================== */}
            <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-7 sm:right-7">
              {/* Location */}
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white/90">
                <HiMapPin className="text-lg text-blue-400" />

                {slideInfo[current].location}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                {slideInfo[current].title}
              </h2>

              {/* Bottom info */}
              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs text-white/60">Starting from</p>

                  <p className="mt-1 text-xl font-bold text-white sm:text-2xl">
                    {slideInfo[current].price}
                  </p>
                </div>

                <Link
                  href="/House"
                  className="hidden items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-900 shadow-lg transition-all hover:bg-blue-50 sm:flex"
                >
                  View Property
                  <HiArrowRight />
                </Link>
              </div>
            </div>

            {/* ===================================================
                PREVIOUS BUTTON
            =================================================== */}
            <button
              type="button"
              aria-label="Previous slide"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-900"
            >
              <HiChevronLeft className="text-xl" />
            </button>

            {/* ===================================================
                NEXT BUTTON
            =================================================== */}
            <button
              type="button"
              aria-label="Next slide"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-900"
            >
              <HiChevronRight className="text-xl" />
            </button>

            {/* ===================================================
                SLIDER DOTS
            =================================================== */}
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
              {slides.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-8 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* =====================================================
              FLOATING PROPERTY CARD
          ===================================================== */}
          <div className="absolute -bottom-7 -left-3 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-300/40 sm:block lg:-left-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                <HiCheckCircle className="text-2xl text-blue-600" />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Properties available
                </p>

                <p className="mt-0.5 text-lg font-extrabold text-slate-900">
                  12,000+
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              FLOATING LOCATION CARD
          ===================================================== */}
          <div className="absolute -right-3 -top-5 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl shadow-slate-300/40 sm:block lg:-right-8">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                <HiMapPin className="text-lg text-blue-600" />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Explore
                </p>

                <p className="text-sm font-bold text-slate-800">
                  Prime Locations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
          Scroll
        </span>

        <div className="flex h-8 w-5 justify-center rounded-full border border-slate-300 p-1">
          <HiArrowDown className="text-sm text-blue-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

