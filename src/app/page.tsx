import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/HeroSection";

const ProblemSection = dynamic(() => import("@/components/home/ProblemSection").then((m) => m.ProblemSection));
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection").then((m) => m.ServicesSection));
const PhilosophySection = dynamic(() => import("@/components/home/PhilosophySection").then((m) => m.PhilosophySection));
const ProcessSection = dynamic(() => import("@/components/home/ProcessSection").then((m) => m.ProcessSection));
const ReadinessAssessment = dynamic(() => import("@/components/home/ReadinessAssessment").then((m) => m.ReadinessAssessment));
const ProofSection = dynamic(() => import("@/components/home/ProofSection").then((m) => m.ProofSection));
const GlobalCTA = dynamic(() => import("@/components/global/GlobalCTA").then((m) => m.GlobalCTA));

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <PhilosophySection />
      <ProcessSection />
      <ReadinessAssessment />
      <ProofSection />
      <GlobalCTA />
    </>
  );
}
