import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function ProductDemo() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            See Wapiuu <span className="text-telegram-blue-600">Live</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Discover how it works with a 2-minute demo</p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Video Thumbnail */}
          <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop"
              alt="Wapiuu Message Sending Interface"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <Button
                size="lg"
                className="bg-telegram-blue-600 hover:bg-telegram-blue-700 text-white rounded-full w-20 h-20"
              >
                <Play className="w-8 h-8 ml-1" />
              </Button>
            </div>
          </div>

          {/* Demo Steps */}
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-telegram-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-telegram-blue-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Connect with QR Code</h3>
                <p className="text-sm text-slate-600">Securely connect your Telegram account with a QR code</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-telegram-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-telegram-blue-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Create Campaign</h3>
                <p className="text-sm text-slate-600">Write your message, select your audience, and set the schedule</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-telegram-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-telegram-blue-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Send and Monitor</h3>
                <p className="text-sm text-slate-600">Send messages and track them with detailed reports</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}