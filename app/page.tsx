import React from 'react';
import { ExternalLink, Shield, Zap, Globe, Cpu, ArrowRight, DollarSign } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans antialiased overflow-x-hidden">
      {/* Advanced Animated Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[15%] w-[60%] h-[60%] bg-blue-900/15 blur-[160px] rounded-full animate-pulse-slow" />
        <div className="absolute -bottom-[15%] -right-[10%] w-[50%] h-[50%] bg-purple-950/10 blur-[140px] rounded-full animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-blue-600/5 blur-[180px] rounded-full" />
      </div>

      {/* Structured Noise Overlay */}
      <div className="fixed inset-0 z-1 opacity-[0.015] pointer-events-none bg-[url('/noise.svg')] bg-repeat" />

      <nav className="relative z-10 flex justify-between items-center px-6 md:px-10 py-8 max-w-7xl mx-auto border-b border-white/5">
        <div className="text-2xl font-black tracking-tighter italic hover:text-blue-400 transition-colors cursor-default">REALASYNC </div>
        <div className="flex gap-2 items-center px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[11px] uppercase tracking-[0.2em] font-medium shadow-inner-dark">
          <DollarSign size={14} className="animate-pulse" /> Asset Verified & Secure
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-36 text-center">
        {/* Dynamic Sale Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[11px] uppercase tracking-[0.25em] mb-10 shadow-lg shadow-blue-950/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Premium Domain & Infrastructure
        </div>
        
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 leading-none select-none">
            REAL <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700 animate-gradient-y">TIME.</span>
          </h1>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-none select-none text-white/90 uppercase">
  RealAsync<span className="text-blue-500">.com</span>
</h2>


          <div className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-10 max-w-3xl mx-auto leading-tight">
            AVAILABLE <span className="text-emerald-400">FOR SALE NOW</span>
          </div>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-16 font-light">
            The definitive platform for high-performance asynchronous operations. 
            Built for the architects of the future internet.
          </p>
        </div>

        {/* Strategic Acquisition Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 max-w-xl mx-auto">
          <a 
            href="https://sedo.com/search/details/?domain=realasync.com&origin=domaindetails"
            target="_blank"
            className="group relative px-10 py-5 bg-white text-black font-extrabold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto shadow-2xl shadow-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex items-center justify-center gap-2.5 text-base tracking-tight">
              ACQUIRE VIA SEDO <ExternalLink size={20} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
          
          <a 
            href="https://www.afternic.com/domain/realasync.com"
            target="_blank"
            className="group relative px-10 py-5 bg-black border-2 border-white/20 text-white font-extrabold rounded-full overflow-hidden transition-all duration-300 hover:bg-white/5 hover:border-white/40 hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <div className="relative z-10 flex items-center justify-center gap-2.5 text-base tracking-tight">
              BUY ON AFTERNIC <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        {/* Tech Features Grid - Structured & Premium */}
        <div className="grid md:grid-cols-3 gap-0 border border-white/10 bg-white/[0.03] rounded-3xl overflow-hidden backdrop-blur-lg shadow-2xl shadow-black/50">
          {[
            { icon: <Zap size={28} />, title: 'Ultra Latency', desc: 'Optimized for sub-millisecond execution across global edge nodes.' },
            { icon: <Shield size={28} />, title: 'Async Security', desc: 'End-to-end encrypted payloads for every asynchronous transaction.' },
            { icon: <Cpu size={28} />, title: 'Infinite Scalability', desc: 'Cloud-native architecture that grows with your demand automatically.' }
          ].map((item, idx) => (
            <div key={idx} className="p-12 text-left hover:bg-white/[0.02] transition-colors border-b md:border-b-0 md:border-r border-white/10 last:border-0 group">
              <div className="text-blue-500 mb-8 bg-blue-950/30 inline-flex p-4 rounded-xl border border-blue-500/20 shadow-inner group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-white group-hover:text-blue-300 transition-colors">{item.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="relative z-10 py-16 border-t border-white/5 text-center bg-black/50 backdrop-blur-sm">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gray-600 mb-5 font-medium">
          © 2026 REALASYNC.COM | HIGH-VALUE DIGITAL ASSET
        </p>
        <div className="flex justify-center gap-8 items-center">
          <a href="mailto:admin@realasync.com" className="text-gray-500 hover:text-white transition-all hover:scale-110 p-2">
            <Globe size={22} />
          </a>
          <div className="h-4 w-px bg-white/10" />
          <span className="text-emerald-500 text-xs font-bold tracking-wider uppercase">Strategic Acquisition</span>
        </div>
      </footer>
    </div>
  );
}
