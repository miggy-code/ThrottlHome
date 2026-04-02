import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { ManifestoSection } from "@/components/home/ManifestoSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ReadinessAssessment } from "@/components/home/ReadinessAssessment";
import { ProofSection } from "@/components/home/ProofSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

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
