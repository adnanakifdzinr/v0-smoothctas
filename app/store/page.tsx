"use client"
import { Star, ArrowUpRight } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  description: string
  price: string
  priceNumber: number
  image: string
  features: string[]
  category: "starter" | "professional" | "enterprise"
  popular?: boolean
  deliveryTime?: string
  paymentLink?: string
  profileImage?: string
  rating?: number
}

const products: Product[] = [
  {
    id: 0,
    name: "3 illustrator scripts",
    description: "01 Grid Place script, 02 Bazier Outliner, 03 Bento Box Creator",
    price: "$0.99",
    priceNumber: 0.99,
    image: "https://btuo8ppwedfbtxi6.public.blob.vercel-storage.com/5z128todn75bcj664fv6wc019bn7.jpg",
    features: ["Ready to Use", "Professional Design"],
    paymentLink: "https://adnanbranding.gumroad.com/l/allscripts?wanted=true",
    profileImage: "https://qms1staoyjyffvwr.public.blob.vercel-storage.com/Adnan.jpg",
    rating: 5.0,
  },
  {
    id: 1,
    name: "Logo Design Package",
    description: "Perfect for startups and small businesses needing a professional brand mark",
    price: "$0.99",
    priceNumber: 0.99,
    image: "https://btuo8ppwedfbtxi6.public.blob.vercel-storage.com/GridPlace.jpg",
    paymentLink: "https://adnanbranding.gumroad.com/l/gridplace?wanted=true",
    rating: 5.0,
  },
  
]

function ProductCard({ product }: { product: Product }) {
  const handleViewDetails = () => {
    if (product.paymentLink) {
      window.open(product.paymentLink, "_blank")
    }
  }

  const purchaseText = "Unlock Your Glow"
  const letters = purchaseText.split("")

  return (
    <div className="group relative flex flex-col h-full bg-chart-5/80 border border-chart-5/10 hover:border-chart-5/20 transition-all duration-500 overflow-hidden">
      <div
        className="relative overflow-hidden aspect-[4/3] w-full cursor-pointer bg-background/40"
        onClick={handleViewDetails}
      >
        <Image
          src={product.image || "/placeholder.svg?height=400&width=640&query=design package"}
          alt={product.name}
          width={640}
          height={480}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
      </div>

      <div className="flex-1 flex flex-col p-6 lg:p-4">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-background font-medium text-xl lg:text-2xl leading-tight mb-2 tracking-tight">
              {product.name}
            </h3>

            <div className="flex items-center gap-4">
              <span className="text-background text-xl lg:text-2xl font-light tracking-tight">{product.price}</span>
              {product.rating && (
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5">
                  <Star className="w-3 h-3 fill-[#ff3b00] text-[#ff3b00]" />
                  <span className="text-background/70 font-medium text-xs">{product.rating.toFixed(1)}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <Button
          className="cta-button w-full bg-chart-5 text-background ransition-all duration-300 mt-auto py-6 rounded-none text-base font-medium tracking-tight group/btn overflow-hidden relative border-none"
          onClick={handleViewDetails}
        >
          <span className="cta-button-text relative z-10 flex items-center justify-center gap-2">
            <span className="animated-text-link flex items-center gap-2">
              <span className="text-swap-container h-5 overflow-hidden relative flex">
                <span className="text-layer text-layer-primary relative flex transition-transform duration-500 group-hover/btn:-translate-y-full">
                  {letters.map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block transition-transform duration-500 ease-out"
                      style={{ transitionDelay: `${index * 0.02}s` }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </span>
                <span className="text-layer text-layer-secondary absolute inset-0 flex transition-transform duration-500 translate-y-full group-hover/btn:translate-y-0">
                  {letters.map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block transition-transform duration-500 ease-out"
                      style={{ transitionDelay: `${index * 0.02}s` }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </span>
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </span>
          </span>
        </Button>
      </div>
    </div>
  )
}

export default function StorePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 px-3 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
