'use client'

import Image from 'next/image'
import Link from 'next/link'
import { HeadingAnimation, ContentBlockAnimation } from './section-animations'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export function BrandStrategySection() {
  const imageRef = useRef<HTMLDivElement>(null)
  const [isImageInView, setIsImageInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (imageRef.current) observer.observe(imageRef.current)
    return () => imageRef.current && observer.unobserve(imageRef.current)
  }, [])

  return (
    <section className="w-full bg-[#1A1A1A] transition-colors duration-300 py-16 md:py-24 lg:py-32 px-3 md:px-5 lg:px-8">
      <div className="max-w-full mx-auto">
        {/* Top Text Section */}
        <HeadingAnimation className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-[45px] font-medium text-white tracking-tight leading-tight">
            We're a Brand Strategy & Identity Design studio based in Toronto. We help founders build premium, iconic brands that stand out and command attention.
          </h2>
        </HeadingAnimation>

        {/* Bottom Section: Image Placeholder and Text */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-8 lg:gap-12">
          {/* Left Column - Image Placeholder with scale animation */}
          <motion.div
            ref={imageRef}
            className="md:col-span-3 flex items-start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isImageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="w-full relative aspect-[3/4] md:aspect-auto md:h-96">
            </div>
          </motion.div>

          {/* Right Column - Text with staggered paragraph animation */}
          <ContentBlockAnimation className="md:col-span-7 flex flex-col justify-start gap-6 md:gap-8">
            <motion.p
              className="text-lg md:text-xl lg:text-[28px] font-regular text-white leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Our work brings structure, clarity, and intention to your brand – so you can attract high paying
              customers, raise your value, and grow with confidence.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl lg:text-[28px] font-regular text-white leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              We work with founders who think big and want their brand to reflect that ambition.
            </motion.p>
          </ContentBlockAnimation>
        </div>
      </div>
    </section>
  )
}
