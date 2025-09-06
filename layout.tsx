import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portal Karier Dosen - Fakultas Hukum",
  description: "Portal Karier Dosen dan Tendik Fakultas Hukum",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-roboto text-sm bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
