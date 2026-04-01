"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full bg-canvas border-b border-gridline">
      <nav className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6 md:h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Throttl"
            width={120}
            height={36}
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative font-sans text-[15px] font-medium text-ink transition-colors duration-200 hover:text-blueprint",
                "after:absolute after:bottom-[-4px] after:left-1/2 after:h-[2px] after:w-0 after:bg-blueprint after:transition-all after:duration-200 after:-translate-x-1/2 hover:after:w-full",
                pathname === link.href && "text-blueprint after:w-full",
              )}
            >
              {link.label}
            </Link>
          ))}

          <Button href="/contact" size="sm" className="ml-2">
            Book a Strategy Review
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-ink" strokeWidth={2} />
          ) : (
            <Menu className="h-6 w-6 text-ink" strokeWidth={2} />
          )}
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] z-40 flex flex-col items-center justify-center gap-12 bg-canvas md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "font-sans text-2xl font-medium text-ink transition-colors hover:text-blueprint",
                pathname === link.href && "text-blueprint",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            href="/contact"
            size="lg"
            className="w-[280px] text-center"
          >
            Book a Strategy Review
          </Button>
        </div>
      )}
    </header>
  );
}
