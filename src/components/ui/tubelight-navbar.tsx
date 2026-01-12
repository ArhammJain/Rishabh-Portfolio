"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  icon: LucideIcon
  id: string
}


interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault()
    const targetId = url.replace("#", "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "fixed top-0 bottom-50 left-10 w-full z-50 p-6 md:p-5 pointer-events-none",
        className,
      )}
    >
      <div className="flex items-center gap-4 pointer-events-auto">
        
        {/* NAVIGATION PILL - hidden on mobile, flex on medium screens and up */}
        <nav className="hidden md:flex items-center gap-1 bg-white/0.03 border border-white/10 backdrop-blur-2xl py-1 px-1 rounded-full shadow-xl">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <a
                key={item.name}
                href={item.id}
                onClick={(e) => {
                  scrollToSection(e, item.id!)
                  setActiveTab(item.name)
                }}
                className={cn(
                  "relative px-4 py-2 rounded-full transition-all duration-500 group",
                  isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200",
                )}
              >
                {/* Desktop Text */}
                <span className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em]">
                  {item.name}
                </span>

                {/* Mobile Icon */}
                <span className="md:hidden block">
                  <Icon size={18} strokeWidth={1.5} />
                </span>

                {/* Active Indicator (Tubelight Glow) */}
                {isActive && (
                  <motion.div
                    layoutId="header-active"
                    className="absolute inset-0 bg-white/5 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  >
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-2px bg-white rounded-full">
                      <div className="absolute inset-0 bg-white blur-4px" />
                    </div>
                  </motion.div>
                )}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}