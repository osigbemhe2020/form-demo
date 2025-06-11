import type { ReactNode } from 'react';
import DashboardLayout from '@/components/LayoutComponents/DashboardLayout/DashboardLayout';

export default function RootDashboardLayout({ children }: { children: ReactNode }) {
  // You can extract role from pathname, user session, or metadata
  // Here's a placeholder fallback
  const user = {
    name: 'Chris Davies',
    role: 'Admin', // You can dynamically set this based on session or route
  };

  return <DashboardLayout user={user}>{children}</DashboardLayout>;
}
