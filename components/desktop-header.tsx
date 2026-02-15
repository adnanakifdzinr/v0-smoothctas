"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { useScrollDirection } from "@/hooks/use-scroll-direction"

export function DesktopHeader() {
  const pathname = usePathname()
  const isHeaderVisible = useScrollDirection()

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
    <header
      className="hidden lg:block fixed top-0 left-0 right-0 z-[9999] bg-background w-full transition-transform duration-300 ease-out"
      style={{
        transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
      }}
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

        .header-cta-button {
          position: relative;
          overflow: hidden;
          z-index: 10;
        }

        .header-cta-button::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background-color: #ff3c00;
          z-index: -1;
          transition: height 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: bottom;
        }

        .header-cta-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background-color: #ff3c00;
          z-index: -1;
          transition: height 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: bottom;
        }

        .header-cta-button-text {
          position: relative;
          z-index: 1;
          transition: color 0.4s ease 0.1s;
        }

        .header-cta-button:hover::before {
          height: 100%;
          z-index: -1;
        }

        .header-cta-button:hover::after {
          height: 100%;
          z-index: -1;
        }

        .header-cta-button:hover .header-cta-button-text {
          color: white;
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

          <button
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="header-cta-button flex-shrink-0 px-5 py-2 bg-black text-white text-[14px] font-medium flex items-center gap-2 cursor-pointer"
          >
            <span className="header-cta-button-text">Lets Talk</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </header>
  )
}
