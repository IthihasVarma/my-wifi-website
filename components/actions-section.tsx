"use client";

import Link from "next/link";
import { useRef, useState, useCallback } from "react";
import { useTilt } from "@/hooks/use-scroll-animations";

interface ActionCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  index: number;
}

function ActionCard({ href, icon, title, description, delay = 0, index }: ActionCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { transform, handleMouseMove, handleMouseLeave } = useTilt<HTMLAnchorElement>(10);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseExit = useCallback(() => {
    setIsHovered(false);
    handleMouseLeave();
  }, [handleMouseLeave]);

  return (
    <Link
      ref={cardRef}
      href={href}
      className="group relative block perspective-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      style={{
        transform,
        transition: isHovered ? "none" : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Glow effect on hover */}
      <div 
        className={`absolute -inset-1 rounded-[28px] bg-gradient-to-br from-emerald-400/50 via-teal-400/30 to-emerald-600/50 blur-xl opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-60" : ""}`}
      />

      {/* Card content */}
      <div className="relative rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-200/50 transition-all duration-500 group-hover:border-emerald-300/50 group-hover:shadow-xl group-hover:shadow-emerald-900/10">
        {/* Icon container */}
        <div className="relative mb-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            {icon}
          </div>
          
          {/* Animated ring */}
          <div 
            className={`absolute inset-0 rounded-2xl border-2 border-emerald-400/0 transition-all duration-500 ${isHovered ? "border-emerald-400/30 scale-105" : ""}`}
          />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-emerald-900">
          {title}
        </h3>
        
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        {/* Arrow with animation */}
        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-700">
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            Open section
          </span>
          <svg 
            className={`w-4 h-4 transition-all duration-300 ${isHovered ? "translate-x-2 opacity-100" : "opacity-0 -translate-x-2"}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        {/* Bottom accent line */}
        <div 
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-600 transition-all duration-500 ${isHovered ? "w-3/4" : ""}`}
        />
      </div>

      {/* Stagger animation */}
      <style jsx>{`
        @keyframes card-appear {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
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
    <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  troubleshoot: (
    <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  knowledge: (
    <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

export function ActionsSection({ actions }: ActionsSectionProps) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
            Everything you need for
            <span className="text-gradient"> better WiFi</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-slate-600">
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
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
