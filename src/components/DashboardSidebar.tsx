
"use client";

import { authClient, useSession } from "@/lib/auth-client";
import {
  House,
  Person,
  Plus,
  Calendar,
  Circle,
  Bars ,
} from "@gravity-ui/icons";

import { Button, Drawer } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";

export default function DashboardSidebar() {
  const { data: session } = useSession();
const role = (session?.user as any)?.role;;

  const pathname = usePathname();

 

  // 🔥 Role-based menu
  const menus = {
    user: [
      {
        key: "overview",
        label: "Overview",
        icon: Person,
        href: "/dashboard/user/overview",
      },
      {
        key: "add-property",
        label: "Add Property",
        icon: Plus,
        href: "/dashboard/user/addproperty",
      },     
      {
        key: "my-properties",
        label: "My Properties",
        icon: Calendar,
        href: "/dashboard/user/myproperties",
      },
      {
        key: "my-reviews",
        label: "My Reviews",
        icon: Calendar,
        href: "/dashboard/user/myreviews",
      },
    ],
   

    admin: [
      {
        key: "overview",
        label: "Overview",
        icon: Circle,
        href: "/dashboard/admin/overview",
      },
      {
        key: "manage-users",
        label: "Manage Users",
        icon: Person,
        href: "/dashboard/admin/manageuser",
      },
      {
        key: "manage-properties",
        label: "Manage Properties",
        icon: Circle,
        href: "/dashboard/admin/manageproperties",
      },     
      
    ],
  };

const navItems = menus[role as keyof typeof menus] || [];

  const handleLogout =async () => {
   await authClient.signOut();
   redirect('/')
  };

  // 🔥 Sidebar Content
  const SidebarContent = (
    <div className="flex flex-col h-full bg-gradient-to-b from-[#0b0f2a] to-[#020617] text-white">

      {/* Logo */}
      {/* <div className="p-4 border-b border-white/10">
        <Image
          src="/bibliodrop_logo.png"
          width={120}
          height={40}
          alt="Logo"
          className="object-contain"
        />
      </div> */}

      {/* Profile */}
      <div className="p-4 border-b border-white/10 flex items-center gap-3">
        {/* <Image
          src={
            session?.user?.image ||
            `https://ui-avatars.com/api/?name=${session?.user?.name}`
          }
          width={40}
          height={40}
          className="rounded-full"
          alt="user"
        /> */}
        <div>
          <p className="text-sm font-semibold">{session?.user?.name}</p>
          <span className="text-xs text-gray-400">{role}</span>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all
                ${isActive
                  ? "bg-indigo-600 text-white"
                  : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
            >
              <item.icon className="size-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-white/10 space-y-2">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
        >
          <House className="size-5" />
          Home
        </Link>

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-white bg-red-500"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:flex flex-col w-64 h-screen  border-white/10">
        {SidebarContent}
      </aside>

      {/* Mobile */}
      <Drawer>
        <Button className="lg:hidden py-6  flex items-center gap-2 rounded-none">
          <Bars className="size-5" />
          Menu
        </Button>

        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Body className="p-0">
                {SidebarContent}
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}