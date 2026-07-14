"use client";

import { useState } from "react";
import {
  AirVent,
  Car,
  Building2,
  BedDouble,
  Bath,
  Square,
  Star,
} from "lucide-react";

interface House {
  shortDescription: string;
  fullDescription: string;
  beds: number;
  baths: number;
  area: number;
  rating: number;
  reviews: number;
}

interface PropertyOverviewProps {
  house: House;
}

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "specifications", label: "Specifications" },
  { id: "reviews", label: "Reviews" },
] as const;

type Tab = (typeof tabs)[number]["id"];

export default function PropertyOverview({
  house,
}: PropertyOverviewProps) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  return (
    <div className="mt-1 w-full rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Tabs */}
      <div className="grid grid-cols-3 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center justify-center px-2 py-4 text-xs font-semibold transition sm:text-sm md:text-base lg:text-lg ${
              activeTab === tab.id
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {tab.id === "reviews"
              ? `${tab.label} `
              : tab.label}

            <span
              className={`absolute bottom-0 left-0 h-[3px] w-full transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-blue-600"
                  : "bg-transparent"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-5 md:p-8">
        {/* Overview */}
        {activeTab === "overview" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Overview
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              {house.shortDescription}
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-center gap-3 rounded-lg border p-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <AirVent className="h-6 w-6 text-blue-600" />
                </div>

                <span className="font-medium">
                  Air Conditioning
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-lg border p-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <Car className="h-6 w-6 text-blue-600" />
                </div>

                <span className="font-medium">
                  Car Parking
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-lg border p-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>

                <span className="font-medium">
                  Balcony
                </span>
              </div>
            </div>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold text-gray-900">
              Description
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              {house.fullDescription}
            </p>
          </div>
        )}

        {/* Specifications */}
        {activeTab === "specifications" && (
          <div className="">
            <h2 className="mb-6 text-2xl font-bold">
              Specifications
            </h2>


  <p className="leading-8 text-gray-600">
      This property is thoughtfully designed to provide a perfect balance of
      comfort, functionality, and modern living. It features spacious bedrooms,
      well-appointed bathrooms, a bright and airy living area, and a practical
      layout that maximizes space. With quality construction, premium finishes,
      and essential amenities, this home is an excellent choice for families,
      professionals, or anyone looking for a stylish and comfortable place to
      live.
    </p>


          </div>
        )}








        {/* Reviews */}
        {activeTab === "reviews" && (
          <div>
            <h2 className="mb-6 text-2xl font-bold">
              Reviews ({house.reviews})
            </h2>

            <div className="space-y-5">
              <div className="rounded-xl border p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">
                    John Doe
                  </h3>

                  <div className="flex text-yellow-500">
                    ★★★★★
                  </div>
                </div>

                <p className="mt-3 text-gray-600">
                  Amazing property with beautiful
                  surroundings. Highly recommended.
                </p>
              </div>

              <div className="rounded-xl border p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">
                    Sarah Smith
                  </h3>

                  <div className="flex text-yellow-500">
                    ★★★★☆
                  </div>
                </div>

                <p className="mt-3 text-gray-600">
                  Spacious rooms and great location.
                  Worth the price.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}