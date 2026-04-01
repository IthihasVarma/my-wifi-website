"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

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
                Mobile Solutions for
                <span className="block mt-2 text-emerald-400">Network Testing</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-slate-300">
                Two complementary mobile apps designed to transform how you test networks 
                and engage with customers.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="#apps"
                  className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:bg-emerald-400 hover:shadow-xl hover:-translate-y-1"
                >
                  Explore Apps
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Two Apps Section */}
      <section id="apps" className="py-20 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-4">
              Our Concepts
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Two Apps, One Ecosystem
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              From lead capture to test execution - a complete mobile solution for your network testing business.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* CandelaField */}
            <ScrollReveal>
              <div className="group relative rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:border-emerald-300/50 hover:shadow-2xl hover:shadow-emerald-900/10 hover:-translate-y-2">
                <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-2xl shadow-lg">
                  📱
                </div>
                
                <div className="mt-4">
                  <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    For Field Teams
                  </span>
                </div>
                
                <h3 className="mt-4 text-2xl font-bold text-slate-900">CandelaField</h3>
                <p className="mt-3 text-slate-600">
                  Mobile companion app for network testing professionals. Monitor, diagnose, and control 
                  your LANforge tests from anywhere.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Real-time test monitoring",
                    "Push notifications for alerts",
                    "Quick WiFi diagnostics",
                    "Remote test control",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs">✓</span>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-3">
                  <Link
                    href="/candelafield"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-500"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/candelafield#demo"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-emerald-300"
                  >
                    View Demo
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* CandelaAssist */}
            <ScrollReveal delay={200}>
              <div className="group relative rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:border-blue-300/50 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2">
                <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-2xl shadow-lg">
                  🤝
                </div>
                
                <div className="mt-4">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    For Sales & Customers
                  </span>
                </div>
                
                <h3 className="mt-4 text-2xl font-bold text-slate-900">CandelaAssist</h3>
                <p className="mt-3 text-slate-600">
                  Pre-sales qualification tool that helps customers articulate their WiFi challenges 
                  before they reach your team.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Structured requirement gathering",
                    "Basic WiFi environment checks",
                    "Automated needs assessment",
                    "Seamless handoff to sales team",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs">✓</span>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-3">
                  <Link
                    href="/candelaassist"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/candelaassist#demo"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-blue-300"
                  >
                    View Demo
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-4">
                The Complete Solution
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                From First Contact to
                <span className="text-emerald-600"> Test Results</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                These two apps work together to create a seamless experience for both your team and your customers.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Customer Discovers Candela",
                    description: "Prospects find CandelaAssist through website or sales team, start documenting their needs.",
                  },
                  {
                    step: "02",
                    title: "Requirements Captured",
                    description: "Structured questions and basic checks gather all necessary information upfront.",
                  },
                  {
                    step: "03",
                    title: "Sales Handoff",
                    description: "Qualified leads with complete context go to your team - no wasted discovery calls.",
                  },
                  {
                    step: "04",
                    title: "Test Execution",
                    description: "CandelaField empowers field teams to execute tests efficiently with full context.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="rounded-[32px] border border-emerald-400/20 bg-white/5 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-3xl mb-6 shadow-lg shadow-emerald-500/30">
                🚀
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Ready to Build These Apps?
              </h2>
              <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto">
                These are concept demos ready to be developed. Let's discuss how to bring them to life.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:bg-emerald-400 hover:shadow-xl hover:-translate-y-1"
                >
                  Contact Us
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