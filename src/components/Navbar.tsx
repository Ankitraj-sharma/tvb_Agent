import React from 'react';
import { 
  Zap, 
  Orbit as OrbitIcon, 
  Globe2, 
  ShoppingBag, 
  Database, 
  Calculator, 
  Cpu, 
  Layers, 
  ShieldCheck,
  ChevronDown,
  Users
} from 'lucide-react';
import { PersonaType } from '../types';
import { PERSONA_DATA } from '../data/tvbData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentPersona: PersonaType;
  setCurrentPersona: (persona: PersonaType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currentPersona,
  setCurrentPersona
}) => {
  const tabs = [
    { id: 'overview', label: 'Engines & Vision', icon: Layers },
    { id: 'team', label: 'Team & Partners', icon: Users, badge: 'TVB Network' },
    { id: 'orbits', label: '7 Orbits', icon: OrbitIcon },
    { id: 'hubs', label: 'Hubs & Corridors', icon: Globe2 },
    { id: 'marketplace', label: 'Scale-Up Marketplace', icon: ShoppingBag, badge: 'Costco Model' },
    { id: 'network', label: 'Network (~40 Cos)', icon: Database },
    { id: 'economics', label: 'Economics Simulator', icon: Calculator },
    { id: 'ai-os', label: 'TVB Operating System', icon: Cpu, badge: 'Nexus AI' }
  ];

  const personas: { id: PersonaType; label: string }[] = [
    { id: 'founder', label: 'Founders' },
    { id: 'advisor', label: 'Advisors' },
    { id: 'investor', label: 'Investors' },
    { id: 'partner', label: 'Partners' },
    { id: 'corporate', label: 'Corporates' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#02172e]/95 backdrop-blur-md border-b border-[#172a3e]">
      {/* Top Banner: One-Liner / Thesis */}
      <div className="bg-[#021d3a] border-b border-[#172a3e]/80 px-4 py-1.5 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-[#1863dc]/15 text-[#81a9f0] border border-[#1863dc]/30 tracking-wide uppercase">
              Core Thesis
            </span>
            <span className="hidden sm:inline text-slate-300 font-medium">
              "The future of scaling is not advising. It is execution."
            </span>
            <span className="sm:hidden text-slate-300 font-medium">
              Execution over advising.
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="font-medium text-slate-300">Austin HQ Active</span>
            </div>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 font-mono text-[11px]">4 Engines • 7 Orbits • 5 Hubs</span>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Brand identity */}
        <div 
          onClick={() => setActiveTab('overview')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="h-8 flex items-center">
            <img 
              src="/tvb-logo.svg" 
              alt="The Venture Build" 
              className="h-7 w-auto object-contain"
            />
          </div>
          <div className="pl-2 border-l border-[#172a3e]">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm text-white tracking-tight">The Venture Build</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-[#0b1f34] text-[#81a9f0] border border-[#172a3e]">
                TVB
              </span>
            </div>
            <p className="text-[10px] text-slate-400">Venture Catalyst & Execution Operating System</p>
          </div>
        </div>

        {/* Persona Switcher */}
        <div className="flex items-center gap-1 bg-[#021d3a] border border-[#172a3e] p-1 rounded-lg">
          <span className="text-[11px] text-slate-400 font-medium px-2 hidden md:inline">Perspective:</span>
          {personas.map((p) => {
            const isSelected = currentPersona === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setCurrentPersona(p.id)}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#1863dc] text-white font-semibold shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#0b1f34]'
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Nav Tabs */}
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-none border-t border-[#172a3e]">
        <nav className="flex space-x-1 py-1.5 min-w-max">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#0b1f34] text-[#81a9f0] font-semibold border border-[#1863dc]/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#021d3a]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#1863dc]' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded-full uppercase tracking-wider ${
                    isActive 
                      ? 'bg-[#1863dc]/20 text-[#81a9f0]' 
                      : 'bg-[#021d3a] text-slate-400'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
