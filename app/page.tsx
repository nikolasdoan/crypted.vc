"use client"

import { useEffect, useState } from 'react'
import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import ShaderBackground from "@/components/shader-background"
// Removed Spline in favor of Rive hero
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas'

export default function CryptEDWebsite() {
  const [isMobile, setIsMobile] = useState(false)

  // Rive: wizcat overlay on hero
  const { RiveComponent, rive } = useRive({
    src: '/wizcat.riv',
    autoplay: true,
    stateMachines: ['BLACK CATW'],
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center })
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Spline removed

  // Pause Rive animation on mobile; resume on desktop
  useEffect(() => {
    if (!rive) return
    if (isMobile) {
      rive.pause()
    } else {
      rive.play()
    }
  }, [isMobile, rive])

  return (
    <div className="min-h-screen bg-black">
      {/* OKX-style Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">CryptED</div>
            <div className="flex items-center space-x-4">
              <button className="text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium">
                Try it now
              </button>
              <button className="text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Rive Hero Section (replacing Spline) */}
      <section className="pt-20 min-h-screen relative bg-[#5b10fd]">
        <div className={`w-full h-screen ${isMobile ? 'pointer-events-none touch-none select-none' : ''}`}>
          {RiveComponent && (
            <RiveComponent style={{ width: '100%', height: '100%' }} />
          )}
        </div>
        
        {/* Upper Top Headline */}
        <div className="absolute top-32 left-4 right-4 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Game Your Way to Token Literacy
          </h1>
        </div>

      </section>


      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300">
              Experts in crypto, AI, and education
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-300 font-semibold">PJL</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Paolo Joseph Lising</h3>
              <p className="text-gray-300 font-medium mb-4">CEO</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tokenization researcher (Harvard ALM '27) with four years of crypto industry experience. 
                Author and thought leader on digital inclusion.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-300 font-semibold">ND</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Nikolas Doan</h3>
              <p className="text-gray-300 font-medium mb-4">COO</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                MSc Robotics candidate at NTU ('26), AI and robotics researcher, 
                and former member of Google Cloud Startups.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-300 font-semibold">BN</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Brian Nguyen</h3>
              <p className="text-gray-300 font-medium mb-4">CTO</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                MS Electrical Engineering candidate at NTUST ('27). Developer of three published apps 
                on the App Store and specialist in gamification and learning mechanics.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-white mb-4">CryptED</div>
              <p className="text-gray-400 mb-6 max-w-md">
                The future of crypto education. Learn, earn, and master blockchain technology through gamified learning.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">© 2024 CryptED. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
