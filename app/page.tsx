import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts, heroStats, mainActions } from "@/lib/site-data";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[32px] bg-[#0B3B2E] px-6 py-10 text-white shadow-sm sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100">
              My Wifi
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Test your speed, troubleshoot issues, and know your Wi‑Fi better.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-emerald-50">
              A simple Wi‑Fi website with a real browser speed test, a built-in troubleshooting
              guide, and easy education on WiFi 4, 5, 6, 6E, and 7.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {mainActions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="rounded-2xl border border-white/10 bg-white/8 p-4 transition hover:bg-white/15"
                >
                  <p className="font-semibold text-white">{action.title}</p>
                  <p className="mt-2 text-sm leading-6 text-emerald-50">{action.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-sm text-emerald-100">{stat.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading
          eyebrow="Core sections"
          title="Everything on the site starts from three main buttons"
          description="Each section has its own page so visitors can jump straight to the tool or content they need."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {mainActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300"
            >
              <h2 className="text-xl font-semibold text-slate-950">{action.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{action.description}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-emerald-800">
                Open section →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading
          eyebrow="Blog"
          title="Drop blog posts and YouTube videos here"
          description="The homepage shows a few featured posts first, then visitors can click through to the full blog page."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {blogPosts.slice(0, 4).map((post) => (
            <article key={post.slug} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                {post.type}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-950">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href="/blog"
            className="inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            See more posts
          </Link>
        </div>
      </section>
    </div>
  );
}
