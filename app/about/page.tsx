"use client";

import { ScrollReveal } from "@/components/scroll-reveal";

const timeline = [
  {
    year: "2025",
    title: "Concept Development",
    description: "Initial research into mobile companion apps for network testing solutions.",
  },
  {
    year: "2025",
    title: "Design Phase",
    description: "User research and UI/UX design for the CandelaField mobile application.",
  },
  {
    year: "2025",
    title: "Prototype",
    description: "Interactive demo created to showcase the app concept to stakeholders.",
  },
];

const values = [
  {
    title: "Innovation",
    description: "Continuously pushing boundaries to make network testing more accessible and efficient.",
    icon: "💡",
  },
  {
    title: "User-Centric",
    description: "Designing with the end-user in mind - field technicians, network engineers, IT admins.",
    icon: "👥",
  },
  {
    title: "Reliability",
    description: "Building robust solutions that perform in critical testing environments.",
    icon: "⚡",
  },
];

export default function AboutPage() {
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
              About This Project
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              About
              <span className="block text-emerald-400">CandelaField</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              A concept mobile app designed to complement Candela Technologies' network testing solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-4">
                The Problem
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Network Testing Needs Mobility
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
                    <span className="mt-1 text-emerald-500">✓</span>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">The Solution</h3>
                <p className="text-slate-600 mb-6">
                  CandelaField bridges this gap by providing a mobile companion that connects to your 
                  LANforge server and gives you complete control from anywhere.
                </p>
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
                  <p className="text-emerald-800 font-medium">
                    "This demo showcases the vision for a mobile-first approach to network testing."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-4">
              Our Approach
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Guiding Principles
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="rounded-[20px] border border-slate-200 bg-white p-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900">{value.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-4">
              Progress
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Project Timeline
            </h2>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 100}>
                <div className="flex gap-6 pb-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white font-bold">
                      {index + 1}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-emerald-200 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-2">
                    <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 mt-1">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Interested in This Concept?
          </h2>
          <p className="mt-4 text-emerald-100 max-w-xl mx-auto">
            This is a proof-of-concept demo. We'd love to discuss building this into a real product.
          </p>
          <div className="mt-8">
            <a
              href="mailto:contact@candelatech.com?subject=CandelaField Discussion"
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