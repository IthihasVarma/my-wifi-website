"use client";

import Link from "next/link";
import { useRef, useCallback } from "react";
import { useTilt } from "@/hooks/use-scroll-animations";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  accentColor: "cyan" | "purple" | "pink" | "green";
  delay?: number;
}

const accentColors = {
  cyan: { bg: "from-cyan-500/20", border: "border-cyan-400/30", text: "text-cyan-400", glow: "shadow-cyan-500/20" },
  purple: { bg: "from-purple-500/20", border: "border-purple-400/30", text: "text-purple-400", glow: "shadow-purple-500/20" },
  pink: { bg: "from-pink-500/20", border: "border-pink-400/30", text: "text-pink-400", glow: "shadow-pink-500/20" },
  green: { bg: "from-emerald-500/20", border: "border-emerald-400/30", text: "text-emerald-400", glow: "shadow-emerald-500/20" },
};

function FeatureCard({ icon, title, description, link, accentColor, delay = 0 }: FeatureCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { transform, handleMouseMove, handleMouseLeave } = useTilt<HTMLAnchorElement>(8);
  const colors = accentColors[accentColor];

  return (
    <Link
      ref={cardRef}
      href={link}
      className="group card-futuristic card-glow block p-6 sm:p-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeave();
      }}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        transform,
        transition: isHovered ? "none" : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Glow effect following cursor */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${colors.bg.replace("from-", "rgba(").replace("/20", ", 0.2)")} 0%, transparent 60%)`,
        }}
      />

      <div className="relative">
        {/* Icon */}
        <div 
          className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${colors.bg} to-transparent border ${colors.border} mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
        >
          <div className={`${colors.text}`}>
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          {description}
        </p>

        {/* Arrow */}
        <div className={`flex items-center gap-2 ${colors.text} text-sm font-medium`}>
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            Explore
          </span>
          <svg 
            className="w-4 h-4 transition-all duration-500 group-hover:translate-x-3 group-hover:opacity-100 opacity-0" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Bottom accent line */}
      <div 
        className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${colors.bg} to-transparent transition-all duration-500 group-hover:w-full`}
      />
    </Link>
  );
}

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
}

export function FeaturesSection({ title, subtitle }: FeaturesSectionProps) {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "WiFi Testing Automation",
      description: "Automated testbed solutions for comprehensive WiFi performance validation across devices and environments.",
      link: "/speedtest",
      accentColor: "cyan" as const,
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI-Driven Optimization",
      description: "Machine learning algorithms continuously analyze and optimize network performance in real-time.",
      link: "/know-your-wifi",
      accentColor: "purple" as const,
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Real-World Simulation",
      description: "Virtual environments that replicate complex real-world scenarios for comprehensive testing.",
      link: "/troubleshoot",
      accentColor: "pink" as const,
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: "Mesh Network Visualization",
      description: "Interactive topology mapping and real-time visualization of mesh network configurations.",
      link: "/know-your-wifi",
      accentColor: "cyan" as const,
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Performance Analytics",
      description: "Deep insights and analytics dashboards for network performance metrics and trends.",
      link: "/speedtest",
      accentColor: "green" as const,
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Virtual Device Emulation",
      description: "Emulate thousands of devices simultaneously to stress test network infrastructure.",
      link: "/troubleshoot",
      accentColor: "purple" as const,
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-cyan-500/5 to-purple-500/5 blur-[100px]" />
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-6">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Core Technologies
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="text-white">Built for </span>
              <span className="text-gradient-neon">Tomorrow&apos;s Networks</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="mt-5 mx-auto max-w-2xl text-lg text-slate-400">
              {subtitle || "Our platform combines cutting-edge AI with comprehensive testing infrastructure to deliver unmatched wireless intelligence."}
            </p>
          </ScrollReveal>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 100}>
              <FeatureCard {...feature} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Import useState
import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
