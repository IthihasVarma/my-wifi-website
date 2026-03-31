import Link from "next/link";
import { blogPosts, mainActions } from "@/lib/site-data";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section>
        <div className="grid gap-4 sm:grid-cols-3">
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
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
