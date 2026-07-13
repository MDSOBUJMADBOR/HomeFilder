"use client";

import { useEffect, useState } from "react";
import HouseCard from "./HouseCard";


const SearchFilter = ({ House }) => {
const [sortBy, setSortBy] = useState("default");
const [filteredHouses, setFilteredHouses] = useState(House);
const [location, setLocation] = useState("all");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");





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
        house.shortDescription?.toLowerCase().includes(keyword)
    );
  }

  // Category Filter
  if (category !== "all") {
    temp = temp.filter(
      (house) =>
        house.propertyType?.toLowerCase() === category.toLowerCase()
    );
  }

  // Location Filter
  if (location !== "all") {
    temp = temp.filter(
      (house) =>
        house.location?.toLowerCase() === location.toLowerCase()
    );
  }

  // Sort
  if (sortBy === "price-low") {
    temp.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "price-high") {
    temp.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "newest") {
    temp.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
    );
  }

  if (sortBy === "oldest") {
    temp.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() -
        new Date(b.createdAt).getTime()
    );
  }

  if (sortBy === "a-z") {
    temp.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortBy === "z-a") {
    temp.sort((a, b) => b.title.localeCompare(a.title));
  }

  setFilteredHouses(temp);
}, [House, search, category, location, sortBy]);






  return (
    <>
      <div className="grid md:grid-cols-4  gap-4 mb-8">
        <input
          type="text"
          placeholder="Search title or author..."
          className="border rounded-lg p-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

<select
  className="border rounded-lg p-3"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="all">All Properties</option>
  <option value="Apartment">Apartment</option>
  <option value="House">House</option>
  <option value="Villa">Villa</option>
  <option value="Office">Office</option>
</select>

<select
  className="border rounded-lg p-3"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
>
  <option value="all">All Locations</option>
  <option value="Gulshan, Dhaka">Gulshan, Dhaka</option>
  <option value="Dhanmondi, Dhaka">Dhanmondi, Dhaka</option>
  <option value="Banani, Dhaka">Banani, Dhaka</option>
  <option value="Uttara, Dhaka">Uttara, Dhaka</option>
  <option value="Madaripur, Dhaka">Madaripur, Dhaka</option>
  <option value="Shariatpur, Dhaka">Shariatpur, Dhaka</option>
</select>

<select
  className="border rounded-lg p-3"
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
>
  <option value="default">Sort By</option>
  <option value="price-low">Price: Low to High</option>
  <option value="price-high">Price: High to Low</option>
  <option value="newest">Newest First</option>
  <option value="oldest">Oldest First</option>
  <option value="a-z">Title (A-Z)</option>
  <option value="z-a">Title (Z-A)</option>
</select>

      </div>

      {filteredHouses.length === 0 ? (
       <div className=" flex flex-col items-center justify-center py-20 rounded-2xl border border-dashed border-gray-300 bg-gray-50">
  <div className="text-6xl mb-4">🏠</div>

  <h2 className="text-2xl font-bold text-gray-800">
    No Houses Found
  </h2>

  <p className="mt-2 text-gray-500 text-center max-w-md">
    We couldn't find any properties matching your search or filters.
    Try changing the location, property type, or search keyword.
  </p>

  <button
    onClick={() => {
      setSearch("");
      setCategory("all");
      setLocation("all");
    }}
    className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition cursor-pointer"
  >
    Reset Filters
  </button>
</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
  {filteredHouses.map((house) => (
    <HouseCard key={house._id} book={house} />
  ))}
</div>
      )}
    </>
  );
};

export default SearchFilter;
