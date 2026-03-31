"use client";

import { useEffect, useRef, useState } from "react";

export function DashboardPreview() {
  const [dataPoints, setDataPoints] = useState<number[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate random data points
  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints(prev => {
        const newPoint = Math.random() * 100;
        return [...prev.slice(-20), newPoint];
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Draw waveform
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const padding = 20;

    ctx.clearRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = "rgba(0, 212, 255, 0.1)";
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      const y = (height / 5) * i + padding;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }

    // Draw waveform
    if (dataPoints.length > 1) {
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, "#00d4ff");
      gradient.addColorStop(0.5, "#a855f7");
      gradient.addColorStop(1, "#ec4899");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#00d4ff";

      ctx.beginPath();
      const step = (width - padding * 2) / (dataPoints.length - 1 || 1);
      
      dataPoints.forEach((point, i) => {
        const x = padding + i * step;
        const y = height - padding - (point / 100) * (height - padding * 2);
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      
      ctx.stroke();

      // Fill area
      ctx.fillStyle = "rgba(0, 212, 255, 0.1)";
      ctx.lineTo(width - padding, height - padding);
      ctx.lineTo(padding, height - padding);
      ctx.closePath();
      ctx.fill();
    }
  }, [dataPoints]);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: Text Content */}
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-6">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Live Analytics
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                <span className="text-white">Real-Time </span>
                <span className="text-gradient-neon">Network Intelligence</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Monitor your entire network infrastructure through our futuristic dashboard. 
                Get instant visibility into signal strength, device distribution, and 
                performance bottlenecks with AI-powered insights.
              </p>
            </ScrollReveal>

            {/* Feature List */}
            <ScrollReveal delay={300}>
              <div className="space-y-4">
                {[
                  { label: "Signal Heatmaps", desc: "Visual coverage analysis" },
                  { label: "Device Tracking", desc: "Real-time device monitoring" },
                  { label: "AI Recommendations", desc: "Automated optimization tips" },
                  { label: "Predictive Analytics", desc: "Forewarned about issues" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30">
                      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">{item.label}</p>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Dashboard Preview */}
          <ScrollReveal delay={200} animation="slide-right">
            <div className="relative">
              {/* Main Dashboard Frame */}
              <div className="glass rounded-3xl p-1 overflow-hidden">
                <div className="bg-slate-900/90 rounded-2xl overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <span className="text-xs font-mono text-slate-500">dashboard.network.ai</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                      </span>
                      <span className="text-xs font-mono text-green-400">LIVE</span>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-5">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      {[
                        { label: "Devices", value: "2,847", trend: "+12%" },
                        { label: "Latency", value: "0.4ms", trend: "-8%" },
                        { label: "Uptime", value: "99.9%", trend: "+0.1%" },
                      ].map((stat, i) => (
                        <div key={i} className="bg-slate-800/50 rounded-xl p-3">
                          <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
                          <p className="text-lg font-bold text-white">{stat.value}</p>
                          <p className="text-xs text-green-400">{stat.trend}</p>
                        </div>
                      ))}
                    </div>

                    {/* Waveform Chart */}
                    <div className="bg-slate-800/30 rounded-xl p-4 mb-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-slate-400">Network Activity</span>
                        <span className="text-xs text-cyan-400">Real-time</span>
                      </div>
                      <canvas 
                        ref={canvasRef} 
                        width={400} 
                        height={120}
                        className="w-full"
                      />
                    </div>

                    {/* Device List */}
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-slate-400 mb-2">Active Connections</p>
                      {[
                        { name: "MacBook Pro", signal: 98, type: "laptop" },
                        { name: "iPhone 15", signal: 87, type: "mobile" },
                        { name: "Smart TV", signal: 76, type: "tv" },
                      ].map((device, i) => (
                        <div key={i} className="flex items-center justify-between bg-slate-800/30 rounded-lg px-3 py-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center">
                              <DeviceIcon type={device.type} />
                            </div>
                            <span className="text-sm text-white">{device.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                                style={{ width: `${device.signal}%` }}
                              />
                            </div>
                            <span className="text-xs text-cyan-400 w-8">{device.signal}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating UI Elements */}
              <div className="absolute -top-4 -right-4 glass rounded-xl p-3 animate-float-gentle">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white font-medium">AI Optimizing</p>
                    <p className="text-xs text-green-400">+15% efficiency</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass rounded-xl p-3 animate-float-gentle" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white font-medium">Speed Test</p>
                    <p className="text-xs text-cyan-400">943 Mbps</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function DeviceIcon({ type }: { type: string }) {
  switch (type) {
    case "laptop":
      return (
        <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "mobile":
      return (
        <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case "tv":
      return (
        <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
}

// Import ScrollReveal
import { ScrollReveal } from "@/components/scroll-reveal";
