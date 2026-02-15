'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export function WebOpenAnimation() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  const handleEnter = () => {
    setIsAnimating(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Responsive sizing
  const buttonHeight = isMobile ? 'h-12' : 'lg:h-14 h-12';
  const initialWidth = isMobile ? '48px' : '56px';
  const expandedWidth = isMobile ? (isHovering ? '200px' : '170px') : (isHovering ? '220px' : '190px');
  const textSize = isMobile ? 'text-sm' : 'lg:text-base text-sm';
  const iconSize = isMobile ? 4 : 5;
  const circleSize = isMobile ? 'w-9 h-9' : 'w-10 h-10';

  return (
    <AnimatePresence mode="wait">
      {!isAnimating && (
        <>
          {/* Black overlay background - full viewport cover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 bg-black"
            style={{ zIndex: 9998 }}
          />

          {/* Top slice that moves up on exit */}
          {!isMobile && (
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: '-100vh' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="fixed top-0 left-0 right-0 h-1/2 bg-black/70 backdrop-blur-sm border-b border-white"
              style={{ zIndex: 9997 }}
            />
          )}

          {/* Bottom slice that moves down on exit */}
          {!isMobile && (
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: '100vh' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="fixed bottom-0 left-0 right-0 h-1/2 bg-black/70 backdrop-blur-sm border-t border-white"
              style={{ zIndex: 9997 }}
            />
          )}

          {/* CTA Button Container */}
          <div className="fixed inset-0 flex items-center justify-center px-4" style={{ zIndex: 9999 }}>
            <motion.button
              initial={{ width: initialWidth }}
              animate={{ width: isVisible ? expandedWidth : initialWidth }}
              exit={{ x: isMobile ? '150vw' : '150vw', opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              onHoverStart={() => !isMobile && setIsHovering(true)}
              onHoverEnd={() => !isMobile && setIsHovering(false)}
              onClick={handleEnter}
              className={`relative ${buttonHeight} bg-white border-2 border-black rounded-full flex items-center justify-between px-1.5 gap-2 overflow-hidden cursor-pointer focus:outline-none transition-all`}
            >
              {/* Left text - fades in after button expands */}
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -10 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                className={`text-black font-medium whitespace-nowrap ${textSize}`}
              >
                {isMobile ? 'Enter' : 'Enter on website'}
              </motion.span>

              {/* Arrow circle - static background */}
              <div className={`${circleSize} rounded-full bg-black flex items-center justify-center overflow-hidden relative flex-shrink-0`}>
                {/* Main arrow - exits right on hover */}
                <motion.div
                  animate={{
                    x: isMobile ? 0 : (isHovering ? 40 : 0),
                    opacity: isMobile ? 1 : (isHovering ? 0 : 1)
                  }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute"
                >
                  <ArrowRight className={`text-white`} width={iconSize * 4} height={iconSize * 4} strokeWidth={2.5} />
                </motion.div>

                {/* Secondary arrow - enters from left on hover (desktop only) */}
                {!isMobile && (
                  <motion.div
                    animate={{
                      x: isHovering ? 0 : -40,
                      opacity: isHovering ? 1 : 0
                    }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute"
                  >
                    <ArrowRight className={`text-white`} width={iconSize * 4} height={iconSize * 4} strokeWidth={2.5} />
                  </motion.div>
                )}
              </div>
            </motion.button>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
