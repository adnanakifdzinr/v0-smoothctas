'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import React from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: 'fadeIn' | 'slideUp' | 'scaleIn'
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  variant = 'fadeIn',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Once animated, stop observing
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
  }

  const selectedVariant = variants[variant]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={selectedVariant.hidden}
      animate={isInView ? selectedVariant.visible : selectedVariant.hidden}
      transition={{
        duration: 0.6,
        delay: isInView ? delay : 0,
        ease: [0.33, 0.66, 0.66, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
