import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "The Apostolic Church Canada (TACC) - Faith, Community, Hope",
  description:
    "Welcome to The Apostolic Church Canada. Join our community for worship, discipleship, and spiritual growth. Located across Canada with a mission to spread the Gospel.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/tacclogo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/tacclogo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/tacclogo.png",
        type: "image/png",
      },
    ],
    apple: "/tacclogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
