import "@/app/globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}