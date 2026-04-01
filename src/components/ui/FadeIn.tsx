"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/cn";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.15,
  });

  const directionTransform = {
    up: "translate-y-6",
    left: "translate-x-6",
    right: "-translate-x-6",
    none: "",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-[600ms] [transition-timing-function:cubic-bezier(0.25,0.1,0.25,1.0)]",
        isIntersecting
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${directionTransform[direction]}`,
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
