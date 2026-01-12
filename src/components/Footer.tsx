"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#030303] pt-12 pb-12 overflow-hidden">
      <div className="max-w-1400px mx-auto px-6 md:px-11">
        
        {/* TOP LEVEL: RISH */}
        <div className="relative border-t border-white/5 pt-0">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="text-[18vw] leading-[0.8] font-light tracking-tighter text-white uppercase italic font-serif"
            >
              Rishabh.
            </motion.h1>
          </div>
        </div>

        {/* BOTTOM LEVEL: ABH + TAGLINE */}
        <div className="flex flex-col md:flex-row justify-between items-end -mt-[7vw]">
          <div className="overflow-hidden">
  
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-[3vw] text-right hidden md:block"
          >
            <p className="text-[10px] text-zinc-600 tracking-[0.4em] uppercase font-mono leading-relaxed">
              Based in Mumbai <br />
              Available Globally
            </p>
          </motion.div>
        </div>

        {/* REFINED BOTTOM BAR */}
        <div className="mt-10 pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Left: Rights */}
          <div>
            <p className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.3em]">
              © All right received / {currentYear}.
            </p>
          </div>

          {/* Center: Arham Studio (The Hero Credit) */}
          <div className="flex justify-start md:justify-center">
            <a 
              href="https://arhamswork.vercel.app/" 
              target="_blank"
              className="group flex flex-col items-start md:items-center"
            >
              <span className="text-[7px] text-zinc-800 tracking-[0.5em] uppercase mb-1">Portfolio by</span>
              <span className="text-sm font-light text-zinc-500 group-hover:text-white transition-all duration-700 tracking-tighter uppercase font-serif italic">
                Arham Chhajed <span className="inline-block transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </span>
            </a>
          </div>

          {/* Right: GPS Metadata */}
          <div className="flex justify-start md:justify-end">
            <p className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.3em] text-left md:text-right">
              19.0759° N <span className="text-zinc-900 mx-2">/</span> 72.8777° E
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}