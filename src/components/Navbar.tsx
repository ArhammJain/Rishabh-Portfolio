"use client"

import { Home, UserRound, Contact, Images} from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export default function GlobalNavbar() {
  const navItems = [
    { name: 'Home', id: '#home', icon: Home },
    { name: 'About Me', id: '#about', icon: UserRound },
    { name: 'Gallery', id: '#gallery', icon: Images },
    { name: 'Contact', id: '#contact', icon: Contact },
  ]

  return <NavBar items={navItems} />
}
