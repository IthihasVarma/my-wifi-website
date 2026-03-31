"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useMousePosition } from "@/hooks/use-scroll-animations";

export function HeroSection() {
  const mousePosition = useMousePosition();
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; delay: number; duration: number }>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
    // Generate random particles
    setParticles(
      Array.from({ length: 50 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 5,
      }))
    );
  }, []);

  const cardOffset = {
    x: (mousePosition.x - (typeof window !== "undefined" ? window.innerWidth / 2 : 0)) * 0.02,
    y: (mousePosition.y - (typeof window !== "undefined" ? window.innerHeight / 2 : 0)) * 0.02,
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Ambient Glow Orbs */}
      <div 
        className="absolute top-20 left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/10 blur-[100px] animate-pulse-glow"
        style={{
          transform: `translate(${cardOffset.x}px, ${cardOffset.y}px)`,
        }}
      />
      <div 
        className="absolute bottom-20 right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-500/20 to-pink-600/10 blur-[100px] animate-pulse-glow"
        style={{
          animationDelay: "2s",
          transform: `translate(${-cardOffset.x}px, ${-cardOffset.y}px)`,
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-[150px] animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      {/* 3D WiFi Visualization */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="relative w-[600px] h-[600px] perspective-container"
          style={{
            transform: `rotateX(${cardOffset.y * 0.5}deg) rotateY(${cardOffset.x * 0.5}deg)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Core glow */}
            <div className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-xl animate-pulse opacity-60" />
            <div className="relative w-20 h-20 rounded-full border-2 border-cyan-400/50 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 animate-pulse" />
            </div>
          </div>

          {/* Orbiting Nodes */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <div
              key={angle}
              className="absolute top-1/2 left-1/2 w-64 h-64"
              style={{
                transform: `rotate(${angle + (mounted ? angle * 0.1 : 0)}deg) translate(-50%, -50%)`,
              }}
            >
              <div 
                className="absolute w-8 h-8 rounded-xl border border-purple-400/50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center"
                style={{
                  top: "0%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              </div>
            </div>
          ))}

          {/* Signal Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {[1, 2, 3, 4, 5].map((ring) => (
              <div
                key={ring}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20 animate-rotate-slow"
                style={{
                  width: `${ring * 100}px`,
                  height: `${ring * 100}px`,
                  animationDirection: ring % 2 === 0 ? "reverse" : "normal",
                  animationDuration: `${20 + ring * 5}s`,
                  boxShadow: `0 0 ${ring * 5}px rgba(0, 212, 255, 0.1)`,
                }}
              />
            ))}
          </div>

          {/* Wave Pulses */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-400/30"
                style={{
                  width: `${150 + i * 100}px`,
                  height: `${150 + i * 100}px`,
                  animation: `wifi-expand 4s ease-out infinite`,
                  animationDelay: `${i * 1.3}s`,
                }}
              />
            ))}
          </div>

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ transform: 'translateZ(0)' }}>
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x2 = 300 + Math.cos(rad) * 256;
              const y2 = 300 + Math.sin(rad) * 256;
              return (
                <line
                  key={angle}
                  x1="300"
                  y1="300"
                  x2={x2}
                  y2={y2}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  opacity="0.4"
                  className="animate-float-gentle"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              );
            })}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Floating Particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                background: i % 3 === 0 
                  ? "var(--neon-blue)" 
                  : i % 3 === 1 
                    ? "var(--neon-purple)" 
                    : "var(--neon-cyan)",
                boxShadow: `0 0 ${particle.size * 3}px currentColor`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
                animation: "particle-float 10s ease-in-out infinite",
              }}
            />
          ))}
        </div>
      )}

      {/* Scan Line Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div 
          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
          style={{
            animation: "scan-line 6s linear infinite",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-10">
          {/* Eyebrow Badge */}
          <div className={`${mounted ? "animate-slide-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-5 py-2 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-neon" />
              </span>
              <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">
                Next-Gen Wireless Intelligence
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] ${mounted ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.15s" }}
          >
            <span className="text-gradient-neon">Engineering</span>
            <br />
            <span className="text-white">the Future of</span>
            <br />
            <span className="text-gradient-warm">Wireless Intelligence</span>
          </h1>

          {/* Subheadline */}
          <p 
            className={`mx-auto max-w-3xl text-lg sm:text-xl text-slate-400 leading-relaxed ${mounted ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            AI-powered network optimization, real-time simulation environments, 
            and intelligent mesh systems — redefining how the world connects.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-5 pt-4 ${mounted ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.45s" }}
          >
            <Link
              href="/speedtest"
              className="group btn-neon btn-glow-pulse"
            >
              <span className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Launch Speed Test
              </span>
            </Link>

            <Link
              href="/know-your-wifi"
              className="group btn-outline"
            >
              <span className="flex items-center gap-3">
                Explore Technology
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Stats Bar */}
          <div 
            className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-12 ${mounted ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.6s" }}
          >
            {[
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "<1ms", label: "Latency Optimization" },
              { value: "10M+", label: "Devices Simulated" },
              { value: "500+", label: "Network Topologies" },
            ].map((stat, i) => (
              <div key={i} className="stat-card text-center group hover:border-cyan-400/30 transition-colors">
                <p className="stat-value text-2xl sm:text-3xl">{stat.value}</p>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-[0.2em]">Scroll to explore</span>
        <div className="relative w-6 h-10 rounded-full border-2 border-slate-600">
          <div 
            className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-3 rounded-full bg-cyan-400 animate-bounce"
          />
        </div>
      </div>

      {/* Corner HUD Elements */}
      <div className="absolute top-20 left-4 sm:left-10 hud-corner opacity-30">
        <div className="text-xs font-mono text-cyan-400/50 space-y-1">
          <p>SYS: ONLINE</p>
          <p>NET: STABLE</p>
          <p>AI: ACTIVE</p>
        </div>
      </div>
      
      <div className="absolute bottom-20 right-4 sm:right-10 hud-corner opacity-30">
        <div className="text-xs font-mono text-purple-400/50 text-right space-y-1">
          <p>NODE: 6/6</p>
          <p>SIGNAL: 98%</p>
          <p>LAT: 0.4ms</p>
        </div>
      </div>
    </section>
  );
}
