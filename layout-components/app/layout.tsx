import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { LayoutProps } from "@/types/LayoutProps";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Layout components",
  description: "React design patterns",
};

function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default RootLayout;
