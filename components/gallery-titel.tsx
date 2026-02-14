"use client"

interface ProjectTitleSectionProps {
  projectName: string
  services?: string[]
}

export function ProjectTitleSection({ projectName, services }: ProjectTitleSectionProps) {
  return (
    <div className="bg-[#0b0b0b] text-white font-sans pt-28 lg:pt-32 pb-8 px-3 lg:px-8">
      <div className="max-w-full mx-auto">
        {/* Project Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl font-sans tracking-tight mb-4">
          {projectName}
        </h1>
        
        {/* Services/Tags */}
        {services && services.length > 0 && (
          <div className="flex flex-wrap gap-2 md:gap-3">
            {services.map((service, index) => (
              <span
                key={index}
                className="text-sm md:text-base px-3 md:px-4 py-1 md:py-2 border border-white/30 rounded-full text-white/70 font-light"
              >
                {service}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
