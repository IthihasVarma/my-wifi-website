"use client";

import { useMemo, useState } from "react";
import { troubleshootingCategories, troubleshootingEntries } from "@/lib/troubleshooting-data";

const allCategories = [
  { id: "all", label: "All Questions", color: "#64748b", bg: "#1e293b", text: "#94a3b8" },
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
      {/* Search & Filter Section */}
      <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/20 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/10 sm:p-8">
        {/* Background decoration */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 blur-[80px]" />

        <div className="relative">
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Troubleshooting
            </div>
            <h3 className="mt-3 text-2xl font-bold text-white">WiFi Troubleshooting Guide</h3>
            <p className="mt-2 text-sm text-slate-400">
              Search through {troubleshootingEntries.length}+ Q&A entries sourced from Reddit, Quora, and tech forums.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search: no internet, slow wifi, disconnects, DNS..."
              className="w-full rounded-2xl border border-slate-700 bg-slate-800/50 py-3.5 pl-12 pr-4 text-sm outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400/50 focus:bg-slate-800 focus:shadow-lg focus:shadow-cyan-500/10"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500 hover:text-slate-300 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Stats */}
          <div className="mt-4 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm transition-all hover:bg-slate-800">
              <svg className="h-4 w-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="text-slate-400">Total:</span>
              <span className="font-semibold text-white">{troubleshootingEntries.length}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-sm">
              <svg className="h-4 w-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-slate-400">Showing:</span>
              <span className="font-semibold text-cyan-400">{filteredItems.length}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm transition-all hover:bg-slate-800">
              <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span className="text-slate-400">Categories:</span>
              <span className="font-semibold text-white">{troubleshootingCategories.length}</span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mt-5 flex flex-wrap gap-2">
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
                  className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "border-cyan-400 bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg shadow-cyan-500/30"
                      : "border-slate-700 bg-slate-800/50 text-slate-400 hover:border-cyan-400/50 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span 
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      active ? "bg-white" : ""
                    }`}
                    style={{ backgroundColor: active ? undefined : category.color }}
                  />
                  <span className="max-w-[120px] truncate">{category.label}</span>
                  <span className={`opacity-70 ${active ? "" : "group-hover:opacity-100"}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Info */}
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {filteredItems.length === troubleshootingEntries.length
          ? `Showing all ${troubleshootingEntries.length} questions`
          : `${filteredItems.length} of ${troubleshootingEntries.length} questions match your search`}
      </div>

      {/* Q&A List */}
      <div className="grid gap-4">
        {filteredItems.map((item, index) => {
          const category = troubleshootingCategories.find((entry) => entry.id === item.c);

          return (
            <details
              key={`${item.c}-${index}`}
              className="group rounded-2xl border border-slate-700/50 bg-slate-900/50 shadow-sm transition-all duration-300 open:border-cyan-400/30 open:bg-gradient-to-br open:from-cyan-400/5 open:to-purple-400/5 open:shadow-lg open:shadow-cyan-500/5"
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-start gap-4 p-5">
                  {/* Category Icon */}
                  <div 
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: category?.bg, color: category?.text }}
                  >
                    {item.c.slice(0, 2).toUpperCase()}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="pr-4 text-base font-semibold text-white group-hover:text-cyan-400 transition-colors sm:text-lg">
                      {item.q}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span 
                        className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium"
                        style={{ backgroundColor: category?.bg, color: category?.text }}
                      >
                        {category?.label ?? item.c}
                      </span>
                    </div>
                  </div>

                  {/* Expand Icon */}
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 group-open:bg-cyan-400/20 group-open:rotate-180">
                      <svg className="h-5 w-5 text-slate-400 transition-colors group-open:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </summary>

              {/* Answer Content */}
              <div className="border-t border-slate-700/50 px-5 pb-5 pt-4">
                <p className="text-sm leading-7 text-slate-300">{item.a}</p>

                {item.steps.length > 0 ? (
                  <div className="mt-5">
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                      <svg className="h-4 w-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                      Step-by-step guide:
                    </h4>
                    <ol className="space-y-3">
                      {item.steps.map((step, stepIndex) => (
                        <li 
                          key={`${item.c}-${index}-step-${stepIndex}`} 
                          className="flex gap-4 text-sm text-slate-300"
                        >
                          <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-purple-400/20 text-xs font-bold text-cyan-400 shadow-sm">
                            {stepIndex + 1}
                          </span>
                          <span className="flex-1 leading-6">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ) : null}

                {/* Quick Actions */}
                <div className="mt-5 flex items-center gap-3 border-t border-slate-700/50 pt-4">
                  <span className="text-xs text-slate-500">Was this helpful?</span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-xs font-medium text-slate-400 transition-all hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    Yes
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-xs font-medium text-slate-400 transition-all hover:border-rose-400/50 hover:bg-rose-400/10 hover:text-rose-400"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                    </svg>
                    No
                  </button>
                </div>
              </div>
            </details>
          );
        })}

        {filteredItems.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-700 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-8 text-center">
            <svg className="mx-auto h-12 w-12 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-semibold text-white">No questions found</h3>
            <p className="mt-2 text-sm text-slate-400">
              Try a broader keyword or switch back to <strong className="text-white">All Questions</strong>.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-800/50 px-4 py-2 text-sm font-medium text-cyan-400 transition-all hover:bg-cyan-400/10"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset filters
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
