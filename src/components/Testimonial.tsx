
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  ShieldCheck,
  MapPin,
} from "lucide-react";

interface TestimonialData {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  comment: string;
  propertyType: string;
  location: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Anisur Rahman",
    role: "Home Buyer",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    rating: 5,
    comment:
      "HomeFinder helped me find my dream apartment within just a week! The verified listings gave me complete peace of mind during the buying process.",
    propertyType: "Luxury Apartment",
    location: "Dhaka, Bangladesh",
  },
  {
    id: 2,
    name: "Sarah Khan",
    role: "Property Investor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    rating: 5,
    comment:
      "The dashboard analytics and agent connection features are top-notch. Managing my investment properties has never been this seamless.",
    propertyType: "Commercial Property",
    location: "Gulshan, Dhaka",
  },
  {
    id: 3,
    name: "Tanvir Hossain",
    role: "Tenant",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    rating: 5,
    comment:
      "Renting a house usually comes with a lot of hassle, but the direct chat and transparent details on HomeFinder made it super quick and easy.",
    propertyType: "Family Villa",
    location: "Uttara, Dhaka",
  },
];

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = testimonials[currentIndex];

  // =========================================================
  // NEXT SLIDE
  // =========================================================
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  // =========================================================
  // PREVIOUS SLIDE
  // =========================================================
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  // =========================================================
  // AUTO SLIDER
  // =========================================================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* =======================================================
          BACKGROUND DECORATION
      ======================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-cyan-50 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/40 blur-3xl" />
      </div>

      {/* =======================================================
          MAIN CONTAINER
      ======================================================= */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600">
            <ShieldCheck className="h-4 w-4" />

            Client Testimonials
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            Real experiences from buyers, investors, and tenants who found
            their perfect property with HomeFinder.
          </p>
        </div>

        {/* =====================================================
            TESTIMONIAL CARD
        ===================================================== */}
        <div className="relative mx-auto max-w-5xl">
          {/* Decorative background card */}
          <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-blue-100 via-white to-cyan-100 opacity-70 blur-sm" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
            {/* Top gradient line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400" />

            <div className="relative p-6 sm:p-10 lg:p-12">
              {/* Big Quote Icon */}
              <div className="pointer-events-none absolute right-6 top-6 sm:right-10 sm:top-8">
                <Quote className="h-20 w-20 fill-blue-50 text-blue-100 sm:h-28 sm:w-28" />
              </div>

              {/* =================================================
                  TESTIMONIAL CONTENT
              ================================================= */}
              <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row md:items-center">
                {/* =================================================
                    USER IMAGE
                ================================================= */}
                <div className="relative shrink-0">
                  {/* Image ring */}
                  <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-500 to-cyan-400 p-1 shadow-xl shadow-blue-200/60">
                    <div className="relative h-32 w-32 overflow-hidden rounded-[1.25rem] bg-white sm:h-40 sm:w-40">
                      <Image
                        key={current.image}
                        src={current.image}
                        alt={current.name}
                        fill
                        sizes="(max-width: 640px) 128px, 160px"
                        priority
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Verified Badge */}
                  <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border-2 border-white bg-blue-600 px-3 py-1.5 text-[10px] font-bold text-white shadow-lg">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Verified Client
                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}
                <div className="flex-1 text-center md:text-left">
                  {/* Property Type */}
                  <div className="mb-4 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600">
                      {current.propertyType}
                    </span>

                    <span className="flex items-center gap-1 text-xs font-medium text-slate-400">
                      <MapPin className="h-3.5 w-3.5 text-blue-500" />

                      {current.location}
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="mb-5 flex items-center justify-center gap-1 md:justify-start">
                    {Array.from({ length: current.rating }).map((_, index) => (
                      <Star
                        key={index}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}

                    <span className="ml-2 text-sm font-semibold text-slate-500">
                      {current.rating}.0
                    </span>
                  </div>

                  {/* Comment */}
                  <blockquote className="max-w-2xl text-base font-medium leading-8 text-slate-700 sm:text-lg lg:text-xl">
                    &ldquo;{current.comment}&rdquo;
                  </blockquote>

                  {/* User Info */}
                  <div className="mt-6">
                    <h3 className="text-lg font-extrabold text-slate-900">
                      {current.name}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {current.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  BOTTOM NAVIGATION
              ================================================= */}
              <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-6">
                {/* Progress / Dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.id}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentIndex === index
                          ? "w-9 bg-blue-600"
                          : "w-2 bg-slate-200 hover:bg-slate-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Counter */}
                <div className="hidden text-sm font-semibold text-slate-400 sm:block">
                  <span className="text-blue-600">
                    {String(currentIndex + 1).padStart(2, "0")}
                  </span>

                  <span className="mx-1">/</span>

                  {String(testimonials.length).padStart(2, "0")}
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-600/30 active:scale-95"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            TRUST MESSAGE
        ===================================================== */}
        <div className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
          <ShieldCheck className="h-5 w-5 text-blue-600" />

          <span>
            Trusted by{" "}
            <strong className="font-bold text-slate-900">8,000+</strong>{" "}
            happy customers
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;


