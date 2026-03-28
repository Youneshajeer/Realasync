"use client";

import { motion } from 'framer-motion';
import { Cpu, Globe, Zap, Shield, ArrowRight, Mail, Terminal } from "lucide-react";

// مكون صغير للمميزات التقنية
function Feature({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-all group"
    >
      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function RealAsyncLanding() {
  return (
    <div className="min-h-screen bg-[#030303] text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* خلفية سينمائية - Glow Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white italic">RA</div>
          <span className="text-lg font-black uppercase tracking-tighter text-white">RealAsync</span>
        </div>
        <a href="mailto:admin@realasync.com" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Contact</a>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Next-Gen Execution Engine</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-8xl lg:text-[120px] font-[1000] tracking-[-0.06em] leading-[0.85] text-white mb-8 italic uppercase"
        >
          Real Time.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Real Async.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-slate-500 text-sm md:text-lg mb-12 font-medium leading-relaxed tracking-wide"
        >
          The definitive platform for high-performance asynchronous operations. 
          Built for the architects of the future internet.
        </motion.p>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24"
        >
          <button className="group relative px-10 py-5 bg-white text-black font-black text-sm uppercase tracking-widest rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">Get Started <ArrowRight size={18}/></span>
          </button>
          <button className="px-10 py-5 border border-white/10 bg-white/5 text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all">
            Documentation
          </button>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <Feature 
            icon={<Zap size={24}/>} 
            title="Ultra Latency" 
            desc="Optimized for sub-millisecond execution across global edge nodes."
          />
          <Feature 
            icon={<Shield size={24}/>} 
            title="Async Security" 
            desc="End-to-end encrypted payloads for every asynchronous transaction."
          />
          <Feature 
            icon={<Cpu size={24}/>} 
            title="Infinite Scalability" 
            desc="Cloud-native architecture that grows with your demand automatically."
          />
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-8 text-center bg-black/50 backdrop-blur-md">
        <div className="flex flex-col items-center gap-4">
           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600">
             © 2026 RealAsync.com | Available for Strategic Acquisition
           </p>
           <div className="flex items-center gap-2 text-blue-500/50">
             <Terminal size={14} />
             <span className="text-[10px] font-mono">admin@realasync.com</span>
           </div>
        </div>
      </footer>
    </div>
  );
}
