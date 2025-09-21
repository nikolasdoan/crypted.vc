"use client"

import { Coins, Gift, Trophy } from "lucide-react"

export default function RewardsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Learn, Play, and{" "}
              <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                Earn Real Rewards
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Partners distribute tokens, and you unlock new opportunities as you progress through your learning
              journey.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-2">
                  <Coins className="h-6 w-6 text-white" />
                </div>
                <span className="text-white text-lg">Earn tokens for completing lessons</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-2">
                  <Gift className="h-6 w-6 text-white" />
                </div>
                <span className="text-white text-lg">Unlock exclusive rewards and NFTs</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-2">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <span className="text-white text-lg">Compete in global leaderboards</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/mobile-game-interface-showing-token-rewards-and-ac.jpg"
              alt="Mobile game interface showing token rewards and achievements"
              className="mx-auto max-w-md w-full rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
