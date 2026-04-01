"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

const appScreens = [
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Your central hub for all test monitoring. See active tests, recent activity, and key metrics at a glance.",
    mockup: {
      header: { title: "CandelaField", status: "Connected" },
      sections: [
        { label: "Active Tests", value: "3", color: "emerald" },
        { label: "Completed Today", value: "12", color: "blue" },
        { label: "Alerts", value: "1", color: "amber" },
      ],
      recentTests: [
        { name: "TR-398 Issue 4", status: "Running", progress: 65 },
        { name: "Mesh Test v2", status: "Completed", progress: 100 },
        { name: "Large Venue", status: "Pending", progress: 0 },
      ],
    },
  },
  {
    id: "monitoring",
    title: "Live Monitoring",
    description: "Real-time view of test metrics. Watch throughput, latency, and packet loss update as tests run.",
    mockup: {
      header: { title: "TR-398 Test", status: "Running" },
      metrics: [
        { label: "Download", value: "847 Mbps", icon: "⬇️" },
        { label: "Upload", value: "523 Mbps", icon: "⬆️" },
        { label: "Latency", value: "12 ms", icon: "⏱️" },
        { label: "Jitter", value: "2 ms", icon: "📊" },
      ],
      chart: true,
    },
  },
  {
    id: "alerts",
    title: "Alerts & Notifications",
    description: "Stay informed about test results. Get push notifications for completions, failures, and critical issues.",
    mockup: {
      header: { title: "Alerts", count: "3" },
      alerts: [
        { type: "warning", title: "High latency detected", time: "2 min ago", detail: "Mesh node 3 showing 45ms" },
        { type: "success", title: "Test completed", time: "15 min ago", detail: "TR-398 Issue 4 passed" },
        { type: "info", title: "Test started", time: "1 hr ago", detail: "Large Venue WiFi" },
      ],
    },
  },
  {
    id: "wifi-scanner",
    title: "WiFi Scanner",
    description: "On-site quick diagnostics. Scan nearby networks, check signal strength, and identify channel congestion.",
    mockup: {
      header: { title: "WiFi Scanner", status: "Scanning..." },
      networks: [
        { ssid: "Office_Main", signal: -45, channel: "36", band: "5 GHz" },
        { ssid: "Office_Guest", signal: -62, channel: "44", band: "5 GHz" },
        { ssid: "IoT_Devices", signal: -78, channel: "11", band: "2.4 GHz" },
      ],
    },
  },
];

export default function DemoPage() {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <div className="relative">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 py-20 sm:py-28">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-900/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-6">
              Interactive Demo
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              See CandelaField
              <span className="block text-emerald-400">In Action</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              Explore the app interface through our interactive demo. Click through different screens to see how it works.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Phone Mockup */}
            <ScrollReveal>
              <div className="sticky top-24">
                <div className="mx-auto w-72 rounded-[3rem] border-8 border-slate-800 bg-slate-900 shadow-2xl">
                  <div className="aspect-[9/19] rounded-[2.5rem] bg-slate-800 overflow-hidden">
                    {/* Phone Screen Content */}
                    <div className="h-full flex flex-col bg-gradient-to-br from-slate-800 to-slate-900">
                      {/* Header */}
                      <div className="p-4 pb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <span className="text-white text-sm font-bold">{appScreens[activeScreen].mockup.header.title}</span>
                          </div>
                          <span className="text-emerald-400 text-xs">{appScreens[activeScreen].mockup.header.status}</span>
                        </div>
                      </div>

                      {/* Screen Content */}
                      <div className="flex-1 p-4 pt-2 space-y-3">
                        {activeScreen === 0 && (
                          <>
                            {/* Dashboard Stats */}
                            <div className="grid grid-cols-3 gap-2">
                              {appScreens[activeScreen].mockup.sections?.map((stat, i) => (
                                <div key={i} className={`rounded-xl p-3 bg-${stat.color}-900/50 border border-${stat.color}-500/30`}>
                                  <div className="text-xs text-slate-400">{stat.label}</div>
                                  <div className={`text-xl font-bold text-${stat.color}-400`}>{stat.value}</div>
                                </div>
                              ))}
                            </div>
                            {/* Recent Tests */}
                            <div className="space-y-2 mt-4">
                              <div className="text-xs font-semibold text-slate-400 uppercase">Recent Tests</div>
                              {appScreens[activeScreen].mockup.recentTests?.map((test, i) => (
                                <div key={i} className="rounded-lg bg-slate-700/50 p-3 border border-slate-600">
                                  <div className="flex justify-between items-center">
                                    <span className="text-white text-sm">{test.name}</span>
                                    <span className={`text-xs ${test.status === 'Completed' ? 'text-emerald-400' : test.status === 'Running' ? 'text-amber-400' : 'text-slate-400'}`}>{test.status}</span>
                                  </div>
                                  <div className="mt-2 h-1.5 bg-slate-600 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${test.progress}%` }} />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}

                        {activeScreen === 1 && (
                          <>
                            {/* Live Metrics */}
                            <div className="grid grid-cols-2 gap-2">
                              {appScreens[activeScreen].mockup.metrics?.map((metric, i) => (
                                <div key={i} className="rounded-xl bg-slate-700/50 p-3 border border-slate-600">
                                  <div className="text-xs text-slate-400">{metric.label}</div>
                                  <div className="text-lg font-bold text-white flex items-center gap-1">
                                    <span>{metric.icon}</span>
                                    {metric.value}
                                  </div>
                                </div>
                              ))}
                            </div>
                            {/* Chart */}
                            <div className="rounded-xl bg-slate-700/50 p-4 border border-slate-600 mt-3">
                              <div className="text-xs text-slate-400 mb-2">Throughput (Mbps)</div>
                              <div className="h-24 flex items-end gap-1">
                                {[40, 65, 45, 80, 70, 55, 90, 75, 60, 85, 78, 65].map((h, i) => (
                                  <div key={i} className="flex-1 bg-emerald-500 rounded-t" style={{ height: `${h}%` }} />
                                ))}
                              </div>
                            </div>
                          </>
                        )}

                        {activeScreen === 2 && (
                          <>
                            {/* Alerts */}
                            <div className="space-y-2">
                              {appScreens[activeScreen].mockup.alerts?.map((alert, i) => (
                                <div key={i} className={`rounded-lg p-3 border ${
                                  alert.type === 'warning' ? 'bg-amber-900/30 border-amber-500/30' :
                                  alert.type === 'success' ? 'bg-emerald-900/30 border-emerald-500/30' :
                                  'bg-blue-900/30 border-blue-500/30'
                                }`}>
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className={`w-2 h-2 rounded-full ${
                                      alert.type === 'warning' ? 'bg-amber-400' :
                                      alert.type === 'success' ? 'bg-emerald-400' :
                                      'bg-blue-400'
                                    }`} />
                                    <span className="text-white text-sm font-medium">{alert.title}</span>
                                  </div>
                                  <div className="text-xs text-slate-400">{alert.detail}</div>
                                  <div className="text-xs text-slate-500 mt-1">{alert.time}</div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}

                        {activeScreen === 3 && (
                          <>
                            {/* WiFi Scanner */}
                            <div className="space-y-2">
                              {appScreens[activeScreen].mockup.networks?.map((net, i) => (
                                <div key={i} className="rounded-lg bg-slate-700/50 p-3 border border-slate-600">
                                  <div className="flex justify-between items-center">
                                    <span className="text-white text-sm font-medium">{net.ssid}</span>
                                    <span className="text-emerald-400 text-sm">{net.signal} dBm</span>
                                  </div>
                                  <div className="flex gap-3 mt-1 text-xs text-slate-400">
                                    <span>Ch {net.channel}</span>
                                    <span>{net.band}</span>
                                    <span className={`${net.signal > -50 ? 'text-emerald-400' : net.signal > -70 ? 'text-amber-400' : 'text-red-400'}`}>
                                      {net.signal > -50 ? 'Excellent' : net.signal > -70 ? 'Good' : 'Weak'}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Bottom Nav */}
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
            <div className="space-y-6">
              {appScreens.map((screen, index) => (
                <ScrollReveal key={screen.id} delay={index * 100}>
                  <button
                    onClick={() => setActiveScreen(index)}
                    className={`w-full text-left rounded-[20px] p-6 transition-all duration-300 ${
                      activeScreen === index
                        ? "border-2 border-emerald-500 bg-white shadow-xl"
                        : "border border-slate-200 bg-slate-50 hover:border-emerald-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        activeScreen === index ? "bg-emerald-500 text-white" : "bg-slate-200 text-slate-600"
                      }`}>
                        {index + 1}
                      </span>
                      <div>
                        <h3 className={`text-lg font-bold ${activeScreen === index ? "text-slate-900" : "text-slate-700"}`}>
                          {screen.title}
                        </h3>
                        <p className="text-sm text-slate-500 mt-1">{screen.description}</p>
                      </div>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-emerald-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Like what you see?
            </h2>
            <p className="mt-4 text-slate-300">
              This is a concept demo. If you'd like to see a working prototype or discuss building this app, let's talk.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contact@candelatech.com?subject=CandelaField Inquiry"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-emerald-400 hover:shadow-xl hover:-translate-y-1"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}