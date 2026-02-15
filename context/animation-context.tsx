'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface AnimationContextType {
  isAnimationReady: boolean
  delayStart: number
  isWebOpenAnimating: boolean
  setIsWebOpenAnimating: (value: boolean) => void
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined)

export function AnimationProvider({
  children,
  delayStart = 0.8,
}: {
  children: React.ReactNode
  delayStart?: number
}) {
  const [isAnimationReady, setIsAnimationReady] = useState(false)
  const [isWebOpenAnimating, setIsWebOpenAnimating] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('[v0] All section animations ready')
      setIsAnimationReady(true)
    }, delayStart * 1000)

    return () => clearTimeout(timer)
  }, [delayStart])

  return (
    <AnimationContext.Provider value={{ isAnimationReady, delayStart, isWebOpenAnimating, setIsWebOpenAnimating }}>
      {children}
    </AnimationContext.Provider>
  )
}

export function useAnimationReady() {
  const context = useContext(AnimationContext)
  if (!context) {
    throw new Error('useAnimationReady must be used within AnimationProvider')
  }
  return context
}

export function useWebOpenAnimation() {
  const context = useContext(AnimationContext)
  if (!context) {
    throw new Error('useWebOpenAnimation must be used within AnimationProvider')
  }
  return { isWebOpenAnimating: context.isWebOpenAnimating, setIsWebOpenAnimating: context.setIsWebOpenAnimating }
}
