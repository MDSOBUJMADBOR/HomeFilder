
"use client";

import Image from "next/image";
import {
  Heart,
  MapPin,
  BedDouble,
  Bath,
  Square,
  Star,
} from "lucide-react";

export default function PropertyCard() {
  return (
    <div className="group w-full max-w-[340px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200"
          alt="Modern Family Villa"
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Status */}
        <span className="absolute left-3 top-3 rounded-md bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          For Sale
        </span>

        {/* Wishlist */}
        <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow">
          <Heart className="h-5 w-5 text-gray-700" />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <div>
          <h2 className="text-lg font-bold text-gray-800">
            Modern Family Villa
          </h2>

          <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
            <MapPin size={16} />
            Banani, Dhaka
          </div>
        </div>

        {/* Price & Rating */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-green-600">$250,000</h3>

          <div className="flex items-center gap-1">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="font-semibold">4.8</span>
            <span className="text-gray-500">(120)</span>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 border-y py-4 text-sm text-gray-600">
          <div className="flex items-center justify-center gap-1">
            <BedDouble size={18} />
            <span>4 Bed</span>
          </div>

          <div className="flex items-center justify-center gap-1">
            <Bath size={18} />
            <span>3 Bath</span>
          </div>

          <div className="flex items-center justify-center gap-1">
            <Square size={18} />
            <span>2500 sqft</span>
          </div>
        </div>

        {/* Button */}
        <button className="w-full rounded-lg bg-blue-600 py-3 cursor-pointer font-semibold text-white transition hover:bg-blue-700">
          View Details
        </button>
      </div>
    </div>
  );
}