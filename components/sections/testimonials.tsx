import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    position: "Sales Manager",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "Thanks to Wapiuu, we fully automated our sales processes. We achieved a 200% sales increase in 3 months. An amazing system!",
  },
  {
    name: "Elif Kaya",
    position: "Marketing Director",
    company: "E-Commerce Plus",
    image: "https://images.unsplash.com/photo-1494790108755-2616b169ff87?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "Our customer response rate increased by 45%. No potential customer is missed anymore. I definitely recommend it.",
  },
  {
    name: "Mehmet Özkan",
    position: "General Manager",
    company: "Digital Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "We easily manage 500+ customers. Our time savings are incredible. Our ROI increased by 300% in 3 months.",
  },
]

const caseStudy = {
  company: "ABC E-commerce",
  industry: "E-commerce",
  results: [
    { metric: "Sales Increase", value: "200%", period: "3 months" },
    { metric: "Response Rate", value: "95%", period: "First month" },
    { metric: "Time Savings", value: "15 hours", period: "Weekly" },
    { metric: "ROI", value: "350%", period: "6 months" },
  ],
}

export default function Testimonials() {
  return (
    <section id="customer-reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our <span className="text-blue-600">Customers Say?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Thousands of companies have increased their sales with Wapiuu
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-6 relative">
              <Quote className="w-8 h-8 text-blue-600 mb-4" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.position}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Case Study */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Success Story: {caseStudy.company}</h3>
              <p className="text-blue-100 mb-6">
                {caseStudy.company}, operating in the {caseStudy.industry} sector, completely transformed its sales
                processes with Wapiuu.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>500+ customer portfolio</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>200+ daily customer messages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>15-person sales team</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold mb-1">{result.value}</div>
                  <div className="text-sm text-blue-100 mb-1">{result.metric}</div>
                  <div className="text-xs text-blue-200">{result.period}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}