import type { Metadata } from "next";
import { GlobalCTA } from "@/components/global/GlobalCTA";
import { ServicesHero } from "@/components/services/ServicesHero";
import dynamic from "next/dynamic";

const AdoptionGapSection = dynamic(() => import("@/components/services/AdoptionGapSection").then((m) => m.AdoptionGapSection));
const TrainingSection = dynamic(() => import("@/components/services/TrainingSection").then((m) => m.TrainingSection));
const ProofPointSection = dynamic(() => import("@/components/services/ProofPointSection").then((m) => m.ProofPointSection));
const CustomSolutionsSection = dynamic(() => import("@/components/services/CustomSolutionsSection").then((m) => m.CustomSolutionsSection));
const EngagementProcess = dynamic(() => import("@/components/services/EngagementProcess").then((m) => m.EngagementProcess));
const FAQSection = dynamic(() => import("@/components/services/FAQSection").then((m) => m.FAQSection));

export const metadata: Metadata = {
  title: "Services | Throttl",
  description:
    "Executive AI Education and Custom AI Solutions, built around your business reality, your tools, and your team.",
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
