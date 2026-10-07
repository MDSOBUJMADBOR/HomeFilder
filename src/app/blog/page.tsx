
import {
  ArrowRight,
  CalendarDays,
  User,
  Sparkles,
  BookOpen,
  TrendingUp,
} from "lucide-react";
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
    <main className="overflow-hidden bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-50 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage:
                "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
              backgroundSize: "65px 65px",
              maskImage:
                "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-8">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            <Sparkles className="h-4 w-4" />
            HomeFinder Journal
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Insights for Your
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Property Journey
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
            Explore expert advice, real estate trends, buying guides, rental
            tips, and practical insights to help you make smarter property
            decisions.
          </p>

          {/* Trust stats */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm">
              <BookOpen className="h-4 w-4 text-blue-600" />
              Expert Guides
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm">
              <TrendingUp className="h-4 w-4 text-cyan-600" />
              Market Insights
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm">
              <Sparkles className="h-4 w-4 text-blue-600" />
              Property Tips
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BLOG SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-50/60 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
          {/* Section heading */}
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 shadow-sm">
                <BookOpen className="h-3.5 w-3.5" />
                Latest Articles
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                From the HomeFinder
                <span className="ml-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Blog
                </span>
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Helpful knowledge and practical advice for buyers, renters,
                sellers, and property investors.
              </p>
            </div>

            <div className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500 shadow-sm sm:block">
              {blogs.length} Articles
            </div>
          </div>

          {/* Blog grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
              >
                {/* Top accent */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Image / Category area */}
                <div className="relative flex h-52 items-end overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 p-6">
                  {/* Decorative circles */}
                  <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border-[18px] border-white/40" />

                  <div className="absolute -bottom-14 -left-10 h-36 w-36 rounded-full bg-blue-200/30 blur-2xl" />

                  <div className="relative z-10">
                    <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 shadow-sm backdrop-blur">
                      {blog.category}
                    </span>

                    <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-md">
                      <BookOpen className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Article number */}
                  <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/80 text-xs font-extrabold text-slate-500 shadow-sm backdrop-blur">
                    0{blog.id}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-blue-500" />
                      {blog.date}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-cyan-500" />
                      {blog.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mt-4 line-clamp-2 text-xl font-extrabold leading-7 text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {blog.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                    {blog.description}
                  </p>

                  {/* Read more */}
                  <Link
                    href={`/blog/${blog.id}`}
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 text-center sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-200/30 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                <TrendingUp className="h-5 w-5" />
              </div>

              <h2 className="mt-5 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Ready to Find Your Next Property?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Turn what you&apos;ve learned into action. Explore available
                properties and find a place that fits your needs.
              </p>

              <Link
                href="/House"
                className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
              >
                Browse Properties
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

