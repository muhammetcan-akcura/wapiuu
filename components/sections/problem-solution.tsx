import { AlertCircle, Clock, TrendingDown, CheckCircle, Zap, TrendingUp } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Manual Message Sending",
    description: "Days of repetitive message sending and follow-up processes",
  },
  {
    icon: TrendingDown,
    title: "Customer Loss",
    description: "Missed opportunities due to late responses and lack of follow-up",
  },
  {
    icon: AlertCircle,
    title: "Time Waste",
    description: "Sales team losing time on routine tasks",
  },
]

const solutions = [
  {
    icon: Zap,
    title: "80% time savings with automated follow-up system",
    description: "No customer is overlooked thanks to smart triggers",
  },
  {
    icon: TrendingUp,
    title: "45% increase in response rate with AI-powered customer analysis",
    description: "Analyzes customer behavior to determine the optimal time",
  },
  {
    icon: CheckCircle,
    title: "Zero lost customer guarantee",
    description: "No potential customer is missed with the automated follow-up system",
  },
]

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problems */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Do These Problems Sound Familiar?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Most companies face these challenges in customer communication
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{problem.title}</h3>
                <p className="text-slate-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The <span className="text-telegram-blue-600">Solution</span> is Now at Your Fingertips
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Eliminate these problems completely with Wapiuu</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                <div className="w-12 h-12 bg-telegram-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-telegram-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}