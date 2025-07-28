import Hero from "@/components/sections/hero"
import ProblemSolution from "@/components/sections/problem-solution"
import Features from "@/components/sections/features"
import ProductDemo from "@/components/sections/product-demo"
import Testimonials from "@/components/sections/testimonials"
import Pricing from "@/components/sections/pricing"
import FAQ from "@/components/sections/faq"
import FinalCTA from "@/components/sections/final-cta"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import CookieConsent from "@/components/ui/cookie-consent"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Telegram Verification Notification Bar */}
      <div className="bg-telegram-blue-600 text-white text-center py-3 px-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">1</span>
            </div>
            <span className="text-sm">Open Telegram</span>
          </div>
          <div className="w-2 h-0.5 bg-white/30"></div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">2</span>
            </div>
            <span className="text-sm">Scan QR Code</span>
          </div>
          <div className="w-2 h-0.5 bg-white/30"></div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">3</span>
            </div>
            <span className="text-sm font-semibold">Confirm Connection - Get Started Now!</span>
          </div>
        </div>
      </div>

      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <ProductDemo />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}