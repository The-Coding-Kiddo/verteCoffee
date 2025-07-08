'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Menu, Coffee } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'
import { useLanguage } from "@/lib/i18n/language-context"

export default function LandingPage() {
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  const { translations } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen pt-40 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 pointer-events-none" />

      {/* Hero Section */}
      <div className="container mx-auto px-4 min-h-[80vh] flex items-center">
        <div className="flex items-start justify-between w-full">
          <div className="max-w-3xl relative">
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-6xl md:text-7xl font-light leading-tight">
                <span className="block">{translations.hero.title.line1}</span>
                <span className="block">{translations.hero.title.line2}</span>
                <span className="block text-[#005140]">{translations.hero.title.line3}</span>
              </h1>
              <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-lg">
                {translations.hero.subtitle}
              </p>
              <div className="mt-8">
                <Link
                  href="/menu"
                  className="inline-block bg-[#005140] text-white px-8 py-3 rounded-full hover:bg-[#005140]/90 transition-colors"
                >
                  {translations.hero.exploreMenu}
                </Link>
              </div>
              <div className="mt-16">
                <span className="text-sm text-gray-500 tracking-[0.2em] uppercase">
                  {translations.hero.since}
                </span>
              </div>
            </motion.div>
        </div>

          {/* Top Right Leaf Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-[400px] mt-10"
          >
            <Image
              src="/images/floating-coffee-beans.png"
              alt="Coffee Leaves and Beans"
              width={400}
              height={400}
              priority
              quality={90}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 400px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjxAOEA4Qi4tMT03PVNhUVFXaWNqY2hiZGNhZGH/2wBDARUXFx4aHh8gIB8hISFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </motion.div>
          </div>
        </div>
    </div>
  )
} 