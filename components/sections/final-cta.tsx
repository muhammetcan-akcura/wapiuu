import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-telegram-blue-600 to-telegram-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Automate Your Telegram Messaging?</h2>
        <p className="text-xl text-telegram-blue-100 mb-8 max-w-2xl mx-auto">
          Reach thousands of customers simultaneously with Wapiuu. Easy setup with QR code, powerful features. Get
          started today!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="bg-white text-telegram-blue-600 hover:bg-slate-100 px-8 py-4 text-lg">
            Start 14-Day Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
          >
            Request Demo
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-telegram-blue-100">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>30-day money-back guarantee</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>Instant setup</span>
          </div>
        </div>
      </div>
    </section>
  )
}