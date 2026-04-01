"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

const features = [
  {
    icon: "📊",
    title: "Real-time Test Monitoring",
    description: "Watch test progress live from anywhere. Get instant status updates on LANforge tests running on your network.",
  },
  {
    icon: "🔔",
    title: "Push Notifications",
    description: "Never miss a test completion or failure. Receive instant alerts when tests pass, fail, or need attention.",
  },
  {
    icon: "📄",
    title: "Report Viewer",
    description: "View and share PDF/CSV test results on the go. Generate quick reports for clients directly from your phone.",
  },
  {
    icon: "📡",
    title: "Quick WiFi Scanner",
    description: "On-site WiFi diagnostics using your phone. Scan nearby networks, check signal strength, and identify channel congestion.",
  },
  {
    icon: "🎮",
    title: "Remote Test Control",
    description: "Start, stop, and control basic tests remotely. Manage your test suite without being tied to a desktop.",
  },
  {
    icon: "👥",
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

const appScreens = [
  {
    id: "dashboard",
    title: "Dashboard",
    mockup: {
      sections: [
        { label: "Active Tests", value: "3", color: "emerald" },
        { label: "Completed", value: "12", color: "blue" },
        { label: "Alerts", value: "1", color: "amber" },
      ],
    },
  },
  {
    id: "monitoring",
    title: "Live Monitoring",
    mockup: {
      metrics: [
        { label: "Download", value: "847 Mbps" },
        { label: "Upload", value: "523 Mbps" },
        { label: "Latency", value: "12 ms" },
      ],
    },
  },
  {
    id: "alerts",
    title: "Alerts",
    mockup: {
      alerts: [
        { type: "warning", title: "High latency detected", time: "2 min ago" },
        { type: "success", title: "Test completed", time: "15 min ago" },
      ],
    },
  },
  {
    id: "scanner",
    title: "WiFi Scanner",
    mockup: {
      networks: [
        { ssid: "Office_Main", signal: -45, channel: "36" },
        { ssid: "Office_Guest", signal: -62, channel: "44" },
      ],
    },
  },
];

export default function CandelaFieldPage() {
  const [activeScreen, setActiveScreen] = useState(0);

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
              Mobile App Concept
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              CandelaField
              <span className="block text-emerald-400">Mobile Companion</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              Monitor, diagnose, and control your network tests from anywhere. 
              The ultimate companion app for field technicians and network engineers.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#demo"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:bg-emerald-400 hover:shadow-xl hover:-translate-y-1"
              >
                See It In Action
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <span className="inline-block rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-700 mb-4">
                The Problem
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Network Testing is Tied to Desktops
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Currently, network engineers and field technicians must be physically present at a desktop 
                to monitor LANforge tests. This limits flexibility and creates inefficiencies in workflow.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Can't monitor tests while traveling between sites",
                  "No way to get instant alerts when issues arise",
                  "Limited ability to run quick diagnostics in the field",
                  "Difficulty sharing results with clients in real-time",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-red-500">✕</span>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-[24px] border border-emerald-200 bg-emerald-50 p-8">
                <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 mb-4">
                  The Solution
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-4">CandelaField</h3>
                <p className="text-slate-600 mb-6">
                  A mobile companion app that connects to your LANforge server and gives you 
                  complete control from anywhere.
                </p>
                <div className="rounded-xl bg-white border border-emerald-200 p-4">
                  <p className="text-emerald-800 font-medium">
                    "Test from anywhere. Never miss a result."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-4">
              Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Everything You Need to Test Smarter
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <div className="rounded-[20px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-emerald-300 hover:shadow-lg">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-4">
                Who is it for?
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Built for Network Professionals
              </h2>
            </ScrollReveal>

            <div className="space-y-4">
              {useCases.map((useCase, index) => (
                <ScrollReveal key={useCase.title} delay={index * 100}>
                  <div className="rounded-[16px] border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-lg font-bold text-slate-900">{useCase.title}</h3>
                    <p className="text-slate-600 text-sm mt-2">{useCase.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-4">
              Interactive Demo
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Explore the App Interface
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Click through different screens to see how CandelaField works.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Phone Mockup */}
            <ScrollReveal>
              <div className="sticky top-24">
                <div className="mx-auto w-72 rounded-[3rem] border-8 border-slate-800 bg-slate-900 shadow-2xl">
                  <div className="aspect-[9/19] rounded-[2.5rem] bg-slate-800 overflow-hidden">
                    <div className="h-full flex flex-col bg-gradient-to-br from-slate-800 to-slate-900">
                      <div className="p-4 pb-2 border-b border-slate-700">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <span className="text-white text-sm font-bold">CandelaField</span>
                        </div>
                      </div>

                      <div className="flex-1 p-4 space-y-3">
                        {activeScreen === 0 && (
                          <>
                            <div className="grid grid-cols-3 gap-2">
                              {appScreens[0].mockup.sections?.map((stat, i) => (
                                <div key={i} className="rounded-xl p-3 bg-slate-700/50 border border-slate-600">
                                  <div className="text-xs text-slate-400">{stat.label}</div>
                                  <div className="text-xl font-bold text-emerald-400">{stat.value}</div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                        {activeScreen === 1 && (
                          <div className="grid grid-cols-2 gap-2">
                            {appScreens[1].mockup.metrics?.map((m, i) => (
                              <div key={i} className="rounded-xl bg-slate-700/50 p-3 border border-slate-600">
                                <div className="text-xs text-slate-400">{m.label}</div>
                                <div className="text-lg font-bold text-white">{m.value}</div>
                              </div>
                            ))}
                          </div>
                        )}
                        {activeScreen === 2 && (
                          <div className="space-y-2">
                            {appScreens[2].mockup.alerts?.map((a, i) => (
                              <div key={i} className="rounded-lg bg-slate-700/50 p-3 border border-slate-600">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className={`w-2 h-2 rounded-full ${a.type === 'warning' ? 'bg-amber-400' : 'bg-emerald-400'}`} />
                                  <span className="text-white text-sm">{a.title}</span>
                                </div>
                                <div className="text-xs text-slate-400">{a.time}</div>
                              </div>
                            ))}
                          </div>
                        )}
                        {activeScreen === 3 && (
                          <div className="space-y-2">
                            {appScreens[3].mockup.networks?.map((n, i) => (
                              <div key={i} className="rounded-lg bg-slate-700/50 p-3 border border-slate-600">
                                <div className="flex justify-between">
                                  <span className="text-white text-sm">{n.ssid}</span>
                                  <span className="text-emerald-400 text-sm">{n.signal} dBm</span>
                                </div>
                                <div className="text-xs text-slate-400">Ch {n.channel}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="p-3 border-t border-slate-700 bg-slate-800">
                        <div className="flex justify-around">
                          {['📊', '📈', '🔔', '📡'].map((icon, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveScreen(i)}
                              className={`p-2 rounded-lg ${activeScreen === i ? 'bg-emerald-500 text-white' : 'text-slate-400'}`}
                            >
                              {icon}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Screen Navigation */}
            <div className="space-y-3">
              {appScreens.map((screen, index) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(index)}
                  className={`w-full text-left rounded-[16px] p-4 transition-all ${
                    activeScreen === index
                      ? "border-2 border-emerald-500 bg-emerald-50"
                      : "border border-slate-200 bg-slate-50 hover:border-emerald-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                      activeScreen === index ? "bg-emerald-500 text-white" : "bg-slate-200 text-slate-600"
                    }`}>
                      {index + 1}
                    </span>
                    <span className={`font-semibold ${activeScreen === index ? "text-slate-900" : "text-slate-700"}`}>
                      {screen.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Like this concept?
          </h2>
          <p className="mt-4 text-emerald-100 max-w-xl mx-auto">
            This is a proof-of-concept demo. Let's discuss building this app for real.
          </p>
          <div className="mt-8">
            <a
              href="mailto:contact@candelatech.com?subject=CandelaField Inquiry"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-emerald-700 shadow-lg transition-all duration-300 hover:bg-emerald-50 hover:shadow-xl hover:-translate-y-1"
            >
              Get In Touch
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}