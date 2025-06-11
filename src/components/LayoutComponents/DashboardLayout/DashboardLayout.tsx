'use client';

import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DashboardHeader from '../DashboardHeader/Header';
import "./DashboardLayout.css"

interface DashboardLayoutProps {
  children: React.ReactNode;
  user: {
    name: string;
    role: string;
  };
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, user }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-style">
        <DashboardHeader user={user} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
