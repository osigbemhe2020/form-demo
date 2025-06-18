import "@/app/globals.css";
import { Geist } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
})

export const metadata = {
  title: "Konnect-U",
  description: "The Official Website for Konnect-U",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.className}>
      <body>{children}</body>
    </html>
  )
}