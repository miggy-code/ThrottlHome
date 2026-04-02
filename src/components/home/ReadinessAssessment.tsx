"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// ─── Questions ───────────────────────────────────────────────────────────────

type Question = {
  question: string;
  options: { label: string; score: number }[];
};

const QUESTIONS: Question[] = [
  {
    question: "How does your team currently use AI?",
    options: [
      { label: "We don't use AI in any structured way", score: 0 },
      { label: "Individual employees use ChatGPT or similar tools ad-hoc", score: 1 },
      { label: "We have AI connected to some internal data or documents", score: 2 },
      { label: "AI agents handle defined tasks with minimal human input", score: 3 },
      { label: "AI systems run autonomously with human oversight at key checkpoints", score: 4 },
    ],
  },
  {
    question: "How is your company's knowledge organized?",
    options: [
      { label: "Scattered across emails, drives, and people's heads", score: 0 },
      { label: "Documented but not searchable by AI", score: 1 },
      { label: "Centralized in a knowledge base that AI can query", score: 2 },
      { label: "Actively maintained as playbooks that AI agents follow", score: 3 },
      { label: "Self-updating — AI captures and organizes new knowledge automatically", score: 4 },
    ],
  },
  {
    question: "When AI makes a mistake in your workflow, what happens?",
    options: [
      { label: "We don't use AI in workflows", score: 0 },
      { label: "Someone notices eventually and fixes it manually", score: 1 },
      { label: "We have basic review steps before AI output is used", score: 2 },
      { label: "AI flags low-confidence decisions for human review automatically", score: 3 },
      { label: "Corrections feed back into the system so it learns and improves", score: 4 },
    ],
  },
  {
    question: "What's your biggest AI challenge right now?",
    options: [
      { label: "We don't know where to start", score: 0 },
      { label: "We have tools but they're not connected to our actual data", score: 1 },
      { label: "AI works in silos — it's not integrated into real operations", score: 2 },
      { label: "Scaling what works to more of the organization", score: 3 },
      { label: "Staying ahead — making our AI systems compound in value over time", score: 4 },
    ],
  },
];

// ─── Phase Results ───────────────────────────────────────────────────────────

type PhaseResult = {
  phase: number;
  title: string;
  subtitle: string;
  color: string;
  description: string;
  nextStep: string;
};

const PHASE_RESULTS: PhaseResult[] = [
  {
    phase: 1,
    title: "Individual Augmentation",
    subtitle: 'The "Chatbot" Era',
    color: "text-[#6B7280]",
    description:
      "Your organization is at the starting line. AI is either not in use or limited to ad-hoc individual experimentation. There's massive untapped potential here.",
    nextStep:
      "A focused strategy review to identify the 2-3 highest-impact areas where AI can create immediate value in your specific operation.",
  },
  {
    phase: 2,
    title: "Knowledge Grounding",
    subtitle: "The RAG Era",
    color: "text-blueprint",
    description:
      "You've started connecting AI to your data, but it's early. The foundation is being laid — now it's about making that foundation reliable and expanding its reach.",
    nextStep:
      "Build out your knowledge infrastructure and identify the first workflows where AI can move from answering questions to taking action.",
  },
  {
    phase: 3,
    title: "Agentic Workflows",
    subtitle: 'The "Specialist" Era',
    color: "text-[#8500FF]",
    description:
      "AI is starting to do real work in your organization. You've moved past the chatbot phase and into genuine automation. The challenge now is reliability and scale.",
    nextStep:
      "Design human-in-the-loop checkpoints and feedback systems so your agents get smarter with every interaction.",
  },
  {
    phase: 4,
    title: "Human-in-the-Loop",
    subtitle: 'The "Collaborator" Era',
    color: "text-success",
    description:
      "You're in the top tier. AI handles most execution while humans steer strategy. Your systems learn from corrections and improve over time.",
    nextStep:
      "Build episodic memory and cross-functional intelligence so your AI brain becomes a true organizational asset.",
  },
  {
    phase: 5,
    title: "Autonomous Enterprise",
    subtitle: 'The "Living Brain"',
    color: "text-[#D97706]",
    description:
      "You're operating at the frontier. Your AI systems are proactive, self-improving, and deeply embedded in decision-making. Very few organizations are here.",
    nextStep:
      "Focus on governance, auditability, and compounding your proprietary AI advantage over competitors.",
  },
];

function getPhaseResult(totalScore: number): PhaseResult {
  const avg = totalScore / QUESTIONS.length;
  if (avg < 0.8) return PHASE_RESULTS[0];
  if (avg < 1.8) return PHASE_RESULTS[1];
  if (avg < 2.8) return PHASE_RESULTS[2];
  if (avg < 3.5) return PHASE_RESULTS[3];
  return PHASE_RESULTS[4];
}

// ─── Progress Dots ───────────────────────────────────────────────────────────

function ProgressDots({
  total,
  current,
  answered,
}: {
  total: number;
  current: number;
  answered: number[];
}) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            i === current
              ? "w-8 bg-blueprint"
              : answered.includes(i)
                ? "w-2 bg-blueprint/50"
                : "w-2 bg-gridline",
          )}
        />
      ))}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export function ReadinessAssessment() {
  const [step, setStep] = useState(0); // 0..3 = questions, 4 = result
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const isResult = step === QUESTIONS.length;
  const currentQ = QUESTIONS[step];

  const handleSelect = (score: number) => {
    setSelectedOption(score);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    const newAnswers = [...answers];
    newAnswers[step] = selectedOption;
    setAnswers(newAnswers);
    setSelectedOption(null);
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step === 0) return;
    setStep(step - 1);
    setSelectedOption(answers[step - 1] ?? null);
  };

  const handleReset = () => {
    setStep(0);
    setAnswers([]);
    setSelectedOption(null);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const result = getPhaseResult(totalScore);
  const answeredSteps = answers.map((_, i) => i);

  return (
    <section className="bg-canvas py-16 md:py-[120px]">
      <Container>
        <div
          ref={ref}
          className={cn(
            "mx-auto max-w-[680px] transition-all duration-700",
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6",
          )}
        >
          {/* Header */}
          <div className="text-center">
            <span className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-blueprint">
              AI Readiness Check
            </span>
            <h2 className="mt-4 font-display text-[28px] font-bold text-ink md:text-[36px]">
              Where does your organization stand?
            </h2>
            <p className="mt-3 font-sans text-[16px] text-charcoal/70">
              Four questions. Sixty seconds. A clear picture of your AI maturity.
            </p>
          </div>

          {/* Card */}
          <div className="mt-10 rounded-2xl border border-gridline bg-white p-8 shadow-[0_4px_24px_rgba(27,42,74,0.06)] md:p-10">
            {!isResult ? (
              <>
                {/* Progress */}
                <div className="flex items-center justify-between">
                  <ProgressDots
                    total={QUESTIONS.length}
                    current={step}
                    answered={answeredSteps}
                  />
                  <span className="font-mono text-[13px] text-charcoal/40">
                    {step + 1}/{QUESTIONS.length}
                  </span>
                </div>

                {/* Question */}
                <h3 className="mt-8 font-sans text-[19px] font-semibold leading-snug text-ink md:text-[21px]">
                  {currentQ.question}
                </h3>

                {/* Options */}
                <div className="mt-6 space-y-3">
                  {currentQ.options.map((opt) => (
                    <button
                      key={opt.score}
                      type="button"
                      onClick={() => handleSelect(opt.score)}
                      className={cn(
                        "w-full rounded-xl border px-5 py-4 text-left font-sans text-[15px] transition-all duration-200 cursor-pointer",
                        selectedOption === opt.score
                          ? "border-blueprint bg-blueprint/5 text-ink shadow-sm"
                          : "border-gridline bg-canvas text-charcoal hover:border-charcoal/30 hover:bg-wash",
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                {/* Navigation */}
                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 0}
                    className={cn(
                      "flex items-center gap-1.5 font-sans text-[14px] font-medium transition-colors cursor-pointer",
                      step === 0
                        ? "text-charcoal/20 cursor-default"
                        : "text-charcoal/50 hover:text-ink",
                    )}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={selectedOption === null}
                    className={cn(
                      "flex items-center gap-1.5 rounded-[4px] px-6 py-2.5 font-sans text-[14px] font-semibold uppercase tracking-[0.04em] transition-all duration-200 cursor-pointer",
                      selectedOption !== null
                        ? "bg-blueprint text-white hover:bg-blueprint-hover"
                        : "bg-gridline text-charcoal/30 cursor-default",
                    )}
                  >
                    {step === QUESTIONS.length - 1 ? "See results" : "Next"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </>
            ) : (
              /* ── Results ── */
              <div>
                {/* Phase badge */}
                <div className="text-center">
                  <span className={cn("font-mono text-[13px] font-semibold uppercase tracking-wider", result.color)}>
                    Phase {result.phase} — {result.subtitle}
                  </span>
                  <h3 className="mt-2 font-display text-[28px] font-bold text-ink md:text-[32px]">
                    {result.title}
                  </h3>
                </div>

                {/* Phase bar */}
                <div className="mt-8 flex gap-1.5">
                  {PHASE_RESULTS.map((p) => (
                    <div
                      key={p.phase}
                      className={cn(
                        "h-2 flex-1 rounded-full transition-all duration-500",
                        p.phase <= result.phase
                          ? "bg-blueprint"
                          : "bg-gridline",
                      )}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between font-mono text-[11px] text-charcoal/30">
                  <span>Phase 1</span>
                  <span>Phase 5</span>
                </div>

                {/* Description */}
                <p className="mt-8 font-sans text-[16px] leading-relaxed text-charcoal">
                  {result.description}
                </p>

                {/* Next step */}
                <div className="mt-6 rounded-xl border border-blueprint/20 bg-blueprint/5 p-5">
                  <p className="font-sans text-[12px] font-semibold uppercase tracking-wider text-blueprint">
                    Recommended next step
                  </p>
                  <p className="mt-2 font-sans text-[15px] leading-relaxed text-ink">
                    {result.nextStep}
                  </p>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-[4px] bg-blueprint px-6 py-3 font-sans text-[14px] font-semibold uppercase tracking-[0.04em] text-white transition-all hover:bg-blueprint-hover hover:scale-[1.02]"
                  >
                    Book a Strategy Review
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex items-center gap-1.5 font-sans text-[14px] font-medium text-charcoal/50 transition-colors hover:text-ink cursor-pointer"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Retake assessment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
