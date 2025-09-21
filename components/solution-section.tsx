"use client"

import { Gamepad2, Smartphone, Brain } from "lucide-react"

export default function SolutionSection() {
  const solutions = [
    {
      icon: Gamepad2,
      title: "Play to Learn",
      description: "Gamified micro-lessons designed for short attention spans and maximum engagement.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Designed for accessibility and low literacy users with intuitive interfaces.",
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Personalized lessons and real-world challenges adapted to your learning pace.",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4 w-fit mb-6">
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
