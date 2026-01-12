"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#030303] pt-12 pb-20 overflow-hidden">
      <div className="max-w-1400px mx-auto px-6 md:px-11">
        
        {/* MOBILE ONLY: Simple Made by Arham */}
        <div className="md:hidden flex justify-center items-center min-h-200px">
          <a 
            href="https://arhamswork.vercel.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center border-t border-b border-white/5 py-8 w-full"
          >
            <span className="text-[7px] text-zinc-800 tracking-[0.5em] uppercase mb-1">Portfolio by</span>
            <span className="text-sm font-light text-zinc-500 group-hover:text-white transition-all duration-700 tracking-tighter uppercase font-serif italic">
              Arham Chhajed <span className="inline-block transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </span>
          </a>
        </div>

        {/* DESKTOP ONLY: Full Footer Content */}
        <div className="hidden md:block">
          {/* TOP LEVEL: RISH */}
          <div className="relative border-t border-white/5 pt-0">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                className="text-[17vw] leading-[0.8] font-light tracking-tighter text-white uppercase italic font-serif"
              >
                Rishabh.
              </motion.h1>
            </div>
          </div>

          {/* BOTTOM LEVEL: TAGLINE */}
          <div className="flex flex-row justify-between items-end -mt-[9vw]">
            <div className="overflow-hidden">
              {/* Space reserved for potential left-side content */}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-[3vw] text-right"
            >
              <p className="text-[10px] text-zinc-600 tracking-[0.4em] uppercase font-mono leading-relaxed">
                Based in Mumbai <br />
                Available Globally
              </p>
            </motion.div>
          </div>

          {/* REFINED BOTTOM BAR */}
          <div className="mt-15 pt-10 border-t border-white/5 grid grid-cols-3 gap-8 items-center">
            
            {/* Left: Rights */}
            <div>
              <p className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.3em]">
                © All rights reserved / {currentYear}.
              </p>
            </div>

            {/* Center: Arham Studio */}
            <div className="flex justify-center">
              <a 
                href="https://arhamswork.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <span className="text-[7px] text-zinc-800 tracking-[0.5em] uppercase mb-1">Portfolio by</span>
                <span className="text-sm font-light text-zinc-500 group-hover:text-white transition-all duration-700 tracking-tighter uppercase font-serif italic">
                  Arham Chhajed <span className="inline-block transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                </span>
              </a>
            </div>

            {/* Right: GPS Metadata */}
            <div className="flex justify-end">
              <p className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.3em] text-right">
                19.0759° N <span className="text-zinc-900 mx-2">/</span> 72.8777° E
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}