
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
    description: "Every property is carefully verified for your peace of mind.",
    icon: FaRegCheckCircle,
  },
  {
    id: 2,
    title: "Best Price",
    description: "Discover competitive prices and exclusive property deals.",
    icon: FaTags,
  },
  {
    id: 3,
    title: "Easy Search",
    description: "Find your perfect property quickly with our smart search.",
    icon: FaSearch,
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Our dedicated team is always ready to help you anytime.",
    icon: FaHeadset,
  },
];

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-50/70 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-50/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.id}
                  className="group relative p-6 transition-all duration-300 hover:bg-blue-50/40 sm:p-7 lg:p-8"
                >
                  {/* Top Accent */}
                  <div className="absolute left-0 top-0 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />

                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="relative shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-200 group-hover:bg-blue-600">
                        <Icon className="text-xl text-blue-600 transition-colors duration-300 group-hover:text-white" />
                      </div>

                      {/* Small glow */}
                      <div className="absolute inset-0 -z-10 rounded-2xl bg-blue-400/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-lg">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Arrow */}
                  <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    <span>Learn more</span>

                    <span className="text-sm">→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;


