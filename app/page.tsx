"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ScrollReveal, ParallaxSection } from "@/components/scroll-reveal";
import { ActionsSection } from "@/components/actions-section";
import { blogPosts, mainActions } from "@/lib/site-data";

export default function Home() {
  const contentActions = mainActions.map((action, index) => ({
    ...action,
    icon: ["speedtest", "troubleshoot", "knowledge"][index] as "speedtest" | "troubleshoot" | "knowledge",
  }));

  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section with Scroll Animations */}
      <ActionsSection actions={contentActions} />

      {/* Scrollytelling: How It Works Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-4">
              How it works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
              Three steps to
              <span className="text-gradient"> better WiFi</span>
            </h2>
          </ScrollReveal>

          {/* Steps with staggered animations */}
          <div className="grid gap-8 md:grid-cols-3">
            <ScrollReveal delay={0}>
              <StepCard
                number="01"
                title="Test Your Speed"
                description="Run our real-time speed test directly in your browser. Measure ping, download, and upload speeds in seconds."
                icon={
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
              />
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <StepCard
                number="02"
                title="Find Solutions"
                description="Search through 86+ troubleshooting guides covering connectivity, speed, security, and more."
                icon={
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
              />
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <StepCard
                number="03"
                title="Upgrade Smartly"
                description="Get personalized recommendations on WiFi generations and when it makes sense to upgrade your hardware."
                icon={
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scrollytelling: Featured Blog Posts */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-4">
                Latest
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
                From the <span className="text-gradient">Blog</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-900"
            >
              View all posts
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <ParallaxSection speed="slow" className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-emerald-200/30 to-teal-200/20 blur-3xl" />
        </ParallaxSection>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="rounded-[32px] border border-emerald-200/50 bg-white/80 p-8 sm:p-12 shadow-2xl shadow-emerald-900/10 backdrop-blur-xl">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-3xl mb-6 shadow-lg shadow-emerald-500/30">
                📶
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
                Ready to test your network?
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
                Run a free speed test and get instant insights into your WiFi performance. 
                No registration required.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/speedtest"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#0B3B2E] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:bg-emerald-900 hover:shadow-xl hover:-translate-y-1 btn-ripple"
                >
                  Start Free Test
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/troubleshoot"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-emerald-200 bg-white/80 px-8 py-4 text-base font-semibold text-emerald-900 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400 hover:bg-white hover:shadow-lg hover:-translate-y-1"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

// Import HeroSection
import { HeroSection } from "@/components/hero-section";

function StepCard({ 
  number, 
  title, 
  description, 
  icon 
}: { 
  number: string; 
  title: string; 
  description: string; 
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative rounded-[24px] border border-slate-200/80 bg-white p-6 transition-all duration-500 hover:border-emerald-300/50 hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-2">
      {/* Step number */}
      <div className="absolute -top-4 left-6">
        <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 px-4 py-1.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/30">
          {number}
        </span>
      </div>

      {/* Icon */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>

      {/* Connector line for desktop */}
      <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-emerald-300/50" />
    </div>
  );
}

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <article className="group relative flex flex-col rounded-[24px] border border-slate-200/80 bg-white p-5 transition-all duration-500 hover:border-emerald-300/50 hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-2">
      {/* Type badge */}
      <div className="mb-3">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
          post.type === "Video" 
            ? "bg-rose-50 text-rose-700" 
            : "bg-emerald-50 text-emerald-700"
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

      <h3 className="text-lg font-semibold text-slate-950 leading-snug group-hover:text-emerald-900 transition-colors">
        {post.title}
      </h3>
      
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        {post.excerpt}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <time className="text-xs text-slate-400">{post.date}</time>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 opacity-0 transition-all duration-300 group-hover:opacity-100"
        >
          Read more
          <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
