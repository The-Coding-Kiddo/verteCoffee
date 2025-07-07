'use client'

import { Button } from "../ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export function MenuSection() {
  return (
    <section className="relative min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#005140] blur-[120px] opacity-10 dark:opacity-20"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Floating Iced Coffee Image - Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute -left-20 top-1/2 -translate-y-1/2 hidden lg:block"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [-3, 3, -3]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-[400px] h-[400px] relative"
            >
              <Image
                src="/—Pngtree—coffee ice drink soft with_19780577.png"
                alt="Iced Coffee"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Floating Matcha Latte - Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute -right-8 top-[28%] hidden lg:block"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [3, -3, 3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-[400px] h-[400px] relative"
            >
              <Image
                src="/—Pngtree—iced matcha latte with smooth_20696564.png"
                alt="Matcha Latte"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Menu Content */}
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center space-y-6 mb-16">
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-[1px] bg-[#005140]"></div>
                <span className="text-sm uppercase tracking-[0.2em] text-gray-500">OUR MENU</span>
                <div className="w-12 h-[1px] bg-[#005140]"></div>
              </div>
              <h2 className="text-5xl font-light leading-tight">
                <span className="block text-[#005140]">Signature</span>
                <span className="block">Cold Brews</span>
              </h2>
            </div>

            {/* Menu Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Menu Item 1 */}
              <div className="space-y-8">
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

              {/* Menu Item 2 */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 md:w-12 h-[1px] bg-[#005140]"></div>
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">SEASONAL SPECIAL</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-[#005140]"></div>
                  <div className="pl-8">
                    <div className="text-xl md:text-2xl font-light">Vanilla Bean Dream</div>
                    <div className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">Madagascar vanilla / Light roast</div>
                    <div className="text-[#005140] mt-1">$6.00</div>
                  </div>
                </div>
              </div>

              {/* Menu Item 3 */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 md:w-12 h-[1px] bg-[#005140]"></div>
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">HOUSE FAVORITE</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-[#005140]"></div>
                  <div className="pl-8">
                    <div className="text-xl md:text-2xl font-light">Mocha Midnight</div>
                    <div className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">Dark chocolate / Dark roast</div>
                    <div className="text-[#005140] mt-1">$6.50</div>
                  </div>
                </div>
              </div>

              {/* Menu Item 4 */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 md:w-12 h-[1px] bg-[#005140]"></div>
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">BARISTA'S CHOICE</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-[#005140]"></div>
                  <div className="pl-8">
                    <div className="text-xl md:text-2xl font-light">Caramel Fusion</div>
                    <div className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">Sea salt caramel / Medium roast</div>
                    <div className="text-[#005140] mt-1">$6.00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* View Full Menu Button */}
            <div className="text-center mt-16">
              <Button className="rounded-full bg-[#005140] hover:bg-[#005140]/90 text-white px-8 h-14 text-lg">
                View Full Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 