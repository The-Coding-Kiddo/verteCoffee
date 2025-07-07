'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Menu, Coffee } from "lucide-react"
import { useTheme } from "next-themes"
import { ProcessSection } from "./sections/process-section"
import { MenuSection } from "./sections/menu-section"
import { CultureSection } from "./sections/culture-section"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Footer } from "./sections/footer"
import { Navbar } from "./navbar"
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-white overflow-hidden transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
              width={500}
              height={500}
              quality={85}
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 0vw, 500px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjxAOEA4Qi4tMT03PVNhUVFXaWNqY2hiZGNhZGH/2wBDARUXFx4aHh8gIB8hISFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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

            <div className="flex flex-col items-start">
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-12">
                Where precision meets passion in every drop. 
                Experience coffee redefined.
              </p>
              <button
                onClick={() => router.push('/menu')}
                className="w-full md:w-auto rounded-full bg-[#005140] hover:bg-[#005140]/90 text-white px-6 md:px-8 h-12 md:h-14 text-base md:text-lg transition-colors duration-300 flex items-center justify-center"
              >
                Explore Menu
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-20 md:h-24 border-t border-black/5 dark:border-white/10">
          <div className="container mx-auto px-4 h-full flex items-center justify-between">
            <div className="flex items-center gap-6 md:gap-12">
              <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Cankaya | Ankara</span>
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

      {/* Culture Section */}
      <CultureSection />

      <Footer />
    </div>
  )
} 