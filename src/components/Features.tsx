import {
  FaRegCheckCircle,
  FaTags,
  FaSearch,
  FaHeadset,
} from "react-icons/fa";

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Verified Properties",
    description: "All properties are verified & trusted",
    icon: FaRegCheckCircle,
  },
  {
    id: 2,
    title: "Best Price",
    description: "Get the best deals at lowest price",
    icon: FaTags,
  },
  {
    id: 3,
    title: "Easy Search",
    description: "Search properties in just one click",
    icon: FaSearch,
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "We are here to help anytime",
    icon: FaHeadset,
  },
];

const Features = () => {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 rounded-xl border border-gray-200 bg-white p-8 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="flex items-start gap-4 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                  <Icon className="text-2xl text-blue-600" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;