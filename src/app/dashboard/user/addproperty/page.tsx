"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import {  useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface PropertyData {
  title: string;
  propertyType: string;
  location: string;
  price: number;
  image: string;
  shortDescription: string;
  fullDescription: string;
  status: "unpublished";
  createdAt: Date;
  email?: string;
  userName?: string;
  role: string;
  rating:string;
  beds: string;
  baths:string;
  area:string;
}

const UserAddProperty = () => {
  const { data } = authClient.useSession(); 
  const user = data?.user;
const router = useRouter();
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const propertyData: PropertyData = {
      title: formData.get("title") as string,
      propertyType: formData.get("propertyType") as string,
      location: formData.get("location") as string,
      price: Number(formData.get("price")),
      image: formData.get("image") as string,
      shortDescription: formData.get("shortDescription") as string,
      fullDescription: formData.get("fullDescription") as string,

      status: "unpublished",
      createdAt: new Date(),
      rating: "4.9",
      beds: "3",
      baths: "2",
      area: "2100",

      email: user?.email,
      userName: user?.name,
      role: user?.role || "user",
    };

    console.log(propertyData);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/housepost`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(propertyData),
        }
      );

      const data = await res.json();

      if (data.acknowledged) {
        toast.success("Property added successfully ✅");
        form.reset();
          router.push("/dashboard/user/myproperties");
      } else {
        alert("Failed to save ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-1">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Add New Property
          </h1>

          <p className="text-gray-500 mt-2">
            Fill in the property information below to publish a new listing.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="font-medium mb-2 block">
                Property Title
              </label>

              <input
                type="text"
                name="title"
                placeholder="Luxury Family Apartment"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="font-medium mb-2 block">
                Property Type
              </label>

              <select
                name="propertyType"
                className="w-full border rounded-lg p-3"
                required
              >
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Villa">Villa</option>
                <option value="Office">Office</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            <div>
              <label className="font-medium mb-2 block">
                Location
              </label>

              <input
                type="text"
                name="location"
                placeholder="Dhaka, Bangladesh"
                className="w-full border rounded-lg p-3"
                required
              />
            </div>

            <div>
              <label className="font-medium mb-2 block">
                Price ($)
              </label>

              <input
                type="number"
                name="price"
                placeholder="50000"
                className="w-full border rounded-lg p-3"
                required
              />
            </div>
          </div>

          <div>
            <label className="font-medium mb-2 block">
              Property Image URL
            </label>

            <input
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="font-medium mb-2 block">
              Short Description
            </label>

            <textarea
              name="shortDescription"
              rows={2}
              className="w-full border rounded-lg p-3"
              placeholder="Write a short description..."
              required
            />
          </div>

          <div>
            <label className="font-medium mb-2 block">
              Full Description
            </label>

            <textarea
              name="fullDescription"
              rows={4}
              className="w-full border rounded-lg p-3"
              placeholder="Write complete property details..."
              required
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Add Property
            </button>

            <button
              type="reset"
              className="border px-8 py-3 rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAddProperty;