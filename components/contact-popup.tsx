"use client"

import { useState, useEffect } from "react"
import type React from "react"
import { X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface ContactPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [isClosing, setIsClosing] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    company: "",
    services: {
      logoDesign: false,
      brandIdentity: false,
      webDesign: false,
    },
    message: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false)
      }, 6000)
      return () => clearTimeout(timer)
    }
  }, [showSuccess])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, 400)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (service: keyof typeof formData.services) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service],
      },
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Please fill in all required fields")
      return
    }

    const hasSelectedService = Object.values(formData.services).some((value) => value === true)
    if (!hasSelectedService) {
      alert("Please select at least one service")
      return
    }

    const formElement = e.currentTarget
    const formDataObj = new FormData(formElement)

    fetch("https://formspree.io/f/mblnejjn", {
      method: "POST",
      body: formDataObj,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setShowSuccess(true)
          setFormData({
            name: "",
            email: "",
            location: "",
            company: "",
            services: {
              logoDesign: false,
              brandIdentity: false,
              webDesign: false,
            },
            message: "",
          })
        }
      })
      .catch((error) => console.error("Form submission error:", error))
  }

  if (!isOpen && !isClosing) return null

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 ${isClosing ? "opacity-0" : "opacity-100"
        }`}
      onClick={handleClose}
    >
      <div
        className={`bg-[#1A1A1A] w-full max-w-3xl rounded-2xl overflow-hidden transition-all duration-500 ease-out transform max-h-[90vh] overflow-y-auto ${isClosing ? "scale-90 opacity-0" : "scale-100 opacity-100 animate-bounce"
          }`}
        style={{
          animation: !isClosing ? "bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)" : "none",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes bounce {
            0% {
              transform: scale(0.8);
              opacity: 0;
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>

        {/* Close Button - Top Right */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={handleClose}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1A1A1A] border border-white text-white"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Area */}
        <div className="pt-12 px-6 md:px-8 pb-8">
          {showSuccess && (
            <div className="mb-6 bg-[#0dce8d] text-black px-4 py-3 rounded-lg font-medium">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Us Title */}
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">
                Contact Us
              </h2>
              <p className="text-base text-white/60">
                Ready to bring your vision to life? Let's talk about your project.
              </p>
            </div>

            {/* Name and Email - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full h-auto bg-transparent text-white border-0 border-b border-white/30 rounded-none focus-visible:ring-0 focus-visible:border-white placeholder-white/20 py-2 focus-visible:bg-transparent"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full h-auto bg-transparent text-white border-0 border-b border-white/30 rounded-none focus-visible:ring-0 focus-visible:border-white placeholder-white/20 py-2 focus-visible:bg-transparent"
              />
            </div>

            {/* Location and Company - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full h-auto bg-transparent text-white border-0 border-b border-white/30 rounded-none focus-visible:ring-0 focus-visible:border-white placeholder-white/20 py-2 focus-visible:bg-transparent"
              />
              <Input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full h-auto bg-transparent text-white border-0 border-b border-white/30 rounded-none focus-visible:ring-0 focus-visible:border-white placeholder-white/20 py-2 focus-visible:bg-transparent"
              />
            </div>

            {/* Services Checkboxes */}
            <div>
              <p className="text-white font-medium mb-4">What do you want our help with? *</p>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.services.logoDesign}
                    onChange={() => handleCheckboxChange("logoDesign")}
                    className="w-5 h-5 rounded bg-white/20 border border-white/50 cursor-pointer accent-white"
                  />
                  <span className="text-white">Brand Strategy</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.services.brandIdentity}
                    onChange={() => handleCheckboxChange("brandIdentity")}
                    className="w-5 h-5 rounded bg-white/20 border border-white/50 cursor-pointer accent-white"
                  />
                  <span className="text-white">Brand Identity</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.services.brandIdentity}
                    onChange={() => handleCheckboxChange("brandIdentity")}
                    className="w-5 h-5 rounded bg-white/20 border border-white/50 cursor-pointer accent-white"
                  />
                  <span className="text-white">Visual Identity Systems</span>
                </label>

              </div>
            </div>

            {/* Project Message */}
            <div>
              <p className="text-white font-medium mb-3">Tell us about your project *</p>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full h-20 text-white border-0 border-b border-white/30 rounded-none focus-visible:ring-0 focus-visible:border-white placeholder-white/20 py-2 focus-visible:bg-transparent resize-none"
                placeholder="Your message..."
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-white text-black font-medium py-5 text-base md:text-lg">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
