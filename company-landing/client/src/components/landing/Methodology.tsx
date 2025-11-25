import { CheckCircle2 } from "lucide-react";

export function Methodology() {
  return (
    <section className="py-24 bg-white border-y border-slate-200">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              A Process, <br/>Not a Gamble.
            </h2>
            <div className="h-2 w-20 bg-blue-900 mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              We de-risk AI adoption by following a tiered engagement model. You never commit to a massive project without a validated roadmap.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 z-0"></div>

          {/* STEP 1 */}
          <div className="relative z-10 bg-white p-8 border-2 border-slate-100 hover:border-blue-900 transition-colors group">
            <div className="w-16 h-16 bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold text-2xl flex items-center justify-center rounded-full mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">The Peer Review</h3>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Diagnostic Phase</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm">Complimentary 60-min session</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm">Identify high-value operational gaps</span>
              </li>
            </ul>
          </div>

          {/* STEP 2 */}
          <div className="relative z-10 bg-slate-900 p-8 border-2 border-slate-900 shadow-xl transform md:-translate-y-4">
            <div className="absolute -top-3 left-8 bg-blue-600 text-white text-[10px] font-bold uppercase px-3 py-1 tracking-wider">
              Core Deliverable
            </div>
            <div className="w-16 h-16 bg-slate-800 border-2 border-slate-700 text-white font-bold text-2xl flex items-center justify-center rounded-full mb-6">
              02
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Roadmap Workshop</h3>
            <p className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-6">Strategy Phase</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">Half-day executive working session</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">Deliverable: The "One-Page Blueprint"</span>
              </li>
            </ul>
          </div>

          {/* STEP 3 */}
          <div className="relative z-10 bg-white p-8 border-2 border-slate-100 hover:border-blue-900 transition-colors group">
            <div className="w-16 h-16 bg-slate-50 border-2 border-slate-200 text-slate-900 font-bold text-2xl flex items-center justify-center rounded-full mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Implementation</h3>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Execution Phase</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm">Full-stack build & deployment</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm">Staff training & workflow adoption</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}