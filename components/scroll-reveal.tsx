"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale";
  delay?: number;
}

export function ScrollReveal({ 
  children, 
  className = "", 
  animation = "fade",
  delay = 0 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add("is-visible");
          }, delay);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay]);

  const animationClass = {
    fade: "reveal-on-scroll",
    "slide-up": "reveal-on-scroll",
    "slide-left": "reveal-left",
    "slide-right": "reveal-right",
    scale: "reveal-scale",
  }[animation];

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
}

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: "slow" | "medium" | "fast";
}

export function ParallaxSection({ 
  children, 
  className = "", 
  speed = "medium",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const speedClass = {
      slow: "parallax-slow",
      medium: "parallax-medium",
      fast: "parallax-fast",
    }[speed];

    element.classList.add(speedClass);

    const handleScroll = () => {
      const scrolled = window.scrollY;
      element.style.setProperty("--scroll-y", scrolled.toString());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      element.classList.remove(speedClass);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`parallax-bg ${className}`}>
      {children}
    </div>
  );
}

// Sticky scroll section for scrollytelling
interface StickySceneProps {
  scenes: Array<{
    id: string;
    title: string;
    description: string;
    visual: ReactNode;
  }>;
}

export function StickyScrollytelling({ scenes }: StickySceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height - viewportHeight)));
      const sceneIndex = Math.floor(scrollProgress * scenes.length);
      setActiveScene(Math.min(sceneIndex, scenes.length - 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scenes.length]);

  return (
    <div ref={containerRef} className="relative">
      {/* Sticky Visual */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Background glow */}
          <div 
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0, 212, 255, 0.1), transparent)`,
              opacity: activeScene === 0 ? 1 : 0,
            }}
          />
          <div 
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(168, 85, 247, 0.1), transparent)`,
              opacity: activeScene === 1 ? 1 : 0,
            }}
          />
          <div 
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(236, 72, 153, 0.1), transparent)`,
              opacity: activeScene === 2 ? 1 : 0,
            }}
          />
        </div>
        
        {/* Scene Visual */}
        {scenes.map((scene, index) => (
          <div
            key={scene.id}
            className="absolute inset-0 flex items-center justify-center transition-all duration-1000"
            style={{
              opacity: activeScene === index ? 1 : 0,
              transform: activeScene === index ? "scale(1)" : "scale(0.9)",
              pointerEvents: activeScene === index ? "auto" : "none",
            }}
          >
            {scene.visual}
          </div>
        ))}
      </div>

      {/* Scroll Steps */}
      <div className="relative z-10">
        {scenes.map((scene, index) => (
          <div
            key={scene.id}
            className="h-screen flex items-center"
          >
            <div className="ml-auto mr-4 sm:mr-20 max-w-md">
              <ScrollReveal delay={0}>
                <div className="glass-glow rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg"
                      style={{
                        background: index === 0 
                          ? "linear-gradient(135deg, #00d4ff, #06b6d4)" 
                          : index === 1 
                            ? "linear-gradient(135deg, #a855f7, #ec4899)"
                            : "linear-gradient(135deg, #ec4899, #f97316)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white">{scene.title}</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{scene.description}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Import useState
import { useState } from "react";
