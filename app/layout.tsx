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
      <body className="min-h-full bg-slate-950 text-slate-100">
        <header className="border-b border-slate-800 bg-slate-950/95">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5"
          >
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-white"
            >
              Borny
            </Link>
            <div className="flex items-center gap-1 sm:gap-3">
              <Link
                href="/"
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                Projects
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto min-h-[calc(100vh-145px)] max-w-5xl px-6 py-12 sm:py-16">
          {children}
        </main>
        <footer className="border-t border-slate-800 px-6 py-5 text-center text-sm text-slate-500">
          &copy; 2026 John Crismel Boligao
        </footer>
      </body>
    </html>
  );
}
