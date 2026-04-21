import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "شركة العمور - منتجات دهانات متميزة وحلول تجارية | Al-Amour Company",
  description: "مورد رائد لمنتجات الدهانات المتميزة وحلول التشطيب في فلسطين | Leading supplier of premium paint products in Palestine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
