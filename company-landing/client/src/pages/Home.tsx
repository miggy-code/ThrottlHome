import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hero } from "@/components/landing/Hero";
import { ProblemGrid } from "@/components/landing/ProblemGrid";
import { Methodology } from "@/components/landing/Methodology";
import { CaseStudyViewer } from "@/components/landing/CaseStudyViewer";
import { FounderProfile } from "@/components/landing/FounderProfile";
import { ConsultingCTA } from "@/components/landing/ConsultingCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-900 selection:text-white">
      <Header />
      
      <main className="flex flex-col">
        {/* Hero doesn't need an ID for scroll offset usually, as it's top */}
        <Hero />
        
        {/* Added scroll-mt-32 to account for the header height + breathing room */}
        <div id="problem" className="scroll-mt-32">
          <ProblemGrid />
        </div>
        
        <div id="methodology" className="scroll-mt-32">
          <Methodology />
        </div>
        
        <div id="cases" className="scroll-mt-32">
          <CaseStudyViewer />
        </div>
        
        <div id="founders" className="scroll-mt-32">
          <FounderProfile />
        </div>
        
        <div id="contact" className="scroll-mt-32">
          <ConsultingCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}