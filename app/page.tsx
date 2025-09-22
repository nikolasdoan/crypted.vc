"use client"

import { useEffect, useState } from 'react'
import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import ShaderBackground from "@/components/shader-background"
// Removed Spline in favor of Rive hero
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas'
import { LampDemo } from "@/components/ui/lamp"
import Image from 'next/image'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export default function CryptEDWebsite() {
  const [isMobile, setIsMobile] = useState(false)
  const [riveInteracted, setRiveInteracted] = useState(false)

  // Rive: black cat overlay on hero
  const { RiveComponent, rive } = useRive({
    src: '/black_cat.riv',
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

  // Rive animation now plays on both mobile and desktop
  useEffect(() => {
    if (!rive) return
    rive.play()
  }, [rive])

  // Toggle between Rive animation and lamp/text
  const handleRiveInteraction = () => {
    setRiveInteracted(!riveInteracted)
  }

  const testimonials = [
    {
      quote: "Tokenization researcher and author focused on digital inclusion and real-world crypto impact.",
      name: "Paolo Joseph Lising",
      designation: "CEO",
      src: "/avatars/paolo_ava.png",
      email: "paolo@crypted.vc",
    },
    {
      quote: "AI engineer and app builder specializing in gamification and learning experiences.",
      name: "Brian Nguyen",
      designation: "CTO",
      src: "/avatars/brian_avatar.png",
      email: "brian@crypted.vc",
    },
    {
      quote: "AI/Robotics leader, ex-Google Cloud Startups, and founder of TECXMATE.COM.",
      name: "Nikolas Doan",
      designation: "COO",
      src: "/avatars/nikolas_avatar.jpeg",
      email: "niko@crypted.vc",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* OKX-style Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/crypted-logo-tranparent-cropped.svg" alt="CryptED logo" width={40} height={40} className="w-10 h-10 shrink-0" />
              <div className="text-2xl font-bold text-white">CryptED</div>
            </div>
            <div className="flex items-center space-x-4">
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

      {/* Rive Hero Section with Lamp Overlay */}
      <section 
        className="pt-0 min-h-screen relative bg-black overflow-hidden"
        onClick={handleRiveInteraction}
        onTouchStart={handleRiveInteraction}
      >
        {/* Rive Animation - Ultra smooth transition to front */}
        <div 
          className={`w-full h-screen absolute inset-0 transition-all duration-1000 ease-in-out ${
            riveInteracted 
              ? 'z-60 opacity-100 scale-100 translate-y-0' 
              : 'z-0 opacity-60 scale-95 translate-y-4'
          }`}
        >
          {RiveComponent && (
            <RiveComponent 
              style={{ 
                width: '100%', 
                height: '100%',
                touchAction: 'pan-y',
                pointerEvents: isMobile ? 'none' : (riveInteracted ? 'auto' : 'none')
              }} 
            />
          )}
        </div>
        
        {/* Lamp Component - Fixed relative to hero section */}
        <div 
          className={`absolute top-0 left-0 right-0 transition-all duration-1000 ease-in-out w-full h-auto ${
            riveInteracted 
              ? 'z-40 opacity-30 scale-90 translate-y-0 blur-md' 
              : 'z-40 opacity-100 scale-100 translate-y-0 blur-0'
          }`}
        >
          <div className="h-[60vh] flex items-center justify-center">
            <LampDemo />
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section id="team" className="relative py-20 min-h-[70vh] bg-gradient-to-b from-black via-\[#5b10fd\]/30 to-\[#5b10fd\]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white">Meet Our Team</h2>
          </div>
          <AnimatedTestimonials testimonials={testimonials} autoplay className="py-0" />
        </div>
        {/* Subtle bottom glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-\[#5b10fd\]/50 to-transparent blur-2xl"
        />
      </section>


      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/crypted-logo-tranparent-cropped.svg" alt="CryptED logo" width={44} height={44} className="w-11 h-11 shrink-0" />
                <div className="text-2xl font-bold text-white">Crypted Ventures</div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Learn, earn, and master blockchain with CryptED.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/crypted-vc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
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

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-3">
                <li><a href="mailto:hello@crypted.vc" className="text-gray-400 hover:text-white transition-colors">hello@crypted.vc</a></li>
                <li><a href="mailto:brian@crypted.vc" className="text-gray-400 hover:text-white transition-colors">brian@crypted.vc</a></li>
                <li><a href="mailto:niko@crypted.vc" className="text-gray-400 hover:text-white transition-colors">niko@crypted.vc</a></li>
                <li><a href="mailto:paolo@crypted.vc" className="text-gray-400 hover:text-white transition-colors">paolo@crypted.vc</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">© 2024 Crypted Ventures. All rights reserved.</p>
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
