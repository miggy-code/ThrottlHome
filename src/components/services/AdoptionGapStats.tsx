"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { FadeIn } from "@/components/ui/FadeIn";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/cn";

// ─── Animated Bar + Counter ──────────────────────────────────────────────────

function StatBar({
  target,
  suffix,
  label,
  source,
  started,
  delay,
  color,
}: {
  target: number;
  suffix: string;
  label: string;
  source: string;
  started: boolean;
  delay: number;
  color: string;
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [target]);

  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => animate(), delay);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(rafRef.current);
    };
  }, [started, animate, delay]);

  const displayValue = started ? value : 0;

  return (
    <div className="rounded-xl border border-gridline bg-white p-8">
      {/* Number */}
      <div className="flex items-baseline gap-1">
        <span className="font-display text-[44px] font-bold leading-none text-ink tabular-nums">
          {displayValue}
        </span>
        <span className="font-display text-[44px] font-bold leading-none text-ink">
          {suffix}
        </span>
      </div>

      {/* Bar */}
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gridline/60">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-[2000ms] ease-out",
            color,
          )}
          style={{ width: started ? `${target}%` : "0%", transitionDelay: `${delay}ms` }}
        />
      </div>

      {/* Label */}
      <p className="mt-4 font-sans text-[15px] leading-relaxed text-charcoal">
        {label}
      </p>
      <p className="mt-2 font-mono text-[11px] text-charcoal/30">{source}</p>
    </div>
  );
}

// ─── Stats ───────────────────────────────────────────────────────────────────

const stats = [
  {
    target: 74,
    suffix: "%",
    label: "of organizations have yet to achieve tangible value from AI investments.",
    source: "BCG, 2025",
    color: "bg-error/70",
  },
  {
    target: 52,
    suffix: "%",
    label: "of employees receive only basic or no AI instruction from their employer.",
    source: "HR Daily Advisor",
    color: "bg-[#D97706]/70",
  },
  {
    target: 57,
    suffix: "%",
    label: "of workers actively want AI skills training and look to their employer to provide it.",
    source: "No Jitter",
    color: "bg-success/70",
  },
];

export function AdoptionGapStats() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isIntersecting && !hasStarted) setHasStarted(true);
  }, [isIntersecting, hasStarted]);

  return (
    <div ref={ref}>
      {/* Stat cards with bars */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 120}>
            <StatBar
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              source={stat.source}
              started={hasStarted}
              delay={i * 200}
              color={stat.color}
            />
          </FadeIn>
        ))}
      </div>

      {/* Shadow AI callout */}
      <FadeIn delay={400}>
        <div className="mt-8 rounded-xl border border-[#D97706]/20 bg-[#D97706]/5 px-6 py-5">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D97706]/10">
              <AlertTriangle className="h-5 w-5 text-[#D97706]" strokeWidth={1.8} />
            </div>
            <div>
              <p className="font-sans text-[15px] font-semibold text-ink">
                Your employees are already using AI, just not the way you want.
              </p>
              <p className="mt-1 font-sans text-[14px] leading-relaxed text-charcoal/70">
                90% of companies have employees using personal AI tools for work, while only
                40% have official subscriptions. That means uncontrolled data exposure,
                inconsistent output, and zero institutional learning. Training doesn&apos;t
                fight adoption. It channels the adoption that&apos;s already happening.
              </p>
              <p className="mt-2 font-mono text-[11px] text-charcoal/30">
                Source: Menlo Ventures, State of GenAI in the Enterprise 2025
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
