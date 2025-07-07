'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Menu, Coffee } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#fafafa]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 h-28 md:h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <Image
            src="/logo.jpg"
            alt="Verte Coffee House"
            width={100}
            height={100}
            className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
            priority
          />
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-light">verte</span>
            <span className="text-[11px] md:text-[13px] font-light tracking-[0.2em] uppercase text-[#005140]">coffee house</span>
          </div>
        </Link>
        
        <div className="flex items-center gap-3 md:gap-6">
          <Link 
            href="/menu"
            className="text-sm md:text-base font-light hover:text-[#005140] transition-colors"
          >
            Menu
          </Link>
          <Button 
            variant="ghost" 
            size="icon"
            className="rounded-full w-9 h-9 md:w-10 md:h-10 hover:bg-[#005140]/10"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Coffee className="h-4 w-4 md:h-5 md:w-5 animate-[spin_3s_ease-in-out_infinite]" />
          </Button>
          <Button variant="ghost" className="rounded-full w-10 h-10 md:w-12 md:h-12 p-0 hover:bg-[#005140]/10">
            <Menu className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>
      </div>
    </nav>
  )
} 