import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export function ConsultingCTA() {
  const [_, setLocation] = useLocation();

  return (
    <section className="py-24 bg-white border-t border-slate-200" id="contact">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="inline-block border border-slate-200 bg-slate-50 px-3 py-1 mb-6">
          <span className="text-xs font-mono font-bold text-slate-500 uppercase">Capacity: Limited Intake</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
          Stop debating. <br/> Start building.
        </h2>
        
        <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
          You don't need another generic consultant. You need a peer review of your strategy. 
          Let's find out if there is a fit in 60 minutes.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <Button 
            size="lg" 
            onClick={() => setLocation("/inquiry")}
            className="bg-blue-900 hover:bg-blue-800 text-white h-20 px-16 text-xl font-bold rounded-none shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all border-2 border-slate-900"
          >
            Book Peer Review <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
          <p className="text-sm font-mono text-slate-400 uppercase tracking-widest">
            // No Sales Pitch. Just Engineering.
          </p>
        </div>
      </div>
    </section>
  );
}