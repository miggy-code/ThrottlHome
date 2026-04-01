import { cn } from "@/lib/cn";

interface BlueprintGridProps {
  opacity?: number;
  interval?: number;
  className?: string;
}

export function BlueprintGrid({
  opacity = 0.3,
  interval = 60,
  className,
}: BlueprintGridProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0", className)}
      style={{
        opacity,
        backgroundImage: `repeating-linear-gradient(0deg, #E2E6EB 0, #E2E6EB 1px, transparent 1px, transparent ${interval}px), repeating-linear-gradient(90deg, #E2E6EB 0, #E2E6EB 1px, transparent 1px, transparent ${interval}px)`,
      }}
      aria-hidden="true"
    />
  );
}
