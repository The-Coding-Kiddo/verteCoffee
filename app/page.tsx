'use client'

import LandingPage from "@/components/landing-page"
import { MenuSection } from "@/components/sections/menu-section"
import { ProcessSection } from "@/components/sections/process-section"
import { CultureSection } from "@/components/sections/culture-section"
import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-white">
      <Navbar />
      <LandingPage />
      <ProcessSection />
      <MenuSection />
      <CultureSection />
      <Footer />
    </main>
  )
}
