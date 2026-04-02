import type { Metadata } from "next";
import { GlobalCTA } from "@/components/global/GlobalCTA";
import { ServicesHero } from "@/components/services/ServicesHero";
import { AdoptionGapSection } from "@/components/services/AdoptionGapSection";
import { TrainingSection } from "@/components/services/TrainingSection";
import { ProofPointSection } from "@/components/services/ProofPointSection";
import { CustomSolutionsSection } from "@/components/services/CustomSolutionsSection";
import { EngagementProcess } from "@/components/services/EngagementProcess";
import { FAQSection } from "@/components/services/FAQSection";

export const metadata: Metadata = {
  title: "Services — Throttl",
  description:
    "AI Education & Training and Custom AI Solutions — built around your business reality, your tools, and your team.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <AdoptionGapSection />
      <TrainingSection />
      <ProofPointSection />
      <CustomSolutionsSection />
      <EngagementProcess />
      <FAQSection />
      <GlobalCTA />
    </>
  );
}
