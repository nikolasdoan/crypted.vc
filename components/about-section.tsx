"use client"

export default function AboutSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">About CryptED</h2>

        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
          <p className="text-xl text-gray-300 leading-relaxed">
            CryptED is a game-first, AI-powered app teaching digital and financial literacy to underserved communities.
            No prior education required — just play, learn, and earn. We believe that everyone deserves access to the
            digital economy, and we're making that possible through innovative gamification and personalized AI learning
            that meets users where they are.
          </p>
        </div>
      </div>
    </section>
  )
}
