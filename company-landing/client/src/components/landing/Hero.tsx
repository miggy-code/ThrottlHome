import { TrendingUp, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export function Hero() {
  const [_, setLocation] = useLocation();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 border-b border-slate-200 overflow-hidden" id="hero">
      {/* Background: Engineering Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: The Pitch */}
          <div className="max-w-3xl">
            {/* The Badge */}
            <div className="inline-flex items-center gap-3 border-l-4 border-blue-900 pl-4 mb-8">
              <span className="text-sm font-bold uppercase tracking-widest text-slate-500">
                Strategic AI Consultancy
              </span>
              <span className="h-px w-8 bg-slate-300"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-900">
                NYC / EST. 2024
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
              Turn Operational Data into <br/>
              <span className="text-blue-800 underline decoration-4 decoration-blue-200 underline-offset-4">Profitability.</span>
            </h1>

            <p className="text-xl text-slate-700 leading-relaxed mb-10 max-w-xl border-l border-slate-300 pl-6">
              We help industrial leaders adopt AI to solve concrete problems: 
              <span className="font-semibold text-slate-900"> Margin erosion, labor waste, and supply chain volatility.</span>
              <br/><br/>
              No science projects. Just a roadmap to higher EBITDA.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                onClick={() => setLocation("/inquiry")}
                className="h-16 px-10 bg-blue-900 hover:bg-blue-800 text-white text-lg font-bold rounded-sm shadow-xl transition-transform hover:-translate-y-1"
              >
                Book Peer Review
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-16 px-10 border-2 border-slate-300 text-slate-700 text-lg font-bold rounded-sm hover:bg-white hover:border-slate-900 transition-colors"
              >
                Our Process
              </Button>
            </div>
          </div>

          {/* RIGHT: The "Artifact" */}
          <div className="relative hidden lg:block">
            {/* The Card Container */}
            <div className="bg-white p-8 border border-slate-200 shadow-2xl relative z-10 transform rotate-1 transition-transform hover:rotate-0 duration-500">
              {/* Card Header */}
              <div className="flex justify-between items-center border-b-2 border-slate-900 pb-4 mb-6">
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">PROJECT: OPTIMIZATION</div>
                  <div className="text-xl font-bold text-slate-900">Quarterly Efficiency Projection</div>
                </div>
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm border border-blue-100">
                  <TrendingUp className="w-6 h-6 text-blue-800" />
                </div>
              </div>

              {/* Card Body - Business Metrics */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-slate-600 font-medium">Labor Efficiency (OEE)</span>
                  <span className="text-2xl font-bold text-green-600">+18.5%</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-green-600 h-full w-[85%]"></div>
                </div>

                <div className="flex justify-between items-end pt-4">
                  <span className="text-slate-600 font-medium">Supply Chain Waste</span>
                  <span className="text-2xl font-bold text-blue-800">-12.0%</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-blue-800 h-full w-[60%]"></div>
                </div>

                <div className="flex justify-between items-end pt-4">
                  <span className="text-slate-600 font-medium">Bidding Accuracy</span>
                  <span className="text-2xl font-bold text-slate-900">94.2%</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-slate-900 h-full w-[94%]"></div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <FileText className="w-4 h-4" />
                  <span>Generated by Throttl Intelligence</span>
                </div>
                <div className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold uppercase rounded-sm">
                  Verified
                </div>
              </div>
            </div>

            {/* Decorative "Paper Stack" effect behind */}
            <div className="absolute top-4 left-4 w-full h-full bg-slate-200 border border-slate-300 z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
}