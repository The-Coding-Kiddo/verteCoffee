'use client'

import { useEffect, useRef } from 'react'
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function ProcessSection() {
  const scrollToCulture = () => {
    const cultureSection = document.querySelector('#culture-section')
    if (cultureSection) {
      cultureSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#005140] blur-[120px] opacity-10 dark:opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Content - Left Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#005140]"></div>
              <span className="text-sm uppercase tracking-[0.2em] text-gray-500">THE PROCESS</span>
            </div>
            <h2 className="text-5xl font-light leading-tight">
              <span className="block text-[#005140]">Crafted with</span>
              <span className="block">Precision &</span>
              <span className="block">Care</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Every cup tells a story of dedication, from selecting the finest beans to our 
              meticulous 18-hour cold brew process.
            </p>
            <Button 
              onClick={scrollToCulture}
              className="w-full md:w-auto rounded-full bg-[#005140] hover:bg-[#005140]/90 text-white px-6 md:px-8 h-12 md:h-14 text-base md:text-lg"
            >
              <span className="mr-2">Discover Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Flying Coffee Cup - Right Side */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [-2, 2, -2]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-[500px] h-[500px] relative"
            >
              <Image
                src="/—Pngtree—flying cup of coffee with_15739217.png"
                alt="Flying Coffee Cup"
                width={500}
                height={500}
                quality={85}
                loading="eager"
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjxAOEA4Qi4tMT03PVNhUVFXaWNqY2hiZGNhZGH/2wBDARUXFx4aHh8gIB8hISFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 