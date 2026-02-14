'use client'

import Image from 'next/image'
import { HeadingAnimation, ProcessAnimation } from './section-animations'
import { motion } from 'framer-motion'

export function WhyChooseUsSection() {
  const processes = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We dive deep into understanding your business, audience, values, and goals. Through research and strategy sessions, we uncover the insights that form the foundation of your brand identity.',
      image: '/images/demo.jpg',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'With a clear understanding of your brand essence, we develop a comprehensive brand strategy, messaging framework, and visual identity system that authentically represents your business.',
      image: '/images/process-strategy.png',
    },
    {
      step: '03',
      title: 'Design',
      description: 'We bring your brand to life across all touchpoints—from logo design to brand guidelines—ensuring consistency and impact everywhere your customers interact with your brand.',
      image: '/images/process-implementation.png',
    },
  ]

  return (
    <section className="w-full bg-[#1a1a1a] py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        {/* Top Heading */}
        <HeadingAnimation className="mb-8 md:mb-2">
          <h2 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-white font-medium leading-tighter tracking-tight">
            Want to work with us?
          </h2>
        </HeadingAnimation>

        {/* Subheading */}
        <HeadingAnimation className="mb-16 md:mb-20" delay={0.1}>
          <p className="text-lg md:text-xl lg:text-[22px] text-gray-300 font-medium">
            Here's our branding & design process
          </p>
        </HeadingAnimation>

        {/* Process Steps */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {processes.map((process, index) => (
            <ProcessAnimation key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Left Side - Step Number, Title, Image */}
              <div className="flex flex-col space-y-6">
                {/* Step and Title */}
                <div>
                  <p className="text-sm md:text-base lg:text-[18px] text-white font-medium mb-2 tracking-tight">
                    Step {process.step}
                  </p>
                  <h3 className="text-3xl md:text-4xl lg:text-[40px] text-white font-medium tracking-tight">
                    {process.title}
                  </h3>
                </div>

                {/* Image Placeholder for Mobile and Desktop */}
                <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
                </div>
              </div>

              {/* Right Side - Description */}
              <div className="flex flex-col justify-start mt-25">
                <p className="text-base md:text-lg lg:text-[18px] text-gray-300 leading-relaxed">
                  {process.description}
                </p>
              </div>
            </div>
            </ProcessAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
