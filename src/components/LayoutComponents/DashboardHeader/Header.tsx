'use client';

import React from 'react';
import { FiSearch, FiMenu } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import "@/components/LayoutComponents/DashboardHeader/Header.css";


type UserProps = {
  name: string;
  role: string;
};

interface DashboardHeaderProps {
  user?: UserProps;
  onToggleSidebar?: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ user, onToggleSidebar }) => {
  return (
    <header className="header-style px-3 flex justify-between items-center lg:px-4 py-3 bg-white fixed left-0 top-0 lg:left-58 right-0 z-10">
      {/* Sidebar Toggle (Mobile Only) */}
      <button
        className="block lg:hidden text-3xl text-gray-700"
        onClick={onToggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <FiMenu />
      </button>

      {/* Search Bar (hidden on mobile) */}
      <div className="search-input hidden md:flex items-center gap-3 bg-gray-200 rounded-md px-3 py-2 w-80">
        <FiSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search items, collections, and users"
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        <div className="notification-wrapper relative">
          <IoMdNotificationsOutline className="text-xl text-gray-700" />
          <span className="notification-dot absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border border-white" />
        </div>

        <div className="flex items-center gap-2">
          <img
            src="/Images/profile-image.jpg"
            alt="profile"
            className="w-26 h-9 md:w-9 md:h-9 object-cover rounded-full border border-[#858585]"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold">{user?.name || 'Chris Davies'}</p>
            <p className="text-xs text-gray-500">{user?.role || 'Admin'}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
