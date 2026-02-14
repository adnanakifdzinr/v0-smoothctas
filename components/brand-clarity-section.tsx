'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PricingPopup } from '@/components/pricing-popup'
import { ContactPopup } from '@/components/contact-popup'
import { HeadingAnimation, ContentBlockAnimation } from '@/components/section-animations'
import { motion } from 'framer-motion'

export function BrandClaritySection() {
  const [isPricingOpen, setIsPricingOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const mobileImageRef = useRef<HTMLDivElement>(null)
  const [isMobileImageInView, setIsMobileImageInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMobileImageInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    if (mobileImageRef.current) observer.observe(mobileImageRef.current)
    return () => mobileImageRef.current && observer.unobserve(mobileImageRef.current)
  }, [])

  return (
    <section className="w-full bg-[#1A1A1A] py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        {/* Top Text Section - Gradient reveal effect */}
        <HeadingAnimation className="mb-12 md:mb-16 lg:mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-[45px] text-white font-medium leading-tight tracking-tighter">
            When your brand is clear,
            <br />
            everything else moves faster.
          </h2>
        </HeadingAnimation>

        {/* Mobile Image Placeholder - Bloom effect */}
        <motion.div
          ref={mobileImageRef}
          className="md:hidden w-full relative h-80 mb-8 flex flex-col items-center"
          initial={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
          animate={isMobileImageInView ? { opacity: 1, filter: 'blur(0px)', scale: 1 } : { opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        {/* Bottom Section with 70/30 Layout */}
        <ContentBlockAnimation>
          <div className="grid grid-cols-1 md:grid-cols-10 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left Side - 70% Text Content */}
            <div className="w-full md:col-span-7 space-y-6">
              <motion.p
                className="text-base md:text-lg lg:text-[22px] text-white leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                Every strong brand begins with clarity. We start by understanding your
                audience, your story, your personality, and your product / service. When these align,
                your brand becomes unmistakable. From there, we build your brand strategy, messaging, and visual identity that express who you are with confidence and consistency. The result is a premium, cohesive brand that resonates deeply and performs across every touchpoint.
              </motion.p>

              <motion.p
                className="text-base md:text-lg lg:text-[22px] text-white leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                Schedule a call to see if we're a good fit to work together.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <button
                  onClick={() => setIsPricingOpen(true)}
                  className="px-8 py-3 rounded-full lg:text-[16px] text-white font-medium border-2 border-white inline-flex items-center justify-center hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                >
                  Our Prices
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="px-8 py-3 rounded-full lg:text-[16px] font-medium text-white border-2 border-white cursor-pointer hover:bg-white/10 transition-colors duration-200"
                >
                  Schedule a Call
                </button>
              </motion.div>
            </div>
          </div>
        </ContentBlockAnimation>
      </div>

      {/* Pricing Popup */}
      <PricingPopup 
        isOpen={isPricingOpen} 
        onClose={() => setIsPricingOpen(false)} 
        onGetStarted={() => setIsContactOpen(true)}
      />

      {/* Contact Popup */}
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  )
}
