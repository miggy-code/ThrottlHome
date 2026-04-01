import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "dark" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  type?: never;
  onClick?: never;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  type?: "button" | "submit";
  onClick?: () => void;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blueprint text-white hover:bg-blueprint-hover hover:scale-[1.02]",
  secondary:
    "bg-transparent border border-blueprint text-blueprint hover:bg-blueprint hover:text-white",
  dark: "bg-white text-ink hover:bg-wash hover:scale-[1.02]",
  ghost: "bg-transparent text-blueprint hover:text-blueprint-hover",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-6 py-3 text-[14px]",
  lg: "px-8 py-4 text-[14px]",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-sans font-semibold uppercase tracking-[0.05em] rounded-[4px] transition-all duration-150 ease-in-out cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
