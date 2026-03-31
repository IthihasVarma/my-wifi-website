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
  direction?: "up" | "down";
}

export function ParallaxSection({ 
  children, 
  className = "", 
  speed = "medium",
  direction = "up"
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
