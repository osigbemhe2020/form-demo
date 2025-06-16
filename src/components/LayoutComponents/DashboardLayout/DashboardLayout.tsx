'use client';

import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DashboardHeader from '../DashboardHeader/Header';
import "./DashboardLayout.css";

interface DashboardLayoutProps {
  children: React.ReactNode;
  user: {
    name: string;
    role: "artisan" | "client" | "professional" | "admin";
  };
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, user }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar if clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isSidebarOpen]);

  return (
    <div className="relative flex h-screen overflow-hidden">
      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-[#00000060] bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 z-30 w-58 transform bg-white transition-transform duration-300 ease-in-out md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:static md:inset-0`}
      >
        <Sidebar userRole={user.role} onCloseMobile={() => setSidebarOpen(false)} />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 w-full overflow-y-auto">
        <DashboardHeader user={user} onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="p-4 md:p-6 bg-gray-100 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
