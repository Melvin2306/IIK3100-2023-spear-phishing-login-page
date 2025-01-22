import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sign in to your account",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-yellow-100 text-black text-center p-2 text-sm">
          This page was created for an ethical hacking course and is only used
          for educational purposes. No input is saved.
        </header>
        {children}
      </body>
    </html>
  );
}
