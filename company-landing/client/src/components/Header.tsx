import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const handleNav = (sectionId: string) => {
    setMobileMenuOpen(false);

    if (sectionId === "inquiry") {
      setLocation("/inquiry");
      return;
    }

    // Logic: If we are NOT on home, go home first, then scroll
    if (location !== "/") {
      setLocation("/");
      // Small timeout to allow the Home page to mount before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // We are already on home, just scroll
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavItem = ({ target, label }: { target: string; label: string }) => (
    <button
      onClick={() => handleNav(target)}
      className="text-sm font-bold text-slate-600 hover:text-blue-900 uppercase tracking-widest transition-colors"
    >
      {label}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 h-24">
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <button onClick={() => handleNav("hero")} className="group flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-900 flex items-center justify-center text-white font-bold text-xl rounded-sm">
              T
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-slate-900 leading-none tracking-tight">THROTTL</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Intelligence</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavItem target="methodology" label="Methodology" />
            <NavItem target="cases" label="Results" />
            <NavItem target="founders" label="Team" />
            <Button 
              onClick={() => handleNav("inquiry")}
              className="h-12 px-6 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-sm shadow-md transition-transform active:scale-95"
            >
              Book Peer Review
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="absolute top-24 left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl md:hidden">
            <button onClick={() => handleNav("methodology")} className="text-left text-lg font-bold text-slate-900 py-2 border-b border-slate-100">Methodology</button>
            <button onClick={() => handleNav("cases")} className="text-left text-lg font-bold text-slate-900 py-2 border-b border-slate-100">Results</button>
            <button onClick={() => handleNav("founders")} className="text-left text-lg font-bold text-slate-900 py-2 border-b border-slate-100">Team</button>
            <Button onClick={() => handleNav("inquiry")} className="w-full h-12 bg-blue-900 text-white font-bold mt-2 rounded-sm">
              Book Peer Review
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}