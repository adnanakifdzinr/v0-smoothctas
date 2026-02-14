"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ArrowLeft, X } from "lucide-react"

interface ProjectOverlayProps {
  isOpen: boolean
  onClose: () => void
  project: {
    id: string
    title: string
    category: string
    industry: string
    image: string
    slug: string
    tags?: string[]
    year?: string
    services?: string | string[]
    bgColor?: string
    textColor?: string
    client?: string
    role?: string
    deliverables?: string
    description?: string
    contextText?: string
    headline?: string
    images?: string[]
  } | null
}

export function ProjectOverlay({ isOpen, onClose, project }: ProjectOverlayProps) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setVisibleImages((prev) => new Set([...prev, index]))
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [project?.images?.length])

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set([...prev, index]))
  }

  if (!isOpen || !project) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1A1A1A] overflow-y-auto animate-in fade-in duration-100 flex flex-col"
      onClick={(e) => e.stopPropagation()}
      aria-labelledby="project-title"
    >
      {/* Back Button */}
      <div className="fixed top-6 lg:left-9 left-4 z-50">
        <button
          onClick={onClose}
          className="flex items-center gap-1 px-4 py-1 bg-[#1A1A1A] border border-white/30 text-white text-[16px] rounded-full"
          aria-label="Go back"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>
      </div>

      {/* Headline Section */}
      <div className="px-3 md:px-5 lg:px-8 pt-50 md:pt-40 lg:pt-60 flex items-center">
        {project.headline && (
          <h1 className="text-4xl md:text-6xl lg:text-[79px] font-medium text-white leading-tighter tracking-tight ">
            {project.headline}
          </h1>
        )}
      </div>

      {/* Description Section */}
      <div className="px-3 md:px-5 lg:px-8 py-8 md:pt-15 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 lg:gap-24">
          {/* Left - Description */}
          <div>
            {project.contextText && (
              <p className="text-[16px] md:text-[16px] lg:text-[18px] font-medium  text-white leading-relaxed">
                {project.contextText}
              </p>
            )}
            {project.description && (
              <p className="text-[16px] md:text-[16px] lg:text-[18px] font-medium text-white leading-relaxed mt-4">
                {project.description}
              </p>
            )}
          </div>

          {/* Right - Project Details */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Category */}
              {project.category && (
                <div>
                  <p className="text-[16px] md:text-[16px] lg:text-[18px] text-white uppercase font-medium tracking-tight mb-2">
                    Category
                  </p>
                  <p className="text-[16px] md:text-[16px] lg:text-[18px] text-white font-medium">
                    {project.category}
                  </p>
                </div>
              )}

              {/* Scope */}
              {project.scope && (
                <div>
                  <p className="text-[16px] md:text-[16px] lg:text-[18px] text-white uppercase font-medium tracking-tight mb-2">
                    Scope
                  </p>
                  <p className="text-[16px] md:text-[16px] lg:text-[18px] text-white font-medium">
                    {project.scope}
                  </p>
                </div>
              )}

              {/* Project Type */}
              {project.projectType && (
                <div>
                  <p className="text-[16px] md:text-[16px] lg:text-[18px] text-white uppercase font-medium tracking-tight mb-2">
                    Project Type
                  </p>
                  <p className="text-[16px] md:text-[16px] lg:text-[18px] text-white font-medium">
                    {project.projectType}
                  </p>
                </div>
              )}

              {/* Deliverables */}
              {project.deliverables && project.deliverables.length > 0 && (
                <div>
                  <p className="text-[16px] md:text-[16px] lg:text-[18px] text-white uppercase font-medium tracking-tight mb-3">
                    Deliverables
                  </p>
                  <ul className="space-y-2">
                    {project.deliverables.map((deliverable, index) => (
                      <li key={index} className="text-[16px] md:text-[16px] lg:text-[18px] text-white font-medium flex items-start leading-tight">

                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Images Section - 1 Column */}
      <div className="px-3 md:px-5 lg:px-8 py-8 md:py-12 space-y-6 md:space-y-8">
        {project.images && project.images.length > 0 ? (
          project.images.map((imageUrl, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) imageRefs.current[index] = el
              }}
              className={`relative w-full aspect-video overflow-hidden bg-white transition-all duration-700 ease-out ${visibleImages.has(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
                }`}
              style={{
                transitionDelay: `${visibleImages.has(index) ? index * 100 : 0}ms`,
              }}
            >
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                className="object-cover"
                onLoadingComplete={() => handleImageLoad(index)}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 85vw"
              />
            </div>
          ))
        ) : (
          <div className="text-white text-center py-8">No images available</div>
        )}
      </div>

      {/* Bottom Padding */}
      <div className="h-12 md:h-16" />
    </div>
  )
}
