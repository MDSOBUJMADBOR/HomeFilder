'use client'

import { authClient } from "@/lib/auth-client";

const UserAddProperty = () => {
const userData = authClient.useSession(); 
  const user = userData.data?.user; 



const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const propertyData = {
    title: formData.get("title"),
    propertyType: formData.get("propertyType"),
    location: formData.get("location"),
    price: formData.get("price"),
    image: formData.get("image"),
    shortDescription: formData.get("shortDescription"),
    fullDescription: formData.get("fullDescription"),

createdAt: new Date(),
  email: user?.email,
  userName: user?.name,
 role: user?.role || "user",

  };

  console.log(propertyData);
  

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/housepost`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
   
  },
  body: JSON.stringify(propertyData),
});

    const data = await res.json();

    if (data.acknowledged) {      
     alert("Book added successfully ✅");

      // ✅ FORM RESET
      form.reset();
     
    } else {
      alert("Failed to save ❌");
    }
  } catch (err) {
    
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

        <form onSubmit={handleSubmit}  className="space-y-3">

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
/>
            </div>

            <div>
              <label className="font-medium mb-2 block">
                Property Type
              </label>

             <select
  name="propertyType"
  className="w-full border rounded-lg p-3"
>
  <option>Apartment</option>
  <option>House</option>
  <option>Villa</option>
  <option>Office</option>
  <option>Commercial</option>
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
              />
            </div>

            {/* <div>
              <label className="font-medium mb-2 block">
                Bedrooms
              </label>

              <input
                type="number"
                placeholder="3"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="font-medium mb-2 block">
                Bathrooms
              </label>

              <input
                type="number"
                placeholder="2"
                className="w-full border rounded-lg p-3"
              />
            </div> */}

            {/* <div>
              <label className="font-medium mb-2 block">
                Area (sq ft)
              </label>

              <input
                type="number"
                placeholder="1800"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="font-medium mb-2 block">
                Status
              </label>

              <select className="w-full border rounded-lg p-3">
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
            </div> */}

          </div>

          <div>
            <label className="font-medium mb-2 block">
              Property Image URL
            </label>

            <input
              type="text"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="font-medium mb-2 block">
              Short Description
            </label>

            <textarea
              name="shortDescription"
              rows={2}
              className="w-full border rounded-lg p-1"
              placeholder="Write a short description..."
            />
          </div>

          <div>
            <label className="font-medium mb-2 block">
              Full Description
            </label>

            <textarea
              name="fullDescription"
              rows={2}
              className="w-full border rounded-lg p-3"
              placeholder="Write complete property details..."
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