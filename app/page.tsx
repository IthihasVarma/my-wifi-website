"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Real-time Test Monitoring",
    description: "Watch test progress live from anywhere. Get instant status updates on LANforge tests running on your network.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Push Notifications",
    description: "Never miss a test completion or failure. Receive instant alerts when tests pass, fail, or need attention.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Report Viewer",
    description: "View and share PDF/CSV test results on the go. Generate quick reports for clients directly from your phone.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Quick WiFi Scanner",
    description: "On-site WiFi diagnostics using your phone. Scan nearby networks, check signal strength, and identify channel congestion.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Remote Test Control",
    description: "Start, stop, and control basic tests remotely. Manage your test suite without being tied to a desktop.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Client Management",
    description: "Store client details, site notes, and equipment checklists. Keep all your field information organized in one place.",
  },
];

const useCases = [
  {
    title: "Field Technicians",
    description: "Run quick WiFi diagnostics on-site before deploying full test rigs. Generate instant reports for clients.",
  },
  {
    title: "Network Engineers",
    description: "Monitor long-running tests remotely. Get alerts when issues arise and take immediate action.",
  },
  {
    title: "IT Administrators",
    description: "Manage multiple client sites from a single dashboard. Track test history and performance trends.",
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 py-20 sm:py-32">
        {/* Background patterns */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollReveal>
              <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-900/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-6">
                Built for Candela Technologies
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Monitor Your Network Tests
                <span className="block mt-2 text-emerald-400">From Anywhere</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-slate-300">
                CandelaField is the mobile companion app for Candela Technologies' LANforge testing solutions. 
                Monitor, diagnose, and control your network tests from the field.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/demo"
                  className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:bg-emerald-400 hover:shadow-xl hover:-translate-y-1"
                >
                  See Demo
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-slate-600 bg-transparent px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-emerald-400 hover:bg-slate-800"
                >
                  Explore Features
                </Link>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Phone mockup */}
          <ScrollReveal delay={400}>
            <div className="mt-16 flex justify-center">
              <div className="relative">
                <div className="w-64 sm:w-72 rounded-[3rem] border-8 border-slate-800 bg-slate-900 shadow-2xl">
                  <div className="aspect-[9/19] rounded-[2.5rem] bg-gradient-to-br from-slate-800 to-slate-900 p-4">
                    <div className="h-full rounded-[2rem] bg-slate-900 flex flex-col">
                      {/* App UI Mockup */}
                      <div className="p-4 pb-2">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <span className="text-emerald-400 text-xs font-bold">CandelaField</span>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-slate-700 rounded-full w-3/4" />
                          <div className="h-2 bg-slate-700 rounded-full w-1/2" />
                          <div className="h-16 bg-emerald-900/50 rounded-xl border border-emerald-500/30 flex items-center justify-center">
                            <span className="text-emerald-400 text-xs font-mono">3 Tests Running</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-2xl rounded-full" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-4">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Everything You Need to
              <span className="text-emerald-600"> Test Smarter</span>
            </h2>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <div className="group relative rounded-[24px] border border-slate-200/80 bg-white p-6 transition-all duration-500 hover:border-emerald-300/50 hover:shadow-xl hover:-translate-y-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-4">
                Who is it for?
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Built for
                <span className="text-emerald-600"> Network Professionals</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                CandelaField bridges the gap between your testing hardware and mobile workflow. 
                Whether you're in the office or on-site, stay connected to your tests.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {useCases.map((useCase, index) => (
                <ScrollReveal key={useCase.title} delay={index * 150}>
                  <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50/50">
                    <h3 className="text-lg font-bold text-slate-900">{useCase.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{useCase.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="rounded-[32px] border border-emerald-400/20 bg-white/5 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-3xl mb-6 shadow-lg shadow-emerald-500/30">
                📱
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Ready to Transform Your Testing Workflow?
              </h2>
              <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto">
                See how CandelaField can help you monitor and manage your network tests from anywhere.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/demo"
                  className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:bg-emerald-400 hover:shadow-xl hover:-translate-y-1"
                >
                  View Demo
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}