
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  User,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { blogs } from "@/lib/blogs";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogDetails({ params }: Props) {
  const { id } = await params;

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    notFound();
  }

  return (
    <main className="overflow-hidden bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-20">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-50 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage:
                "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
              backgroundSize: "65px 65px",
              maskImage:
                "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          {/* Back button */}
          <Link
            href="/blog"
            className="group mb-8 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-md"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Blogs
          </Link>

          {/* Category */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
              <Sparkles className="h-3.5 w-3.5" />
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {blog.title}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg">
            {blog.description}
          </p>

          {/* Meta */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-500 shadow-sm">
              <CalendarDays className="h-4 w-4 text-blue-600" />
              {blog.date}
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-500 shadow-sm">
              <User className="h-4 w-4 text-cyan-600" />
              {blog.author}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTICLE
      ====================================================== */}
      <section className="relative bg-slate-50/60 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          {/* Article card */}
          <article className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
            {/* Top gradient */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400" />

            <div className="p-6 sm:p-10 lg:p-14">
              {/* Article header */}
              <div className="mb-8 flex items-center gap-4 border-b border-slate-100 pb-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <BookOpen className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    HomeFinder Journal
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    Property Insights &amp; Expert Advice
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-slate max-w-none">
                <p className="whitespace-pre-line text-[15px] leading-8 text-slate-600 sm:text-base sm:leading-9">
                  {blog.content}
                </p>
              </div>

              {/* Article footer */}
              <div className="mt-10 border-t border-slate-100 pt-8">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Found this article helpful?
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Explore more property insights from HomeFinder.
                    </p>
                  </div>

                  <Link
                    href="/blog"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-5 py-3 text-sm font-bold text-blue-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-100"
                  >
                    More Articles
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Bottom navigation */}
          <div className="mt-8">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to all articles
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 text-center sm:p-10">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
              <Sparkles className="h-5 w-5" />
            </div>

            <h2 className="mt-5 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Ready to Explore Properties?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Put these insights into action and discover properties that
              match your goals and lifestyle.
            </p>

            <Link
              href="/House"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Browse Properties
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

