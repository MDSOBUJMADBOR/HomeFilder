
import Link from "next/link";
import {
  Building2,
  Users,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Home,
} from "lucide-react";

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
        "Browse apartments, family homes, villas, and commercial spaces in one convenient place.",
    },
    {
      icon: Users,
      title: "Trusted Agents",
      description:
        "Our verified agents help buyers, sellers, and renters throughout every step of their journey.",
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
    <main className="overflow-hidden bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-50 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.3]"
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
            About HomeFinder
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Making Your Property
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Journey Easier
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg">
            HomeFinder is a modern real estate platform designed to help
            people discover, rent, buy, and sell properties with confidence,
            transparency, and ease.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/House"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
            >
              <Home className="h-4 w-4" />
              Explore Properties
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              Contact Us
            </Link>
          </div>

          {/* Trust */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              Verified Properties
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              Trusted Agents
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              Secure Experience
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left Content */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600 shadow-sm">
                <Users className="h-4 w-4" />
                Who We Are
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                A Better Way to Find Your
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Perfect Property
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-500 sm:text-lg">
                HomeFinder connects property owners, buyers, renters, and
                trusted real estate agents through one easy-to-use platform.
                Our goal is to simplify the property search process while
                providing accurate information and a seamless user experience.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-500 sm:text-lg">
                Whether you&apos;re searching for your dream home, renting an
                apartment, or listing your own property, HomeFinder provides
                the tools you need to make informed decisions.
              </p>

              {/* Points */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Verified property listings",
                  "Simple property discovery",
                  "Trusted real estate agents",
                  "Transparent information",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Feature Card */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-blue-100 to-cyan-100 blur-xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70 sm:p-8">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Why HomeFinder
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                      Everything in One Place
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                </div>

                <div className="space-y-4">
                  {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="group flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-100 hover:bg-blue-50/50"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h4 className="font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                            {feature.title}
                          </h4>

                          <p className="mt-1.5 text-sm leading-6 text-slate-500">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATISTICS
      ====================================================== */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              HomeFinder in Numbers
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Growing With Our Community
            </h2>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {stats.map((item) => (
              <div
                key={item.label}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 sm:p-8"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Building2 className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-500 px-6 py-14 text-center shadow-2xl shadow-blue-200/60 sm:px-10 sm:py-16 lg:px-20">
            {/* Decorations */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />

            <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full border-[40px] border-white/10" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white backdrop-blur-md">
                <Award className="h-7 w-7" />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
                Our Mission
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Making Property Decisions
                <span className="block text-cyan-100">
                  Simple &amp; Confident
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-blue-50 sm:text-base sm:leading-8">
                To make finding, buying, renting, and managing properties
                easier by providing a trusted, transparent, and user-friendly
                digital platform for everyone.
              </p>

              <Link
                href="/House"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
              >
                Explore Properties

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

