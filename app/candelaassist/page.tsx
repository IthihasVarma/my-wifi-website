"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

const features = [
  {
    icon: "📋",
    title: "Structured Intake Forms",
    description: "Guided questionnaires walk customers through their WiFi challenges, environment details, and testing requirements.",
  },
  {
    icon: "🔍",
    title: "Basic Environment Checks",
    description: "Run automatic checks on the customer's network - signal strength, device count, interference sources - before they even talk to sales.",
  },
  {
    icon: "📊",
    title: "Automated Needs Analysis",
    description: "The app analyzes responses and automatically categorizes the customer's needs, suggesting appropriate test solutions.",
  },
  {
    icon: "🔗",
    title: "Seamless Handoff",
    description: "Complete profile with all requirement details instantly available to your sales and engineering teams.",
  },
];

const questionnaireSteps = [
  {
    step: "1",
    title: "Company Information",
    questions: [
      "Company name and size",
      "Industry vertical",
      "Primary location type (office, warehouse, venue, etc.)",
    ],
  },
  {
    step: "2",
    title: "Current WiFi Setup",
    questions: [
      "Number of access points",
      "Current WiFi generation (WiFi 4/5/6/7)",
      "Internet service provider and plan speed",
    ],
  },
  {
    step: "3",
    title: "Pain Points",
    questions: [
      "What specific issues are you experiencing?",
      "Where does the problem occur most?",
      "How many devices are typically connected?",
    ],
  },
  {
    step: "4",
    title: "Testing Requirements",
    questions: [
      "What type of testing do you need?",
      "When do you need testing completed?",
      "Who will be the technical point of contact?",
    ],
  },
];

export default function CandelaAssistPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 py-20 sm:py-28">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block rounded-full border border-blue-400/30 bg-blue-900/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-6">
              Mobile App Concept
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              CandelaAssist
              <span className="block text-blue-400">Pre-Sales Qualification</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              Help customers articulate their WiFi challenges before they reach your team. 
              Gather requirements automatically and qualify leads faster.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#demo"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:bg-blue-400 hover:shadow-xl hover:-translate-y-1"
              >
                See How It Works
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                Sales Teams Waste Time on Discovery
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Initial sales calls often start from scratch - gathering basic information about the 
                customer's WiFi environment, testing needs, and pain points. This wastes valuable time 
                for both teams.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Customers struggle to articulate technical issues",
                  "Sales engineers spend hours on discovery calls",
                  "Inconsistent information captured across leads",
                  "Longer sales cycles due to back-and-forth",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-red-500">✕</span>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-[24px] border border-blue-200 bg-blue-50 p-8">
                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">
                  The Solution
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-4">CandelaAssist</h3>
                <p className="text-slate-600 mb-6">
                  Customers answer structured questions and run basic checks on their network 
                  before ever speaking to sales. Your team receives a complete qualification profile.
                </p>
                <div className="rounded-xl bg-white border border-blue-200 p-4">
                  <p className="text-blue-800 font-medium">
                    "Better conversations start with better information."
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
            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-4">
              Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              What CandelaAssist Does
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <div className="rounded-[20px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-4">
              Interactive Demo
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How the Questionnaire Works
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Click through the steps to see how customers document their requirements.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Phone Mockup */}
            <ScrollReveal>
              <div className="sticky top-24">
                <div className="mx-auto w-72 rounded-[3rem] border-8 border-slate-800 bg-slate-900 shadow-2xl">
                  <div className="aspect-[9/19] rounded-[2.5rem] bg-slate-800 overflow-hidden">
                    <div className="h-full flex flex-col bg-gradient-to-br from-slate-800 to-slate-900">
                      {/* Header */}
                      <div className="p-4 pb-2 border-b border-slate-700">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                            <span className="text-white text-sm">CA</span>
                          </div>
                          <span className="text-white text-sm font-bold">CandelaAssist</span>
                        </div>
                        <div className="mt-3 flex gap-1">
                          {questionnaireSteps.map((_, i) => (
                            <div
                              key={i}
                              className={`h-1.5 flex-1 rounded-full transition-colors ${
                                i <= activeStep ? "bg-blue-500" : "bg-slate-600"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-4">
                        <div className="text-xs text-blue-400 font-semibold uppercase mb-2">
                          Step {questionnaireSteps[activeStep].step} of {questionnaireSteps.length}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-4">
                          {questionnaireSteps[activeStep].title}
                        </h3>
                        
                        <div className="space-y-3">
                          {questionnaireSteps[activeStep].questions.map((q, i) => (
                            <div key={i} className="rounded-lg bg-slate-700/50 p-3 border border-slate-600">
                              <div className="text-xs text-slate-400 mb-1">{q}</div>
                              <div className="h-8 bg-slate-600/50 rounded" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Navigation */}
                      <div className="p-3 border-t border-slate-700 bg-slate-800 flex gap-2">
                        <button
                          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                          className="flex-1 py-2 rounded-lg bg-slate-700 text-slate-300 text-sm"
                        >
                          Back
                        </button>
                        <button
                          onClick={() => setActiveStep(Math.min(questionnaireSteps.length - 1, activeStep + 1))}
                          className="flex-1 py-2 rounded-lg bg-blue-500 text-white text-sm font-semibold"
                        >
                          {activeStep === questionnaireSteps.length - 1 ? "Submit" : "Next"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step Description */}
            <div className="space-y-4">
              {questionnaireSteps.map((step, index) => (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left rounded-[16px] p-4 transition-all ${
                    activeStep === index
                      ? "border-2 border-blue-500 bg-blue-50"
                      : "border border-slate-200 bg-slate-50 hover:border-blue-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                      activeStep === index ? "bg-blue-500 text-white" : "bg-slate-200 text-slate-600"
                    }`}>
                      {step.step}
                    </span>
                    <div>
                      <div className="font-semibold text-slate-900">{step.title}</div>
                      <div className="text-xs text-slate-500">{step.questions.length} questions</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block rounded-full border border-blue-400/30 bg-blue-900/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4">
              Business Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Why This Matters to Candela
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Faster Sales Cycle",
                description: "Reduce discovery call time by 50% with pre-qualified leads.",
                stat: "50%",
              },
              {
                title: "Better Close Rate",
                description: "Sales teams come prepared with complete customer context.",
                stat: "30%",
              },
              {
                title: "Higher Customer Satisfaction",
                description: "Customers feel heard before the first conversation.",
                stat: "4.8★",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="rounded-[20px] border border-slate-700 bg-slate-800/50 p-6 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{item.stat}</div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400 mt-2">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Like this concept?
          </h2>
          <p className="mt-4 text-blue-100 max-w-xl mx-auto">
            This is a proof-of-concept demo. Let's discuss building this app for real.
          </p>
          <div className="mt-8">
            <a
              href="mailto:contact@candelatech.com?subject=CandelaAssist Inquiry"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1"
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