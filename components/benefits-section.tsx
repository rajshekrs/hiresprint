import { Button } from "@/components/ui/button"
import { Clock, Globe, Brain, DollarSign } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Reduce time-to-hire by up to 60%",
      description: "Our AI-powered matching gets you qualified candidates faster than traditional recruiting methods.",
      color: "bg-purple-100",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Reach candidates beyond your network",
      description: "Access a wider talent pool without relying solely on your existing connections.",
      color: "bg-blue-100",
    },
    {
      icon: <Brain className="h-8 w-8 text-indigo-600" />,
      title: "AI-driven hiring strategies",
      description: "Our intelligent algorithms match candidates to your requirements with unprecedented accuracy.",
      color: "bg-indigo-100",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-orange-600" />,
      title: "Flat fee, no surprises",
      description: "Predictable pricing means you can budget accurately without worrying about unexpected costs.",
      color: "bg-orange-100",
    },
  ]

  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-purple-100 text-purple-900 mb-4">
            <span>Benefits</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Hire faster, with better results
          </h2>
          <p className="max-w-[800px] mx-auto text-gray-500 text-lg">
            Stop spending hours scrolling through resumes. Let HireSprint do the heavy lifting so you can focus on what
            matters—connecting with the right candidates.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`${benefit.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-500">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-6 h-auto">Join the Waitlist</Button>
        </div>
      </div>
    </section>
  )
}
