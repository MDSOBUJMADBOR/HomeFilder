"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi2";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Explore",
    href: "/explore",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-50 w-full  shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <HiHome className="text-3xl text-blue-600" />
          <h1 className="text-2xl font-bold">
            <span className="text-gray-900">Home</span>
            <span className="text-blue-600">Finder</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Buttons */}
        <div className="hidden items-center gap-4 md:flex">
         <Link href="/signin">
            <button className="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
              Register
            </button>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl md:hidden"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="space-y-3 px-6 py-6">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-4 py-2 transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}

        <div className="flex flex-col gap-3 mt-4">
             <Link href="/signin">
              <button className="w-full rounded-md bg-blue-600 py-2 text-white">
                Login
              </button>
            </Link>

            <Link href="/signup">
              <button className="w-full rounded-md bg-blue-600 py-2 text-white">
                Register
              </button>
            </Link>
        </div>
          </div>
        </div>
      )}
    </header>
  );
}