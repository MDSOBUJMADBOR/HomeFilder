"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiMagnifyingGlass,
  HiArrowDown,
} from "react-icons/hi2";

const slides = [
  "/image.jpg",
  "/image2.jpg",
  "/image3.jpg",
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-50 via-blue-50 to-blue-100">
      <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-12 px-6 py-10 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🏡 Trusted Real Estate Platform
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
            Find Your <br />
            Dream <span className="text-blue-600">Home</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Discover thousands of verified properties with trusted agents.
            Buy, rent, or sell your dream property with confidence.
          </p>

          {/* Search */}
          <div className="mt-8 flex overflow-hidden rounded-xl border bg-white shadow-lg">
            <div className="flex flex-1 items-center px-4">
              <HiMagnifyingGlass className="mr-3 text-2xl text-gray-400" />

              <input
                type="text"
                placeholder="Search by city, location..."
                className="h-14 w-full outline-none"
              />
            </div>

            <button className="bg-blue-600 px-8 font-semibold text-white transition hover:bg-blue-700">
              Search
            </button>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/House"
              className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Browse Properties
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Contact Agent
            </Link>
          </div>

          {/* Stats */}
          {/* <div className="mt-10 flex flex-wrap gap-10">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">12K+</h3>
              <p className="text-gray-500">Properties</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">8K+</h3>
              <p className="text-gray-500">Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">500+</h3>
              <p className="text-gray-500">Agents</p>
            </div>
          </div> */}
        </div>

        {/* Right Slider */}
        <div className="relative h-[500px]">
          <div className="relative h-full overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src={slides[current]}
              alt="Property"
              fill
              priority
              className="object-cover transition-all duration-700 hover:scale-105"
            />
          </div>

          {/* Prev */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-blue-600 hover:text-white"
          >
            <HiChevronLeft className="text-2xl" />
          </button>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-blue-600 hover:text-white"
          >
            <HiChevronRight className="text-2xl" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition ${
                  current === index
                    ? "bg-blue-600"
                    : "bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce">
        <HiArrowDown className="text-3xl text-blue-600" />
      </div>
    </section>
  );
}