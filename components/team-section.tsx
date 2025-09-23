"use client"

import { Linkedin, Twitter } from "lucide-react"

export default function TeamSection() {
  const team = [
    {
      name: "Paolo Joseph Lising",
      role: "CEO",
      bio: "Tokenization Researcher (Harvard ALM, exp. '27). 4 years in crypto industry. Author and thought leader on digital inclusion.",
      image: "/professional-headshot-of-paolo-joseph-lising--ceo-.jpg",
    },
    {
      name: "Nikolas Doan",
      role: "COO",
      bio: "MSc AI/Robotics (NTU, exp. '26). Former Google Cloud Startups. CEO TECXMATE.COM",
      image: "/professional-headshot-of-nikolas-doan--coo.jpg",
    },
    {
      name: "Brian Nguyen",
      role: "CTO",
      bio: "MS Gamification Engineering (NTUST, exp. '27). Built 3+ apps on App Store. Specialist in game mechanics for learning.",
      image: "/professional-headshot-of-brian-nguyen--cto--softwa.jpg",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Meet the Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experienced leaders combining crypto expertise, AI innovation, and gamification mastery
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-none p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                  <div className="text-purple-400 font-medium mb-4">{member.role}</div>
                  <p className="text-gray-300 leading-relaxed mb-6">{member.bio}</p>

                  <div className="flex justify-center gap-4">
                    <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                      <Linkedin className="h-5 w-5 text-white" />
                    </button>
                    <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                      <Twitter className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
