"use client"

import { Lock, AlertTriangle, Shield } from "lucide-react"

export default function ProblemSection() {
  const problems = [
    {
      icon: Lock,
      title: "Locked out of the token economy",
      description: "Millions lack access to digital financial opportunities",
    },
    {
      icon: AlertTriangle,
      title: "Low financial literacy in developing countries",
      description: "Traditional education fails to reach underserved communities",
    },
    {
      icon: Shield,
      title: "Security risks and fraud",
      description: "Without proper education, users fall victim to scams",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Why CryptED?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We turn barriers into opportunities with game-first learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <problem.icon className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">{problem.title}</h3>
              <p className="text-gray-300 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
