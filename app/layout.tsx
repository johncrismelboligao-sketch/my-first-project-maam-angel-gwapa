import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Crismel Boligao | Personal Site",
  description: "A personal site built with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f7f3e8] text-[#172033]">
        <header className="border-b border-[#d7d0bd] bg-[#fffdf7]">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5"
          >
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-[#172033]"
            >
              Borny
            </Link>
            <div className="flex items-center gap-1 sm:gap-3">
              <Link
                href="/"
                className="rounded-md px-3 py-2 text-sm font-medium text-[#334155] transition hover:bg-[#e9eef2] hover:text-[#172033]"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="rounded-md px-3 py-2 text-sm font-medium text-[#334155] transition hover:bg-[#e9eef2] hover:text-[#172033]"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="rounded-md px-3 py-2 text-sm font-medium text-[#334155] transition hover:bg-[#e9eef2] hover:text-[#172033]"
              >
                Projects
              </Link>
              <Link
                href="/Joga"
                className="rounded-md px-3 py-2 text-sm font-medium text-[#334155] transition hover:bg-[#e9eef2] hover:text-[#172033]"
              >
                Joga
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto min-h-[calc(100vh-145px)] max-w-5xl px-6 py-12 sm:py-16">
          {children}
        </main>
      </body>
    </html>
  );
}
