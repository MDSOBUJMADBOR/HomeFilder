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
    bg: "bg-blue-600",
  },
  {
    icon: <FaTwitter />,
    href: "https://twitter.com",
    bg: "bg-sky-500",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://linkedin.com",
    bg: "bg-blue-700",
  },
  {
    icon: <FaInstagram />,
    href: "https://instagram.com",
    bg: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <HiHome className="text-2xl text-blue-600" />

              <h2 className="text-2xl font-bold">
                <span className="text-gray-900">Home</span>
                <span className="text-blue-600">Finder</span>
              </h2>
            </Link>

            <p className="mt-5 text-sm leading-7 text-gray-600">
              We help you find the perfect home with ease and trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Support
            </h3>

            <ul className="space-y-3">
              {supportLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="mb-5 text-lg font-semibold">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <HiOutlinePhone className="text-blue-600" />

                <span className="text-sm text-gray-600">
                  +880 1234 567890
                </span>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlineEnvelope className="text-blue-600" />

                <span className="text-sm text-gray-600">
                  info@homefinder.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <HiOutlineMapPin className="mt-1 text-blue-600" />

                <span className="text-sm text-gray-600">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Follow Us
            </h3>

            <div className="flex gap-3">
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  className={`${item.bg} flex h-10 w-10 items-center justify-center rounded-full text-white transition duration-300 hover:scale-110`}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} HomeFinder. All rights reserved.
        </div>
      </div>
    </footer>
  );
}