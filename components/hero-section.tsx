"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Game your way
              <br />
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                to token literacy
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              AI-powered gamified learning that teaches crypto, blockchain, and finance through fun mobile games.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg"
            >
              Start Learning Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10">
            <img
              src="/modern-smartphone-showing-crypto-education-game-in.jpg"
              alt="CryptED mobile app interface showing gamified crypto learning"
              className="mx-auto max-w-sm w-full rounded-2xl"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
