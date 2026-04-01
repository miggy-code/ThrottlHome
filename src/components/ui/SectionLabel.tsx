import { cn } from "@/lib/cn";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-blueprint",
        className,
      )}
    >
      {children}
    </span>
  );
}
