"use client"

import { motion } from "framer-motion";

export default function StatsTape() {
  const stats = [
    { label: "Height", value: "5'11\"" },
    { label: "Weight", value: "65KG" },
    { label: "Shoes", value: "UK9" },
    { label: "Clothing", value: "SIZE M" },
  ];

  return (
    <section id="about" className="relative bg-black py-20 overflow-hidden">
      {/* Decorative Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1px bg-gradient-to from-transparent via-zinc-500 to-transparent opacity-30" />
      
      <div className="max-w-480 mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group p-8 flex flex-col items-center justify-center text-center"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/40 transition-all duration-500 rounded-xl -z-10" />
              
              {/* Vertical Divider for Desktop */}
              {index !== 3 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-1px bg-zinc-800" />
              )}

              <motion.span 
                className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 mb-4 group-hover:text-zinc-300 transition-colors"
              >
                {stat.label}
              </motion.span>
              
              <div className="relative">
                <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                  {stat.value.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.05) }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
                
                {/* Accent Dot */}
                <div className="absolute -right-4 top-0 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="mt-4 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  transition={{ duration: 1, ease: "circOut" }}
                  className="h-2px w-12 bg-zinc-700 mx-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}