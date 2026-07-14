import Link from "next/link";
import { ArrowLeft, CalendarDays, User } from "lucide-react";
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
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          {/* Back Button */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/20"
          >
            <ArrowLeft size={18} />
            Back to Blogs
          </Link>

          <div>
            <span className="rounded-full bg-white/20 px-4 py-2">
            {blog.category}
          </span>
          </div>

          <h1 className="mt-6 text-5xl font-bold">
            {blog.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-8">
            <span className="flex items-center gap-2">
              <CalendarDays size={18} />
              {blog.date}
            </span>

            <span className="flex items-center gap-2">
              <User size={18} />
              {blog.author}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <article className="rounded-2xl bg-white p-10 shadow-lg">
          <p className="whitespace-pre-line leading-9 text-gray-700">
            {blog.content}
          </p>
        </article>

        {/* Bottom Back Button */}
        {/* <div className="mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <ArrowLeft size={18} />
            Back to Blogs
          </Link>
        </div> */}
      </section>
    </main>
  );
}