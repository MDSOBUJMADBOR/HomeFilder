"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, Trash2 } from "lucide-react";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import AddHouseDelete from "@/components/dashboard/user/AddHouseDelete";

interface Property {
  _id: string;
  image: string;
  title: string;
  price: number;
  location: string;
}

export default function ManageProperties() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    if (!user?.email) return;

    const getProperties = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/housepost/email/${user.email}`
        );

        const data = await res.json();
        setProperties(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProperties();
  }, [user]);

  return (
   <div className="w-full">

  {/* ========================= */}
  {/* Desktop + Tablet Table */}
  {/* ========================= */}
  <div className="hidden md:block overflow-x-auto rounded-2xl bg-white shadow">
    <table className="min-w-full">
      <thead className="bg-gray-50 border-b">
        <tr>
          <th className="px-6 py-4 text-left">Image</th>
          <th className="px-6 py-4 text-left">Title</th>
          <th className="px-6 py-4 text-left">Price</th>
          <th className="px-6 py-4 text-left">Location</th>
          <th className="px-6 py-4 text-center">Actions</th>
        </tr>
      </thead>

      <tbody>
        {properties.map((property) => (
          <tr
            key={property._id}
            className="border-b hover:bg-gray-50 duration-200"
          >
            <td className="px-6 py-4">
              <Image
                src={property.image}
                alt={property.title}
                width={70}
                height={50}
                className="rounded-lg object-cover w-[70px] h-[50px]"
              />
            </td>

            <td className="px-6 py-4 font-semibold">
              {property.title}
            </td>

            <td className="px-6 py-4">
              ${property.price}
            </td>

            <td className="px-6 py-4">
              {property.location}
            </td>

            <td className="px-6 py-4">
              <div className="flex justify-center gap-2">

                <Link href={`/dashboard/properties/${property._id}`}>
                  <Button
                   className="rounded-md"
                  >
                    View
                  </Button>
                </Link>

                <AddHouseDelete user={property} />

              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* ========================= */}
  {/* Mobile Card */}
  {/* ========================= */}

  <div className="grid gap-4 md:hidden">

    {properties.map((property) => (

      <div
        key={property._id}
        className="bg-white rounded-xl shadow-xl border p-4"
      >

        <div className="flex gap-4">

          <Image
            src={property.image}
            alt={property.title}
            width={90}
            height={80}
            className="rounded-lg object-cover w-24 h-20"
          />

          <div className="flex-1">

            <h2 className="font-bold text-lg">
              {property.title}
            </h2>

            <p className="text-gray-500 mt-1">
              📍 {property.location}
            </p>

            <p className="font-semibold text-blue-600 mt-1">
              ${property.price}
            </p>

          </div>

        </div>

        <div className="flex gap-2 mt-4">

          <Link
            href={`/dashboard/properties/${property._id}`}
            className="flex-1"
          >
            <Button
              className="w-full rounded-md"
              
              
            >
              View
            </Button>
          </Link>

          <Button
            className="flex-1 rounded-md"
            variant="danger"
           
          >
            <AddHouseDelete user={property} />
          </Button>

        </div>

      </div>

    ))}

  </div>

</div>
  );
}