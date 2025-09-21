"use client"

export default function ImpactSection() {
  const stats = [
    {
      value: "$400B",
      label: "EdTech Market",
      description: "Global education technology market size",
    },
    {
      value: "1.4B",
      label: "Unbanked Adults",
      description: "People without access to financial services",
    },
    {
      value: "420M+",
      label: "Crypto Users",
      description: "Need better education and security awareness",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Impact & Reach</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Addressing a massive global opportunity to democratize financial education
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-4">
                  {stat.value}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-300">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
