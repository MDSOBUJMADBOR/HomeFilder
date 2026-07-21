'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialData {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  comment: string;
  propertyType: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: 'Anisur Rahman',
    role: 'Home Buyer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'HomeFinder helped me find my dream apartment within just a week! The verified listings gave me complete peace of mind during the buying process.',
    propertyType: 'Luxury Apartment',
  },
  {
    id: 2,
    name: 'Sarah Khan',
    role: 'Property Investor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'The dashboard analytics and agent connection features are top-notch. Managing my investment properties has never been this seamless.',
    propertyType: 'Commercial Property',
  },
  {
    id: 3,
    name: 'Tanvir Hossain',
    role: 'Tenant',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'Renting an house usually comes with a lot of hassle, but the direct chat and transparent details on HomeFinder made it super quick and easy.',
    propertyType: 'Family Villa',
  },
];

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            What Our Clients Say About Us
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm sm:text-base">
            Real stories from real buyers, sellers, and renters who found their place with HomeFinder.
          </p>
        </div>

        {/* Carousel / Card Section */}
        <div className="relative max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 dark:border-slate-700">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-blue-100 dark:text-slate-700/50 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* User Image using Next.js Image Component */}
            <div className="relative flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36">
              <Image
                src={current.image}
                alt={current.name}
                fill
                sizes="(max-width: 640px) 112px, 144px"
                priority
                className="rounded-2xl object-cover shadow-md border-4 border-white dark:border-slate-700"
              />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-semibold px-3 py-1 rounded-full whitespace-nowrap shadow-sm z-20">
                {current.propertyType}
              </span>
            </div>

            {/* Testimonial Content */}
            <div className="flex-1 text-center md:text-left">
              {/* Star Rating */}
              <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg italic leading-relaxed mb-6">
                "{current.comment}"
              </p>

              {/* User Info */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {current.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {current.role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100 dark:border-slate-700/60">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === index
                      ? 'w-8 bg-blue-600'
                      : 'w-2.5 bg-gray-300 dark:bg-slate-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-200 cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-200 cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;