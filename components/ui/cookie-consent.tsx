"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState, useEffect } from "react"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600 flex-1 sm:mr-4 text-center sm:text-left">
          We use cookies on our website to provide you with the best experience. By accepting cookies, you help us
          improve site navigation, analyze site usage, and assist in our marketing efforts.
        </p>
        <div className="flex items-center justify-center space-x-3">
          <Button variant="outline" size="sm" onClick={rejectCookies} className="text-slate-600 bg-transparent">
            Reject
          </Button>
          <Button
            size="sm"
            onClick={acceptCookies}
            className="bg-telegram-blue-600 hover:bg-telegram-blue-700 text-white"
          >
            Accept
          </Button>
          <button onClick={rejectCookies} className="text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}