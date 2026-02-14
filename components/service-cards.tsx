"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ServiceCardItem } from "./section-animations"

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description: `
• Brand Discovery Workshop
• Market & Competitor Analysis
• Target Audience Definition
• Brand Positioning Statement
• Brand Purpose / Mission / Vision
• Brand Values & Personality
• Brand Archetype Selection
• Unique Value Proposition (UVP)
• Brand Messaging Framework
• Tone of Voice Guidelines
• Naming Direction (Optional)
• Tagline Direction (Optional)
`,
    icon: (
      <svg className="w-20 h-20" fill="white" viewBox="0 0 16 16">
        <path d="M8 9C8.55229 9 9 8.55229 9 8C9 7.44772 8.55229 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55229 7.44772 9 8 9Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM6 6L4 11L5 12L10 10L12 5L11 4L6 6Z" fill="white" />
      </svg>
    ),
  },

  {
    number: "02",
    title: "Brand Identity System",
    description: `
• Logo System (Primary, Secondary, Mark)
• Logo Variations & Usage Rules
• Color System (Primary / Secondary / Accent)
• Typography System
• Iconography Style
• Pattern & Graphic Elements
• Grid & Layout System
• Brand Mark Construction
• Clearspace & Minimum Size Rules
• Do & Don't Guidelines
• Stationery Design
• Brand Guidelines PDF
`,
    icon: (
      <svg className="w-20 h-20" fill="white" viewBox="0 0 24 24">
        <path d="M9.02975 3.3437C10.9834 2.88543 13.0166 2.88543 14.9703 3.3437C17.6309 3.96779 19.7415 5.96241 20.5284 8.55374H3.47164C4.2585 5.96241 6.36915 3.96779 9.02975 3.3437Z" fill="white" />
        <path d="M3.20453 9.70249C2.89142 11.4471 2.93781 13.2399 3.3437 14.9703C3.9678 17.6309 5.96243 19.7415 8.55377 20.5284V9.70249H3.20453Z" fill="white" />
        <path d="M9.70252 20.7955C11.4471 21.1086 13.2399 21.0622 14.9703 20.6563C17.7916 19.9945 19.9945 17.7916 20.6563 14.9703C21.0622 13.2399 21.1086 11.4471 20.7955 9.70249H9.70252V20.7955Z" fill="white" />
      </svg>
    ),
  },

  {
    number: "03",
    title: "Visual Language & Direction",
    description: `
• Visual Moodboard
• Art Direction
• Photography Style Guide
• Illustration Style Guide
• Composition & Layout Rules
• Imagery Treatment Style
• Graphic Motif System
• Campaign Look & Feel
• Social Media Visual Direction
• Packaging Visual Direction
• Motion Direction (Optional)
`,
    icon: (
      <svg className="w-20 h-20" fill="white" viewBox="0 0 24 24">
        <path d="M17.8994 22C20.1086 22 21.8994 20.2091 21.8994 18C21.8994 15.7909 20.1086 14 17.8994 14H17.6797L11.878 19.798C11.636 20.0399 11.5 20.3391 11.5 20.6813C11.5 21.3936 12.0774 22 12.7897 22H17.8994Z" fill="white" />
        <path d="M13.2839 4.95882L12.2291 6.01357C11.7633 6.48107 11.5012 7.11381 11.5 7.7738L11.5 16.0119C11.5 17.0666 11.5 17.5939 11.8135 17.7199C12.1271 17.8459 12.492 17.4653 13.2219 16.704L19.0599 10.6144C20.5819 9.02691 20.5554 6.51391 19.0003 4.95883C17.4218 3.38026 14.8624 3.38026 13.2839 4.95882Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M10 6V18C10 20.2091 8.20914 22 6 22C3.79086 22 2 20.2091 2 18V6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6ZM6 19C6.55228 19 7 18.5523 7 18C7 17.4477 6.55228 17 6 17C5.44772 17 5 17.4477 5 18C5 18.5523 5.44772 19 6 19Z" fill="white" />
      </svg>
    ),
  },

  {
    number: "04",
    title: "Digital Brand Experience",
    description: `
• Website Visual Direction
• Landing Page UI Direction
• UI Brand Kit
• Digital Color & Type Rules
• Social Media Brand Kit
• Post & Story Templates
• Digital Ad Visual System
• Content Visual Framework
• UX Tone Alignment
• Interaction Style Guide
`,
    icon: (
      <svg className="w-20 h-20" fill="white" viewBox="-2 -4 24 24">
        <path d="M1 14h18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2zM2 0h16a2 2 0 0 1 2 2v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a2 2 0 0 1 2-2z" />
      </svg>
    ),
  }
]

export function ServiceCards() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observerOptions = {
      threshold: [0.1, 0.5],
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
        if (index !== -1) {
          if (entry.isIntersecting) {
            // Card enters view - add to visible set
            setVisibleCards((prev) => new Set([...prev, index]))
          } else {
            // Card leaves view - remove from visible set to re-trigger animation
            setVisibleCards((prev) => {
              const newSet = new Set(prev)
              newSet.delete(index)
              return newSet
            })
          }
        }
      })
    }, observerOptions)

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      @keyframes slideUpFade {
        0% {
          opacity: 0;
          transform: translateY(50px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .service-card {
        opacity: 0;
        transform: translateY(50px);
      }

      .service-card.card-visible {
        animation: slideUpFade 0.7s cubic-bezier(0.23, 0.95, 0.35, 0.85) forwards;
      }

      .service-card.card-visible:nth-child(1) {
        animation-delay: 0s;
      }

      .service-card.card-visible:nth-child(2) {
        animation-delay: 0.15s;
      }

      .service-card.card-visible:nth-child(3) {
        animation-delay: 0.3s;
      }

      .service-card.card-visible:nth-child(4) {
        animation-delay: 0.45s;
      }

      .service-card-inner {
        position: relative;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const toggleExpanded = (index: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <div ref={containerRef} className="relative mt-12 md:mt-16 pb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6">
        {services.map((service, index) => {
          const items = service.description
            .trim()
            .split("\n")
            .filter((item) => item.trim())
          const isExpanded = expandedCards.has(index)
          const itemsToShow = isExpanded ? items : items.slice(0, 3)
          const hasMore = items.length > 3

          return (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className={`service-card ${visibleCards.has(index) ? "card-visible" : ""}`}
            >
              <motion.div
                className="service-card-inner h-full bg-white/1 rounded-3xl p-8 md:p-9 flex flex-col transition-all duration-300"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                {/* Icon Badge */}
                <div className="mb-8 inline-flex w-fit">
                  <div className="icon-badge w-25 h-25 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-lg lg:text-[30px] font-regular text-white leading-[1.2] mb-4 tracking-tighter transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description List */}
                <ul className="text-sm md:text-base lg:text-[16px] text-white leading-relaxed flex-grow space-y-2 list-none">
                  {itemsToShow.map((item, idx) => (
                    <li key={idx} className="text-white">
                      {item.replace(/^•\s*/, "").trim()}
                    </li>
                  ))}
                </ul>

                {/* View More/Less Button */}
                {hasMore && (
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="mt-6 px-4 py-2 rounded-full text-black text-sm md:text-base font-medium bg-white hover:bg-white/90 transition-all duration-300"
                  >
                    {isExpanded ? "Show less" : `+${items.length - 3} more`}
                  </button>
                )}
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
