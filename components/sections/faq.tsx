"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "How does Wapiuu work?",
    answer:
      "Wapiuu manages your customer messages automatically using the Telegram API. It sends timely and personalized responses to your customers with smart triggers and automation rules.",
  },
  {
    question: "How long does the setup take?",
    answer:
      "Setup is very simple. After connecting your Telegram account, you can start using the system within 15 minutes. Our technical team provides free setup support.",
  },
  {
    question: "Does it integrate with my existing CRM system?",
    answer:
      "Yes, Wapiuu can integrate with popular CRM systems (Salesforce, HubSpot, Pipedrive, etc.). Custom integrations are also possible with API support.",
  },
  {
    question: "How is data security ensured?",
    answer:
      "All your data is protected with SSL encryption. We have GDPR-compliant data processing policies. Your data is stored on secure servers in Turkey.",
  },
  {
    question: "Is there a free trial period?",
    answer:
      "Yes, you can try all features for free for 14 days. No credit card information is required. You receive full support during the trial period.",
  },
  {
    question: "What happens if I want to cancel?",
    answer:
      "You can cancel anytime. We have a 30-day money-back guarantee. Cancellation is done with a single click, no commitments.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="support" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-slate-600">All your questions answered here</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-200">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Have more questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@wapiuu.com" className="text-blue-600 hover:text-blue-700 font-medium">
              support@wapiuu.com
            </a>
            <span className="hidden sm:block text-slate-400">|</span>
            <a href="tel:+905551234567" className="text-blue-600 hover:text-blue-700 font-medium">
              +90 555 123 45 67
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}