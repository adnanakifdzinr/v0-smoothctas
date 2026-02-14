"use client"

import { useRef } from "react"
import Link from "next/link"
import { ServiceCards } from "./service-cards"
import { HeadingAnimation } from "./section-animations"

export function ServicesSection() {
  const servicesRef = useRef<HTMLHeadingElement>(null)

  return (
    <section className="w-full bg-[#1A1A1A] py-20 md:py-20 lg:py-20 px-3 md:px-5 lg:px-8">
      <div className="max-w-full mx-auto">
        <HeadingAnimation className="space-y-0 md:space-y-2 overflow-hidden -mt-2 md:mt-0 mb-16" ref={servicesRef}>
          <h2 className="text-5xl lg:text-[64px] font-medium text-white mb-0 leading-none tracking-tighter">
            How we can help you
          </h2>
        </HeadingAnimation>

        <ServiceCards />
      </div>
    </section>
  )
}
