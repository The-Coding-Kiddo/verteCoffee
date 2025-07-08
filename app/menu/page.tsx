'use client'

import { motion, AnimatePresence } from "framer-motion"
import { Coffee, Snowflake, Leaf, Sparkles, Droplet } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"
import { useEffect, useState } from "react"
import Image from "next/image"

const categories = [
  {
    title: "ESPRESSO",
    icon: <Coffee className="w-6 h-6" />,
    items: [
      { name: "Espresso", price: "80-95" },
      { name: "Espresso Doppio", price: "100" },
      { name: "Americano", price: "105" },
      { name: "Red Eye", price: "110" },
      { name: "Latte", price: "110" },
      { name: "Cappuccino", price: "110" },
      { name: "Flat White", price: "115" },
      { name: "Cortado", price: "110" },
      { name: "Filtre Kahve", price: "100" },
      { name: "Sütlü Filtre", price: "110" },
    ]
  },
  {
    title: "SPECIAL",
    icon: <Sparkles className="w-6 h-6" />,
    items: [
      { name: "Mocha", price: "130" },
      { name: "White Mocha", price: "130" },
      { name: "Irish Mocha", price: "135" },
      { name: "Dark Coco", price: "135" },
      { name: "White Coco", price: "135" },
      { name: "Berrywhite", price: "135" },
      { name: "Verte Pink", price: "135" },
      { name: "White Caramel", price: "135" },
      { name: "Caramel Mac", price: "135" },
      { name: "Salted Caramel Mac", price: "135" },
    ]
  },
  {
    title: "FROZEN",
    icon: <Snowflake className="w-6 h-6" />,
    items: [
      { name: "Kırmızı Orman Meyvesi", price: "140" },
      { name: "Ananas Kavun", price: "150" },
      { name: "Çilek", price: "140-150" },
      { name: "Mango", price: "140-150" },
      { name: "Yeşil Elma", price: "140-150" },
      { name: "Limon", price: "140-150" },
    ]
  },
  {
    title: "COOLER",
    icon: <Droplet className="w-6 h-6" />,
    items: [
      { name: "Cool Lime", price: "150" },
      { name: "Berry Hibiscus", price: "150" },
      { name: "Mango Dragonfruit", price: "155" },
      { name: "Dragonfruit", price: "155" },
      { name: "Çilekli Limonata", price: "140" },
    ]
  },
  {
    title: "BITKI ÇAYLARI",
    icon: <Leaf className="w-6 h-6" />,
    items: [
      { name: "Sıcak Çay", price: "150" },
      { name: "Kuş Üzümü", price: "100" },
      { name: "Nane", price: "100" },
      { name: "Yeşil Çay", price: "100" },
      { name: "Karışık Meyveler", price: "100" },
    ]
  }
]

export default function MenuPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-12 pt-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#005140] blur-[120px] opacity-10 dark:opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-[#005140]"></div>
              <span className="text-sm uppercase tracking-[0.2em] text-gray-500">OUR MENU</span>
              <div className="w-12 h-[1px] bg-[#005140]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-light">
              <span className="block">Discover Our</span>
              <span className="block text-[#005140]">Signature Drinks</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              From classic espresso to innovative specialty drinks, explore our carefully curated menu.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <AnimatePresence>
        {isClient && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative border border-black/5 dark:border-white/5 rounded-2xl p-8 backdrop-blur-sm bg-white/50 dark:bg-black/50"
                  >
                    <div className="absolute -left-4 top-0 w-1 h-full bg-[#005140]"></div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="text-[#005140]">
                        {category.icon}
                      </div>
                      <div className="space-y-1">
                        <h2 className="text-sm tracking-[0.2em] text-gray-500 dark:text-gray-400">{category.title}</h2>
                        <div className="w-12 h-[1px] bg-[#005140]"></div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: itemIndex * 0.05 + index * 0.1 }}
                          className="group flex items-center justify-between gap-4 hover:text-[#005140] transition-colors duration-300"
                        >
                          <div className="flex-1">
                            <div className="text-base font-light">{item.name}</div>
                          </div>
                          <div className="w-12 h-[1px] bg-[#005140]/20 group-hover:bg-[#005140] transition-colors duration-300"></div>
                          <div className="font-light text-[#005140]">₺{item.price}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </AnimatePresence>

      <div className="relative py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src="/2.1.jpg"
                alt="Coffee 1"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                priority
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src="/2.2.jpg"
                alt="Coffee 2"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src="/2.3.jpg"
                alt="Coffee 3"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src="/2.4.jpg"
                alt="Coffee 4"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 