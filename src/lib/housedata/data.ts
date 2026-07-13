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