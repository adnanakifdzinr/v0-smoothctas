import type { Metadata } from "next"
import { ProjectTitleSection } from "@/components/gallery-titel"
import { projectsData } from "@/lib/projects-data"

export const metadata: Metadata = {
  title: "Gallery | Lozinr",
  description: "Gallery",
}

interface GalleryPageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>
}

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const params = await searchParams
  const projectSlug = params.project

  // Get project data based on slug or default to first project
  const project = projectSlug ? projectsData.find((p) => p.slug === projectSlug) : projectsData[0]

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
    <main className="relative min-h-screen">
      <ProjectTitleSection projectName={project.title} services={project.services} />
      <div className="relative z-10 bg-background">
        {/* Content will be added here */}
      </div>
    </main>
  )
}
