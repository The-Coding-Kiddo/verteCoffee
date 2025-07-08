'use client'

import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Instagram, Facebook, Music2, Youtube, Mail, Phone } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"
import { useLanguage } from "@/lib/i18n/language-context"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const { translations } = useLanguage()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "vertecoffeehouse",
      href: "https://instagram.com/vertecoffeehouse",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Verte Coffee House",
      href: "https://facebook.com/vertecoffeehouse",
    },
  ]

  const ceoSocialLinks = [
    {
      icon: <Instagram className="w-4 h-4" />,
      label: "@aliarsoy06",
      href: "https://instagram.com/aliarsoy06",
    },
    {
      icon: <Facebook className="w-4 h-4" />,
      label: "Ali Arsoy",
      href: "https://facebook.com/aliarsoy",
    },
    {
      icon: <Youtube className="w-4 h-4" />,
      label: "YouTube Channel",
      href: "https://www.youtube.com/channel/UCgUaoyr4p7zquG381c_jbNA",
    },
    {
      icon: <Music2 className="w-4 h-4" />,
      label: "Listen on Spotify",
      href: "https://open.spotify.com/artist/0m3CCHhNPb0mi6Tj5uAkX5",
    },
  ]

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
              <span className="text-sm uppercase tracking-[0.2em] text-gray-500">{translations.about.sectionTitle}</span>
              <div className="w-12 h-[1px] bg-[#005140]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-light">
              <span className="block">{translations.about.title.line1}</span>
              <span className="block text-[#005140]">{translations.about.title.line2}</span>
            </h1>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isClient && (
          <>
            {/* Leadership Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="py-12"
            >
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <h2 className="text-3xl font-light">{translations.about.founder.name}</h2>
                      <p className="text-[#005140]">{translations.about.founder.title}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {translations.about.founder.description}
                    </p>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                        Featured Artist • Turkish Folk Music
                      </p>
                      <div className="flex gap-4">
                        {ceoSocialLinks.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#005140] dark:hover:text-[#005140] transition-colors duration-300"
                          >
                            {link.icon}
                            <span>{link.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative h-[400px] rounded-2xl overflow-hidden"
                  >
                    <Image
                      src="/Aliarsoy.jpg"
                      alt="Ali Arsoy - CEO"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Locations Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="py-12 bg-white/50 dark:bg-black/50"
            >
              <div className="container mx-auto px-4">
                <div className="text-center space-y-8">
                  <h2 className="text-3xl font-light">{translations.about.locations.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-xl border border-black/5 dark:border-white/5">
                      <div className="flex items-center justify-center gap-2 text-[#005140] mb-4">
                        <MapPin className="w-5 h-5" />
                        <span>06</span>
                      </div>
                      <h3 className="text-xl font-light mb-2">{translations.about.locations.ankara.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line">
                        {translations.about.locations.ankara.address}
                      </p>
                    </div>
                    <div className="p-6 rounded-xl border border-black/5 dark:border-white/5">
                      <div className="flex items-center justify-center gap-2 text-[#005140] mb-4">
                        <MapPin className="w-5 h-5" />
                        <span>07</span>
                      </div>
                      <h3 className="text-xl font-light mb-2">{translations.about.locations.antalya.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {translations.about.locations.antalya.address}
                      </p>
                    </div>
                    <div className="p-6 rounded-xl border border-black/5 dark:border-white/5">
                      <div className="flex items-center justify-center gap-2 text-[#005140] mb-4">
                        <MapPin className="w-5 h-5" />
                        <span>80</span>
                      </div>
                      <h3 className="text-xl font-light mb-2">{translations.about.locations.osmaniye.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {translations.about.locations.osmaniye.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Music Video Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.45 }}
              className="py-12 bg-white/30 dark:bg-black/30"
            >
              <div className="container mx-auto px-4">
                <div className="text-center space-y-8">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-[1px] bg-[#005140]"></div>
                    <span className="text-sm uppercase tracking-[0.2em] text-gray-500">Featured Performance</span>
                    <div className="w-12 h-[1px] bg-[#005140]"></div>
                  </div>
                  <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                    <div className="relative pb-[56.25%] h-0">
                      <iframe 
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/s3Lt005OwPs?list=RDs3Lt005OwPs" 
                        title="Ali ARSOY - Merak Etme Sen" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* User Content Promotion */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.47 }}
              className="py-12 bg-[#005140]/5 dark:bg-[#005140]/10"
            >
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-[1px] bg-[#005140]"></div>
                    <span className="text-sm uppercase tracking-[0.2em] text-gray-500">
                      {translations.about.promotion.sectionTitle}
                    </span>
                    <div className="w-12 h-[1px] bg-[#005140]"></div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-light text-[#005140]">
                      {translations.about.promotion.title}
                    </h3>
                    <div className="prose prose-lg dark:prose-invert mx-auto space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        {translations.about.promotion.description}
                      </p>
                      
                      <div className="bg-white/50 dark:bg-black/20 rounded-xl p-6 space-y-4">
                        <h4 className="text-lg font-medium text-[#005140]">
                          {translations.about.promotion.howTo.title}
                        </h4>
                        <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 space-y-2 text-left">
                          <li>{translations.about.promotion.howTo.steps.record}</li>
                          <li>
                            {translations.about.promotion.howTo.steps.introduce}
                            <ul className="list-disc list-inside ml-6 mt-1">
                              <li>{translations.about.promotion.howTo.steps.details.name}</li>
                              <li>{translations.about.promotion.howTo.steps.details.location}</li>
                            </ul>
                          </li>
                          <li>
                            {translations.about.promotion.howTo.steps.phrase}{' '}
                            <span className="italic font-medium">
                              {translations.about.promotion.howTo.steps.magicWords}
                            </span>
                          </li>
                        </ol>
                      </div>

                      <div className="flex items-center justify-center gap-8 mt-8">
                        <Link
                          href="https://instagram.com/vertecoffeehouse"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 hover:text-[#005140] transition-colors duration-300"
                        >
                          <Instagram className="w-5 h-5 text-[#005140]" />
                          <span>{translations.about.promotion.platforms.instagram}</span>
                        </Link>
                        <Link
                          href={`mailto:${translations.about.promotion.contact.email}`}
                          className="flex items-center gap-2 text-gray-600 hover:text-[#005140] transition-colors duration-300"
                        >
                          <Mail className="w-5 h-5 text-[#005140]" />
                          <span>{translations.about.promotion.platforms.gmail}</span>
                        </Link>
                        <Link
                          href={`https://wa.me/${translations.about.promotion.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 hover:text-[#005140] transition-colors duration-300"
                        >
                          <Phone className="w-5 h-5 text-[#005140]" />
                          <span>{translations.about.promotion.platforms.whatsapp}</span>
                        </Link>
                      </div>

                      <div className="flex flex-col items-center gap-2 mt-4">
                        <p className="text-sm text-gray-500">
                          {translations.about.promotion.contact.whatsapp}
                        </p>
                        <p className="text-sm text-gray-500">
                          {translations.about.promotion.contact.email}
                        </p>
                      </div>

                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
                        {translations.about.promotion.footer.send}
                        <br />
                        {translations.about.promotion.footer.closing}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Social Links */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="py-12"
            >
              <div className="container mx-auto px-4">
                <div className="text-center space-y-8">
                  <h2 className="text-3xl font-light">{translations.about.connect.title}</h2>
                  <div className="flex justify-center gap-6">
                    {socialLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#005140] dark:hover:text-[#005140] transition-colors duration-300"
                      >
                        {link.icon}
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
} 