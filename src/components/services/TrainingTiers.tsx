"use client";

import { useState } from "react";
import { Briefcase, Users, CalendarSync } from "lucide-react";
import { cn } from "@/lib/cn";

type Tier = {
  id: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  audience: string;
  format: string;
  color: string;
  colorBg: string;
  colorBorder: string;
  topics: string[];
  outcome: string;
};

const TIERS: Tier[] = [
  {
    id: "exec",
    icon: Briefcase,
    title: "Executive Briefings",
    tagline: "See the landscape clearly, then decide.",
    audience: "C-suite, VPs, and decision-makers",
    format: "Half-day session (on-site or virtual)",
    color: "text-blueprint",
    colorBg: "bg-blueprint/10",
    colorBorder: "border-blueprint/30",
    topics: [
      "The real AI landscape: what matters and what's noise",
      "Where AI creates value in your specific industry and operation",
      "Build vs. buy vs. wait decision frameworks",
      "Risk, compliance, and governance fundamentals",
      "Evaluating vendor claims without a technical background",
    ],
    outcome:
      "Your leadership team walks away with a shared mental model of what AI can and can't do for your business, plus a clear sense of where to invest next.",
  },
  {
    id: "team",
    icon: Users,
    title: "Team Workshops",
    tagline: "Your tools. Your workflows. Hands on keys.",
    audience: "Managers, analysts, and individual contributors",
    format: "1–3 day hands-on workshops (on-site preferred)",
    color: "text-[#8500FF]",
    colorBg: "bg-[#8500FF]/10",
    colorBorder: "border-[#8500FF]/30",
    topics: [
      "Prompt engineering for real work instead of party tricks",
      "Using ChatGPT, Claude, and Copilot for your actual daily tasks",
      "Building repeatable AI workflows within your existing tools",
      "Data privacy and security best practices for daily AI use",
      "Role-specific sessions: sales, ops, finance, marketing, engineering",
    ],
    outcome:
      "Your team stops experimenting and starts executing. Every attendee leaves with 3–5 AI workflows they can use the next morning.",
  },
  {
    id: "ongoing",
    icon: CalendarSync,
    title: "Ongoing Enablement",
    tagline: "The landscape moves. Your team keeps pace.",
    audience: "Organizations with active AI adoption programs",
    format: "Monthly half-day sessions + async support",
    color: "text-success",
    colorBg: "bg-success/10",
    colorBorder: "border-success/30",
    topics: [
      "New model capabilities and what they mean for your workflows",
      "Advanced prompting techniques and agent-based patterns",
      "Review and optimize existing AI workflows for better output",
      "Emerging tools and platform updates relevant to your stack",
      "Office hours for troubleshooting and new use-case development",
    ],
    outcome:
      "Your organization's AI fluency compounds month over month instead of plateauing after the initial training high.",
  },
];

export function TrainingTiers() {
  const [active, setActive] = useState("exec");

  const tier = TIERS.find((t) => t.id === active)!;
  const Icon = tier.icon;

  return (
    <div>
      {/* Tab selector */}
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        {TIERS.map((t) => {
          const TIcon = t.icon;
          const isActive = active === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              className={cn(
                "group flex flex-1 items-center gap-3 rounded-xl border px-5 py-4 text-left transition-all duration-200 cursor-pointer",
                isActive
                  ? `${t.colorBorder} ${t.colorBg} shadow-sm`
                  : "border-gridline bg-white hover:border-charcoal/20 hover:bg-wash",
              )}
            >
              <TIcon
                className={cn(
                  "h-5 w-5 shrink-0 transition-colors",
                  isActive ? t.color : "text-charcoal/40 group-hover:text-charcoal/60",
                )}
                strokeWidth={1.8}
              />
              <div>
                <p
                  className={cn(
                    "font-sans text-[15px] font-semibold transition-colors",
                    isActive ? "text-ink" : "text-charcoal/70 group-hover:text-ink",
                  )}
                >
                  {t.title}
                </p>
                <p className="mt-0.5 font-sans text-[13px] text-charcoal/50 hidden sm:block">
                  {t.tagline}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div
        key={tier.id}
        className={cn(
          "mt-6 rounded-2xl border bg-white p-8 md:p-10 transition-all duration-300",
          tier.colorBorder,
        )}
      >
        {/* Header */}
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
              tier.colorBg,
            )}
          >
            <Icon className={cn("h-6 w-6", tier.color)} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="font-display text-[24px] font-bold text-ink md:text-[28px]">
              {tier.title}
            </h4>
            <p className="mt-1 font-sans text-[16px] italic text-charcoal/70">
              {tier.tagline}
            </p>
          </div>
        </div>

        {/* Meta */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-8">
          <div>
            <p className="font-sans text-[12px] font-semibold uppercase tracking-wider text-charcoal/40">
              Who it&apos;s for
            </p>
            <p className="mt-1 font-sans text-[15px] text-ink">{tier.audience}</p>
          </div>
          <div>
            <p className="font-sans text-[12px] font-semibold uppercase tracking-wider text-charcoal/40">
              Format
            </p>
            <p className="mt-1 font-sans text-[15px] text-ink">{tier.format}</p>
          </div>
        </div>

        {/* Topics */}
        <div className="mt-8">
          <p className="font-sans text-[12px] font-semibold uppercase tracking-wider text-charcoal/40">
            What we cover
          </p>
          <ul className="mt-4 space-y-3">
            {tier.topics.map((topic) => (
              <li
                key={topic}
                className="flex items-start gap-3 font-sans text-[15px] leading-relaxed text-charcoal"
              >
                <span
                  className={cn(
                    "mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full",
                    tier.colorBg.replace("/10", ""),
                  )}
                  style={{
                    backgroundColor:
                      tier.id === "exec"
                        ? "rgb(59 125 216 / 0.5)"
                        : tier.id === "team"
                          ? "rgb(133 0 255 / 0.5)"
                          : "rgb(46 139 87 / 0.5)",
                  }}
                />
                {topic}
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome */}
        <div className={cn("mt-8 rounded-xl border p-5", tier.colorBorder, tier.colorBg)}>
          <p className={cn("font-sans text-[12px] font-semibold uppercase tracking-wider", tier.color)}>
            The outcome
          </p>
          <p className="mt-2 font-sans text-[15px] leading-relaxed text-ink">
            {tier.outcome}
          </p>
        </div>
      </div>
    </div>
  );
}
