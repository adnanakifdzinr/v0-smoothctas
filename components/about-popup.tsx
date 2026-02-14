"use client"

import { useState } from "react"
import { X, Instagram, Facebook, Youtube } from "lucide-react"

interface AboutPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function AboutPopup({ isOpen, onClose }: AboutPopupProps) {
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, 400)
  }

  if (!isOpen && !isClosing) return null

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 ${isClosing ? "opacity-0" : "opacity-100"
        }`}
      onClick={handleClose}
    >
      <div
        className={`bg-[#1A1A1A] w-full max-w-3xl rounded-2xl overflow-hidden transition-all duration-500 ease-out transform ${isClosing
          ? "scale-90 opacity-0"
          : "scale-100 opacity-100 animate-bounce"
          }`}
        style={{
          animation: !isClosing ? "bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)" : "none",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes bounce {
            0% {
              transform: scale(0.8);
              opacity: 0;
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>

        {/* Close Button - Top Right */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={handleClose}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1A1A1A] border border-white text-white "
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Area */}
        <div className="pt-12 px-6 pb-8">
          {/* Bottom Left Image - Small and Rounded */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://simontype.com/wp-content/uploads/2026/02/file_00000000710471f89d96dee985fc497f.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name and Position */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-white">Adnan Akif</h3>
                <p className="text-sm text-white">Creative Director</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-white leading-relaxed">
              I’m Adnan Akif, a brand identity designer and founder of Lozinar. I help founders and growing businesses build distinctive, strategy-led brands that communicate clearly and stand apart in crowded markets.
            </p>

            <p className="text-sm text-white leading-relaxed">
              My work focuses on brand identity systems, visual language, and structured design thinking — not just how a brand looks, but how it behaves and scales. Every project is built with intention, consistency, and long-term usability in mind.
            </p>

            <p className="text-sm text-white leading-relaxed">
              I believe strong brands are not decoration — they are decisions made visible.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.instagram.com/adnanahmedakif/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/adnanahakif"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.youtube.com/@adnanahmedakif"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
