"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  rating?: number
  color: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We wanted a brand that felt Italian at heart but modern in spirit — and Lozinr delivered perfectly. The Luvena identity captures our story, our values, and our passion for food beautifully.",
    author: "Sarah Johnson",
    role: "Founder & Creative Director",
    company: "Luvena",
    rating: 5,
    color: "#ff3b00",
  },
  {
    quote:
      "A modern identity rooted in meaning — RIJQ finally feels like the brand we imagined. Their strategic approach is truly world-class.",
    author: "Michael Chen",
    role: "CEO",
    company: "Rijq",
    rating: 5,
    color: "#00a8ff",
  },
  {
    quote:
      "Professional, innovative, and results-driven. They delivered exactly what we needed to stand out in a crowded market.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Stellar",
    rating: 5,
    color: "#00ff87",
  },
  {
    quote:
      "The team at Lozinr transformed our vision into reality. Their attention to detail and creative excellence exceeded all expectations.",
    author: "David Thompson",
    role: "Founder",
    company: "Aurora Design",
    rating: 5,
    color: "#ff6b9d",
  },
  {
    quote:
      "Outstanding work that truly captures what our brand is all about. They understood our values instantly and delivered a stunning result.",
    author: "Jessica Park",
    role: "Creative Lead",
    company: "Nexus Labs",
    rating: 5,
    color: "#ffd700",
  },
  {
    quote:
      "Working with Lozinr was a game-changer for our company. Their branding expertise helped us establish a stronger market presence.",
    author: "Robert Martinez",
    role: "Business Development",
    company: "Horizon Tech",
    rating: 5,
    color: "#00d4ff",
  },
  {
    quote:
      "Exceptional service from start to finish. They collaborated with us every step of the way to ensure the perfect brand identity.",
    author: "Amanda Sullivan",
    role: "Marketing Manager",
    company: "Velocity Brand",
    rating: 5,
    color: "#ff5733",
  },
  {
    quote:
      "The brand identity Lozinr created for us is timeless and incredibly effective. Our clients immediately recognized the quality.",
    author: "James Wright",
    role: "Creative Director",
    company: "Prime Digital",
    rating: 5,
    color: "#33ff57",
  },
  {
    quote:
      "Their design philosophy is refreshing and innovative. We love how they blended our heritage with modern design principles.",
    author: "Lisa Anderson",
    role: "Brand Strategist",
    company: "Heritage & Co",
    rating: 5,
    color: "#f733ff",
  },
  {
    quote:
      "Lozinr's approach to branding is strategic and sophisticated. They didn't just create a logo—they created an entire brand experience.",
    author: "Christopher Lee",
    role: "Founder & CEO",
    company: "Elevate Solutions",
    rating: 5,
    color: "#ff9500",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const minSwipeDistance = 50

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
      })
    }
  }

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      next()
    } else if (isRightSwipe) {
      prev()
    }
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="min-h-screen bg-background py-24 md:py-32 relative overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="container px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        ></div>

        <div className="relative max-w-5xl mx-auto h-[500px] flex items-center justify-center">
          {testimonials.map((t, i) => {
            const isActive = i === activeIndex
            const isPrev = i === (activeIndex - 1 + testimonials.length) % testimonials.length
            const isNext = i === (activeIndex + 1) % testimonials.length

            let style: React.CSSProperties = { opacity: 0, transform: "scale(0.8) translateZ(-100px)", zIndex: 0 }
            if (isActive)
              style = {
                opacity: 1,
                transform: `rotateX(${mousePos.y * -5}deg) rotateY(${mousePos.x * 5}deg) translateZ(50px)`,
                zIndex: 30,
              }
            else if (isPrev)
              style = { opacity: 0.4, transform: "translateX(-50%) scale(0.9) rotateY(20deg)", zIndex: 20 }
            else if (isNext)
              style = { opacity: 0.4, transform: "translateX(50%) scale(0.9) rotateY(-20deg)", zIndex: 20 }

            return (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={style}
              >
                <div className="w-full max-w-2xl bg-background/40 backdrop-blur-md border border-border/50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Quote size={120} fill="currentColor" />
                  </div>

                  <div className="flex items-center gap-1 mb-8">
                    {[...Array(5)].map((_, starI) => (
                      <Star
                        key={starI}
                        className="w-5 h-5 fill-primary text-primary animate-scale-in"
                        style={{ animationDelay: `${starI * 0.1}s` }}
                      />
                    ))}
                  </div>

                  <blockquote className="text-2xl md:text-4xl font-medium leading-[1.1] tracking-tight mb-12">
                    "{t.quote}"
                  </blockquote>

                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <h3 className="font-bold text-xl">{t.author}</h3>
                      <p className="text-muted-foreground">
                        {t.role} @ {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="hidden md:flex items-center justify-center gap-8 mt-12">
          <button
            onClick={prev}
            className="p-4 rounded-full border border-border hover:bg-background transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${i === activeIndex ? "w-12 bg-primary" : "w-4 bg-muted"}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-4 rounded-full border border-border hover:text-background hover:bg-chart-5 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex md:hidden items-center justify-center mt-12">
          <p className="text-sm text-muted-foreground">Swipe left or right to browse</p>
        </div>
      </div>
    </section>
  )
}
