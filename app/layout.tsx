import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "طارق خان سکریپ ڈیلر",
  description:
    "پرانے بریکر، کنڈیکٹر، ریلے، موبائل اور کمپیوٹر سرکٹ کے سکریپ کی خریداری کے لیے رابطہ کریں۔"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ur" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
