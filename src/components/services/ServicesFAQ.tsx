"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "We already have AI tools. Why do we need training?",
    answer:
      "Having tools and using them effectively are two different things. Industry data shows only 36% of AI license holders become active users. Training closes that gap by turning shelfware into daily drivers and unlocking the ROI you're already paying for.",
  },
  {
    question: "Is this generic AI training or specific to our business?",
    answer:
      "Every engagement starts with an audit of your current tools, workflows, and team structure. We build sessions around the software you actually use and the tasks your people actually do. No generic slide decks.",
  },
  {
    question: "How quickly will we see results?",
    answer:
      "Teams typically report measurable productivity improvements within the first two weeks. Workshop attendees leave with 3–5 workflows they can use immediately. The compounding effect grows over months as AI becomes embedded in daily operations.",
  },
  {
    question: "What if our employees are resistant to AI?",
    answer:
      "Research consistently shows that resistance isn't the real barrier: poor preparation is. 57% of employees actively want AI skills training from their employer. We meet people where they are, starting with their actual pain points, not abstract capabilities.",
  },
  {
    question: "Do you work with specific industries?",
    answer:
      "We work with operators across all industries, from finance to manufacturing. The AI tools are the same; the workflows are different. That's why we customize every engagement around your operational context.",
  },
  {
    question: "What's the difference between education and custom solutions?",
    answer:
      "Education makes your existing team capable with existing tools. Custom solutions build new systems when training reveals opportunities that require engineering, like a knowledge base or an automation pipeline. Many clients start with training and move to solutions once they see what's possible.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a complimentary 60-minute strategy review. We'll assess where your organization stands, identify the highest-impact opportunities, and recommend a path forward whether that's training or solutions.",
  },
];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gridline">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left cursor-pointer group"
      >
        <h4 className="pr-4 font-sans text-[17px] font-semibold text-ink transition-colors group-hover:text-blueprint">
          {item.question}
        </h4>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-charcoal/40 transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[300px] pb-6 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <p className="font-sans text-[15px] leading-relaxed text-charcoal/80">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-[720px]">
      {FAQ_ITEMS.map((item, i) => (
        <FAQAccordionItem
          key={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
