"use client"

import { ProjectTitleSection } from "@/components/gallery-titel"
import { projectsData } from "@/lib/projects-data"
import { useParams } from "next/navigation"

export default function ProjectGalleryPage() {
  const params = useParams()
  const slug = params.slug as string

  const project = projectsData.find((p) => p.slug === slug)

  const galleryImages = project?.images || []

  if (!project) {
    return (
      <main className="min-h-screen">
        <div className="flex items-center justify-center h-screen">
          <p className="text-xl">Project not found</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <ProjectTitleSection projectName={project.title} services={project.services} galleryImages={galleryImages} />
    </main>
  )
}
