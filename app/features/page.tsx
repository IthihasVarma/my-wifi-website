"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

const features = [
  {
    category: "Monitoring",
    items: [
      {
        title: "Real-time Test Status",
        description: "Watch your LANforge tests progress live. See throughput, latency, and connection counts update in real-time.",
        icon: "📊",
      },
      {
        title: "Multi-test Dashboard",
        description: "Monitor multiple tests across different clients or sites from a single unified view.",
        icon: "🖥️",
      },
      {
        title: "Historical Data",
        description: "Access past test results and performance trends to identify patterns over time.",
        icon: "📈",
      },
    ],
  },
  {
    category: "Notifications",
    items: [
      {
        title: "Push Alerts",
        description: "Get instant notifications when tests complete, fail, or encounter issues that need attention.",
        icon: "🔔",
      },
      {
        title: "Custom Thresholds",
        description: "Set up custom alert rules for specific metrics like packet loss or latency spikes.",
        icon: "⚙️",
      },
      {
        title: "Email Summaries",
        description: "Receive daily or weekly email digests of test activity across all your monitored sites.",
        icon: "📧",
      },
    ],
  },
  {
    category: "Field Tools",
    items: [
      {
        title: "WiFi Scanner",
        description: "Use your phone's built-in WiFi capabilities to scan nearby networks, measure signal strength, and identify channel congestion before setting up full test equipment.",
        icon: "📡",
      },
      {
        title: "Quick Diagnostics",
        description: "Run basic network diagnostics on-site to check connectivity, DNS resolution, and gateway availability.",
        icon: "🔍",
      },
      {
        title: "Site Notes",
        description: "Add text notes, photos, and tags to each test site for better documentation and client communication.",
        icon: "📝",
      },
    ],
  },
  {
    category: "Control",
    items: [
      {
        title: "Remote Test Start/Stop",
        description: "Start, stop, or pause tests remotely. Great for long-running tests you want to initiate before arriving on-site.",
        icon: "🎮",
      },
      {
        title: "Configuration Profiles",
        description: "Save and recall test configurations for different scenarios or client types.",
        icon: "💾",
      },
      {
        title: "Team Collaboration",
        description: "Share test results and notes with team members. Assign tasks and track follow-ups.",
        icon: "👥",
      },
    ],
  },
];

const technicalSpecs = [
  {
    title: "API Integration",
    description: "Connects directly to your existing LANforge server via secure REST API",
  },
  {
    title: "Secure Communication",
    description: "End-to-end encryption with OAuth 2.0 authentication",
  },
  {
    title: "Offline Capable",
    description: "Works offline with sync when connection restored",
  },
  {
    title: "Cross-platform",
    description: "Available on iOS and Android",
  },
];

export default function FeaturesPage() {
  return (
    <div className="relative">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 py-20 sm:py-28">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-900/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-6">
              Features
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Complete Feature
              <span className="block text-emerald-400">Overview</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              A comprehensive suite of tools designed specifically for network testing professionals.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Features by Category */}
      {features.map((category, catIndex) => (
        <section key={category.category} className={`py-16 ${catIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-10">
              <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-4">
                {category.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                {category.category} Features
              </h2>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-3">
              {category.items.map((item, itemIndex) => (
                <ScrollReveal key={item.title} delay={itemIndex * 100}>
                  <div className="group rounded-[20px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-emerald-300 hover:shadow-lg">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm text-slate-600">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Technical Specs */}
      <section className="py-16 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-900/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-4">
              Technical
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Built for Enterprise
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {technicalSpecs.map((spec, index) => (
              <ScrollReveal key={spec.title} delay={index * 100}>
                <div className="rounded-[20px] border border-slate-700 bg-slate-800/50 p-6">
                  <h3 className="text-lg font-bold text-white">{spec.title}</h3>
                  <p className="mt-3 text-sm text-slate-400">{spec.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Want to see these features in action?
          </h2>
          <p className="mt-4 text-emerald-100 max-w-xl mx-auto">
            Check out our interactive demo to see how CandelaField works.
          </p>
          <div className="mt-8">
            <a
              href="/demo"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-emerald-700 shadow-lg transition-all duration-300 hover:bg-emerald-50 hover:shadow-xl hover:-translate-y-1"
            >
              View Demo
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}