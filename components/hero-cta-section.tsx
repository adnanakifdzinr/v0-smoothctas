'use client'

import { AnimatedSection } from './animated-section'

export function HeroCTASection() {
  return (
    <AnimatedSection variant="fadeIn" delay={0.4}>
      <div className="w-full bg-background py-5 sm:py-20 md:py-5 relative z-10">
      <style>{`
        .cta-buttoon {
          position: relative;
          overflow: hidden;
          background: transparent;
          color: black;
          padding: 12px 3px;
          z-index: 1;
        }

        .cta-buttoon::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 0;
          background: black;
          transition: width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: -1;
        }

        .cta-buttoon::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          opacity: 0;
          z-index: -1;
        }

        .cta-buttoon:hover::before {
          width: 100%;
        }

        @keyframes shimmerWave {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        .cta-buttoon:hover::after {
          animation: shimmerWave 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .cta-buttoon:hover {
          color: white;
        }

        .cta-text-wrapper {
          position: relative;
          z-index: 2;
          display: inline-flex;
          gap: 0.5rem;
          align-items: center;
        }

        .cta-arrow {
          display: inline-block;
          width: 1.2em;
          height: 1.2em;
          opacity: 0;
          transform: translateX(-8px);
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .cta-buttoon:hover .cta-arrow {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <div className="max-w-full mx-auto px-3 md:px-5 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {/* Left Section - Call Now CTA */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-4">
            <a href="tel:+1234567890" className="cta-buttoon relative inline-block text-[14px] sm:text-[16px] md:text-[18px] font-medium py-3 w-fit">
              <span className="cta-text-wrapper">
                Call now
                <svg className="cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
            
            <a href="mailto:lozinrcontact@gmail.com" className="cta-buttoon relative inline-block text-[14px] sm:text-[16px] md:text-[18px] font-medium py-3 w-fit">
              <span className="cta-text-wrapper">
                lozinrcontact@gmail.com
                <svg className="cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Middle Spacer - Hidden on mobile */}
          <div className="hidden md:block"></div>

          {/* Right Section - Text + CTA */}
          <div className="flex flex-col justify-between gap-4 sm:gap-6 md:gap-4">
            
          </div>
        </div>
      </div>
      </div>
    </AnimatedSection>
  )
}
