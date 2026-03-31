"use client";

import Link from "next/link";
import { useRef, useState, useCallback } from "react";
import { useTilt } from "@/hooks/use-scroll-animations";

interface ActionCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: "cyan" | "purple" | "pink";
  delay?: number;
  index: number;
}

const colors = {
  cyan: { bg: "from-cyan-500/20", border: "border-cyan-400/30", text: "text-cyan-400" },
  purple: { bg: "from-purple-500/20", border: "border-purple-400/30", text: "text-purple-400" },
  pink: { bg: "from-pink-500/20", border: "border-pink-400/30", text: "text-pink-400" },
};

function ActionCard({ href, icon, title, description, accentColor, delay = 0, index }: ActionCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { transform, handleMouseMove, handleMouseLeave } = useTilt<HTMLAnchorElement>(10);
  const color = colors[accentColor];

  return (
    <Link
      ref={cardRef}
      href={href}
      className="group card-futuristic card-glow block p-6"
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
      {/* Glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${color.bg.replace("from-", "rgba(").replace("/20", ", 0.15)")} 0%, transparent 60%)`,
        }}
      />

      <div className="relative">
        {/* Icon container */}
        <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${color.bg} to-transparent border ${color.border} mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
          {icon}
        </div>

        {/* Content */}
        <h3 className={`text-xl font-bold text-white transition-colors duration-300 group-hover:${color.text}`}>
          {title}
        </h3>
        
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        {/* Arrow */}
        <div className={`mt-5 flex items-center gap-2 ${color.text} text-sm font-medium`}>
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            Open section
          </span>
          <svg 
            className={`w-4 h-4 transition-all duration-500 group-hover:translate-x-3 group-hover:opacity-100 opacity-0`}
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
        className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${color.bg} to-transparent transition-all duration-500 group-hover:w-full`}
      />
    </Link>
  );
}

interface ActionsSectionProps {
  actions: Array<{
    href: string;
    title: string;
    description: string;
    icon: "speedtest" | "troubleshoot" | "knowledge";
  }>;
}

const icons = {
  speedtest: (
    <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  troubleshoot: (
    <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  knowledge: (
    <svg className="w-7 h-7 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

const accentColors: ("cyan" | "purple" | "pink")[] = ["cyan", "purple", "pink"];

export function ActionsSection({ actions }: ActionsSectionProps) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Everything you need for
            <span className="text-gradient-neon"> better WiFi</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-slate-400">
            From real-time speed tests to comprehensive troubleshooting guides — 
            get the insights you need to optimize your network.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {actions.map((action, index) => (
            <div
              key={action.href}
              className="reveal-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ActionCard
                href={action.href}
                icon={icons[action.icon]}
                title={action.title}
                description={action.description}
                delay={index * 100}
                index={index}
                accentColor={accentColors[index % 3]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
