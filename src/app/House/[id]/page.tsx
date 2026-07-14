

import Image from "next/image";
import { MapPin, BedDouble, Bath, Square, Star,Heart,Phone } from "lucide-react";
import { HouseSingleData } from "@/lib/housedata/data";
import PropertyOverview from "@/components/PropertyOvervirw";
import { Button } from "@heroui/react";
import Link from "next/link";
import {ArrowLeft} from '@gravity-ui/icons';
import ContactAgentButton from "@/components/property/ContactAgentButton";
import FavoriteButton from "@/components/property/FavoriteButton";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";


interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const HousesDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const house = await HouseSingleData(id);

const session = await auth.api.getSession({
  headers: await headers(),
});




  return (
  <div className="max-w-7xl mx-auto px-4 py-10">

<Link href="/House">
  <Button
    variant="outline"
    className="group h-11 rounded-lg border-gray-300 bg-white px-5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
  >
    <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
    Back to All Properties
  </Button>
</Link>




  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-5">

    {/* Left Content */}
    <div className="lg:col-span-8">
      {/* Image */}
      <div className="relative w-full h-[500px] overflow-hidden rounded-3xl">
        <Image
          src={house.image}
          alt={house.title}
          fill
          className="object-cover"
          priority
        />
      </div>

   

      {/* Stats */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
        
        {/* আপনার Stats */}
      </div>
      {/* Description */}   

<PropertyOverview house={house} />


    </div>
    {/* Right Sidebar */}
    <div className="lg:col-span-4">
      
<div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 lg:p-8 shadow-sm">

  {/* Status */}
  <span
    className={`inline-block rounded-md px-3 py-2 text-xs md:text-sm font-semibold text-white ${
      house.status === "For Sale"
        ? "bg-blue-600"
        : "bg-green-600"
    }`}
  >
    {house.status}
  </span>

  {/* Title */}
  <h1 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
    {house.title}
  </h1>

  {/* Location */}
  <div className="mt-3 flex items-center gap-2 text-sm md:text-base text-gray-600">
    <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
    <span>{house.location}</span>
  </div>

  {/* Rating */}
  <div className="mt-3 flex items-center gap-2">
    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
    <span className="text-sm md:text-base font-semibold text-blue-600">
      {house.rating} ({house.reviews} Reviews)
    </span>
  </div>

  {/* Price */}
  <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-green-700">
    ৳ {house.price.toLocaleString()}
  </h2>

  {/* Stats */}
  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-y-6 border-b pb-8">

    <div className="text-center md:border-r">
      <BedDouble className="mx-auto mb-2 h-7 w-7 text-blue-600" />
      <h3 className="text-2xl font-bold">{house.beds}</h3>
      <p className="text-sm text-gray-500">Bedrooms</p>
    </div>

    <div className="text-center md:border-r">
      <Bath className="mx-auto mb-2 h-7 w-7 text-blue-600" />
      <h3 className="text-2xl font-bold">{house.baths}</h3>
      <p className="text-sm text-gray-500">Bathrooms</p>
    </div>

    <div className="text-center md:border-r">
      <Square className="mx-auto mb-2 h-7 w-7 text-blue-600" />
      <h3 className="text-2xl font-bold">{house.area}</h3>
      <p className="text-sm text-gray-500">Sqft</p>
    </div>

    <div className="text-center">
      <span className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
        G
      </span>
      <h3 className="text-2xl font-bold">{house.garage ?? 1}</h3>
      <p className="text-sm text-gray-500">Garage</p>
    </div>

  </div>

  {/* Key Information */}
  <div className="mt-8">
    <h3 className="mb-5 text-xl md:text-2xl font-bold">
      Key Information
    </h3>

    <div className="space-y-4">

      <div className="flex items-center justify-between text-sm md:text-base">
        <span className="text-gray-500">Property Type</span>
        <span className="font-semibold">{house.propertyType}</span>
      </div>

      <div className="flex items-center justify-between text-sm md:text-base">
        <span className="text-gray-500">Purpose</span>
        <span className="font-semibold">{house.status}</span>
      </div>

      <div className="flex items-center justify-between text-sm md:text-base">
        <span className="text-gray-500">Status</span>
        <span className="font-semibold text-green-600">
          Available
        </span>
      </div>

      <div className="flex items-center justify-between text-sm md:text-base">
        <span className="text-gray-500">Year Built</span>
        <span className="font-semibold">
          {house.yearBuilt ?? 2023}
        </span>
      </div>

      <div className="flex items-center justify-between text-sm md:text-base">
        <span className="text-gray-500">Furnished</span>
        <span className="font-semibold">
          {house.furnished ?? "Fully Furnished"}
        </span>
      </div>

      <div className="flex items-center justify-between text-sm md:text-base">
        <span className="text-gray-500">Property ID</span>
        <span className="font-semibold break-all">
          {house._id}
        </span>
      </div>

    </div>
  </div>

  {/* Buttons */}
<div className="mt-8 space-y-4">
  <ContactAgentButton />
  <FavoriteButton
    house={house}
    user={{
        name: session.user.name,
        email: session.user.email,
    }}
/>
</div>

</div>



    </div>

  </div>
</div>
  );
};

export default HousesDetailsPage;