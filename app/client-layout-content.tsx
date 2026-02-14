"use client"

import type React from "react"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { usePathname } from "next/navigation"

export function ClientLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isGalleryRoute = pathname.startsWith("/gallery")

  return (
    <div className="relative">
      {/* Main content - scrollable overlay */}
      <div className="relative z-20">
        {!isGalleryRoute && <SiteHeader />}
        {children}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
