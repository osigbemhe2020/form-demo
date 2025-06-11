'use client';

import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import "@/components/LayoutComponents/DashboardHeader/Header.css"

type UserProps = {
  name: string;
  role: string;
};

const DashboardHeader: React.FC<{ user?: UserProps }> = ({ user }) => {
  return (
    <header className="header-style">
      <div className="flex items-center bg-gray-200 px-4 py-2 rounded-md w-80">
        <FiSearch className="mr-2 text-gray-500" />
        <input
          type="text"
          placeholder="Search items, collections, and users"
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <IoMdNotificationsOutline className="text-xl" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </div>

        <div className="flex items-center gap-2">
          <img src="/profile.jpg" alt="profile" className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-sm font-semibold">{user?.name || 'Chris Davies'}</p>
            <p className="text-xs text-gray-500">{user?.role || 'Admin'}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
