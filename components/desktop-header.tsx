"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { useScrollDirection } from "@/hooks/use-scroll-direction"
import { motion } from "framer-motion"
import { useWebOpenAnimation } from "@/context/animation-context"
import { useState } from "react"

export function DesktopHeader() {
  const pathname = usePathname()
  const isHeaderVisible = useScrollDirection()
  const { isWebOpenAnimating } = useWebOpenAnimation()
  const [isHovering, setIsHovering] = useState(false)

  const navLinks = [
    { href: "/", label: "Work", section: "work" },
    { href: "/", label: "Services", section: "services" },
  ]

  const socialLinks = [
    { href: "https://instagram.com/lozinr.design", label: "Instagram" },
    { href: "https://facebook.com/lozinr.design", label: "Facebook" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <motion.header
      className="hidden lg:block fixed top-0 left-0 right-0 z-[9999] bg-background w-full"
      animate={{
        transform: isHeaderVisible ? 'translateY(0px)' : 'translateY(-100%)',
        y: isWebOpenAnimating ? 80 : 0,
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <style>{`
        .header-nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .header-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .header-nav-link:hover::after {
          transform: scaleX(1);
        }

        .header-social-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .header-social-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .header-social-link:hover::after {
          transform: scaleX(1);
        }
      `}</style>
      <div className="w-full md:px-0 lg:px-8 py-2.4">
        <div className="flex items-center justify-end gap-14">
          <nav className="flex gap-40 items-center">
            <div className="flex gap-4 leading-none">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.section ? (
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.section)
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                      className="header-nav-link text-sm font-medium text-black cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`header-nav-link text-sm font-medium ${isActive(link.href) ? "text-black" : "text-black"}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4 leading-none">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header-social-link text-[14px] font-medium text-black"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <motion.button
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            initial={{ width: '56px' }}
            animate={{ width: isHovering ? '220px' : '190px' }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            className="flex-shrink-0 h-14 bg-white border-2 border-black rounded-full flex items-center justify-between px-1.5 gap-2 overflow-hidden cursor-pointer focus:outline-none relative"
          >
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-black font-medium text-[16px] whitespace-nowrap"
            >
              Lets Talk
            </motion.span>

            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden relative flex-shrink-0">
              <motion.div
                animate={{
                  x: isHovering ? 40 : 0,
                  opacity: isHovering ? 0 : 1
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute"
              >
                <ArrowRight className="w-5 h-5 text-white" strokeWidth={2.5} />
              </motion.div>

              <motion.div
                animate={{
                  x: isHovering ? 0 : -40,
                  opacity: isHovering ? 1 : 0
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute"
              >
                <ArrowRight className="w-5 h-5 text-white" strokeWidth={2.5} />
              </motion.div>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}
