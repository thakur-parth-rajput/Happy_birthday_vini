"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function LandingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background - Ghibli girl close-up */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-girl.jpg"
          alt="Ghibli-style anime girl in warm golden sunset light"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Content - left aligned like reference */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12">
        <div
          className={`max-w-xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6" style={{ border: '1.5px solid #f0c850', color: '#f0c850' }}>
            16th MARCH 2026
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance mb-6" style={{ color: '#e8e0d4' }}>
            {"Happy Birthday,"}
            <br />
            <span className="text-golden">Vini!</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed mb-8">
            Here is a little corner of the internet, made just for you. Scroll down to unwrap your wishes.
          </p>

          <a
            href="#wishes"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-golden focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{ backgroundColor: '#f0c850', color: '#1a1a2e' }}
          >
            Open Wishes
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-pulse-soft">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-medium">Scroll down</span>
          <div className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1" style={{ borderColor: '#f0c850' }}>
            <div className="w-1 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#f0c850' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
