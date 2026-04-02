import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/HeroSection";

const ProblemSection = dynamic(() => import("@/components/home/ProblemSection").then((m) => m.ProblemSection));
const PhilosophySection = dynamic(() => import("@/components/home/PhilosophySection").then((m) => m.PhilosophySection));
const ManifestoSection = dynamic(() => import("@/components/home/ManifestoSection").then((m) => m.ManifestoSection));
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection").then((m) => m.ServicesSection));
const ProcessSection = dynamic(() => import("@/components/home/ProcessSection").then((m) => m.ProcessSection));
const ReadinessAssessment = dynamic(() => import("@/components/home/ReadinessAssessment").then((m) => m.ReadinessAssessment));
const ProofSection = dynamic(() => import("@/components/home/ProofSection").then((m) => m.ProofSection));
const FinalCTASection = dynamic(() => import("@/components/home/FinalCTASection").then((m) => m.FinalCTASection));

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <PhilosophySection />
      <ManifestoSection />
      <ServicesSection />
      <ProcessSection />
      <ReadinessAssessment />
      <ProofSection />
      <FinalCTASection />
    </>
  );
}
