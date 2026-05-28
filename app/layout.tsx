
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextApp — Modern Starter",
  description: "A production-ready Next.js 14 starter with TypeScript, Tailwind CSS, and App Router.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grain">
        {children}
      </body>
    </html>
  );
}
