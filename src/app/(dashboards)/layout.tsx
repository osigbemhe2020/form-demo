'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import DashboardLayout from '@/components/LayoutComponents/DashboardLayout/DashboardLayout';

type UserRole = 'artisan' | 'client' | 'professional' | 'admin';

type User = {
  name: string;
  role: UserRole;
};

export default function RootDashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Determine role based on the pathname
  const getRoleFromPath = (): UserRole => {
    if (pathname.startsWith('/admin')) return 'admin';
    if (pathname.startsWith('/artisan')) return 'artisan';
    if (pathname.startsWith('/client')) return 'client';
    if (pathname.startsWith('/professional')) return 'professional';
    return 'client'; // default fallback
  };

  const user: User = {
    name: 'Chris Davies',
    role: getRoleFromPath(),
  };

  return <DashboardLayout user={user}>{children}</DashboardLayout>;
}
