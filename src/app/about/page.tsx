import { Building2, Users, ShieldCheck, Award } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { value: "2,500+", label: "Properties Listed" },
    { value: "1,200+", label: "Happy Clients" },
    { value: "50+", label: "Professional Agents" },
    { value: "99%", label: "Customer Satisfaction" },
  ];

  const features = [
    {
      icon: Building2,
      title: "Wide Property Selection",
      description:
        "Browse apartments, family homes, villas, and commercial spaces in one place.",
    },
    {
      icon: Users,
      title: "Trusted Agents",
      description:
        "Our verified agents help buyers, sellers, and renters throughout every step.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Platform",
      description:
        "We focus on transparency, verified listings, and a safe experience for everyone.",
    },
    {
      icon: Award,
      title: "Quality Service",
      description:
        "We strive to provide exceptional customer support and reliable property solutions.",
    },
  ];

  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            About HomeFinder
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            HomeFinder is a modern real estate platform that helps people
            discover, rent, buy, and sell properties with confidence.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Who We Are
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              HomeFinder connects property owners, buyers, renters, and
              trusted real estate agents through one easy-to-use platform.
              Our goal is to simplify the property search process while
              providing accurate information and a seamless user experience.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Whether you're searching for your dream home, renting an
              apartment, or listing your own property, HomeFinder provides
              the tools you need to make informed decisions.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
              Why Choose Us?
            </h3>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div key={index} className="flex gap-4">
                    <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {feature.title}
                      </h4>

                      <p className="mt-1 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-gray-50 p-8 text-center shadow-sm"
            >
              <h3 className="text-4xl font-bold text-blue-600">
                {item.value}
              </h3>

              <p className="mt-3 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-blue-600 p-10 text-center text-white md:p-16">
          <h2 className="text-3xl font-bold">
            Our Mission
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            To make finding, buying, renting, and managing properties
            easier by providing a trusted, transparent, and user-friendly
            digital platform for everyone.
          </p>
        </div>
      </section>
    </main>
  );
}