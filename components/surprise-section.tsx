"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

/* ========================================
   EDIT YOUR SURPRISE MESSAGE BELOW
   ======================================== */
const SURPRISE_MESSAGE = `
I don’t know if I’m allowed to miss you anymore,
but today feels a little different.

Another year for you,
and I still remember the way you found happiness in the smallest things.

I hope today is kind to you,
and you’re surrounded by everything that makes you smile.

As for me…
I’ll just be quietly grateful.

Grateful you were born,
and that, for a while, I got to know you.

Some things aren’t meant to stay…
but they still leave something behind.

  . Happy Birthday, Vini!`

export function SurpriseSection() {
  const [revealed, setRevealed] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 px-6 md:px-12 bg-dark-surface overflow-hidden"
    >
      <div
        className={`mx-auto max-w-3xl text-center transition-all duration-700 relative z-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4" style={{ border: '1.5px solid #f0c850', color: '#f0c850' }}>
          Something Special
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance" style={{ color: '#f0c850' }}>
          Something I Wanted to Say
        </h2>

        <div className="relative mx-auto max-w-lg">
          {!revealed ? (
            <div className="flex flex-col items-center gap-6">
              <div className="relative w-40 h-40 animate-float">
                <Image
                  src="/images/surprise.jpg"
                  alt="A beautifully wrapped gift box"
                  fill
                  className="object-cover rounded-2xl shadow-lg shadow-golden/10"
                />
                <div className="absolute -top-2 -right-2 animate-sparkle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#f0c850">
                    <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" />
                  </svg>
                </div>
              </div>

              <button
                onClick={() => setRevealed(true)}
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-golden focus-visible:ring-offset-2 focus-visible:ring-offset-dark-surface cursor-pointer"
                style={{ backgroundColor: '#f0c850', color: '#1a1a2e' }}
              >
                {"Before U go... \u{1F48C}"}
              </button>
            </div>
          ) : (
            <div className="animate-fade-in-up">
              <div className="rounded-2xl bg-card border border-border/50 p-8 shadow-lg shadow-golden/10">
                <div className="flex justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-golden">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <p className="text-foreground leading-relaxed text-lg font-medium">
                  {SURPRISE_MESSAGE}
                </p>
                <div className="mt-6 flex justify-center gap-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="animate-sparkle"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#f0c850">
                        <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
