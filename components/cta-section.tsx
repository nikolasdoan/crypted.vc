"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Be the first to{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">play</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join the beta waitlist and get early access to the future of crypto education
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-gray-400 mb-4">Contact us</p>
            <a
              href="mailto:support@crypted.vc"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <Mail className="h-5 w-5" />
              support@crypted.vc
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white font-bold text-xl">Crypted</div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}
