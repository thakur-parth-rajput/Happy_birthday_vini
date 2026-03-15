"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const GALLERY_IMAGES = [
  { src: "/images/gallery-1.jpg", alt: "A girl reading under a magical tree" },
  { src: "/images/gallery-2.jpg", alt: "A girl stargazing from a grassy hill" },
  { src: "/images/gallery-3.jpg", alt: "A girl holding a bouquet by a window" },
  { src: "/images/gallery-4.jpg", alt: "A girl walking along a cherry blossom path" },
  { src: "/images/gallery-5.jpg", alt: "A girl in a magical garden with butterflies" },
  { src: "/images/gallery-6.jpg", alt: "A girl sitting on a crescent moon" },
]

export function GallerySection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(GALLERY_IMAGES.length).fill(false)
  )
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const next = [...prev]
              next[index] = true
              return next
            })
            observer.disconnect()
          }
        },
        { threshold: 0.15 }
      )
      observer.observe(ref)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section className="relative py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="mx-auto max-w-5xl relative z-10">
        {/* Section heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block rounded-full border border-golden/50 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-golden mb-4">
            A Little Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-golden text-balance">
            Moments of peace and beauty
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el }}
              className={`group relative aspect-[4/5] rounded-2xl overflow-hidden border border-border/30 transition-all duration-700 hover:shadow-lg hover:shadow-golden/15 hover:-translate-y-1 hover:border-golden/30 ${
                visibleItems[index]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
