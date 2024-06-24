import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import NavBar from "./components/Navbar";



export const metadata: Metadata = {
  title: "Hardware Hub",
  description: "O maior e-commerce de hardware e periféricos do Brasil!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="bg-slate-200 min-h-screen p-16">
          {children}
        </main>
      </body>
    </html>
  );
}
