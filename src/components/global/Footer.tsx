import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <Container className="py-16 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1 — Brand */}
          <div>
            <Image
              src="/logo2.png"
              alt="Throttl"
              width={120}
              height={36}
              className="h-8 w-auto brightness-0 invert mb-4"
            />
            <p className="font-sans text-sm text-white/60">
              {COMPANY.tagline}
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h4 className="mb-4 font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-white/40">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-[15px] text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 className="mb-4 font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-white/40">
              Contact
            </h4>
            <a
              href={`mailto:${COMPANY.email}`}
              className="font-sans text-[15px] text-white/70 transition-colors hover:text-white"
            >
              {COMPANY.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="font-sans text-[13px] text-white/40">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
