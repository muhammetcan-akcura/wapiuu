"use client"

import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { useState } from "react"

const plans = [
  {
    name: "Starter",
    price: { monthly: 299, annual: 239 },
    description: "Ideal starter package for small businesses",
    features: ["1,000 messages/month", "Basic automation", "Email support", "Basic reporting", "2 users"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: { monthly: 599, annual: 479 },
    description: "Most popular choice for growing companies",
    features: [
      "5,000 messages/month",
      "Advanced automation",
      "Analytics dashboard",
      "Phone support",
      "5 users",
      "API integration",
      "Custom reports",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 1299, annual: 1039 },
    description: "Full-featured solution for large companies",
    features: [
      "Unlimited messages",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 priority support",
      "Unlimited users",
      "Custom training",
      "SLA guarantee",
    ],
    cta: "Contact Us",
    popular: false,
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Transparent and Fair <span className="text-telegram-blue-600">Pricing</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Choose the package that suits your needs. 14-day free trial included with all packages.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`${!isAnnual ? "text-slate-900" : "text-slate-500"}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? "bg-telegram-blue-600" : "bg-slate-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`${isAnnual ? "text-slate-900" : "text-slate-500"}`}>
              Annually <span className="text-green-600 font-medium">(20% discount)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-sm border-2 transition-all hover:shadow-lg ${
                plan.popular ? "border-telegram-blue-600 scale-105" : "border-slate-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-telegram-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">
                    ₺{isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-slate-600">/month</span>
                </div>
                {isAnnual && (
                  <div className="text-sm text-green-600 font-medium">
                    Save ₺{(plan.price.monthly - plan.price.annual) * 12} annually
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-telegram-blue-600 hover:bg-telegram-blue-700 text-white"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
              >
                {plan.cta}
              </Button>

              <div className="text-center mt-4">
                <p className="text-sm text-slate-500">14-day free trial</p>
              </div>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <Check className="w-5 h-5" />
            <span className="font-medium">30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}