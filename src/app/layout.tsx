'use client';

import "@/app/globals.css";
import { Geist } from 'next/font/google';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import DashboardLayout from '@/components/LayoutComponents/DashboardLayout/DashboardLayout';

const geist = Geist({ subsets: ['latin'] });

export const metadata = {
  title: "Konnect-U",
  description: "The Official Website for Konnect-U",
};

type UserRole = 'artisan' | 'client' | 'professional' | 'admin';

type User = {
  name: string;
  role: UserRole;
};

export default function RootDashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const getRoleFromPath = (): UserRole => {
    if (pathname.startsWith('/admin')) return 'admin';
    if (pathname.startsWith('/artisan')) return 'artisan';
    if (pathname.startsWith('/client')) return 'client';
    if (pathname.startsWith('/professional')) return 'professional';
    return 'client';
  };

  const user: User = {
    name: 'Chris Davies',
    role: getRoleFromPath(),
  };

  return (
    <html lang="en">
      <body className={geist.className}>
        <DashboardLayout user={user}>
          {children}
        </DashboardLayout>
      </body>
    </html>
  );
}
