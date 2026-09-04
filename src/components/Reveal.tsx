"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Delay in ms
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  duration?: number; // Duration in ms
  once?: boolean;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 700,
  once = true,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [once]);

  const getDirectionStyles = () => {
    switch (direction) {
      case "up":
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12";
      case "down":
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12";
      case "left":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12";
      case "right":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12";
      case "scale":
        return isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95";
      case "fade":
        return isVisible ? "opacity-100" : "opacity-0";
      default:
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all ${getDirectionStyles()} ${className}`}
    >
      {children}
    </div>
  );
}
