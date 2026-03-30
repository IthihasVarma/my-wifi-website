"use client";

import { useMemo, useState } from "react";
import { troubleshootingCategories, troubleshootingEntries } from "@/lib/troubleshooting-data";

const allCategories = [
  { id: "all", label: "All Questions", color: "#64748b", bg: "#F8FAFC", text: "#334155" },
  ...troubleshootingCategories,
];

export function TroubleshootingBrowser() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return troubleshootingEntries.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.c === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${item.q} ${item.a} ${item.steps.join(" ")}`.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-emerald-950/10 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-slate-950">WiFi Troubleshooting Guide</h3>
          <p className="mt-2 text-sm text-slate-600">
            Expanded Q&A sourced from Reddit, Quora, and tech forums — organized by category.
          </p>
        </div>

        <label className="block text-sm font-medium text-slate-700" htmlFor="search-questions">
          Search your issue
        </label>
        <input
          id="search-questions"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search: no internet, slow wifi, disconnects, DNS..."
          className="mt-3 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none ring-0 transition focus:border-emerald-600"
        />

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
          <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
            Total: <span className="font-semibold text-slate-900">{troubleshootingEntries.length}</span>
          </div>
          <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
            Showing: <span className="font-semibold text-slate-900">{filteredItems.length}</span>
          </div>
          <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
            Categories: <span className="font-semibold text-slate-900">{troubleshootingCategories.length}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {allCategories.map((category) => {
            const active = activeCategory === category.id;
            const count =
              category.id === "all"
                ? troubleshootingEntries.length
                : troubleshootingEntries.filter((item) => item.c === category.id).length;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active
                    ? "border-[#0B3B2E] bg-emerald-50 text-emerald-950"
                    : "border-slate-200 bg-white text-slate-700 hover:border-emerald-200 hover:bg-emerald-50"
                }`}
              >
                <span className="mr-2 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: category.color }} />
                {category.label} <span className="opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="text-sm text-slate-500">
        {filteredItems.length === troubleshootingEntries.length
          ? `Showing all ${troubleshootingEntries.length} questions`
          : `${filteredItems.length} of ${troubleshootingEntries.length} questions match`}
      </div>

      <div className="grid gap-4">
        {filteredItems.map((item, index) => {
          const category = troubleshootingCategories.find((entry) => entry.id === item.c);

          return (
            <details
              key={`${item.c}-${index}`}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-emerald-300 open:bg-emerald-50/40"
            >
              <summary className="cursor-pointer list-none">
                <div className="flex flex-wrap items-start gap-3">
                  <span
                    className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold"
                    style={{ backgroundColor: category?.bg, color: category?.text }}
                  >
                    {item.c.toUpperCase().slice(0, 1)}
                  </span>
                  <div className="flex-1">
                    <h3 className="pr-4 text-lg font-semibold text-slate-950">{item.q}</h3>
                    <p className="mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-medium" style={{ backgroundColor: category?.bg, color: category?.text }}>
                      {category?.label ?? item.c}
                    </p>
                  </div>
                </div>
              </summary>

              <div className="mt-4 border-t border-slate-200 pt-4">
                <p className="text-sm leading-7 text-slate-700">{item.a}</p>

                {item.steps.length > 0 ? (
                  <ol className="mt-4 space-y-2">
                    {item.steps.map((step, stepIndex) => (
                      <li key={`${item.c}-${index}-step-${stepIndex}`} className="flex gap-3 text-sm text-slate-700">
                        <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                          {stepIndex + 1}
                        </span>
                        <span className="leading-6">{step}</span>
                      </li>
                    ))}
                  </ol>
                ) : null}
              </div>
            </details>
          );
        })}

        {filteredItems.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-600">
            No questions found. Try a broader keyword or switch back to <strong>All Questions</strong>.
          </div>
        ) : null}
      </div>
    </div>
  );
}
