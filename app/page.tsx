import React from 'react';
import { ExternalLink, Shield, Zap, Globe, Cpu, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full" />
      </div>

      <nav className="relative z-10 flex justify-between items-center px-6 py-8 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter italic">REALASYNC.</div>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] text-gray-400">
          <span>Infrastructure</span>
          <span>Security</span>
          <span>Scalability</span>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[10px] uppercase tracking-[0.2em] mb-8 animate-pulse">
          Premium Domain & Asset Available
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
          REAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">TIME.</span>
        </h1>
        
        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12 font-light">
          The definitive platform for high-performance asynchronous operations. 
          Built for the architects of the future internet.
        </p>

        {/* Strategic Acquisition Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
          <a 
            href="https://sedo.com/search/details/?domain=realasync.com&origin=domaindetails"
            target="_blank"
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 w-full md:w-auto"
          >
            <div className="relative z-10 flex items-center justify-center gap-2">
              ACQUIRE VIA SEDO <ExternalLink size={18} />
            </div>
          </a>
          
          <a 
            href="https://www.afternic.com/domain/realasync.com"
            target="_blank"
            className="group relative px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full overflow-hidden transition-all hover:bg-white/5 hover:border-white/50 hover:scale-105 active:scale-95 w-full md:w-auto"
          >
            <div className="relative z-10 flex items-center justify-center gap-2">
              BUY ON AFTERNIC <ArrowRight size={18} />
            </div>
          </a>
        </div>

        {/* Tech Features Grid */}
        <div className="grid md:grid-cols-3 gap-1 px-4 border border-white/10 bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm">
          {[
            { icon: <Zap size={24} />, title: 'Ultra Latency', desc: 'Optimized for sub-millisecond execution across global edge nodes.' },
            { icon: <Shield size={24} />, title: 'Async Security', desc: 'End-to-end encrypted payloads for every asynchronous transaction.' },
            { icon: <Cpu size={24} />, title: 'Infinite Scalability', desc: 'Cloud-native architecture that grows with your demand automatically.' }
          ].map((item, idx) => (
            <div key={idx} className="p-10 text-left hover:bg-white/[0.02] transition-colors border-b md:border-b-0 md:border-r border-white/10 last:border-0">
              <div className="text-blue-500 mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="relative z-10 py-12 border-t border-white/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-4">
          © 2026 REALASYNC.COM | AVAILABLE FOR STRATEGIC ACQUISITION
        </p>
        <div className="flex justify-center gap-6">
          <a href="mailto:admin@realasync.com" className="text-gray-400 hover:text-white transition-colors">
            <Globe size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}
