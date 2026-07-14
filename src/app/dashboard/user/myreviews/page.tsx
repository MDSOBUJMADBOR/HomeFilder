"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

interface FavoriteProperty {
  _id: string;
  propertyId: string;
  propertyTitle: string;
  propertyImage: string;
  propertyLocation: string;
  propertyPrice: number;
  propertyStatus: string;
  ownerName: string;
  ownerEmail: string;
  customerName: string;
  customerEmail: string;
}

export default function AddedtoFavorites() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [favorites, setFavorites] = useState<FavoriteProperty[]>([]);

  useEffect(() => {
    if (!user?.email) return;

    const getFavorites = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/favorites/email/${user.email}`
        );

        const data = await res.json();
        setFavorites(data);
      } catch (error) {
        console.log(error);
      }
    };

    getFavorites();
  }, [user]);

  return (
    <div className="w-full">
      {/* ========================= */}
      {/* Desktop Table */}
      {/* ========================= */}

      <div className="hidden md:block overflow-x-auto rounded-2xl bg-white shadow">
        <table className="min-w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left">Image</th>
              <th className="px-6 py-4 text-left">Title</th>
              <th className="px-6 py-4 text-left">Location</th>
              <th className="px-6 py-4 text-left">Price</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Owner</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {favorites.map((favorite) => (
              <tr
                key={favorite._id}
                className="border-b hover:bg-gray-50 duration-200"
              >
                <td className="px-6 py-4">
                  <Image
                    src={favorite.propertyImage}
                    alt={favorite.propertyTitle}
                    width={70}
                    height={50}
                    className="rounded-lg object-cover w-[70px] h-[50px]"
                  />
                </td>

                <td className="px-6 py-4 font-semibold">
                  {favorite.propertyTitle}
                </td>

                <td className="px-6 py-4">
                  {favorite.propertyLocation}
                </td>

                <td className="px-6 py-4 font-semibold text-blue-600">
                  ৳ {favorite.propertyPrice.toLocaleString()}
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700 capitalize">
                    {favorite.propertyStatus}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">
                      {favorite.ownerName}
                    </p>
                    <p className="text-sm text-gray-500">
                      {favorite.ownerEmail}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <Link href={`/House/${favorite.propertyId}`}>
                      <Button className="rounded-md">
                        View
                      </Button>
                    </Link>

                    <Button color="danger" className="rounded-md bg-red-600">
                      Remove
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {favorites.length === 0 && (
          <div className="py-10 text-center text-gray-500">
            No favorite properties found.
          </div>
        )}
      </div>

      {/* ========================= */}
      {/* Mobile Card */}
      {/* ========================= */}

      <div className="grid gap-4 md:hidden">
        {favorites.map((favorite) => (
          <div
            key={favorite._id}
            className="rounded-xl border bg-white p-4 shadow"
          >
            <div className="flex gap-4">
              <Image
                src={favorite.propertyImage}
                alt={favorite.propertyTitle}
                width={90}
                height={80}
                className="h-20 w-24 rounded-lg object-cover"
              />

              <div className="flex-1">
                <h2 className="text-lg font-bold">
                  {favorite.propertyTitle}
                </h2>

                <p className="mt-1 text-gray-500">
                  📍 {favorite.propertyLocation}
                </p>

                <p className="mt-1 font-semibold text-blue-600">
                  ৳ {favorite.propertyPrice.toLocaleString()}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Owner: {favorite.ownerName}
                </p>

                <span className="mt-2 inline-block rounded-full bg-green-100 px-2 py-1 text-xs text-green-700 capitalize">
                  {favorite.propertyStatus}
                </span>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <Link
                href={`/House/${favorite.propertyId}`}
                className="flex-1"
              >
                <Button className="w-full rounded-md">
                  View
                </Button>
              </Link>

              <Button
                color="danger"
                className="flex-1 rounded-md bg-red-600"
              >
                Remove
              </Button>
            </div>
          </div>
        ))}

        {favorites.length === 0 && (
          <div className="rounded-xl border bg-white py-10 text-center text-gray-500">
            No favorite properties found.
          </div>
        )}
      </div>
    </div>
  );
}