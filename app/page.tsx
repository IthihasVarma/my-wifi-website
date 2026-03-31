"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ScrollReveal, ParallaxSection } from "@/components/scroll-reveal";
import { FeaturesSection } from "@/components/features-section";
import { DashboardPreview } from "@/components/dashboard-preview";
import { blogPosts, mainActions } from "@/lib/site-data";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Dashboard Preview */}
      <DashboardPreview />

      {/* Network Topology Section */}
      <NetworkTopologySection />

      {/* Blog Section */}
      <BlogSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function HeroSection() {
  const { HeroSection: Hero } = require("@/components/hero-section");
  return <Hero />;
}

function NetworkTopologySection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: Visualization */}
          <ScrollReveal animation="slide-left">
            <div className="relative aspect-square max-w-lg mx-auto w-full">
              {/* Main visualization container */}
              <div className="absolute inset-0 rounded-3xl border border-purple-400/20 bg-slate-900/50 backdrop-blur-sm overflow-hidden">
                {/* Grid pattern */}
                <div className="absolute inset-0 grid-bg opacity-30" />
                
                {/* Network nodes SVG */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  {/* Connection lines */}
                  <defs>
                    <linearGradient id="nodeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="nodeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>

                  {/* Connection lines */}
                  <g stroke="url(#nodeGradient1)" strokeWidth="1" opacity="0.4">
                    <line x1="200" y1="200" x2="100" y2="100" strokeDasharray="4,4" className="animate-float-gentle" />
                    <line x1="200" y1="200" x2="300" y2="100" strokeDasharray="4,4" className="animate-float-gentle" style={{ animationDelay: "0.5s" }} />
                    <line x1="200" y1="200" x2="100" y2="300" strokeDasharray="4,4" className="animate-float-gentle" style={{ animationDelay: "1s" }} />
                    <line x1="200" y1="200" x2="300" y2="300" strokeDasharray="4,4" className="animate-float-gentle" style={{ animationDelay: "1.5s" }} />
                    <line x1="200" y1="200" x2="200" y2="50" strokeDasharray="4,4" className="animate-float-gentle" style={{ animationDelay: "0.3s" }} />
                    <line x1="200" y1="200" x2="200" y2="350" strokeDasharray="4,4" className="animate-float-gentle" style={{ animationDelay: "0.8s" }} />
                  </g>

                  {/* Outer nodes */}
                  <g className="animate-float-gentle">
                    <circle cx="100" cy="100" r="25" fill="#0a0f1a" stroke="#00d4ff" strokeWidth="2" />
                    <circle cx="100" cy="100" r="8" fill="#00d4ff" className="animate-pulse" />
                  </g>
                  <g className="animate-float-gentle" style={{ animationDelay: "0.5s" }}>
                    <circle cx="300" cy="100" r="25" fill="#0a0f1a" stroke="#a855f7" strokeWidth="2" />
                    <circle cx="300" cy="100" r="8" fill="#a855f7" className="animate-pulse" />
                  </g>
                  <g className="animate-float-gentle" style={{ animationDelay: "1s" }}>
                    <circle cx="100" cy="300" r="25" fill="#0a0f1a" stroke="#ec4899" strokeWidth="2" />
                    <circle cx="100" cy="300" r="8" fill="#ec4899" className="animate-pulse" />
                  </g>
                  <g className="animate-float-gentle" style={{ animationDelay: "1.5s" }}>
                    <circle cx="300" cy="300" r="25" fill="#0a0f1a" stroke="#06b6d4" strokeWidth="2" />
                    <circle cx="300" cy="300" r="8" fill="#06b6d4" className="animate-pulse" />
                  </g>
                  <g className="animate-float-gentle" style={{ animationDelay: "0.3s" }}>
                    <circle cx="200" cy="50" r="20" fill="#0a0f1a" stroke="#00d4ff" strokeWidth="2" />
                    <circle cx="200" cy="50" r="6" fill="#00d4ff" className="animate-pulse" />
                  </g>
                  <g className="animate-float-gentle" style={{ animationDelay: "0.8s" }}>
                    <circle cx="200" cy="350" r="20" fill="#0a0f1a" stroke="#a855f7" strokeWidth="2" />
                    <circle cx="200" cy="350" r="6" fill="#a855f7" className="animate-pulse" />
                  </g>

                  {/* Central hub */}
                  <g>
                    <circle cx="200" cy="200" r="45" fill="#0a0f1a" stroke="url(#nodeGradient1)" strokeWidth="3" className="animate-pulse" style={{ animationDuration: "3s" }} />
                    <circle cx="200" cy="200" r="30" fill="rgba(0, 212, 255, 0.1)" stroke="#00d4ff" strokeWidth="2" />
                    <circle cx="200" cy="200" r="15" fill="#00d4ff" className="animate-pulse" />
                    
                    {/* Orbiting ring */}
                    <circle cx="200" cy="200" r="60" fill="none" stroke="#00d4ff" strokeWidth="1" strokeDasharray="8,4" opacity="0.3" className="animate-rotate-slow" />
                  </g>
                </svg>

                {/* Labels */}
                <div className="absolute top-4 left-4 glass-light rounded-lg px-3 py-2">
                  <p className="text-xs font-mono text-cyan-400">NETWORK: ACTIVE</p>
                  <p className="text-xs font-mono text-slate-500">NODES: 6/6</p>
                </div>
                <div className="absolute bottom-4 right-4 glass-light rounded-lg px-3 py-2">
                  <p className="text-xs font-mono text-green-400">LATENCY: 0.4ms</p>
                  <p className="text-xs font-mono text-slate-500">THROUGHPUT: 943 Mbps</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Text */}
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-6">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Mesh Topology
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                <span className="text-white">Dynamic </span>
                <span className="text-gradient-warm">Network Meshing</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Our intelligent mesh network technology creates self-optimizing coverage zones. 
                Each node communicates in real-time, automatically routing traffic through 
                the fastest path and adapting to interference.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "10+", label: "Node Capacity" },
                  { value: "0.1ms", label: "Switchover" },
                  { value: "99.99%", label: "Coverage" },
                  { value: "Auto", label: "Healing" },
                ].map((stat, i) => (
                  <div key={i} className="glass-light rounded-xl p-4">
                    <p className="text-2xl font-bold text-gradient-neon">{stat.value}</p>
                    <p className="text-sm text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent" />
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Latest Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              <span className="text-white">From the </span>
              <span className="text-gradient-neon">Lab</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-white transition-colors"
          >
            View all articles
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.slice(0, 4).map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 100}>
              <BlogCard post={post} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <article className="group card-futuristic card-glow p-5 h-full flex flex-col">
      {/* Type badge */}
      <div className="mb-3">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
          post.type === "Video" 
            ? "bg-pink-500/20 text-pink-400 border border-pink-400/30" 
            : "bg-cyan-500/20 text-cyan-400 border border-cyan-400/30"
        }`}>
          {post.type === "Video" ? (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          )}
          {post.type}
        </span>
      </div>

      <h3 className="text-base font-semibold text-white leading-snug group-hover:text-cyan-400 transition-colors flex-1">
        {post.title}
      </h3>
      
      <p className="mt-3 text-sm text-slate-400 leading-relaxed">
        {post.excerpt}
      </p>

      <div className="mt-4 flex items-center justify-between pt-4 border-t border-slate-800">
        <time className="text-xs text-slate-500">{post.date}</time>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-100"
        >
          Read more
          <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="glass-glow rounded-[32px] p-8 sm:p-16">
            {/* Icon */}
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 text-3xl mb-8 shadow-2xl shadow-cyan-500/30">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              <span className="text-white">Ready to Experience </span>
              <span className="text-gradient-neon">Wireless Intelligence?</span>
            </h2>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
              Start your free speed test and discover how our AI-powered platform can 
              optimize your network performance in real-time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/speedtest"
                className="group btn-neon btn-glow-pulse"
              >
                <span className="flex items-center gap-3">
                  Launch Speed Test
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/troubleshoot"
                className="group btn-outline"
              >
                <span className="flex items-center gap-3">
                  Explore Solutions
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
