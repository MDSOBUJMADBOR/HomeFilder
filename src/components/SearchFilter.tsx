"use client";

import { useEffect, useState } from "react";
import HouseCard from "./HouseCard";

export interface House {
  _id: string;
  title: string;
  location: string;
  propertyType: string;
  shortDescription: string;
  price: number;
  createdAt: string;
  image?: string;
  fullDescription?: string;
  status?: string;
}

interface SearchFilterProps {
  House: House[];
}

export default function SearchFilter({
  House,
}: SearchFilterProps) {
  const [sortBy, setSortBy] = useState<string>("default");
  const [filteredHouses, setFilteredHouses] =
    useState<House[]>(House);
  const [location, setLocation] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");

  useEffect(() => {
    let temp = [...House];

    // Search
    if (search) {
      const keyword = search.toLowerCase();

      temp = temp.filter(
        (house) =>
          house.title?.toLowerCase().includes(keyword) ||
          house.location?.toLowerCase().includes(keyword) ||
          house.propertyType?.toLowerCase().includes(keyword) ||
          house.shortDescription
            ?.toLowerCase()
            .includes(keyword)
      );
    }

    // Category Filter
    if (category !== "all") {
      temp = temp.filter(
        (house) =>
          house.propertyType.toLowerCase() ===
          category.toLowerCase()
      );
    }

    // Location Filter
    if (location !== "all") {
      temp = temp.filter(
        (house) =>
          house.location.toLowerCase() ===
          location.toLowerCase()
      );
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        temp.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        temp.sort((a, b) => b.price - a.price);
        break;

      case "newest":
        temp.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        );
        break;

      case "oldest":
        temp.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() -
            new Date(b.createdAt).getTime()
        );
        break;

      case "a-z":
        temp.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;

      case "z-a":
        temp.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;

      default:
        break;
    }

    setFilteredHouses(temp);
  }, [House, search, category, location, sortBy]);

  const resetFilters = () => {
    setSearch("");
    setCategory("all");
    setLocation("all");
    setSortBy("default");
  };

  return (
    <>
      <div className="grid gap-4 mb-8 md:grid-cols-4">
        <input
          type="text"
          placeholder="Search property..."
          className="border rounded-lg p-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-lg p-3"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option value="all">All Properties</option>
          <option value="Apartment">
            Apartment
          </option>
          <option value="House">House</option>
          <option value="Villa">Villa</option>
          <option value="Office">Office</option>
        </select>

        <select
          className="border rounded-lg p-3"
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
        >
          <option value="all">
            All Locations
          </option>
          <option value="Gulshan, Dhaka">
            Gulshan, Dhaka
          </option>
          <option value="Dhanmondi, Dhaka">
            Dhanmondi, Dhaka
          </option>
          <option value="Banani, Dhaka">
            Banani, Dhaka
          </option>
          <option value="Uttara, Dhaka">
            Uttara, Dhaka
          </option>
          <option value="Madaripur, Dhaka">
            Madaripur, Dhaka
          </option>
          <option value="Shariatpur, Dhaka">
            Shariatpur, Dhaka
          </option>
        </select>

        <select
          className="border rounded-lg p-3"
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
        >
          <option value="default">
            Sort By
          </option>
          <option value="price-low">
            Price: Low to High
          </option>
          <option value="price-high">
            Price: High to Low
          </option>
          <option value="newest">
            Newest First
          </option>
          <option value="oldest">
            Oldest First
          </option>
          <option value="a-z">
            Title (A-Z)
          </option>
          <option value="z-a">
            Title (Z-A)
          </option>
        </select>
      </div>

      {filteredHouses.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 rounded-2xl border border-dashed border-gray-300 bg-gray-50">
          <div className="text-6xl mb-4">🏠</div>

          <h2 className="text-2xl font-bold text-gray-800">
            No Houses Found
          </h2>

          <p className="mt-2 text-center text-gray-500 max-w-md">
            We couldn't find any properties
            matching your search or filters.
            Try changing the location,
            property type, or search keyword.
          </p>

          <button
            onClick={resetFilters}
            className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {filteredHouses.map((house) => (
            <HouseCard
              key={house._id}
              book={house}
            />
          ))}
        </div>
      )}
    </>
  );
}