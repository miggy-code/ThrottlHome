import { AlertTriangle, XCircle, Search } from "lucide-react";

export function ProblemGrid() {
  const diagnostics = [
    {
      id: "ERR_01",
      title: "Knowledge Decay",
      status: "CRITICAL",
      desc: "Your senior operators are retiring. The 'Tribal Knowledge' that runs your factory is walking out the door with them.",
      icon: <XCircle className="w-6 h-6 text-red-500" />
    },
    {
      id: "ERR_02",
      title: "Supply Volatility",
      status: "WARNING",
      desc: "Reactive firefighting. You find out about delays when the truck doesn't show up, not 48 hours before.",
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />
    },
    {
      id: "ERR_03",
      title: "Invisible Waste",
      status: "DETECTED",
      desc: "You know the margins are wrong, but the data is buried in paper logs and disconnected spreadsheets.",
      icon: <Search className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <section className="bg-slate-900 text-slate-200 py-20 border-y-8 border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-800 pb-8">
          <div>
             <h2 className="text-3xl font-bold text-white mb-2">Operational Diagnostics</h2>
             <p className="text-slate-400 font-mono text-sm">SCANNING_CORE_PROCESSES...</p>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-xs font-mono text-slate-500">REF: SECTOR_ANALYSIS</div>
            <div className="text-xs font-mono text-slate-500">DATE: {new Date().getFullYear()}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800 border border-slate-800">
          {diagnostics.map((item, idx) => (
            <div key={idx} className="bg-slate-900 p-8 hover:bg-slate-800/50 transition-colors group relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className="font-mono text-xs text-slate-600">{item.id}</div>
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
              <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-slate-800 text-slate-300 mb-4 border border-slate-700">
                STATUS: {item.status}
              </div>
              
              <p className="text-slate-400 leading-relaxed text-sm">
                {item.desc}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}