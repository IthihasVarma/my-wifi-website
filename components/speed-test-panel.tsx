"use client";

import { useMemo, useState } from "react";
import {
  buildSummary,
  bytesToMbps,
  estimateWifiGeneration,
  interpretSpeed,
  type SpeedTestResult,
} from "@/lib/speedtest";

const STORAGE_KEY = "mywifi-latest-speedtest";

type StatusState = {
  label: string;
  progress: number;
};

const defaultStatus: StatusState = {
  label: "Ready to test your network.",
  progress: 0,
};

export function SpeedTestPanel() {
  const [status, setStatus] = useState<StatusState>(defaultStatus);
  const [running, setRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<SpeedTestResult | null>(null);

  const connectionHint = useMemo(() => {
    if (typeof navigator === "undefined") return null;

    const info = (
      navigator as Navigator & {
        connection?: { effectiveType?: string; downlink?: number; rtt?: number; saveData?: boolean };
      }
    ).connection;

    if (!info) return null;

    return [
      info.effectiveType ? `Browser hint: ${info.effectiveType}` : null,
      typeof info.downlink === "number" ? `reported downlink ${info.downlink} Mbps` : null,
      typeof info.rtt === "number" ? `browser RTT ${info.rtt} ms` : null,
      info.saveData ? `data saver is on` : null,
    ]
      .filter(Boolean)
      .join(" • ");
  }, []);

  async function runSpeedTest() {
    try {
      setRunning(true);
      setError(null);
      setStatus({ label: "Testing ping…", progress: 12 });

      const pingMs = await measurePing();

      setStatus({ label: "Testing download speed…", progress: 48 });
      const downloadMbps = await measureDownload();

      setStatus({ label: "Testing upload speed…", progress: 78 });
      const uploadMbps = await measureUpload();

      setStatus({ label: "Finalizing results…", progress: 96 });

      const nextResult: SpeedTestResult = {
        pingMs,
        downloadMbps,
        uploadMbps,
        qualityLabel: interpretSpeed(downloadMbps),
        summary: buildSummary(downloadMbps, uploadMbps, pingMs),
        estimatedWifi: estimateWifiGeneration(downloadMbps, pingMs),
      };

      setResult(nextResult);
      setStatus({ label: "Test complete.", progress: 100 });

      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextResult));
      }
    } catch (testError) {
      setError(testError instanceof Error ? testError.message : "Unable to complete the test.");
      setStatus(defaultStatus);
    } finally {
      setRunning(false);
    }
  }

  return (
    <div className="rounded-[28px] border border-emerald-950/10 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Live tool</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-950">WiFi speed test</h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            This runs a real browser-based test for ping, download, and upload. Results can vary
            slightly by browser, device, and Vercel region.
          </p>
          {connectionHint ? <p className="mt-3 text-xs text-slate-500">{connectionHint}</p> : null}
        </div>

        <button
          type="button"
          onClick={runSpeedTest}
          disabled={running}
          className="rounded-full bg-[#0B3B2E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {running ? "Testing…" : "Start speed test"}
        </button>
      </div>

      <div className="mt-6 rounded-2xl bg-slate-100 p-3">
        <div className="mb-2 flex items-center justify-between text-sm text-slate-700">
          <span>{status.label}</span>
          <span>{status.progress}%</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-white">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-500"
            style={{ width: `${status.progress}%` }}
          />
        </div>
      </div>

      {error ? (
        <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
          {error}
        </div>
      ) : null}

      {result ? (
        <div className="mt-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <MetricCard label="Ping" value={`${result.pingMs} ms`} detail="Lower is better" />
            <MetricCard
              label="Download"
              value={`${result.downloadMbps} Mbps`}
              detail={result.qualityLabel}
            />
            <MetricCard
              label="Upload"
              value={`${result.uploadMbps} Mbps`}
              detail="Useful for calls and cloud sync"
            />
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
            <p className="text-sm font-semibold text-emerald-900">Summary</p>
            <p className="mt-2 text-sm leading-6 text-emerald-950">{result.summary}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-sm font-semibold text-slate-900">Estimated Wi‑Fi guidance</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">{result.estimatedWifi}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function MetricCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-950">{value}</p>
      <p className="mt-1 text-sm text-slate-600">{detail}</p>
    </div>
  );
}

async function measurePing() {
  const samples: number[] = [];

  for (let index = 0; index < 3; index += 1) {
    const start = performance.now();
    const response = await fetch(`/api/speedtest/ping?ts=${Date.now()}-${index}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Ping test failed.");
    }

    await response.json();
    samples.push(performance.now() - start);
  }

  const average = samples.reduce((sum, sample) => sum + sample, 0) / samples.length;
  return Math.max(1, Math.round(average));
}

async function measureDownload() {
  const start = performance.now();
  const response = await fetch(`/api/speedtest/download?sizeMb=6&ts=${Date.now()}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Download test failed.");
  }

  const buffer = await response.arrayBuffer();
  const end = performance.now();
  const bytes = Number(response.headers.get("content-length") ?? buffer.byteLength);
  return bytesToMbps(bytes, end - start);
}

async function measureUpload() {
  const payload = new Uint8Array(256 * 1024);
  const start = performance.now();
  const response = await fetch(`/api/speedtest/upload?ts=${Date.now()}`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "content-type": "application/octet-stream",
    },
    body: payload,
  });

  if (!response.ok) {
    throw new Error("Upload test failed.");
  }

  await response.json();
  const end = performance.now();
  return bytesToMbps(payload.byteLength, end - start);
}
