'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Menu, Coffee } from "lucide-react"
import { useTheme } from "next-themes"
import { ProcessSection } from "./sections/process-section"
import { MenuSection } from "./sections/menu-section"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function LandingPage() {
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
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-white overflow-hidden transition-colors duration-300">
      {/* Navbar */}
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#005140] blur-[120px] opacity-10 dark:opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-screen bg-[url('/hero-coffee.jpg')] bg-cover bg-center opacity-5 dark:opacity-10"></div>
        </div>

        {/* Floating Coffee Beans - Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute right-[20%] top-[20%] hidden lg:block"
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [10, -10, 10]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-[500px] h-[500px] relative"
          >
            <Image
              src="/—Pngtree—roasted coffee beans background with_15014146.png"
              alt="Coffee Beans"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Vertical Text */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 transform rotate-180 whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
          <span className="text-xs md:text-sm tracking-[0.2em] text-gray-500 dark:text-gray-400">COLD BREW ARTISANS SINCE 2024</span>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 pt-28 md:pt-20">
          <div className="max-w-4xl">
            <h1 className="text-[12vw] md:text-[6vw] font-light leading-[0.9] tracking-tight mb-8">
              <span className="block text-gray-600 dark:text-gray-500">Crafting</span>
              <span className="block">Cold Brew</span>
              <span className="block text-[#005140]">Perfection</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-12 md:gap-24 mt-12 md:mt-16">
              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
                  Where precision meets passion in every drop. 
                  Experience coffee redefined.
                </p>
                <Button className="w-full md:w-auto rounded-full bg-[#005140] hover:bg-[#005140]/90 text-white px-6 md:px-8 h-12 md:h-14 text-base md:text-lg">
                  Explore Menu
                </Button>
              </div>

              <div className="space-y-8 mt-8 md:mt-0">
                <div className="flex items-center gap-4">
                  <div className="w-8 md:w-12 h-[1px] bg-[#005140]"></div>
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">SIGNATURE BLEND</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-[#005140]"></div>
                  <div className="pl-8">
                    <div className="text-xl md:text-2xl font-light">Verde Intensity</div>
                    <div className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">18-hour steep / Medium roast</div>
                    <div className="text-[#005140] mt-1">$5.50</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-20 md:h-24 border-t border-black/5 dark:border-white/10">
          <div className="container mx-auto px-4 h-full flex items-center justify-between">
            <div className="flex items-center gap-6 md:gap-12">
              <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">NYC / LA / MIAMI</span>
              <div className="w-[1px] h-3 md:h-4 bg-gray-300 dark:bg-gray-400"></div>
              <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">@vertecoffee</span>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#005140] animate-pulse"></div>
              <span className="text-xs md:text-sm">Now Brewing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Menu Section */}
      <MenuSection />
    </div>
  )
} 