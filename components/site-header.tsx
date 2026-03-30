import Link from "next/link";
import { siteName } from "@/lib/site-data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/speedtest", label: "Speedtest & Tools" },
  { href: "/troubleshoot", label: "Troubleshoot" },
  { href: "/know-your-wifi", label: "Know Your WiFi" },
  { href: "/blog", label: "Blog" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-950/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-emerald-950">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0B3B2E] text-lg text-white">
            📶
          </span>
          <span className="text-base sm:text-lg">{siteName}</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
