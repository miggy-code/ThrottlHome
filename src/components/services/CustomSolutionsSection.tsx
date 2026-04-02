"use client";

import { useState } from "react";
import { Compass, Wrench, Plug, ChevronDown, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/cn";

type Solution = {
  icon: React.ElementType;
  title: string;
  description: string;
  example: string;
  exampleLabel: string;
  color: string;
  colorBg: string;
  colorBorder: string;
};

const solutions: Solution[] = [
  {
    icon: Compass,
    title: "Strategy & Roadmapping",
    description:
      "We audit your operations, identify the highest-value AI opportunities, and design an implementation roadmap with clear priorities and realistic timelines.",
    example:
      "For a mid-market logistics firm, we mapped 14 automation opportunities across operations and prioritized the 3 that would recoup investment within 90 days — saving the client from a six-figure platform purchase they didn't need.",
    exampleLabel: "Logistics firm, 200 employees",
    color: "text-blueprint",
    colorBg: "bg-blueprint/10",
    colorBorder: "border-blueprint/30",
  },
  {
    icon: Wrench,
    title: "System Design & Build",
    description:
      "From knowledge bases and RAG pipelines to AI agents and automation workflows — we build production-grade systems that integrate into how your team actually works.",
    example:
      "We built an AI-powered investment analysis system that reads deal memos, pulls comparable data, and generates preliminary assessments — replacing a process that took analysts 8+ hours per deal with one that takes 20 minutes.",
    exampleLabel: "Investment firm, Series B",
    color: "text-[#8500FF]",
    colorBg: "bg-[#8500FF]/10",
    colorBorder: "border-[#8500FF]/30",
  },
  {
    icon: Plug,
    title: "Integration & Automation",
    description:
      "Connect AI to your existing stack — CRM, project management, communication tools, databases. Eliminate the manual glue work between systems.",
    example:
      "We connected an AI layer between a client's CRM, email platform, and analytics dashboard — automating lead scoring, personalized outreach, and performance reporting that previously required a full-time coordinator.",
    exampleLabel: "B2B SaaS, marketing team",
    color: "text-success",
    colorBg: "bg-success/10",
    colorBorder: "border-success/30",
  },
];

function SolutionCard({
  solution,
  index,
}: {
  solution: Solution;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const Icon = solution.icon;
  const isLast = index === solutions.length - 1;

  return (
    <div className="relative flex flex-col items-center md:flex-row md:items-start">
      {/* Card */}
      <div className="w-full">
        <FadeIn delay={200 + index * 120}>
          <div
            className={cn(
              "group relative overflow-hidden rounded-xl border bg-white transition-all duration-300",
              expanded ? solution.colorBorder : "border-gridline",
              expanded
                ? "shadow-[0_8px_30px_rgba(59,125,216,0.08)]"
                : "hover:shadow-[0_8px_30px_rgba(59,125,216,0.08)] hover:-translate-y-1 hover:border-blueprint/30",
            )}
          >
            {/* Main content */}
            <div className="p-8">
              {/* Step indicator */}
              <div className="flex items-center justify-between">
                <div
                  className={cn(
                    "inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors",
                    expanded ? solution.colorBg : "bg-blueprint/10",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-5 w-5 transition-colors",
                      expanded ? solution.color : "text-blueprint",
                    )}
                    strokeWidth={1.6}
                  />
                </div>
                <span className="font-mono text-[12px] font-semibold text-charcoal/25">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-5 font-sans text-[20px] font-semibold text-ink">
                {solution.title}
              </h3>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-charcoal">
                {solution.description}
              </p>

              {/* Toggle */}
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className={cn(
                  "mt-5 flex items-center gap-1.5 font-sans text-[14px] font-medium transition-colors cursor-pointer",
                  expanded
                    ? `${solution.color}`
                    : "text-blueprint hover:text-blueprint-hover",
                )}
              >
                {expanded ? "Hide example" : "See it in practice"}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    expanded && "rotate-180",
                  )}
                />
              </button>
            </div>

            {/* Expanded example */}
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                expanded ? "max-h-[250px] opacity-100" : "max-h-0 opacity-0",
              )}
            >
              <div
                className={cn(
                  "mx-8 mb-8 rounded-lg border p-5",
                  solution.colorBorder,
                  solution.colorBg,
                )}
              >
                <p
                  className={cn(
                    "font-mono text-[11px] font-semibold uppercase tracking-wider",
                    solution.color,
                  )}
                >
                  {solution.exampleLabel}
                </p>
                <p className="mt-2 font-sans text-[14px] leading-relaxed text-ink">
                  {solution.example}
                </p>
              </div>
            </div>

            {/* Accent underline */}
            <div
              className={cn(
                "absolute bottom-0 left-0 h-[3px] transition-all duration-500",
                expanded
                  ? `w-full ${solution.colorBg.replace("/10", "")}`
                  : "w-0 bg-blueprint group-hover:w-full",
              )}
              style={
                expanded
                  ? {
                      backgroundColor:
                        solution.color === "text-blueprint"
                          ? "rgb(59 125 216)"
                          : solution.color === "text-[#8500FF]"
                            ? "rgb(133 0 255)"
                            : "rgb(46 139 87)",
                    }
                  : undefined
              }
            />
          </div>
        </FadeIn>
      </div>

      {/* Connecting arrow — between cards */}
      {!isLast && (
        <div className="my-3 flex items-center justify-center text-gridline md:absolute md:-bottom-10 md:left-1/2 md:my-0 md:-translate-x-1/2">
          <ArrowRight className="h-5 w-5 rotate-90 md:rotate-0" />
        </div>
      )}
    </div>
  );
}

export function CustomSolutionsSection() {
  return (
    <section className="bg-canvas py-16 md:py-[120px]">
      <Container>
        <FadeIn>
          <SectionLabel>Custom AI Solutions</SectionLabel>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="mt-6 font-display text-ink">
            When training reveals what needs building.
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mt-4 max-w-[640px] text-charcoal">
            Some opportunities require more than better prompting. When your
            team identifies a workflow that needs a custom system — a knowledge
            base, an automation pipeline, an AI agent — we build it.
          </p>
        </FadeIn>

        {/* Differentiator callout */}
        <FadeIn delay={250}>
          <p className="mt-6 rounded-lg border border-blueprint/15 bg-blueprint/5 px-5 py-3 font-sans text-[14px] text-blueprint inline-block">
            <strong className="font-semibold">How this differs from training:</strong>{" "}
            Education makes your team capable with existing tools. Solutions build
            new systems when the opportunity requires engineering.
          </p>
        </FadeIn>

        {/* Cards as a flow */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {solutions.map((sol, i) => (
            <SolutionCard key={sol.title} solution={sol} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
