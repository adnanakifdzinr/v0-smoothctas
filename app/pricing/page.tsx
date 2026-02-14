'use client'

import Link from 'next/link'

export default function PricingPage() {
  const packages = [
    {
      price: "US $15,000",
      title: "Package",
      timeline: "6 weeks",
      sections: [
        {
          title: "BRAND DISCOVERY",
          items: []
        },
        {
          title: "BRAND STRATEGY:",
          items: [
            "Brand Positioning",
            "Brand Persona",
            "Brand Story",
            "Ideal Buyer Persona",
            "Taglines (x3)",
            "Competitive Analysis",
            "Brand Voice & Tone",
            "Look & Feel Moodboards (x3)"
          ]
        },
        {
          title: "BRAND IDENTITY DESIGN:",
          items: [
            "Logo Designs (x3)",
            "Brand Colors + Fonts",
            "Brand Messaging",
            "Website Header Mockup",
            "Social Media Mockup",
            "Marketing Collateral Mockups",
            "Corporate Stationary Mockup"
          ]
        },
        {
          title: "BRAND GUIDELINES",
          items: []
        }
      ],
      notes: [
        "All files are delivered in Adobe Illustrator (open file format).",
        "Logos in another language (eg. Arabic) will be charged an extra $2,500."
      ]
    },
    {
      price: "US $25,000",
      title: "Package",
      timeline: "10 weeks",
      sections: [
        {
          title: "BRAND DISCOVERY",
          items: []
        },
        {
          title: "BRAND STRATEGY:",
          items: [
            "Brand Positioning",
            "Brand Persona",
            "Brand Story",
            "Ideal Buyer Persona",
            "Taglines (x3)",
            "Competitive Analysis",
            "Brand Voice & Tone",
            "Look & Feel Moodboards",
            "Brand Names (x9)"
          ]
        },
        {
          title: "BRAND IDENTITY DESIGN:",
          items: [
            "Logo Designs x3",
            "Packaging Design Mockups (Multiple SKUs & Formats)",
            "Brand Colors + Fonts",
            "Brand Messaging",
            "Website Header Mockup",
            "Social Media Mockup",
            "Marketing Collateral Mockups",
            "Corporate Stationary Mockups"
          ]
        },
        {
          title: "BRAND GUIDELINES",
          items: []
        }
      ]
    }
  ]

  return (
    <main className="w-full bg-white transition-colors duration-300">
      {/* Header Section with Black Background */}
      <section className="w-full bg-[#1A1A1A] text-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-center leading-tight tracking-tight">
            Here is your investment for Brand Strategy & Identity Design
          </h1>
        </div>
      </section>

      {/* Pricing Cards Section with White Background */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="border border-black rounded-lg p-8 md:p-10 bg-white hover:shadow-lg transition-shadow duration-300"
              >
                {/* Price Header */}
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">
                    {pkg.price}
                  </h2>
                  <p className="text-xl md:text-2xl font-medium text-black">
                    {pkg.title}
                  </p>
                </div>

                {/* Package Details */}
                <div className="space-y-6 mb-8">
                  {pkg.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h3 className="font-bold text-black mb-3 text-base md:text-lg">
                        {section.title}
                      </h3>
                      {section.items.length > 0 && (
                        <ul className="space-y-2 ml-4">
                          {section.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="text-gray-700 flex items-start gap-3"
                            >
                              <span className="text-black mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                {/* Timeline - Moved below BRAND GUIDELINES */}
                <div className="mb-8 pt-6 border-t border-gray-200">
                  <p className="text-lg font-bold text-black">
                    Timeline: {pkg.timeline}
                  </p>
                </div>

                {/* Notes section for both packages */}
                {pkg.notes && (
                  <div className="mb-8 pt-6 border-t border-gray-200">
                    <p className="font-bold text-black mb-3">Note:</p>
                    <ul className="space-y-2">
                      {pkg.notes.map((note, noteIndex) => (
                        <li key={noteIndex} className="text-sm text-gray-700 flex items-start gap-3">
                          <span className="text-black mt-1">•</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <button
                  onClick={() => {
                    const element = document.getElementById("contact")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="inline-block w-full text-center bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
