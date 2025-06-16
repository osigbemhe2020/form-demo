"use client";

import React from "react";
import "@/components/LayoutComponents/Sidebar/Sidebar.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiX } from "react-icons/fi";

import DashboardIcon from "@/components/ReusableComponents/Icons/DashboardIcon";
import MessageIcon from "@/components/ReusableComponents/Icons/MessageIcon";
import JobsIcon from "@/components/ReusableComponents/Icons/JobsIcon";
import ProfileIcon from "@/components/ReusableComponents/Icons/ProfileIcon";
import SettingsIcon from "@/components/ReusableComponents/Icons/SettingsIcon";
import ArtisanIcon from "@/components/ReusableComponents/Icons/ArtisanIcon";
import ProfessionalIcon from "@/components/ReusableComponents/Icons/ProfessionalIcon";
import ReviewIcon from "@/components/ReusableComponents/Icons/ReviewIcon";
import ClientIcon from "@/components/ReusableComponents/Icons/ClientIcon";
import PaymentIcon from "@/components/ReusableComponents/Icons/PaymentIcon";
import LogoutIcon from "@/components/ReusableComponents/Icons/LogoutIcon";

interface SidebarProps {
  userRole: "artisan" | "professional" | "client" | "admin";
  onCloseMobile?: () => void; // Optional close button handler
}

const Sidebar: React.FC<SidebarProps> = ({ userRole, onCloseMobile }) => {
  const pathname = usePathname();
  const baseRoute = `/${userRole}`;

  const navItems =
    userRole === "admin"
      ? [
          { href: `${baseRoute}`, label: "Home", icon: DashboardIcon },
          { href: `${baseRoute}/artisan`, label: "Artisan", icon: ArtisanIcon },
          {
            href: `${baseRoute}/professional`,
            label: "Professional",
            icon: ProfessionalIcon,
          },
          { href: `${baseRoute}/client`, label: "Client", icon: ClientIcon },
          { href: `${baseRoute}/message`, label: "Message", icon: MessageIcon },
          { href: `${baseRoute}/jobs`, label: "Jobs", icon: JobsIcon },
          { href: `${baseRoute}/reviews`, label: "Reviews", icon: ReviewIcon },
          {
            href: `${baseRoute}/payments`,
            label: "Payments",
            icon: PaymentIcon,
          },
        ]
      : [
          { href: `${baseRoute}`, label: "Home", icon: DashboardIcon },
          { href: `${baseRoute}/message`, label: "Message", icon: MessageIcon },
          { href: `${baseRoute}/jobs`, label: "Jobs", icon: JobsIcon },
          { href: `${baseRoute}/profile`, label: "Profile", icon: ProfileIcon },
        ];

  const bottomNavItems = [
    { href: `${baseRoute}/settings`, label: "Settings", icon: SettingsIcon },
    { href: "/logout", label: "Logout", icon: LogoutIcon },
  ];

  return (
    <aside className="sidebar-style flex flex-col justify-between h-screen overflow-auto hide-scrollbar relative">
      {/* Mobile Close Button */}
      {onCloseMobile && (
        <button
          className="absolute top-4 right-4 md:hidden text-gray-600"
          onClick={onCloseMobile}
          aria-label="Close Sidebar"
        >
          <FiX size={24} />
        </button>
      )}

      {/* Top Section */}
      <div className="flex flex-col gap-[50px]">
        <figure className="w-full flex items-center justify-center pt-6">
          <Image
            src="/konnectu-logo.svg"
            height={80}
            width={100}
            alt="KonnectU logo"
          />
        </figure>

        <nav className="p-4 space-y-4 flex flex-col">
          {/* Navigation items */}
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <React.Fragment key={href}>
                <Link
                  href={href}
                  className={`link-style flex items-center gap-2 ${
                    isActive
                      ? "text-[#070F65] font-semibold rounded-l-[4px] border-l-[#070F65] border-l-[6px]"
                      : "text-[#6B6A6A]"
                  }`}
                >
                  <Icon
                    size={24}
                    isActive={isActive}
                    className="transition-opacity hover:opacity-80"
                  />
                  {label}
                </Link>
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <nav className="p-4 space-y-4 flex flex-col border-t border-gray-200">
        {bottomNavItems.map(({ href, label, icon: Icon }, index) => {
          const isActive = pathname === href;

          // Style only 'Settings' as active
          const isSettings = index === 0;

          const linkClass = isSettings
            ? isActive
              ? "text-[#070F65] font-semibold rounded-l-[4px] border-l-[#070F65] border-l-[6px]"
              : "text-[#6B6A6A]"
            : "text-red-600 font-semibold";

          return (
            <Link
              key={href}
              href={href}
              className={`link-style flex items-center gap-2 ${linkClass}`}
            >
              <Icon
                size={24}
                isActive={isSettings && isActive}
                className="transition-opacity hover:opacity-80"
              />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
