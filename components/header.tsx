"use client"

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-white">
          Crypt<span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">ED</span>
        </div>
      </div>

      <nav className="flex items-center space-x-2">
        <a
          href="#how-it-works"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          How It Works
        </a>
        <a
          href="#team"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Team
        </a>
        <a
          href="#about"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          About
        </a>
      </nav>

      <div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
        <button className="absolute right-0 px-2.5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-normal text-xs transition-all duration-300 hover:from-purple-700 hover:to-pink-700 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-normal text-xs transition-all duration-300 hover:from-purple-700 hover:to-pink-700 cursor-pointer h-8 flex items-center z-10">
          Join Beta
        </button>
      </div>
    </header>
  )
}
