"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-telegram-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-slate-900">Wapiuu</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">
              Pricing
            </a>
            <a href="#customer-reviews" className="text-slate-600 hover:text-slate-900 transition-colors">
              Customer Reviews
            </a>
            <a href="#support" className="text-slate-600 hover:text-slate-900 transition-colors">
              Support
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-600 hover:text-slate-900 transition-colors">Log In</button>
            <Button className="bg-telegram-blue-600 hover:bg-telegram-blue-700 text-white px-6">Free Demo</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-slate-600 hover:text-slate-900">
                Features
              </a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900">
                Pricing
              </a>
              <a href="#customer-reviews" className="text-slate-600 hover:text-slate-900">
                Customer Reviews
              </a>
              <a href="#support" className="text-slate-600 hover:text-slate-900">
                Support
              </a>
              <div className="pt-4 border-t border-slate-200">
                <Button className="w-full bg-telegram-blue-600 hover:bg-telegram-blue-700 text-white">Free Demo</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}