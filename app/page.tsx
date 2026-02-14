import type { Metadata } from "next"
import { ProjectThumbnails } from "@/components/project-thumbnails"
import { ServicesSection } from "@/components/services-section"
import { Hero } from "@/components/hero"
import { HeroCTASection } from "@/components/hero-cta-section"
import { BrandStrategySection } from "@/components/brand-strategy-section"
import { BrandClaritySection } from "@/components/brand-clarity-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { Separator } from "@/components/ui/separator"
import { WebOpenAnimation } from "@/components/web-open-animation"

export const metadata: Metadata = {
  title: "Lozinr | Logo & Brand Identity Design Agency",
  description:
    "Lozinr is a strategic design agency specializing in logos, brand identity systems, and high-impact visual branding for modern businesses.",
  openGraph: {
    title: "Lozinr — Logo & Brand Identity Design Agency",
    description:
      "Strategic logo design and brand identity systems crafted for clarity, consistency, and lasting impact.",
    url: "https://lozinr.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lozinr Branding Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lozinr | Logo & Brand Identity Design Agency",
    description: "Strategic logo design and brand identity systems crafted for clarity, consistent and lasting impact.",
  },
  alternates: {
    canonical: "https://lozinr.com",
  },
}

export default function Home() {
  return (
    <>
      <WebOpenAnimation />
      <main className="relative bg-[#1A1A1A] transition-colors duration-300">
      {/* Hero SVG Section */}
      <section id="home" className="w-full lg:py-60 lg:px-8 py-30 px-3">
        <svg
          viewBox="0 0 1920 393.95"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Layer_1" data-name="Layer 1">
            <path d="M1896.81,76.9h-.08c.03-.91.05-1.81.06-2.72.01.91.02,1.81.02,2.72Z" fill="currentColor" />
            <path d="M1896.81,71.46c0,.91-.01,1.81-.02,2.72-.01-.91-.03-1.81-.06-2.72h.08Z" fill="currentColor" />
          </g>
          <g id="Shape_Grid_Output_" data-name="Shape Grid (Output)">
            <g fill="#F7F7F7">
              <path d="M10.25,9.97h87.68v295.21h172.77v78.34H10.25V9.97Z" />
              <path d="M383.13,358.1c-27.74-16.54-48.71-38.93-62.91-67.17-14.21-28.24-21.3-59.73-21.3-94.49s7.1-66.25,21.3-94.49c14.2-28.24,35.17-50.63,62.91-67.17,27.73-16.54,60.82-24.81,99.25-24.81s71.51,8.27,99.25,24.81c27.73,16.54,48.7,38.93,62.91,67.17,14.2,28.24,21.3,59.74,21.3,94.49s-7.1,66.25-21.3,94.49c-14.21,28.24-35.17,50.63-62.91,67.17-27.74,16.54-60.83,24.81-99.25,24.81s-71.52-8.27-99.25-24.81ZM410.7,276.9c15.7,20.89,39.6,31.33,71.68,31.33s55.97-10.44,71.68-31.33c15.7-20.88,23.56-47.7,23.56-80.45s-7.86-59.56-23.56-80.45c-15.71-20.88-39.6-31.33-71.68-31.33s-55.98,10.45-71.68,31.33c-15.71,20.89-23.56,47.71-23.56,80.45s7.85,59.57,23.56,80.45Z" />
              <path d="M700.8,313.49l193-226.73-94.43,1.56h-92.35V9.97h301.44v67.45l-196.12,229.32,98.06-1.56h100.65v78.34h-310.26v-70.04Z" />
              <path d="M1066.13,9.97h87.68v373.56h-87.68V9.97Z" />
              <path d="M1292.93,132.93v250.6h-84.05V9.97h94.95l148.39,251.63V9.97h84.05v373.56h-94.95l-148.39-250.6Z" />
              <path d="M1591.33,9.97h175.57c45.01,0,78.78,10.22,101.29,30.65,22.51,20.44,33.76,47.62,33.76,81.55,0,19.05-5.02,36.28-15.06,51.69-10.05,15.41-53.78,37.62-81.72,32.44,15.58,7.62,47.78,5.83,74.71,36.91,9.44,10.9,12.9,26.67,15.32,43.63l14.54,97.14h-89.86l-12.47-84.15c-2.78-18.7-8.66-32.47-17.66-41.3-9.01-8.83-22.17-13.25-39.48-13.25h-71.16v138.69h-87.79V9.97ZM1751.32,178.27c20.08,0,35.14-3.98,45.19-11.95,10.04-7.96,15.06-20.26,15.06-36.88s-5.02-28.91-15.06-36.88c-10.05-7.96-25.11-11.95-45.19-11.95h-72.2v97.66h72.2Z" />
            </g>
          </g>
        </svg>
        {/* Hero Text Section */}
        <div className="grid grid-cols-2 gap-0 mt-4 md:mt-5">
          {/* Left - Empty */}
          <div></div>
          {/* Right - Text */}
          <div className="flex items-center">
            <h1 className="text-[20px] md:text-5xl lg:text-[35px] font-regular text-[#F7F7F7] leading-none tracking-tighter">
              We create premium brands that command attention.
            </h1>
          </div>
        </div>
      </section>
      <Separator className="w-full h-px" />
      <BrandStrategySection />
      <Separator className="w-full h-px" />
      <BrandClaritySection />
      <Separator className="w-full h-px" />
      <div className="relative bg-background">
        <section id="work">
          <ProjectThumbnails />
        </section>
        <Separator className="w-full h-px" />
        <section id="services">
          <ServicesSection />
        </section>
        <Separator className="w-full h-px" />
        <WhyChooseUsSection />
        <Separator className="w-full h-px" />
      </div>
    </main>
    </>
  )
}
