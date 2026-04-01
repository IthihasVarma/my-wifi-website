"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { siteName } from "@/lib/site-data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/demo", label: "Demo" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-emerald-900/5 border-b border-emerald-100/50" 
          : "bg-white/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-lg text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-emerald-500/40">
              📶
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
          </div>
          <span className="text-base font-bold text-emerald-950 sm:text-lg">
            {siteName}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-emerald-900"
                    : "text-slate-600 hover:text-emerald-900"
                }`}
              >
                {/* Active indicator */}
                <span 
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    isActive 
                      ? "bg-emerald-100" 
                      : "bg-transparent group-hover:bg-emerald-50"
                  }`}
                />
                
                {/* Hover underline effect */}
                <span 
                  className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 ${
                    isActive ? "w-1/2" : "w-0 group-hover:w-1/2"
                  }`}
                />

                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/demo"
            className="group inline-flex items-center gap-2 rounded-full bg-[#0B3B2E] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:bg-emerald-900 hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Request Demo</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative rounded-full p-2 text-slate-600 transition-colors hover:bg-emerald-50 hover:text-emerald-900 md:hidden"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span 
              className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span 
              className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span 
              className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`overflow-hidden border-t border-emerald-100/50 bg-white/95 backdrop-blur-xl md:hidden transition-all duration-500 ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-100 text-emerald-900"
                    : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-900"
                }`}
              >
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                )}
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/demo"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#0B3B2E] px-6 py-3 text-sm font-semibold text-white shadow-lg"
          >
            <span>Request Demo</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
