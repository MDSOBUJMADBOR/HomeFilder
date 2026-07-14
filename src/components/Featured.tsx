import { FeaturedData, Property } from "@/lib/housedata/data";
import { Button } from "@heroui/react";
import Link from "next/link";
import PropertyCard from "./HouseCard";

const FeaturedBooks = async () => {
  const featured: Property[] = await FeaturedData();

  return (
    <div className="max-w-7xl mx-auto px-10 py-10">
      <h1 className="font-bold text-3xl my-3">Featured Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {featured.map((item: Property) => (
          <PropertyCard key={item._id} book={item} />
        ))}
      </div>

      <div className="flex items-center justify-center pt-2">
        <Link href="/House">
          <Button variant="outline">View All</Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBooks;