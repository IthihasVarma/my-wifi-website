"use client";

import { useMemo, useState, useEffect, useRef } from "react";
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
  phase?: "idle" | "ping" | "download" | "upload" | "complete";
};

const defaultStatus: StatusState = {
  label: "Ready to test your network.",
  progress: 0,
  phase: "idle",
};

const phaseConfig = {
  ping: { color: "from-blue-400 to-cyan-500", icon: "⚡" },
  download: { color: "from-cyan-400 to-teal-500", icon: "⬇️" },
  upload: { color: "from-purple-400 to-pink-500", icon: "⬆️" },
  complete: { color: "from-emerald-400 to-cyan-500", icon: "✓" },
};

export function SpeedTestPanel() {
  const [status, setStatus] = useState<StatusState>(defaultStatus);
  const [running, setRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<SpeedTestResult | null>(null);
  const [animatedValues, setAnimatedValues] = useState({ ping: 0, download: 0, upload: 0 });

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

  // Animate numbers
  useEffect(() => {
    if (!result) return;

    const targets = { ping: result.pingMs, download: result.downloadMbps, upload: result.uploadMbps };
    const duration = 1000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedValues({
        ping: Math.round(targets.ping * eased),
        download: Math.round(targets.download * eased * 10) / 10,
        upload: Math.round(targets.upload * eased * 10) / 10,
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [result]);

  async function runSpeedTest() {
    try {
      setRunning(true);
      setError(null);
      setResult(null);
      setAnimatedValues({ ping: 0, download: 0, upload: 0 });
      setStatus({ label: "Testing ping…", progress: 12, phase: "ping" });

      const pingMs = await measurePing();

      setStatus({ label: "Testing download speed…", progress: 48, phase: "download" });
      const downloadMbps = await measureDownload();

      setStatus({ label: "Testing upload speed…", progress: 78, phase: "upload" });
      const uploadMbps = await measureUpload();

      setStatus({ label: "Finalizing results…", progress: 96, phase: "complete" });

      const nextResult: SpeedTestResult = {
        pingMs,
        downloadMbps,
        uploadMbps,
        qualityLabel: interpretSpeed(downloadMbps),
        summary: buildSummary(downloadMbps, uploadMbps, pingMs),
        estimatedWifi: estimateWifiGeneration(downloadMbps, pingMs),
      };

      setResult(nextResult);
      setStatus({ label: "Test complete!", progress: 100, phase: "complete" });

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

  const currentPhase = status.phase || "idle";
  const phaseStyle = phaseConfig[currentPhase as keyof typeof phaseConfig] || { color: "from-slate-400 to-slate-500", icon: "⏳" };

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/20 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/10 sm:p-8">
      {/* Background decoration */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/10 blur-[100px]" />
      <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/10 blur-[80px]" />

      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              Live Tool
            </div>
            <h3 className="mt-3 text-2xl font-bold text-white">WiFi Speed Test</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
              Run a real browser-based test for ping, download, and upload. Results may vary by browser, device, and network conditions.
            </p>
            {connectionHint ? (
              <p className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {connectionHint}
              </p>
            ) : null}
          </div>

          <button
            type="button"
            onClick={runSpeedTest}
            disabled={running}
            className="group btn-neon"
          >
            {running ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Testing…
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Start Speed Test
              </span>
            )}
          </button>
        </div>

        {/* Progress Section */}
        <div className="mt-8">
          <div className={`relative overflow-hidden rounded-2xl bg-slate-800/50 p-4 transition-all duration-500 ${running || result ? "ring-2 ring-cyan-400/30" : ""}`}>
            {/* Phase indicator */}
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">{phaseStyle.icon}</span>
                <span className="text-sm font-medium text-slate-300">{status.label}</span>
              </div>
              <span className="text-sm font-bold text-cyan-400">{status.progress}%</span>
            </div>

            {/* Progress bar */}
            <div className="h-3 overflow-hidden rounded-full bg-slate-900/80">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${phaseStyle.color} transition-all duration-500 ease-out shadow-lg shadow-cyan-500/30`}
                style={{ width: `${status.progress}%` }}
              />
            </div>

            {/* Phase dots */}
            <div className="mt-4 flex items-center justify-center gap-3">
              {["ping", "download", "upload", "complete"].map((phase, index) => {
                const phaseIndex = ["ping", "download", "upload", "complete"].indexOf(currentPhase);
                const isActive = phaseIndex >= index;
                const isCurrent = currentPhase === phase;

                return (
                  <div key={phase} className="flex items-center gap-3">
                    <div 
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                        isActive 
                          ? "bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg shadow-cyan-400/50" 
                          : "bg-slate-600"
                      } ${isCurrent ? "scale-125" : ""}`}
                    />
                    {index < 3 && (
                      <div 
                        className={`h-0.5 w-8 transition-all duration-300 ${
                          phaseIndex > index ? "bg-cyan-400" : "bg-slate-700"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {error ? (
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-rose-400/30 bg-rose-400/10 p-4">
            <svg className="h-5 w-5 flex-shrink-0 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-rose-300">{error}</p>
          </div>
        ) : null}

        {result ? (
          <div className="mt-8 space-y-6">
            {/* Results Grid */}
            <div className="grid gap-4 md:grid-cols-3">
              <MetricCard 
                label="Ping" 
                value={`${animatedValues.ping}`} 
                unit="ms"
                detail="Lower is better" 
                color="from-blue-400 to-cyan-500"
                icon="⚡"
              />
              <MetricCard 
                label="Download" 
                value={`${animatedValues.download}`} 
                unit="Mbps"
                detail={result.qualityLabel} 
                color="from-cyan-400 to-teal-500"
                icon="⬇️"
              />
              <MetricCard 
                label="Upload" 
                value={`${animatedValues.upload}`} 
                unit="Mbps"
                detail="Useful for calls & cloud sync" 
                color="from-purple-400 to-pink-500"
                icon="⬆️"
              />
            </div>

            {/* Summary Cards */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-teal-400/5 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 shadow-sm">
                    <span className="text-lg">📊</span>
                  </div>
                  <h4 className="font-semibold text-cyan-400">Summary</h4>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">{result.summary}</p>
              </div>

              <div className="rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-400/10 to-pink-400/5 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 shadow-sm">
                    <span className="text-lg">📡</span>
                  </div>
                  <h4 className="font-semibold text-purple-400">WiFi Guidance</h4>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">{result.estimatedWifi}</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function MetricCard({ 
  label, 
  value, 
  unit, 
  detail, 
  color,
  icon 
}: { 
  label: string; 
  value: string; 
  unit: string;
  detail: string; 
  color: string;
  icon: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/50 p-5 transition-all duration-500 hover:border-cyan-400/30 hover:bg-slate-800">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`} />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</span>
          <span className="text-lg">{icon}</span>
        </div>
        
        <div className="flex items-baseline gap-1">
          <span className={`text-4xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
            {value}
          </span>
          <span className="text-sm font-medium text-slate-400">{unit}</span>
        </div>
        
        <p className="mt-2 text-xs text-slate-500">{detail}</p>
      </div>
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
