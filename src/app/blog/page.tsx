import { CalendarDays, User, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "10 Tips for First-Time Home Buyers",
    description:
      "Buying your first home can be exciting and overwhelming. Here are ten practical tips to help you make the right decision.",
    author: "Admin",
    date: "July 14, 2026",
    category: "Buying Guide",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Rental Property",
    description:
      "Learn what factors you should consider before renting a house or apartment to avoid common mistakes.",
    author: "HomeFinder Team",
    date: "July 10, 2026",
    category: "Rental",
  },
  {
    id: 3,
    title: "Top Real Estate Trends in 2026",
    description:
      "Discover the latest real estate trends, smart homes, and investment opportunities shaping the housing market.",
    author: "Market Analyst",
    date: "July 5, 2026",
    category: "Market News",
  },
  {
    id: 4,
    title: "Home Maintenance Checklist Every Owner Needs",
    description:
      "Keep your property in excellent condition with this essential home maintenance checklist for every season.",
    author: "Property Expert",
    date: "June 28, 2026",
    category: "Home Care",
  },
  {
    id: 5,
    title: "How to Increase Your Property Value",
    description:
      "Simple renovations and improvements that can significantly boost your property's market value.",
    author: "Real Estate Advisor",
    date: "June 20, 2026",
    category: "Investment",
  },
  {
    id: 6,
    title: "Mistakes to Avoid When Selling Your Home",
    description:
      "Selling your home? Avoid these common mistakes to sell faster and get the best possible price.",
    author: "HomeFinder Team",
    date: "June 15, 2026",
    category: "Selling Guide",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Our Blog
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-blue-100">
            Stay updated with the latest real estate news, buying guides,
            rental tips, and property investment insights.
          </p>
        </div>
      </section>

      {/* Blogs */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Placeholder Image */}
              <div className="flex h-52 items-center justify-center rounded-t-2xl bg-gradient-to-r from-blue-100 to-indigo-100">
                <span className="text-lg font-semibold text-blue-700">
                  {blog.category}
                </span>
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={16} />
                    {blog.date}
                  </span>

                  <span className="flex items-center gap-1">
                    <User size={16} />
                    {blog.author}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900">
                  {blog.title}
                </h2>

                <p className="mt-3 text-gray-600">
                  {blog.description}
                </p>

                <Link
                  href={`/blog/${blog.id}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  Read More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}