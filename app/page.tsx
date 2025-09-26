"use client"

import { useEffect, useState } from 'react'
import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import ShaderBackground from "@/components/shader-background"
// Removed Spline in favor of Rive hero
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas'
import { LampDemo } from "@/components/ui/lamp"
import Image from 'next/image'
import { Twitter, Linkedin, X, Github, GraduationCap, PenTool, Building2 } from 'lucide-react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'

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
  const [showLicenseModal, setShowLicenseModal] = useState(false)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [privacyContent, setPrivacyContent] = useState<string>('')
  const [termsContent, setTermsContent] = useState<string>('')

  // Rive: black cat overlay on hero
  const { RiveComponent, rive } = useRive({
    src: '/black_cat.riv',
    autoplay: true,
    stateMachines: ['BLACK CATW'],
    layout: new Layout({ 
      fit: isMobile ? Fit.Cover : Fit.Contain, 
      alignment: Alignment.Center 
    })
  }, [isMobile]) // Re-render when isMobile changes

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
    setRiveInteracted((prev) => !prev)
  }

  // Touch handling state
  const [touchStart, setTouchStart] = useState<{ x: number; y: number; time: number } | null>(null)

  // Safe tap handler for the hero that ignores clicks on links/buttons
  const handleHeroTap: React.MouseEventHandler<HTMLDivElement> = (e: any) => {
    console.log('Hero click detected!', e.type)
    const target = e.target as HTMLElement
    if (!target) return
    // Ignore clicks on interactive elements
    if (target.closest('a, button, [data-no-hero-toggle]')) {
      console.log('Click on interactive element, ignoring')
      return
    }
    console.log('Toggling Rive interaction')
    handleRiveInteraction()
  }

  // Touch handlers to distinguish between taps and swipes
  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const touch = e.touches[0]
    setTouchStart({
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    })
  }

  const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (!touchStart) return

    const touch = e.changedTouches[0]
    const deltaX = Math.abs(touch.clientX - touchStart.x)
    const deltaY = Math.abs(touch.clientY - touchStart.y)
    const deltaTime = Date.now() - touchStart.time
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

    // If it's a quick tap (not a swipe) and not on interactive elements
    if (deltaTime < 300 && distance < 50) {
      const target = e.target as HTMLElement
      if (!target.closest('a, button, [data-no-hero-toggle]')) {
        console.log('Touch tap detected, toggling Rive interaction')
        handleRiveInteraction()
      }
    }
    // If it's a swipe, let the browser handle scrolling naturally
    setTouchStart(null)
  }

  const teamMembers = [
    {
      id: 'paolo',
      name: 'Paolo Joseph Lising',
      role: 'CEO',
      photo: '/avatars/portrait-paolo.png',
      description: 'ALM Candidate, Harvard University',
      twitter: 'https://dash.harvard.edu/entities/publication/38c680e1-fd38-4927-8007-9b99784a95fb',
      linkedin: 'https://www.linkedin.com/in/paolojoseph/'
    },
    {
      id: 'brian',
      name: 'Brian Nguyen',
      role: 'CTO & Developer',
      photo: '/avatars/portrait-brian.png',
      description: 'MSc. Electrical Engineering, NTUST',
      twitter: 'https://www.tecxmate.com',
      linkedin: 'https://www.linkedin.com/in/brian-nguyen-587825235/'
    },
    {
      id: 'nikolas',
      name: 'Nikolas Doan',
      role: 'COO & Designer',
      photo: '/avatars/portrait-niko.png',
      description: 'MSc. AI/Robotics, NTU',
      twitter: 'https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AH8HC4wBT4T5k1ixLLhNjPNv_RVi-PwijNu8oMXqf4mh7nL21PUT5zluCMjJkZyOBmcdy1_51pRTnYe7erhljl_XOl2nQ3XXV8TW7isW6-0&user=ffn9iV8AAAAJ',
      linkedin: 'https://www.linkedin.com/in/nikolasdoan/'
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
              <div className="text-2xl font-bold text-white brand-title">CryptED</div>
            </div>
            <div className="flex items-center space-x-4" />
          </div>
        </div>
      </header>

      {/* Rive Hero Section with Lamp Overlay */}
      <section 
        className="pt-0 min-h-screen relative bg-black overflow-hidden pb-24 cursor-pointer"
        onClick={handleHeroTap}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
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
                width: isMobile ? '120%' : '100%', 
                height: isMobile ? '120%' : '100%',
                marginLeft: isMobile ? '-10%' : '0',
                marginTop: isMobile ? '-10%' : '0',
                touchAction: 'pan-y',
                pointerEvents: 'none' // Always disable pointer events on Rive to allow clicks through to hero
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

        {/* App Store badge overlayed on hero, centered lower-half */}
        <div className="absolute left-1/2 -translate-x-1/2 z-[70] flex items-center justify-center bottom-[12vh] md:bottom-[14vh]">
          <a href="https://apps.apple.com/tw/app/crypted-blockchain-education/id6747925774?l=en-GB" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
            <Image
              src="/Download_App_Store_RGB.png"
              alt="Download on the App Store"
              width={200}
              height={60}
              className="w-44 md:w-52 h-auto rounded-none"
              sizes="(max-width: 768px) 11rem, 13rem"
            />
          </a>
        </div>

      </section>


      {/* Mission Section */}
      <section id="mission" className="relative py-16 md:py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-gray-200 leading-relaxed text-lg">
            At CryptED, we make learning about Blockchain and Web3 fun and engaging. Through interactive gameplay,
            we help users understand the opportunities of this technology while also raising awareness of the risks it can
            pose—especially for vulnerable communities. Our mission is to give everyone the tools to stay safe and benefit
            from the world of Blockchain.
          </p>
          </div>
        </section>


      {/* Team Section */}
      <section id="team" className="relative py-20 min-h-[70vh] bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">Meet Our Team</h2>
                </div>

          <div className="grid gap-4 md:gap-3 lg:gap-5 md:grid-cols-3 justify-items-center">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="rounded-none border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden max-w-[240px] md:max-w-[260px] mx-auto cursor-pointer hover:border-purple-400/50 transition-all duration-300"
                onClick={() => setSelectedMember(member)}
              >
                <div className="w-full aspect-[4/5] bg-\[\#e3e3e3\]">
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
                    <a href={member.linkedin} aria-label="LinkedIn" className="text-white/80 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer" onClick={(e)=>e.stopPropagation()}><Linkedin className="h-4 w-4" strokeWidth={1.25} /></a>
                    <span className="h-5 w-px bg-white/20" />
                    {member.id === 'brian' ? (
                      <a href={member.twitter} aria-label="Company" className="text-white/80 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer" onClick={(e)=>e.stopPropagation()}><Building2 className="h-4 w-4" strokeWidth={1.25} /></a>
                    ) : member.id === 'nikolas' ? (
                      <a href={member.twitter} aria-label="Academic" className="text-white/80 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer" onClick={(e)=>e.stopPropagation()}><GraduationCap className="h-4 w-4" strokeWidth={1.25} /></a>
                    ) : (
                      <a href={member.twitter} aria-label="Author" className="text-white/80 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer" onClick={(e)=>e.stopPropagation()}><PenTool className="h-4 w-4" strokeWidth={1.25} /></a>
                    )}
              </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/crypted-logo-tranparent-cropped.svg" alt="CryptED logo" width={44} height={44} className="w-11 h-11 shrink-0" />
                <div className="text-2xl font-bold text-white brand-title">Crypted Ventures</div>
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
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Crypted Game</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Venture Capital</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">© 2025 Crypted Ventures. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      const res = await fetch('/privacy_policy.md')
                      const txt = await res.text()
                      setPrivacyContent(txt)
                      setShowPrivacyModal(true)
                    } catch {}
                  }}
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                >
                  Privacy Policy
                </button>
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      const res = await fetch('/terms_of_service.md')
                      const txt = await res.text()
                      setTermsContent(txt)
                      setShowTermsModal(true)
                    } catch {}
                  }}
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                >
                  Terms of Service
                </button>
                <button
                  type="button"
                  onClick={() => setShowLicenseModal(true)}
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                >
                  Attributions
                </button>
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
          onClick={() => { if (isMobile) setSelectedMember(null) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <motion.div 
            className="bg-black rounded-none border border-white/10 w-full max-w-3xl p-0 relative max-h-[90vh] overflow-y-auto shadow-[0_0_30px_rgba(91,16,253,0.35)]"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 24 } }}
            exit={{ opacity: 0, y: 12, scale: 0.98, transition: { duration: 0.2 } }}
            drag={false}
          >
            {/* Close Button (overlay, no layout shift) */}
            <button
              onClick={() => setSelectedMember(null)}
              aria-label="Close"
              className="absolute top-2 right-2 z-20 h-9 w-9 inline-flex items-center justify-center rounded-full bg-black/40 text-white/80 hover:text-white hover:bg-black/60 border border-white/20 backdrop-blur-sm transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Photo left */}
              <div className="w-full md:h-full">
                <div className="w-full aspect-square md:aspect-auto md:h-full overflow-hidden max-h-[80vh] md:max-h-none">
                  <Image
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                    width={600}
                    height={750}
                    className="w-full h-full object-cover object-[center_20%] md:object-contain"
                  />
                </div>
              </div>

              {/* Text right */}
              <div className="text-left p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedMember.name}</h2>
                <p className="text-purple-300 mb-4">{selectedMember.role}</p>
                <p className="text-gray-200 leading-relaxed mb-6">{selectedMember.description}</p>

                <div className="flex items-center gap-4">
                  <a 
                    href={selectedMember.linkedin} 
                    aria-label="LinkedIn" 
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-white" strokeWidth={1.25} />
                  </a>
                  <a 
                    href={selectedMember.twitter} 
                    aria-label={selectedMember.id === 'brian' ? 'Company' : selectedMember.id === 'nikolas' ? 'Academic' : 'Author'} 
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    {selectedMember.id === 'brian' ? (
                      <Building2 className="h-6 w-6 text-white" strokeWidth={1.25} />
                    ) : selectedMember.id === 'nikolas' ? (
                      <GraduationCap className="h-6 w-6 text-white" strokeWidth={1.25} />
                    ) : (
                      <PenTool className="h-6 w-6 text-white" strokeWidth={1.25} />
                    )}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* License Attribution Modal */}
      <AnimatePresence>
      {showLicenseModal && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[3000] flex items-center justify-center p-4"
          onClick={() => { if (isMobile) setShowLicenseModal(false) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="bg-black rounded-none border border-white/10 w-full max-w-3xl p-0 relative max-h-[90vh] overflow-y-auto shadow-[0_0_30px_rgba(91,16,253,0.35)]"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 24 } }}
            exit={{ opacity: 0, y: 12, scale: 0.98, transition: { duration: 0.2 } }}
            drag={false}
          >
            <button
              onClick={() => setShowLicenseModal(false)}
              aria-label="Close"
              className="absolute top-2 right-2 z-20 h-9 w-9 inline-flex items-center justify-center rounded-full bg-black/40 text-white/80 hover:text-white hover:bg-black/60 border border-white/20 backdrop-blur-sm transition-colors"
            >
              <X className="h-5 w-5" />
              </button>

            <div className="text-left p-6 md:p-8">
              <p className="text-gray-200 leading-relaxed">
                This product uses the 'Black Cat' animation asset created by fonckcolor, available under a Creative Commons Attribution (CC BY) license from the Rive.app Marketplace.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
      {showPrivacyModal && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[3000] flex items-center justify-center p-4"
          onClick={() => setShowPrivacyModal(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="bg-black rounded-none border border-white/10 w-full max-w-3xl p-0 relative max-h-[90vh] overflow-y-auto shadow-[0_0_30px_rgba(91,16,253,0.35)]"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 24 } }}
            exit={{ opacity: 0, y: 12, scale: 0.98, transition: { duration: 0.2 } }}
          >
            <button
              onClick={() => setShowPrivacyModal(false)}
              aria-label="Close"
              className="absolute top-2 right-2 z-20 h-9 w-9 inline-flex items-center justify-center rounded-full bg-black/40 text-white/80 hover:text-white hover:bg-black/60 border border-white/20 backdrop-blur-sm transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-left p-6 md:p-8 prose prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: privacyContent.replace(/\n/g, '<br/>') }} />
          </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Terms of Service Modal */}
      <AnimatePresence>
      {showTermsModal && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[3000] flex items-center justify-center p-4"
          onClick={() => setShowTermsModal(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="bg-black rounded-none border border-white/10 w-full max-w-3xl p-0 relative max-h-[90vh] overflow-y-auto shadow-[0_0_30px_rgba(91,16,253,0.35)]"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 24 } }}
            exit={{ opacity: 0, y: 12, scale: 0.98, transition: { duration: 0.2 } }}
          >
            <button
              onClick={() => setShowTermsModal(false)}
              aria-label="Close"
              className="absolute top-2 right-2 z-20 h-9 w-9 inline-flex items-center justify-center rounded-full bg-black/40 text-white/80 hover:text-white hover:bg-black/60 border border-white/20 backdrop-blur-sm transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-left p-6 md:p-8 prose prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: termsContent.replace(/\n/g, '<br/>') }} />
      </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  )
}
