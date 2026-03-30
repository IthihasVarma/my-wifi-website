import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/lib/site-data";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Blog & videos"
        title="Updates, explainers, and future content drops"
        description="This section is ready for your blog posts, YouTube videos, and network guides. Replace the placeholder cards with your real content anytime."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              {post.type} • {post.date}
            </p>
            <h2 className="mt-3 text-xl font-semibold text-slate-950">{post.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
            <button
              type="button"
              className="mt-4 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800"
            >
              {post.type === "Video" ? "Watch placeholder" : "Read placeholder"}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
