"use client"

import { Home, Image as ImageIcon, User, Camera } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export default function GlobalNavbar() {
  const navItems = [
    { name: 'Home', id: '#home', icon: Home },
    { name: 'About Me', id: '#about', icon: ImageIcon },
    { name: 'Gallary', id: '#gallary', icon: Camera },
    { name: 'Contact', id: '#contact', icon: User },
  ]

  return <NavBar items={navItems} />
}
