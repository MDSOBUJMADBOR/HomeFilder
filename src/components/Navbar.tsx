
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiHome, HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { authClient, useSession } from "@/lib/auth-client";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Explore",
    href: "/House",
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

  const { data: session } = useSession();
  const role = (session?.user as any)?.role;

  const userData = authClient.useSession();
  const user = userData.data?.user;

  // Hide navbar inside dashboard
  if (pathname.includes("/dashboard")) {
    return null;
  }

  const handleSignOut = async () => {
    await authClient.signOut();
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-8">
        {/* =====================================================
            LOGO
        ====================================================== */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5"
        >
          {/* Logo Icon */}
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-blue-600/30">
            <HiHome className="text-[22px] text-white" />

            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-cyan-300" />
          </div>

          {/* Brand */}
          <div className="leading-none">
            <h1 className="text-[21px] font-extrabold tracking-tight">
              <span className="text-slate-900">Home</span>
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Finder
              </span>
            </h1>

            <p className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:block">
              Find Your Place
            </p>
          </div>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-1.5">
            {navLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(`${item.href}/`));

              return (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={`relative flex items-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-white text-blue-600 shadow-sm ring-1 ring-slate-200/70"
                        : "text-slate-600 hover:bg-white hover:text-blue-600"
                    }`}
                  >
                    {item.title}

                    {/* Active indicator */}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-600" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* =====================================================
            DESKTOP AUTH AREA
        ====================================================== */}
        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              {/* User */}
              <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-xs font-bold text-white">
                  {user.name?.charAt(0)?.toUpperCase() || "U"}
                </div>

                <div className="max-w-[110px]">
                  <p className="truncate text-xs font-bold text-slate-800">
                    {user.name}
                  </p>

                  <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    {role || "User"}
                  </p>
                </div>
              </div>

              {/* Dashboard */}
              <Link
                href={`/dashboard/${role}/overview`}
                className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-100"
              >
                Dashboard
              </Link>

              {/* Logout */}
              <button
                onClick={handleSignOut}
                className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-lg hover:shadow-red-600/20"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login */}
              <Link
                href="/signin"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                Login
              </Link>

              {/* Register */}
              <Link
                href="/signup"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/30"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 md:hidden"
        >
          {open ? (
            <HiX className="text-2xl" />
          ) : (
            <HiMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <div
        className={`overflow-hidden border-t border-slate-200/80 bg-white transition-all duration-300 md:hidden ${
          open
            ? "max-h-[600px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
          {/* Mobile navigation */}
          <nav>
            <div className="space-y-1.5">
              {navLinks.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" &&
                    pathname.startsWith(`${item.href}/`));

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                    }`}
                  >
                    <span>{item.title}</span>

                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-blue-600" />
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Mobile auth */}
          <div className="mt-5 border-t border-slate-100 pt-5">
            {user ? (
              <div className="space-y-3">
                {/* User card */}
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 font-bold text-white shadow-md shadow-blue-600/20">
                    {user.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-900">
                      {user.name}
                    </p>

                    <p className="truncate text-xs text-slate-500">
                      {user.email}
                    </p>

                    <span className="mt-1 inline-block text-[10px] font-bold uppercase tracking-wider text-blue-600">
                      {role || "User"}
                    </span>
                  </div>
                </div>

                {/* Dashboard */}
                <Link
                  href={`/dashboard/${role}/overview`}
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700"
                >
                  Dashboard
                </Link>

                {/* Logout */}
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="w-full rounded-xl border border-red-100 bg-red-50 py-3 text-sm font-bold text-red-600 transition-all duration-300 hover:bg-red-100"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/signin"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-xl border border-slate-200 bg-white py-3 text-sm font-bold text-slate-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

