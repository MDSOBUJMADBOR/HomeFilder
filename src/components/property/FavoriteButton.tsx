"use client";

import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

interface FavoriteButtonProps {
  house: any;
  user: {
    name: string;
    email: string;
  };
}

export default function FavoriteButton({
  house,
  user,
}: FavoriteButtonProps) {
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState(false);

const handleFavorite = async () => {
  try {
    setLoading(true);

    const favoriteData = {
      propertyId: house._id,
      propertyTitle: house.title,
      propertyImage: house.image,
      propertyLocation: house.location,
      propertyPrice: house.price,
      propertyStatus: house.status,

      ownerName: house.userName,
      ownerEmail: house.email,

      customerName: user.name,
      customerEmail: user.email,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/favorites`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(favoriteData),
      }
    );

    const data = await res.json();

    if (data.insertedId || data.success) {
      setFavorite(true);

      // যদি sonner ব্যবহার করেন
      // toast.success("Property added to favorites.");

      // যদি react-hot-toast ব্যবহার করেন
      toast.success("Property added to favorites.");

      
      
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <button
      disabled={loading}
      onClick={handleFavorite}
      className={`flex w-full items-center justify-center gap-2 rounded-lg border py-4 font-semibold transition ${
        favorite
          ? "border-red-500 bg-red-50 text-red-600"
          : "border-gray-300 hover:bg-gray-100"
      }`}
    >
      <Heart
        size={18}
        className={favorite ? "fill-red-500 text-red-500" : ""}
      />

      {loading
        ? "Adding..."
        : favorite
        ? "Added to Favorites"
        : "Add to Favorites"}
    </button>
  );
}