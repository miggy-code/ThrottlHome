import { Briefcase, Cpu, Quote, Linkedin, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function FounderProfile() {
  const [activeProfile, setActiveProfile] = useState<'gabriel' | 'miguel'>('gabriel');

  return (
    <section id="founders" className="py-24 bg-slate-100 border-t border-slate-300">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-5xl font-black text-slate-900 mb-4">LEADERSHIP DOSSIER</h2>
          <p className="text-xl text-slate-600">Select a file to view profile.</p>
        </div>

        {/* The "File System" Container */}
        <div className="bg-white border-2 border-slate-300 shadow-2xl rounded-sm min-h-[600px] flex flex-col md:flex-row">
          
          {/* Left: The Tabs (Vertical on Desktop) */}
          <div className="md:w-1/3 bg-slate-50 border-r-2 border-slate-300 flex flex-col">
            <button
              onClick={() => setActiveProfile('gabriel')}
              className={`p-8 text-left border-b-2 border-slate-200 transition-all hover:bg-white group relative ${activeProfile === 'gabriel' ? 'bg-white' : 'bg-slate-50'}`}
            >
              <div className={`absolute left-0 top-0 bottom-0 w-2 ${activeProfile === 'gabriel' ? 'bg-blue-600' : 'bg-transparent'}`}></div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">FOUNDER_01</span>
                {activeProfile === 'gabriel' && <ChevronRight className="text-blue-600" />}
              </div>
              <h3 className={`text-2xl font-bold ${activeProfile === 'gabriel' ? 'text-blue-900' : 'text-slate-500 group-hover:text-slate-700'}`}>Gabriel Gavrilov</h3>
              <div className="mt-2 text-sm font-bold text-slate-400 uppercase">Head of Operations</div>
            </button>

            <button
              onClick={() => setActiveProfile('miguel')}
              className={`p-8 text-left border-b-2 border-slate-200 transition-all hover:bg-white group relative ${activeProfile === 'miguel' ? 'bg-white' : 'bg-slate-50'}`}
            >
              <div className={`absolute left-0 top-0 bottom-0 w-2 ${activeProfile === 'miguel' ? 'bg-blue-600' : 'bg-transparent'}`}></div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">FOUNDER_02</span>
                {activeProfile === 'miguel' && <ChevronRight className="text-blue-600" />}
              </div>
              <h3 className={`text-2xl font-bold ${activeProfile === 'miguel' ? 'text-blue-900' : 'text-slate-500 group-hover:text-slate-700'}`}>Miguel Padilla</h3>
              <div className="mt-2 text-sm font-bold text-slate-400 uppercase">Head of Intelligence</div>
            </button>
            
            {/* Filler space */}
            <div className="flex-1 bg-slate-100/50 p-8 flex items-end">
               <div className="font-mono text-xs text-slate-400">
                  SECURE CONNECTION<br/>
                  ENCRYPTED: SHA-256
               </div>
            </div>
          </div>

          {/* Right: The Content Area */}
          <div className="md:w-2/3 p-8 md:p-16 relative bg-white">
            
            {/* GABRIEL PROFILE */}
            {activeProfile === 'gabriel' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex flex-col md:flex-row gap-8 mb-10 items-start">
                   <div className="w-32 h-32 bg-slate-200 border-2 border-slate-300 flex items-center justify-center shrink-0">
                      <Briefcase className="w-12 h-12 text-slate-400" />
                   </div>
                   <div>
                      <h3 className="text-4xl font-black text-slate-900 mb-2">GABRIEL GAVRILOV</h3>
                      <div className="inline-block bg-blue-100 text-blue-800 font-mono font-bold px-3 py-1 text-sm mb-6">
                        OPERATIONAL LEAD
                      </div>
                      <p className="text-xl text-slate-600 italic leading-relaxed">
                        "I'm not a tech theorist. I've spent my career in sales and ops. I know the pressure of hitting numbers, and I only care about technology if it solves a real business problem."
                      </p>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-8 border-t-2 border-slate-100 pt-8">
                   <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Check className="text-blue-600 w-5 h-5"/> SPECIALIZATION</h4>
                      <ul className="space-y-2 font-mono text-sm text-slate-600">
                        <li>ROI Analysis</li>
                        <li>Workflow Optimization</li>
                        <li>Sales Operations</li>
                      </ul>
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Check className="text-blue-600 w-5 h-5"/> BACKGROUND</h4>
                      <ul className="space-y-2 font-mono text-sm text-slate-600">
                        <li>Executive Sales</li>
                        <li>Ops Management</li>
                        <li>New York Based</li>
                      </ul>
                   </div>
                </div>
              </div>
            )}

            {/* MIGUEL PROFILE */}
            {activeProfile === 'miguel' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex flex-col md:flex-row gap-8 mb-10 items-start">
                   <div className="w-32 h-32 bg-slate-900 border-2 border-slate-800 flex items-center justify-center shrink-0 text-white">
                      <Cpu className="w-12 h-12 text-blue-400" />
                   </div>
                   <div>
                      <h3 className="text-4xl font-black text-slate-900 mb-2">MIGUEL PADILLA</h3>
                      <div className="inline-block bg-slate-800 text-white font-mono font-bold px-3 py-1 text-sm mb-6">
                        TECHNICAL ARCHITECT
                      </div>
                      <p className="text-xl text-slate-600 italic leading-relaxed">
                        "My job is to be the bridge—translating complex operational problems into simple, secure, and robust tools that your team can actually rely on."
                      </p>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-8 border-t-2 border-slate-100 pt-8">
                   <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Check className="text-blue-600 w-5 h-5"/> SPECIALIZATION</h4>
                      <ul className="space-y-2 font-mono text-sm text-slate-600">
                        <li>Systems Architecture</li>
                        <li>Data Security</li>
                        <li>Scalable Infrastructure</li>
                      </ul>
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Check className="text-blue-600 w-5 h-5"/> BACKGROUND</h4>
                      <ul className="space-y-2 font-mono text-sm text-slate-600">
                        <li>Full Stack Engineering</li>
                        <li>Enterprise Systems</li>
                        <li>Global Operations</li>
                      </ul>
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}