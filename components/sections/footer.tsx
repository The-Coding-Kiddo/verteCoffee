'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Logo, Description and Map */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-light text-[#005140]">Verte Coffee</h3>
              <p className="text-gray-400 text-sm">
                Crafting moments of joy through exceptional coffee experiences.
              </p>
            </div>
            
            {/* Google Maps iframe */}
            <div className="w-full h-[180px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1530.2183561661052!2d32.8577889!3d39.9171337!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f15939d5c51%3A0x16a0d273c69c7b7f!2sVerte%20Coffee%20House!5e0!3m2!1sen!2str!4v1711316827548!5m2!1sen!2str"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-base font-light mb-2">Connect With Us</h4>
            
            {/* Social Links */}
            <div className="space-y-2">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-400 hover:text-[#005140] transition-colors"
              >
                <FaWhatsapp className="text-lg" />
                <Link href="https://wa.me/+905355649646" target="_blank" rel="noopener noreferrer" className="text-sm">
                  +90 5355649646
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-400 hover:text-[#005140] transition-colors"
              >
                <FaInstagram className="text-lg" />
                <Link href="https://www.instagram.com/vertecoffeehouse/" target="_blank" rel="noopener noreferrer" className="text-sm">
                  @vertecoffee
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Address */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-base font-light mb-2">Visit Us</h4>
            <address className="text-gray-400 not-italic text-sm">
              Verte Coffee House<br />
              Kizilay, Sumer-2 Cd 24-A, 06420 <br />
              Cankaya, Ankara<br />
              Turkey
            </address>

            <div className="mt-2">
              <h5 className="text-sm font-light mb-1">Opening Hours</h5>
              <p className="text-gray-400 text-sm">
                Monday - Sunday: 7:30 AM - 11:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Verte Coffee House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 