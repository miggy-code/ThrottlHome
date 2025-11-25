import { useState } from "react";
import { FileText, ChevronRight, BarChart3, Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export function CaseStudyViewer() {
  const [activeTab, setActiveTab] = useState(0);

  const cases = [
    {
      title: "Bidding & Estimation",
      category: "Construction",
      metric: "Win Rate +18%",
      icon: <BarChart3 className="w-5 h-5" />,
      detail: "A mid-size contractor was bidding with gut-feel. We analyzed 5 years of project data to identify the specific variables that correlated with profit, building a predictive bid model."
    },
    {
      title: "Supply Chain Schedule",
      category: "Logistics",
      metric: "Stockouts -40%",
      icon: <Clock className="w-5 h-5" />,
      detail: "By integrating supplier email data with ERP schedules, we built an early-warning system that flags potential delays 48 hours before they happen, allowing proactive adjustments."
    },
    {
      title: "Machine Efficiency (OEE)",
      category: "Manufacturing",
      metric: "Output +12%",
      icon: <TrendingUp className="w-5 h-5" />,
      detail: "Using simple IoT sensors, we visualized micro-stoppages in real-time. The floor manager identified a bottleneck in the packaging line and reclaimed 12% capacity in week one."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Left: Index */}
          <div className="md:w-1/3">
            <div className="font-mono text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Case Archive</div>
            <h2 className="text-3xl font-bold text-white mb-8">Real Results.</h2>
            
            <div className="space-y-0 border border-slate-700 rounded-sm overflow-hidden">
              {cases.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-6 flex justify-between items-center transition-all border-b border-slate-700 last:border-0 ${
                    activeTab === idx 
                      ? "bg-blue-900/20 border-l-4 border-l-blue-500" 
                      : "bg-slate-800 hover:bg-slate-700 border-l-4 border-l-transparent"
                  }`}
                >
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">{item.category}</div>
                    <div className={`font-bold ${activeTab === idx ? "text-white" : "text-slate-300"}`}>{item.title}</div>
                  </div>
                  <ChevronRight className={`w-5 h-5 ${activeTab === idx ? "text-blue-500" : "text-slate-500"}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: The Blueprint */}
          <div className="md:w-2/3 bg-slate-800 p-2 rounded-sm border border-slate-700">
            <div className="h-full bg-slate-50 rounded-sm p-8 md:p-12 relative overflow-hidden">
              {/* Background Grid inside the card */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                   style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8 border-b-2 border-slate-900 pb-4">
                  <div>
                    <div className="text-xs font-mono text-slate-500 uppercase mb-1">PROJECT_REF</div>
                    <h3 className="text-2xl font-bold text-slate-900">{cases[activeTab].title}</h3>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 font-bold text-sm border border-blue-200">
                    {cases[activeTab].metric}
                  </div>
                </div>

                <div className="flex gap-4 mb-6">
                  <div className="p-3 bg-white border border-slate-200 shadow-sm rounded-sm">
                    {cases[activeTab].icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-slate-700 leading-relaxed font-medium">
                      {cases[activeTab].detail}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
                  <div className="text-xs font-mono text-slate-400">CONFIDENTIAL // CLIENT DATA</div>
                  <div className="text-xs font-bold text-slate-900 uppercase">Verified Outcome</div>
                </div>
              </div>

              {/* Decorative "Stamp" */}
              <div className="absolute bottom-[-20px] right-[-20px] w-32 h-32 border-4 border-slate-200 rounded-full opacity-20"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}