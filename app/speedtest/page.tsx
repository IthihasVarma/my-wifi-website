import { SectionHeading } from "@/components/section-heading";
import { SpeedTestPanel } from "@/components/speed-test-panel";
import { toolCards } from "@/lib/site-data";

export default function SpeedTestPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Speedtest and tools"
        title="Run a live Wi‑Fi speed test and explore our testbed lineup"
        description="Only the first tool is active in this version. The rest are listed for showcase and pricing inquiries."
      />

      <div className="mt-8">
        <SpeedTestPanel />
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {toolCards.map((tool) => (
          <div key={tool.id} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Tool {tool.id}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">{tool.title}</h3>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  tool.available
                    ? "bg-emerald-100 text-emerald-900"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {tool.available ? "Active" : "Preview only"}
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-600">{tool.description}</p>

            <button
              type="button"
              disabled={!tool.available}
              className={`mt-4 rounded-full px-4 py-2 text-sm font-semibold ${
                tool.available
                  ? "bg-[#0B3B2E] text-white"
                  : "cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-500"
              }`}
            >
              {tool.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
