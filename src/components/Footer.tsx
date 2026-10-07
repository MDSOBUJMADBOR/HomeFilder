
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import {
  HiHome,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiArrowRight,
} from "react-icons/hi2";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const supportLinks = [
  { name: "Help Center", href: "/help-center" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Refund Policy", href: "/refund-policy" },
];

const socialLinks = [
  {
    icon: <FaFacebookF />,
    href: "https://facebook.com",
    label: "Facebook",
    bg: "hover:bg-blue-600",
  },
  {
    icon: <FaTwitter />,
    href: "https://twitter.com",
    label: "Twitter",
    bg: "hover:bg-sky-500",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://linkedin.com",
    label: "LinkedIn",
    bg: "hover:bg-blue-700",
  },
  {
    icon: <FaInstagram />,
    href: "https://instagram.com",
    label: "Instagram",
    bg: "hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-50 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label="HomeFinder Home"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-200/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-blue-200/70">
                <HiHome className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  <span className="text-slate-900">Home</span>
                  <span className="text-blue-600">Finder</span>
                </h2>

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  Find Your Place
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500">
              Find your perfect home with confidence. Explore verified
              properties, connect with trusted agents, and discover a place
              you&apos;ll love to call home.
            </p>

            {/* Mini Trust Card */}
            <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                <HiHome className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-900">
                  Trusted Property Platform
                </p>

                <p className="mt-0.5 text-[11px] text-slate-500">
                  Find. Compare. Move.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-wider text-slate-900">
              Quick Links
            </h3>

            <ul className="space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
                  >
                    <span>{item.name}</span>

                    <HiArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-wider text-slate-900">
              Support
            </h3>

            <ul className="space-y-3.5">
              {supportLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-all duration-300 hover:translate-x-1 hover:text-blue-600"
                  >
                    <span>{item.name}</span>

                    <HiArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-wider text-slate-900">
              Contact Us
            </h3>

            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:+8801234567890"
                className="group flex items-start gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <HiOutlinePhone className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-600 transition-colors group-hover:text-blue-600">
                    +880 1234 567890
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@homefinder.com"
                className="group flex items-start gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <HiOutlineEnvelope className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm font-medium text-slate-600 transition-colors group-hover:text-blue-600">
                    info@homefinder.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="group flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <HiOutlineMapPin className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-600">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-wider text-slate-900">
              Follow Us
            </h3>

            <p className="mb-5 text-sm leading-6 text-slate-500">
              Follow us for property updates, market insights, and new
              listings.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={`group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:text-white hover:shadow-lg ${item.bg}`}
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-slate-900">HomeFinder</span>. All
            rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs font-medium text-slate-400">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-blue-600"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-blue-600"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

