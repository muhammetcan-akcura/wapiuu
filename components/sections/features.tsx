import { Bot, Megaphone, BarChart3, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Bot,
    title: "Easy Connection with QR Code",
    description: "Connect your Telegram account in seconds with a QR code and start messaging",
    features: [
      "Instant account verification",
      "Secure connection protocol",
      "Multi-device support",
      "Automatic synchronization",
    ],
    demo: "Watch QR Demo",
  },
  {
    icon: Megaphone,
    title: "Bulk Message Sending",
    description: "Send personalized messages to thousands of people simultaneously",
    features: ["Campaign management", "File attachment support", "Scheduled sending", "Delivery tracking"],
    demo: "Message Demo",
  },
  {
    icon: BarChart3,
    title: "Detailed Reporting",
    description: "Track sent messages, success rates, and statistics",
    features: ["Real-time statistics", "Success rate analysis", "Weekly/monthly reports", "Graphical views"],
    demo: "Report Dashboard",
  },
  {
    icon: Clock,
    title: "Automated Replies",
    description: "Automatically reply to incoming messages and increase customer satisfaction",
    features: ["Smart automated replies", "Keyword triggers", "Personalized messages", "Reply scheduling"],
    demo: "Automation Tool",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Powerful Features, <span className="text-telegram-blue-600">Easy to Use</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Automate your Telegram bulk messaging and CRM processes with Wapiuu
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-telegram-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-telegram-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full bg-transparent">
                {feature.demo}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}