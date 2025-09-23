"use client"

import { useEffect, useState, useRef } from 'react'
import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import ShaderBackground from "@/components/shader-background"
// Removed Spline in favor of Rive hero
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas'
import { LampDemo } from "@/components/ui/lamp"
import Image from 'next/image'
import { Twitter, Linkedin, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CryptEDWebsite() {
  const [isMobile, setIsMobile] = useState(false)
  const [riveInteracted, setRiveInteracted] = useState(false)
  const [selectedMember, setSelectedMember] = useState<{
    id: string;
    name: string;
    role: string;
    photo: string;
    description: string;
    twitter: string;
    linkedin: string;
  } | null>(null)
  const heroRef = useRef<HTMLDivElement | null>(null)

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

  // On mobile, auto-trigger the hero interaction when the hero comes into view
  useEffect(() => {
    if (!isMobile) return
    const sectionEl = heroRef.current
    if (!sectionEl) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setRiveInteracted(true)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -20% 0px' }
    )

    observer.observe(sectionEl)

    // If already in view on mount, trigger immediately
    requestAnimationFrame(() => {
      const rect = sectionEl.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      if (rect.top < vh * 0.9 && rect.bottom > vh * 0.1) {
        setRiveInteracted(true)
      }
    })

    return () => observer.disconnect()
  }, [isMobile])

  // Toggle between Rive animation and lamp/text
  const handleRiveInteraction = () => {
    if (isMobile) {
      // On mobile, a tap should bring the animation forward
      setRiveInteracted(true)
    } else {
      // Desktop retains toggle behavior
      setRiveInteracted(!riveInteracted)
    }
  }

  const teamMembers = [
    {
      id: 'paolo',
      name: 'Paolo Joseph Lising',
      role: 'Managing Partner / Founder',
      photo: '/avatars/portrait-paolo.png',
      description: 'Blockchain Researcher at Harvard University. Author on token economy business and policy.',
      twitter: '#',
      linkedin: '#'
    },
    {
      id: 'brian',
      name: 'Brian Nguyen',
      role: 'CTO',
      photo: '/avatars/portrait-brian.png',
      description: 'EE & AI Engineer, App Developer',
      twitter: '#',
      linkedin: '#'
    },
    {
      id: 'nikolas',
      name: 'Nikolas Doan',
      role: 'COO',
      photo: '/avatars/portrait-niko.png',
      description: 'Product Designer',
      twitter: '#',
      linkedin: '#'
    }
  ]


  return (
    <div className="min-h-screen bg-black">
      {/* OKX-style Header */}
      <header className="fixed top-0 left-0 right-0 z-[2000] backdrop-blur-md border-b border-white/10">
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
        ref={heroRef}
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">Meet Our Team</h2>
            <p className="text-gray-300 mt-4">Leaders in blockchain, AI, and product design</p>
          </div>

          <div className="grid gap-4 md:gap-3 lg:gap-5 md:grid-cols-3 justify-items-center">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden max-w-[240px] md:max-w-[260px] mx-auto cursor-pointer hover:border-purple-400/50 transition-all duration-300"
                onClick={() => setSelectedMember(member)}
              >
                <div className="w-full aspect-[4/5] bg-gray-800">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover"
                    priority={member.id === 'paolo'}
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-base font-semibold text-white">{member.name}</h3>
                  <p className="text-gray-400 text-[11px] mt-1">{member.role}</p>
                  <div className="flex items-center justify-center gap-3 mt-3">
                    <a href="#" aria-label="X" className="text-white/80 hover:text-white transition-colors"><Twitter className="h-4 w-4" /></a>
                    <span className="h-5 w-px bg-white/20" />
                    <a href="#" aria-label="LinkedIn" className="text-white/80 hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Crypted Game</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Venture Capital</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">More</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-3">
                <li><a href="mailto:hello@crypted.vc" className="text-gray-400 hover:text-white transition-colors">hello@crypted.vc</a></li>
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

      {/* Team Member Modal */}
      <AnimatePresence>
      {selectedMember && (
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[3000] flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <motion.div 
            className="bg-gradient-to-b from-black via-\[#5b10fd\]/30 to-\[#5b10fd\] rounded-2xl border border-white/10 w-full max-w-3xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 24 } }}
            exit={{ opacity: 0, y: 12, scale: 0.98, transition: { duration: 0.2 } }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Photo left */}
              <div className="w-full">
                <div className="w-full aspect-[4/5] bg-black/20 rounded-xl overflow-hidden">
                  <Image
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                    width={600}
                    height={750}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text right */}
              <div className="text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedMember.name}</h2>
                <p className="text-purple-300 mb-4">{selectedMember.role}</p>
                <p className="text-gray-200 leading-relaxed mb-6">{selectedMember.description}</p>

                <div className="flex items-center gap-4">
                  <a 
                    href={selectedMember.twitter} 
                    aria-label="X" 
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Twitter className="h-6 w-6 text-white" />
                  </a>
                  <a 
                    href={selectedMember.linkedin} 
                    aria-label="LinkedIn" 
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  )
}
