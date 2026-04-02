"use client";

import { useState } from "react";
import {
  MessageSquare,
  BookOpen,
  Bot,
  Users,
  Brain,
  ChevronDown,
  Server,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// ─── Phase Data ──────────────────────────────────────────────────────────────

type Phase = {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  colorBg: string;
  colorBorder: string;
  colorGlow: string;
  description: string;
  infrastructure: string;
  brain: string;
  benefits: string;
  metric: string;
};

const PHASES: Phase[] = [
  {
    id: 1,
    title: "Personal Productivity",
    subtitle: 'The "Chatbot" Era',
    icon: MessageSquare,
    color: "text-[#6B7280]",
    colorBg: "bg-[#6B7280]/10",
    colorBorder: "border-[#6B7280]/30",
    colorGlow: "shadow-[0_0_20px_rgba(107,114,128,0.15)]",
    description:
      "Employees use public or basic corporate AI chat tools. It's a one-pass system: ask a question, get a text answer. No connection to your company's actual data.",
    infrastructure:
      "Standard web-based logins or basic API access. No internal data integration.",
    brain: 'Non-existent. Knowledge is trapped in PDFs on a hard drive or in the head of "the tech guy."',
    benefits:
      "Micro-productivity. 10–15% time savings on writing emails, summarizing articles, or basic code debugging.",
    metric: "10–15%",
  },
  {
    id: 2,
    title: "Connected Knowledge",
    subtitle: 'The "Librarian" Era',
    icon: BookOpen,
    color: "text-blueprint",
    colorBg: "bg-blueprint/10",
    colorBorder: "border-blueprint/30",
    colorGlow: "shadow-[0_0_20px_rgba(59,125,216,0.15)]",
    description:
      "You connect AI to your internal documents so it can \"read\" your company's data. It provides reliable answers based strictly on your secure, factual source of truth.",
    infrastructure:
      "A secure search database and automated pipelines that map and organize your company's files.",
    brain: "A digital librarian. It finds the exact page of a contract or technical manual in seconds.",
    benefits:
      "Information symmetry. Everyone has the same latest knowledge about company history and specs. Onboarding time drops by 50%.",
    metric: "50%",
  },
  {
    id: 3,
    title: "Automated Workflows",
    subtitle: 'The "Specialist" Era',
    icon: Bot,
    color: "text-[#8500FF]",
    colorBg: "bg-[#8500FF]/10",
    colorBorder: "border-[#8500FF]/30",
    colorGlow: "shadow-[0_0_20px_rgba(133,0,255,0.15)]",
    description:
      "AI stops just \"talking\" and starts \"doing.\" You move from a chatbot to a digital assistant that can read emails, check system statuses, and update your software.",
    infrastructure:
      "Dynamic AI workflows connected directly to your existing systems (like Slack, your CRM, or project management tools).",
    brain: "No longer just a library, it's a Playbook. It stores business rules and how-to guides that AI assistants follow to execute multi-step tasks.",
    benefits:
      "Operational efficiency. You eliminate middle-man tasks like data entry, scheduling, and basic project management.",
    metric: "10x",
  },
  {
    id: 4,
    title: "Human-AI Collaboration",
    subtitle: 'The "Partner" Era',
    icon: Users,
    color: "text-success",
    colorBg: "bg-success/10",
    colorBorder: "border-success/30",
    colorGlow: "shadow-[0_0_20px_rgba(46,139,87,0.15)]",
    description:
      "AI assistants handle 90% of the routine work but automatically pause to ask a human for a strategic steer or quality check. An asynchronous partnership.",
    infrastructure:
      "Automated pause points. If the AI has low confidence (< 85%) on a decision, it flags a human: \"I've drafted this, but I'm unsure about pricing. Please approve or edit.\"",
    brain: "Begins recording Human Feedback. Your corrections are saved back into the knowledge base so the Brain learns your preferences over time.",
    benefits:
      "Scalable creativity. Humans focus on strategy and vision while AI handles execution. Handle 10x client load without 10x staff.",
    metric: "10x",
  },
  {
    id: 5,
    title: "The AI-Driven Enterprise",
    subtitle: 'The "Living Brain"',
    icon: Brain,
    color: "text-[#D97706]",
    colorBg: "bg-[#D97706]/10",
    colorBorder: "border-[#D97706]/30",
    colorGlow: "shadow-[0_0_20px_rgba(217,119,6,0.15)]",
    description:
      "The AI system proactively monitors the external environment and internal data, proposing operational improvements before humans even see the problem.",
    infrastructure:
      "Recursive feedback loops. The system remembers every past mistake and success across the entire firm, adjusting its approach automatically.",
    brain: "A collective consciousness. It captures the silent knowledge of every meeting and decision, securely modeling how your best people solve problems.",
    benefits:
      "Compounding intelligence. The company's value is its proprietary Digital Asset: a brain that gets smarter every day.",
    metric: "∞",
  },
];

// ─── Progress Bar Segment ────────────────────────────────────────────────────

function ProgressSegment({
  phase,
  isActive,
  isRevealed,
  onClick,
  index,
}: {
  phase: Phase;
  isActive: boolean;
  isRevealed: boolean;
  onClick: () => void;
  index: number;
}) {
  const Icon = phase.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative flex flex-1 flex-col items-center gap-2 pt-3 pb-4 transition-all duration-300 cursor-pointer",
        isRevealed ? "opacity-100" : "opacity-0 translate-y-3",
      )}
      style={{ transitionDelay: `${index * 100 + 200}ms` }}
    >
      {/* Phase icon circle */}
      <div
        className={cn(
          "relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-300",
          isActive
            ? `${phase.colorBg} ${phase.colorBorder} ${phase.colorGlow} scale-110`
            : "border-gridline bg-white group-hover:border-charcoal/30 group-hover:scale-105",
        )}
      >
        <Icon
          className={cn(
            "h-5 w-5 transition-colors duration-300",
            isActive ? phase.color : "text-charcoal/40 group-hover:text-charcoal/70",
          )}
          strokeWidth={1.8}
        />
      </div>

      {/* Label */}
      <div className="text-center">
        <p
          className={cn(
            "font-mono text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300",
            isActive ? phase.color : "text-charcoal/40 group-hover:text-charcoal/60",
          )}
        >
          Phase {phase.id}
        </p>
        <p
          className={cn(
            "mt-0.5 hidden font-sans text-[12px] font-medium transition-colors duration-300 lg:block",
            isActive ? "text-ink" : "text-charcoal/50 group-hover:text-charcoal/70",
          )}
        >
          {phase.subtitle}
        </p>
      </div>

      {/* Active indicator bar */}
      <div
        className={cn(
          "absolute bottom-0 left-2 right-2 h-[3px] rounded-full transition-all duration-300",
          isActive ? `${phase.colorBg.replace("/10", "")} opacity-100` : "bg-transparent opacity-0",
        )}
        style={
          isActive
            ? { backgroundColor: `var(--phase-color-${phase.id})` }
            : undefined
        }
      />
    </button>
  );
}

// ─── Detail Panel ────────────────────────────────────────────────────────────

function DetailPanel({ phase, isVisible }: { phase: Phase; isVisible: boolean }) {
  const Icon = phase.icon;

  return (
    <div
      className={cn(
        "transition-all duration-500 ease-out",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none absolute",
      )}
    >
      <div
        className={cn(
          "rounded-2xl border bg-white p-8 md:p-10",
          phase.colorBorder,
          phase.colorGlow,
        )}
      >
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <div
              className={cn(
                "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border",
                phase.colorBg,
                phase.colorBorder,
              )}
            >
              <Icon className={cn("h-7 w-7", phase.color)} strokeWidth={1.5} />
            </div>
            <div>
              <p className={cn("font-mono text-[12px] font-semibold uppercase tracking-wider", phase.color)}>
                Phase {phase.id}: {phase.subtitle}
              </p>
              <h4 className="mt-1 font-display text-[24px] font-bold leading-tight text-ink md:text-[28px]">
                {phase.title}
              </h4>
            </div>
          </div>

          {/* Metric badge */}
          <div className={cn("flex items-center gap-2 rounded-full px-4 py-2 shrink-0", phase.colorBg)}>
            <TrendingUp className={cn("h-4 w-4", phase.color)} />
            <span className={cn("font-mono text-[18px] font-bold", phase.color)}>
              {phase.metric}
            </span>
            <span className="font-sans text-[12px] text-charcoal/50">improvement</span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 max-w-[640px] font-sans text-[16px] leading-relaxed text-charcoal">
          {phase.description}
        </p>

        {/* Detail grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Infrastructure */}
          <div className="rounded-xl border border-gridline bg-canvas/50 p-5">
            <div className="flex items-center gap-2">
              <Server className="h-4 w-4 text-charcoal/40" strokeWidth={1.8} />
              <p className="font-sans text-[12px] font-semibold uppercase tracking-wider text-charcoal/50">
                Infrastructure
              </p>
            </div>
            <p className="mt-3 font-sans text-[14px] leading-relaxed text-charcoal/80">
              {phase.infrastructure}
            </p>
          </div>

          {/* The Brain */}
          <div className="rounded-xl border border-gridline bg-canvas/50 p-5">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-charcoal/40" strokeWidth={1.8} />
              <p className="font-sans text-[12px] font-semibold uppercase tracking-wider text-charcoal/50">
                The AI Brain
              </p>
            </div>
            <p className="mt-3 font-sans text-[14px] leading-relaxed text-charcoal/80">
              {phase.brain}
            </p>
          </div>

          {/* Benefits */}
          <div className="rounded-xl border border-gridline bg-canvas/50 p-5">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-charcoal/40" strokeWidth={1.8} />
              <p className="font-sans text-[12px] font-semibold uppercase tracking-wider text-charcoal/50">
                Key Benefits
              </p>
            </div>
            <p className="mt-3 font-sans text-[14px] leading-relaxed text-charcoal/80">
              {phase.benefits}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export function AdoptionChart() {
  const [activePhase, setActivePhase] = useState(1);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref} className="mt-24">
      {/* Section heading */}
      <div
        className={cn(
          "text-center transition-all duration-[600ms] [transition-timing-function:cubic-bezier(0.25,0.1,0.25,1.0)]",
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        )}
      >
        <span className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-blueprint">
          AI Adoption Roadmap
        </span>
        <h3 className="mt-3 font-display text-[28px] font-bold text-ink md:text-[32px]">
          The five phases of AI maturity
        </h3>
        <p className="mx-auto mt-3 max-w-[520px] font-sans text-[16px] text-charcoal/70">
          Every company is somewhere on this spectrum. Understanding where you are
          is the first step to knowing what&apos;s next.
        </p>
      </div>

      {/* ── Phase selector bar ── */}
      <div className="relative mt-10">
        {/* Connecting line */}
        <div className="absolute left-[10%] right-[10%] top-[28px] hidden h-px bg-gridline md:block" />

        {/* Phase progress fill */}
        <div
          className="absolute top-[28px] hidden h-[2px] transition-all duration-500 ease-out md:block"
          style={{
            left: "10%",
            width: `${((activePhase - 1) / 4) * 80}%`,
            background: "linear-gradient(90deg, #6B7280, #3B7DD8, #8500FF, #2E8B57, #D97706)",
          }}
        />

        <div className="flex justify-between gap-1 md:gap-0">
          {PHASES.map((phase, i) => (
            <ProgressSegment
              key={phase.id}
              phase={phase}
              isActive={activePhase === phase.id}
              isRevealed={isIntersecting}
              onClick={() => setActivePhase(phase.id)}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Mobile hint */}
      <div className="mt-2 flex items-center justify-center gap-1 text-charcoal/30 md:hidden">
        <ChevronDown className="h-3 w-3" />
        <span className="font-sans text-[11px]">Tap a phase to explore</span>
      </div>

      {/* ── Detail panel ── */}
      <div className="relative mt-8">
        {PHASES.map((phase) => (
          <DetailPanel
            key={phase.id}
            phase={phase}
            isVisible={activePhase === phase.id}
          />
        ))}
      </div>

      {/* ── "Where are you?" prompt ── */}
      <div
        className={cn(
          "mt-8 text-center transition-all duration-[600ms] delay-700",
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
      >
        <p className="font-sans text-[15px] text-charcoal/60">
          Not sure where your organization sits?{" "}
          <a
            href="/contact"
            className="font-medium text-blueprint transition-colors hover:text-blueprint-hover"
          >
            Let&apos;s figure it out together &rarr;
          </a>
        </p>
      </div>
    </div>
  );
}
