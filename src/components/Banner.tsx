"use client";

import Image from "next/image";
import { HiChevronLeft, HiChevronRight, HiMagnifyingGlass } from "react-icons/hi2";

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto relative overflow-hidden bg-gradient-to-r from-slate-50 to-blue-100">
      <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-10 pl-6 pt-10 lg:grid-cols-2">
        {/* Left Content */}
        <div className="z-10">
          <h1 className="text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
            Find Your <br />
            Dream <span className="text-blue-600">Home</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-8 text-slate-600">
            Discover the perfect place to call home. Search thousands of
            verified properties with trusted reviews.
          </p>

          {/* Search Box */}
          <div className="mt-8 flex max-w-xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
            <div className="flex flex-1 items-center px-4">
              <HiMagnifyingGlass className="mr-2 text-xl text-gray-400" />

              <input
                type="text"
                placeholder="Search by location, property..."
                className="h-14 w-full outline-none"
              />
            </div>

            <button className="bg-blue-600 px-8 font-semibold text-white transition hover:bg-blue-700">
              Search
            </button>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Trusted by 10,000+ happy customers 
          </p>
        </div>

        {/* Right Image */}
        <div className="relative h-[350px] lg:h-[550px]">
          <Image
            src="/image.png"
            alt="Luxury House"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Left Arrow */}
      {/* <button className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-blue-600 hover:text-white">
        <HiChevronLeft className="text-2xl" />
      </button> */}

      {/* Right Arrow */}
      {/* <button className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-blue-600 hover:text-white">
        <HiChevronRight className="text-2xl" />
      </button> */}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        <span className="h-2 w-2 rounded-full bg-blue-600"></span>
        <span className="h-2 w-2 rounded-full bg-gray-300"></span>
        <span className="h-2 w-2 rounded-full bg-gray-300"></span>
        <span className="h-2 w-2 rounded-full bg-gray-300"></span>
        <span className="h-2 w-2 rounded-full bg-gray-300"></span>
      </div>
    </section>
  );
};

export default Banner;