"use client"

import React, { useRef, useState } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import emailjs from "@emailjs/browser"
import { ArrowUpRight, Check, Loader2 } from "lucide-react"

// --- Types ---
interface InputFieldProps {
  label: string
  name: string
  placeholder: string
  type?: string
  isTextArea?: boolean
}

interface SocialLinkProps {
  name: string
  href: string
}

export default function PremiumContact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle")

  // Magnetic Button Logic
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.3)
    y.set((e.clientY - centerY) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return
    
    setStatus("sending")
    
    // Replace with your actual IDs
    emailjs.sendForm("service_d8llfyn", "template_85a7twq", formRef.current, "n3CFoOXSrH3HDqFgh")
      .then(() => {
        setStatus("success")
        setTimeout(() => setStatus("idle"), 4000)
        formRef.current?.reset()
      })
      .catch(() => setStatus("idle"))
  }

  return (
    <section id="contact" className="relative min-h-screen w-full bg-[#030303] flex items-center justify-center px-6 py-24 overflow-hidden">
      
      {/* --- Premium Background Elements --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-800px h-800px bg-zinc-900/20 blur-[160px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        
        {/* --- Left Side: Massive Typography --- */}
        <div className="space-y-12">
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-zinc-600 font-mono text-[10px] tracking-[0.5em] uppercase"
            >
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(3rem,8vw,10rem)] leading-[0.85] tracking-tighter text-white font-light"
            >
              Let&apos;s <br />
              <span className="font-serif italic text-zinc-500">Connect</span>
            </motion.h2>
          </div>

          <div className="flex flex-col gap-6">
            <SocialLink name="Instagram" href="#" />
            <SocialLink name="LinkedIn" href="#" />
          </div>
        </div>

    {/* --- Right Side: Architectural Form --- */}
<div className="w-full lg:pt-20">
  <motion.form
    ref={formRef}
    onSubmit={sendEmail}
    className="space-y-2"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
  >
    <InputField label="Name" name="user_name" placeholder="Your Name" />
    <InputField label="Email" name="user_email" placeholder="yourmail@example.com" type="email" />
    <InputField label="Brief" name="message" placeholder="Message" isTextArea />

    {/* --- PREMUM MAGNETIC SEND BUTTON --- */}
    <div className="pt-16 flex justify-end">
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-40 w-40 md:h-52 md:w-52 flex items-center justify-center"
      >
        {/* Breathing Outer Ring */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border border-white/20"
        />

        <motion.button
          style={{ x: springX, y: springY }}
          type="submit"
          disabled={status !== "idle"}
          className="relative h-32 w-32 md:h-40 md:w-40 bg-white rounded-full flex flex-col items-center justify-center text-black overflow-hidden transition-colors duration-700 hover:bg-zinc-200 group"
        >
          {/* Inner Gloss/Liquid Effect */}
          <div className="absolute inset-0 bg-gradient-to from-transparent via-white/50 to-transparent translate-y-100% group-hover:translate-y-100% transition-transform duration-1000" />
          
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div 
                key="success" 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center"
              >
                <Check size={28} strokeWidth={1.5} className="mb-1" />
                <span className="text-[8px] font-bold tracking-[0.3em] uppercase">Received</span>
              </motion.div>
            ) : status === "sending" ? (
              <motion.div 
                key="loading" 
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              >
                <Loader2 size={24} strokeWidth={1.5} className="opacity-40" />
              </motion.div>
            ) : (
              <motion.div 
                key="idle" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-2"
              >
                {/* Visual Arrow + Text pairing */}
                <div className="relative overflow-hidden">
                   <ArrowUpRight size={32} strokeWidth={0.75} className="transition-transform duration-500 group-hover:translate-x-8 group-hover:-translate-y-8" />
                   <ArrowUpRight size={32} strokeWidth={0.75} className="absolute top-0 left-0 -translate-x-8 translate-y-8 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
                <span className="text-[9px] font-bold tracking-[0.4em] uppercase mt-2">Send</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress ring for active/sending state */}
          {status === "sending" && (
            <svg className="absolute inset-0 h-full w-full -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="48%"
                className="fill-none stroke-zinc-200 stroke-[1px]"
                strokeDasharray="100 100"
              />
            </svg>
          )}
        </motion.button>
      </div>
    </div>
  </motion.form>
</div>
      </div>
    </section>
  )
}

/** * Refined architectural input fields 
 */
function InputField({ label, name, placeholder, type = "text", isTextArea = false }: InputFieldProps) {
  return (
    <div className="group relative w-full border-b border-white/5 py-8 transition-colors duration-500 focus-within:border-white/40">
      <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-8">
        <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest min-w-80px mb-2 md:mb-1">
          {label}
        </span>
        {isTextArea ? (
          <textarea
            name={name}
            required
            rows={1}
            placeholder={placeholder}
            className="w-full bg-transparent text-xl md:text-2xl font-light outline-none placeholder:text-zinc-900 focus:placeholder:text-zinc-800 transition-all text-white"
          />
        ) : (
          <input
            name={name}
            type={type}
            required
            placeholder={placeholder}
            className="w-full bg-transparent text-xl md:text-2xl font-light outline-none placeholder:text-zinc-900 focus:placeholder:text-zinc-800 transition-all text-white"
          />
        )}
      </div>
    </div>
  )
}

/**
 * Animated Social Link
 */
function SocialLink({ name, href }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 10 }}
      className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-colors duration-300"
    >
      <div className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-white transition-colors" />
      <span className="text-sm font-light uppercase tracking-widest">{name}</span>
    </motion.a>
  )
}