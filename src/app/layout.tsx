import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Seblak Prasmanan Lubis",
  description:
    "Seblak Prasmanan Lubis menyediakan berbagai macam jenis seblak dengan tambahan berbagai jenis topping dan tingkat kepedasan yang dapat disesuaikan!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
