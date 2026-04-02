import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  { number: "01", label: "Audit" },
  { number: "02", label: "Customize" },
  { number: "03", label: "Equip" },
  { number: "04", label: "Execute" },
];

export function ProcessStrip() {
  return (
    <div className="grid grid-cols-2 gap-4 md:flex md:items-center md:justify-center md:gap-0">
      {steps.map((step, i) => (
        <FadeIn key={step.number} delay={100 * i}>
          <div className="flex items-center">
            <div className="flex items-center gap-2 px-4 py-2">
              <span className="font-mono text-[12px] font-medium text-white/25">
                {step.number}
              </span>
              <span className="font-sans text-[13px] font-medium tracking-wide text-white/50">
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden h-3 w-px bg-white/10 md:block" />
            )}
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
