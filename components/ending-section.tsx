"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function EndingSection() {
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
      { threshold: 0.3 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-40 px-6 md:px-12 overflow-hidden"
    >
      {/* Ghibli girl background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/girl-sunset.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-40 md:opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div
        className={`mx-auto max-w-xl relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4" style={{ border: '1.5px solid #f0c850', color: '#f0c850' }}>
          Until Next Time
        </span>

        {/* ========================================
            EDIT YOUR ENDING MESSAGE BELOW
           ======================================== */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance" style={{ color: '#f0c850' }}>
          Keep Shining Bright!
        </h2>
<p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-6">
  That’s all this little page had to say.<br /><br />

  Nothing big,<br />
  nothing dramatic.<br /><br />

  Just a small reminder that<br />
  today is about you.<br /><br />

  Aur haan…<br />
  hamesha hansti khelti rehna,<br />
  jaise hamesha rehti ho.<br /><br />

  Once again,<br />
  <span style={{ color: "#f0c850", fontWeight: "600" }}>
    Happy Birthday, Vini.
  </span>
</p>

        <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
          Take care and keep smiling :)
        </p>

        {/* Decorative sparkles */}
        <div className="flex items-center gap-3 mt-10">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="animate-sparkle"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <svg
                width={i % 2 === 0 ? "12" : "8"}
                height={i % 2 === 0 ? "12" : "8"}
                viewBox="0 0 24 24"
                fill={i % 2 === 0 ? "#f0c850" : "#e8a060"}
              >
                <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" />
              </svg>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <p className="text-xs text-muted-foreground/60">
            Made with care, just for you.
          </p>
        </div>
      </div>
    </section>
  )
}
