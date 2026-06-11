import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanidhya Pratap | Data Scientist & Web Developer",
  description:
    "Portfolio of Sanidhya Pratap featuring AI, Machine Learning, Data Science, Web Development projects, blogs, and technical content.",
  keywords: [
    "Sanidhya Pratap",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Web Development",
    "Next.js",
    "React",
    "Portfolio",
  ],
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
