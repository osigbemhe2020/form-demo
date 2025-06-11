'use client';

import React from 'react';
import "@/components/LayoutComponents/Sidebar/Sidebar.css"

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar-style">
      <nav className="p-4 space-y-4">
        <a href="#">Dashboard</a>
        <a href="#">Orders</a>
        <a href="#">Messages</a>
        <a href="#">Settings</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
