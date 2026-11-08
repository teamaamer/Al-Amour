import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "شركة العامور - منتجات دهانات متميزة وحلول تجارية | Al-Amour Company",
  description: "مورد رائد للأخشاب والدهانات وبوليستر الريزن ولوازمه وحلول التشطيب في فلسطين | Leading supplier of timber, paints, polyester resin and finishing solutions in Palestine",
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
