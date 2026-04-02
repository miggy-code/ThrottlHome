import type { Metadata } from "next";
import { GlobalCTA } from "@/components/global/GlobalCTA";
import { ServicesHero } from "@/components/services/ServicesHero";
import dynamic from "next/dynamic";

const PricingDownload = dynamic(() => import("@/components/services/PricingDownload").then((m) => m.PricingDownload));
const TrainingSection = dynamic(() => import("@/components/services/TrainingSection").then((m) => m.TrainingSection));
const CustomSolutionsSection = dynamic(() => import("@/components/services/CustomSolutionsSection").then((m) => m.CustomSolutionsSection));
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
      <PricingDownload />
      <TrainingSection />
      <CustomSolutionsSection />
      <FAQSection />
      <GlobalCTA />
    </>
  );
}
