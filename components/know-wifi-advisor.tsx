"use client";

import { useEffect, useState } from "react";
import { securityRows, wifiGenerations } from "@/lib/site-data";
import type { SpeedTestResult } from "@/lib/speedtest";

const STORAGE_KEY = "mywifi-latest-speedtest";

export function KnowWifiAdvisor() {
  const [latestResult, setLatestResult] = useState<SpeedTestResult | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return;

    try {
      setLatestResult(JSON.parse(stored) as SpeedTestResult);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  return (
    <div className="space-y-8">
      <div className="rounded-[28px] border border-amber-200 bg-amber-50 p-6 text-sm leading-6 text-amber-950">
        <p className="font-semibold">Browser limitation</p>
        <p className="mt-2">
          Websites cannot directly read your router&apos;s exact Wi‑Fi generation or security type.
          This page teaches the differences and gives practical upgrade advice based on your latest
          speed test.
        </p>
      </div>

      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-4">
          <h3 className="text-xl font-semibold text-slate-950">Handshake / security guide</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-6 py-3 font-semibold">Handshake</th>
                <th className="px-6 py-3 font-semibold">Security</th>
                <th className="px-6 py-3 font-semibold">Used today</th>
              </tr>
            </thead>
            <tbody>
              {securityRows.map(([handshake, security, usage]) => (
                <tr key={handshake} className="border-t border-slate-200">
                  <td className="px-6 py-3 font-medium text-slate-900">{handshake}</td>
                  <td className="px-6 py-3 text-slate-700">{security}</td>
                  <td className="px-6 py-3 text-slate-700">{usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {wifiGenerations.map((generation) => (
          <div key={generation.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-lg font-semibold text-slate-950">{generation.name}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{generation.note}</p>
            <p className="mt-3 text-sm font-medium text-emerald-900">{generation.upgrade}</p>
          </div>
        ))}
      </div>

      <div className="rounded-[28px] border border-emerald-950/10 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-950">Estimated advice from your latest test</h3>
        {latestResult ? (
          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
            <p>
              <strong>Ping:</strong> {latestResult.pingMs} ms • <strong>Download:</strong>{" "}
              {latestResult.downloadMbps} Mbps • <strong>Upload:</strong> {latestResult.uploadMbps} Mbps
            </p>
            <p>{latestResult.estimatedWifi}</p>
          </div>
        ) : (
          <p className="mt-4 text-sm leading-6 text-slate-700">
            Run the live speed test first and this section will show tailored advice here.
          </p>
        )}
      </div>
    </div>
  );
}
