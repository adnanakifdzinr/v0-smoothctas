"use client"

import Link from "next/link"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ProjectOverlay } from "./project-overlay"
import { projectsData } from "@/lib/projects-data"

interface Project {
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
  images?: string[]
}

const projects: Project[] = projectsData.map(project => ({
  ...project,
  bgColor: "bg-[#e72224]",
  textColor: "text-white",
}))

export function ProjectThumbnails() {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set())
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const projectId = entry.target.getAttribute("data-project-id")
          if (projectId) {
            setVisibleCards((prev) => new Set([...prev, projectId]))
          }
        }
      })
    }, observerOptions)

    Object.values(cardRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#1A1A1A] text-secondary">
      <style>{`
        @keyframes slideUpBounce {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          50% {
            opacity: 1;
          }
          65% {
            transform: translateY(-3px);
          }
          75% {
            transform: translateY(1px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .arrow-icon {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border-radius: 9999px;
          background: white;
          color: black;
          margin-top: -8px;
          transform: rotate(-30deg);
        }

        @media (min-width: 768px) {
          .arrow-icon {
            width: 3.5rem;
            height: 3.5rem;
          }
        }

        .arrow-svg {
          width: 1.5rem;
          height: 1.5rem;
          transition: transform 0.5s cubic-bezier(0.33, 0, 0.2, 1);
        }

        @media (min-width: 768px) {
          .arrow-svg {
            width: 2.5rem;
            height: 2.5rem;
          }
        }

        .project-card {
          opacity: 1;
          transform: translateY(0px);
          will-change: transform, opacity;
        }

        .project-card:hover .arrow-svg {
          transform: rotate(30deg);
        }
      `}</style>

      {/* Section Title */}
      <div className="px-3 md:px-5 lg:px-8 py-8 md:py-12 lg:py-16">
        <h2 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-medium leading-tight tracking-tight text-white">
          Selected Work
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="px-3 md:px-5 lg:px-8 pb-8 md:pb-12 lg:pb-16">
        {/* Mobile: 1 col, Tablet: 2 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:hidden">
          {projects.map((project, index) => {
            const isVisible = visibleCards.has(project.id)
            return (
              <div
                key={project.id}
                className="bg-transparent flex flex-col"
                ref={(el) => { if (el) cardRefs.current[project.id] = el }}
                data-project-id={project.id}
              >
                <button
                  onClick={() => {
                    setSelectedProject(project)
                    setIsOverlayOpen(true)
                  }}
                  className="w-full flex-1 flex flex-col text-left"
                >
                  <div
                    className={`project-card cursor-pointer w-full flex flex-col h-full ${isVisible ? "in-view" : ""}`}
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative w-full aspect-square overflow-hidden bg-gray-200">
                      <Image
                        src={project.image || "/placeholder.jpg"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        priority={index === 0}
                      />
                    </div>

                    {/* Title Section */}
                    <div className="bg-transparent text-white pt-4 w-full flex flex-col text-left">
                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-medium leading-tight tracking-tight uppercase mb-1">
                        {project.title}
                      </h3>
                      {/* Description/Category */}
                      <p className="text-sm md:text-base font-medium tracking-tight text-white/90">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            )
          })}
        </div>

        {/* Desktop: Masonry-style grid */}
        <div
          className="hidden lg:grid gap-6"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoFlow: 'dense'
          }}
        >
          {projects.map((project, index) => {
            const isVisible = visibleCards.has(project.id)

            // Clean alternating masonry pattern
            let gridColSpan = 1
            let gridRowSpan = 1

            // Pattern: Large-Medium-Small alternating
            if (index % 5 === 0) {
              // Large featured item
              gridColSpan = 2
              gridRowSpan = 2
            } else if (index % 5 === 1) {
              // Regular item
              gridColSpan = 1
              gridRowSpan = 1
            } else if (index % 5 === 2) {
              // Regular item
              gridColSpan = 1
              gridRowSpan = 1
            } else if (index % 5 === 3) {
              // Regular item
              gridColSpan = 1
              gridRowSpan = 1
            } else if (index % 5 === 4) {
              // Medium item
              gridColSpan = 2
              gridRowSpan = 1
            }

            return (
              <div
                key={project.id}
                className="bg-transparent flex flex-col"
                ref={(el) => { if (el) cardRefs.current[project.id] = el }}
                data-project-id={project.id}
                style={{
                  gridColumn: `span ${gridColSpan}`,
                  gridRow: `span ${gridRowSpan}`
                }}
              >
                <button
                  onClick={() => {
                    setSelectedProject(project)
                    setIsOverlayOpen(true)
                  }}
                  className="w-full flex-1 flex flex-col text-left"
                >
                  <div
                    className={`project-card cursor-pointer w-full flex flex-col h-full ${isVisible ? "in-view" : ""}`}
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative w-full aspect-square overflow-hidden bg-gray-200">
                      <Image
                        src={project.image || "/placeholder.jpg"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1200px) 50vw, 33vw"
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        priority={index === 0}
                      />
                    </div>

                    {/* Title Section */}
                    <div className="bg-transparent text-white pt-6 w-full flex flex-col text-left">
                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl font-medium leading-tight tracking-tight uppercase mb-0">
                        {project.title}
                      </h3>
                      {/* Description/Category */}
                      <p className="text-sm lg:text-base font-medium tracking-tight text-white/90">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Project Overlay */}
      <ProjectOverlay
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
        project={selectedProject}
      />
    </section>
  )
}
