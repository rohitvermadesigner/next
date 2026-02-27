import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./custom.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Accountants And Auditors In Dubai | Excellence",
//   description: "We are the best accountants and auditors in Dubai. Excellence Auditing and Business Consultants are committed to providing the highest level of professional services.",
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://www.excellenceauditing.com"),

  title: "Accountants And Auditors In Dubai | Excellence",

  description:
    "We are the best accountants and auditors in Dubai. Excellence Auditing and Business Consultants are committed to providing the highest level of professional services.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Accountants And Auditors In Dubai | Excellence",
    description:
      "We are the best accountants and auditors in Dubai. Excellence Auditing and Business Consultants are committed to providing the highest level of professional services.",
    url: "https://www.excellenceauditing.com/",
    siteName: "Excellence Auditing & Business Consultants",
    locale: "en_US",
    type: "website", // ✅ keep as website
  },

  twitter: {
    card: "summary_large_image",
    title: "Accountants And Auditors In Dubai | Excellence",
    description:
      "We are the best accountants and auditors in Dubai. Excellence Auditing and Business Consultants are committed to providing the highest level of professional services.",
  },

  other: {
    "article:publisher": "https://www.facebook.com/excellenceauditing",
    "article:modified_time": "2026-02-16T05:43:18+00:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {/* <main className="h-dvh"> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
