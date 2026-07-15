export interface Property {
  _id: string;
  title: string;
  propertyType: string;
  location: string;
  price: number;
  image: string;
  shortDescription: string;
  fullDescription: string;
  status: "published";
  createdAt: string;
  email: string;
  userName: string;
}

export const FeaturedData = async (): Promise<Property[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/housepost/published/four`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch featured properties");
  }
  const data: Property[] = await res.json();
  return data;
};





export const HouseSingleData = async (id: string | number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/housepost/published/${id}`
  );

  return res.json();
};




export const AllHousesData = async (page?: number): Promise<Property[]> => {
  if(!page) {
    page = 1;
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/housepost/published?page=${page}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch all properties");
  }
  const data: Property[] = await res.json();
  return data;
};

