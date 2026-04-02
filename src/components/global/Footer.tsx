import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink">
      <Container className="py-16 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-[240px]">
            <Link href="/">
              <Image
                src="/media/logo2.png"
                alt="Throttl"
                width={120}
                height={36}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 font-sans text-sm leading-relaxed text-white/40">
              {COMPANY.tagline}
            </p>
            <p className="mt-3 font-sans text-sm text-white/30">
              {COMPANY.location} &middot; {COMPANY.founded}&ndash;present
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-16">
            <div>
              <p className="mb-4 font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-white/25">
                Navigation
              </p>
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-sans text-[15px] text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="mb-4 font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-white/25">
                Get in touch
              </p>
              <a
                href={`mailto:${COMPANY.email}`}
                className="font-sans text-[15px] text-white/55 transition-colors hover:text-white"
              >
                {COMPANY.email}
              </a>
              <div className="mt-5">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-[4px] bg-white/8 px-5 py-2.5 font-sans text-[13px] font-semibold uppercase tracking-[0.05em] text-white/70 transition-colors hover:bg-white/12 hover:text-white"
                >
                  Book a Strategy Review
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/8 pt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[13px] text-white/30">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="font-sans text-[13px] text-white/20">
            AI advisory for operators
          </p>
        </div>
      </Container>
    </footer>
  );
}
