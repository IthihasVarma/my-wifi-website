"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useMousePosition } from "@/hooks/use-scroll-animations";

export function HeroSection() {
  const mousePosition = useMousePosition();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cardOffset = {
    x: (mousePosition.x - (typeof window !== "undefined" ? window.innerWidth / 2 : 0)) * 0.01,
    y: (mousePosition.y - (typeof window !== "undefined" ? window.innerHeight / 2 : 0)) * 0.01,
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div 
          className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-300/20 blur-3xl animate-float-slow"
          style={{
            transform: `translate(${cardOffset.x * 2}px, ${cardOffset.y * 2}px)`,
          }}
        />
        <div 
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-teal-200/40 to-emerald-300/20 blur-3xl animate-float-slow delay-300"
          style={{
            transform: `translate(${-cardOffset.x * 1.5}px, ${-cardOffset.y * 1.5}px)`,
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-emerald-100/30 to-transparent blur-3xl animate-pulse-glow"
        />
      </div>

      {/* 3D WiFi Waves */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-64 h-64 perspective-container">
          {/* Orbiting rings */}
          <div 
            className="absolute inset-0 border-2 border-emerald-300/30 rounded-full animate-rotate-slow"
            style={{
              transform: `translateZ(${cardOffset.y}px)`,
            }}
          />
          <div 
            className="absolute inset-4 border-2 border-teal-300/20 rounded-full animate-rotate-slow"
            style={{ animationDirection: "reverse", animationDuration: "25s" }}
          />
          <div 
            className="absolute inset-8 border border-emerald-200/10 rounded-full animate-rotate-slow"
            style={{ animationDuration: "30s" }}
          />

          {/* Pulsing waves */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="wifi-wave">
              <span 
                className="absolute -inset-4 border-2 border-emerald-400/40 rounded-full animate-wave"
                style={{ animationDelay: "0s" }}
              />
              <span 
                className="absolute -inset-8 border border-teal-300/30 rounded-full animate-wave"
                style={{ animationDelay: "0.5s" }}
              />
              <span 
                className="absolute -inset-12 border border-emerald-200/20 rounded-full animate-wave"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/40 rounded-full animate-float-gentle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Eyebrow */}
          <div 
            className={`${mounted ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-700 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Live WiFi Analysis
            </span>
          </div>

          {/* Headline */}
          <h1 
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gradient ${mounted ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Test Your Network.
            <br />
            <span className="text-gradient-warm">Know Your Speed.</span>
          </h1>

          {/* Subheadline */}
          <p 
            className={`mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 ${mounted ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            Run real-time speed tests, troubleshoot connectivity issues, 
            and get personalized WiFi upgrade guidance — all in your browser.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 ${mounted ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              href="/speedtest"
              className="group relative inline-flex items-center gap-2 rounded-full bg-[#0B3B2E] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:bg-emerald-900 hover:shadow-xl hover:shadow-emerald-900/40 hover:-translate-y-1 btn-ripple"
            >
              <span>Start Speed Test</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              href="/troubleshoot"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-emerald-200 bg-white/80 px-8 py-4 text-base font-semibold text-emerald-900 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400 hover:bg-white hover:shadow-lg hover:-translate-y-1"
            >
              <span>Troubleshoot Issues</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>

          {/* Stats Preview */}
          <div 
            className={`grid grid-cols-3 gap-4 sm:gap-8 pt-12 ${mounted ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gradient">86+</p>
              <p className="mt-1 text-sm text-slate-500">Troubleshooting Guides</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gradient">Real-time</p>
              <p className="mt-1 text-sm text-slate-500">Speed Analysis</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gradient">Free</p>
              <p className="mt-1 text-sm text-slate-500">No Registration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Scroll to explore</span>
        <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
