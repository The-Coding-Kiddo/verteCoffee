'use client'

import { Button } from "../ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Snowflake, Sparkles, Droplet, Leaf } from "lucide-react"
import { useLanguage } from "../../lib/i18n/language-context"

export function MenuSection() {
  const { translations } = useLanguage()

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
                src="/images/iced-coffee.png"
                alt="Iced Coffee"
                width={400}
                height={400}
                quality={90}
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 0vw, 400px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjxAOEA4Qi4tMT03PVNhUVFXaWNqY2hiZGNhZGH/2wBDARUXFx4aHh8gIB8hISFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
                src="/images/matcha-latte.png"
                alt="Matcha Latte"
                width={400}
                height={400}
                quality={90}
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 0vw, 400px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjxAOEA4Qi4tMT03PVNhUVFXaWNqY2hiZGNhZGH/2wBDARUXFx4aHh8gIB8hISFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </motion.div>
          </motion.div>

          {/* Menu Content */}
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center space-y-6 mb-16">
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-[1px] bg-[#005140]"></div>
                <span className="text-sm uppercase tracking-[0.2em] text-gray-500">{translations.menu.sectionTitle}</span>
                <div className="w-12 h-[1px] bg-[#005140]"></div>
              </div>
              <h2 className="text-5xl font-light leading-tight">
                <span className="block text-[#005140]">{translations.menu.title.line1}</span>
                <span className="block">{translations.menu.title.line2}</span>
              </h2>
            </div>

            {/* Menu Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Menu Item 1 */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Snowflake className="w-5 h-5 text-[#005140]" />
                  <div className="w-8 md:w-12 h-[1px] bg-[#005140]"></div>
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{translations.menu.items.mango.category}</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-[#005140]"></div>
                  <div className="pl-8">
                    <div className="text-xl md:text-2xl font-light">{translations.menu.items.mango.name}</div>
                    <div className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">{translations.menu.items.mango.description}</div>
                    <div className="text-[#005140] mt-1">{translations.menu.items.mango.price}</div>
                  </div>
                </div>
              </div>

              {/* Menu Item 2 */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Snowflake className="w-5 h-5 text-[#005140]" />
                  <div className="w-8 md:w-12 h-[1px] bg-[#005140]"></div>
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{translations.menu.items.greenApple.category}</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-[#005140]"></div>
                  <div className="pl-8">
                    <div className="text-xl md:text-2xl font-light">{translations.menu.items.greenApple.name}</div>
                    <div className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">{translations.menu.items.greenApple.description}</div>
                    <div className="text-[#005140] mt-1">{translations.menu.items.greenApple.price}</div>
                  </div>
                </div>
              </div>

              {/* Menu Item 3 */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Snowflake className="w-5 h-5 text-[#005140]" />
                  <div className="w-8 md:w-12 h-[1px] bg-[#005140]"></div>
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{translations.menu.items.pineappleMelon.category}</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-[#005140]"></div>
                  <div className="pl-8">
                    <div className="text-xl md:text-2xl font-light">{translations.menu.items.pineappleMelon.name}</div>
                    <div className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">{translations.menu.items.pineappleMelon.description}</div>
                    <div className="text-[#005140] mt-1">{translations.menu.items.pineappleMelon.price}</div>
                  </div>
                </div>
              </div>

              {/* Menu Item 4 */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Snowflake className="w-5 h-5 text-[#005140]" />
                  <div className="w-8 md:w-12 h-[1px] bg-[#005140]"></div>
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{translations.menu.items.redForest.category}</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-[#005140]"></div>
                  <div className="pl-8">
                    <div className="text-xl md:text-2xl font-light">{translations.menu.items.redForest.name}</div>
                    <div className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">{translations.menu.items.redForest.description}</div>
                    <div className="text-[#005140] mt-1">{translations.menu.items.redForest.price}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* View Full Menu Button */}
            <div className="text-center mt-12">
              <Link href="/menu">
                <Button className="rounded-full bg-[#005140] hover:bg-[#005140]/90 text-white px-8 h-14">
                  {translations.menu.viewFullMenu}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 