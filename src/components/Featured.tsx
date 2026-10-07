
import { FeaturedData, Property } from "@/lib/housedata/data";
import { Button } from "@heroui/react";
import Link from "next/link";
import PropertyCard from "./HouseCard";
import { HiArrowRight, HiHomeModern } from "react-icons/hi2";

const FeaturedBooks = async () => {
  const featured: Property[] = await FeaturedData();

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />

        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-cyan-50 blur-3xl" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
        {/* =======================================================
            SECTION HEADER
        ======================================================= */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {/* Small Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              <HiHomeModern className="text-base" />

              Featured Properties
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Featured Houses
              </span>
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Discover our hand-picked collection of beautiful properties in
              prime locations, selected especially for you.
            </p>
          </div>

          {/* Property Count */}
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <p className="text-xs font-medium text-slate-400">
                Available
              </p>

              <p className="mt-1 text-xl font-extrabold text-slate-900">
                {featured.length}+
              </p>
            </div>

            <p className="text-sm font-medium text-slate-500">
              Featured Houses
            </p>
          </div>
        </div>

        {/* =======================================================
            PROPERTY GRID
        ======================================================= */}
        {featured.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featured.map((item: Property) => (
              <div
                key={item._id}
                className="group transition-all duration-300 hover:-translate-y-1"
              >
                <PropertyCard
                  key={item._id}
                  book={item as any}
                />
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex min-h-[250px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
              <HiHomeModern className="text-2xl text-blue-600" />
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              No featured properties
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              New properties will appear here soon.
            </p>
          </div>
        )}

        {/* =======================================================
            VIEW ALL BUTTON
        ======================================================= */}
        <div className="mt-10 flex justify-center">
          <Link href="/House">
            <Button
              
              className="group h-12 rounded-xl border-slate-200 bg-white px-6 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20"
            >
              <span>View All Properties</span>

              <HiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;

