import React from "react";

type Stat = {
  id: number;
  value: string;
  label: string;
};

const stats: Stat[] = [
  {
    id: 1,
    value: "10K+",
    label: "Happy Customers",
  },
  {
    id: 2,
    value: "500+",
    label: "Properties Listed",
  },
  {
    id: 3,
    value: "15+",
    label: "Cities Covered",
  },
  {
    id: 4,
    value: "99%",
    label: "Satisfaction Rate",
  },
];

const Stats = () => {
  return (
    <section className="bg-[#0A2A66] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id}>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                {stat.value}
              </h2>

              <p className="mt-2 text-sm text-gray-300 md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;