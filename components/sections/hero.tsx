"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { useEffect, useState } from "react"

const stats = [
  { number: 2000, suffix: "+", label: "Active Users" },
  { number: 95, suffix: "%", label: "Customer Satisfaction" },
  { number: 15, suffix: "+", label: "Industries" },
  { number: 300, suffix: "%", label: "ROI Increase" },
]

const images = [
  "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
]

export default function Hero() {
  const [counters, setCounters] = useState(stats.map(() => 0))
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev]
          if (newCounters[index] < stat.number) {
            newCounters[index] = Math.min(newCounters[index] + Math.ceil(stat.number / 50), stat.number)
          }
          return newCounters
        })
      }, 50)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(sliderInterval)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-telegram-blue-50 py-16 lg:py-20">
      <div className="absolute inset-0 z-0 opacity-5" style={{ filter: "blur(3px)" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Content Section */}
        <div className="text-center mb-12">
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-telegram-blue-100 text-telegram-blue-800 text-sm font-medium">
              🚀 Trusted by 2000+ Turkish companies
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Telegram <span className="text-telegram-blue-600">Bulk Messaging</span> and CRM Automation
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              With Wapiuu, send messages to thousands of customers simultaneously via Telegram. Easy connection with QR
              code, automated replies, and detailed reporting.
            </p>
          </div>
        </div>

        {/* Image Slider Section */}
        <div className="relative max-w-4xl mx-auto h-[250px] md:h-[350px] lg:h-[450px] overflow-hidden rounded-2xl shadow-2xl mb-12">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Wapiuu Dashboard ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Slider Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-telegram-blue-600" : "bg-white bg-opacity-50"
                }`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Floating Success Cards */}
          <div className="absolute top-8 right-1/4 translate-x-1/2 bg-white rounded-lg shadow-lg p-3 transform rotate-6 z-10 hidden lg:block">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-telegram-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">537 Messages Sent</span>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/4 -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 z-10 hidden lg:block">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">96% Success Rate</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons & Trust Indicators & Stats */}
        <div className="text-center space-y-8">
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-telegram-blue-600 hover:bg-telegram-blue-700 text-white px-8 py-4 text-lg">
              Request Free Demo
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent">
              <Play className="w-5 h-5 mr-2" />
              Explore Features
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-8 text-sm text-slate-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No credit card required</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {counters[index]}
                  {stat.suffix}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}