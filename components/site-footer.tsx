const socialLinks = [
  { label: "YouTube", href: "https://youtube.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X / Twitter", href: "https://x.com" },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-emerald-950/10 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">My Wifi</p>
          <p className="mt-2 max-w-xl text-sm text-slate-300">
            Live speed checks, troubleshooting answers, and practical Wi‑Fi advice for homes,
            offices, and test environments.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Social links</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 px-3 py-2 text-sm transition hover:border-emerald-400 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
