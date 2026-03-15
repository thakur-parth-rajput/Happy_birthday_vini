"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

/* ========================================
   EDIT YOUR BIRTHDAY MESSAGES BELOW
   ======================================== */
const BIRTHDAY_MESSAGES = [
  {
    badge: "A WARM WISH",
    title: "Happy  19th b'day",
    message:
      "Wishing you a day filled with happiness and a year full of great moments. Bs dua h ki ye naya saal tumhari life me aur zyada sukoon, smiles aur achhe moments laaye. Tum Hmesha Waisi hi rehna — thodi si akad, thoda sa gussa, aur vo  pyari si hansi jo kisi ka bhi din bna deti h ",
  },
 
  
 {
  badge: "WHAT MAKES YOU DIFFERENT",
  title: "Something I Always Noticed",
  message: [
    "Your attitude.",
    "Your unapologetic nature.",
    "That quiet stubbornness you carry.",
    "And the fire in you that never lets you bend — that’s something I always admired."
  ],
},
{
  badge: "MY WISHES FOR YOU",
  title: "FOR THE YEAR AHEAD",
  message: `
Aaj tumhari life ka ek aur saal shuru ho raha hai.

Sach kahun to birthday sirf age badhne ka din nahi hota,
ye thoda sa ruk kar dekhne ka din bhi hota hai
ki hum kitna grow kar chuke hain.

Kabhi kabhi life perfect nahi hoti,
lekin phir bhi usme chhoti chhoti cheezein hoti hain
jo sab kuch worth it bana deti hain.

Aur kabhi kabhi woh log bhi
jo zindagi ko thoda sa aur light bana dete hain.

I Hope 
ki aane wale din tumhe aise moments dein
jahan tum khud ko thoda sa ruk kar mehsoos karo
aur socho —
"haan, I'm the best. Mujhe kisi or k opinions ki zarurat nahi hai. I am enough, just the way I am."   

Baaki sab to time sikhata hi rehta hai.

Just keep being you,
kyunki kabhi kabhi wahi sabse achhi baat hoti hai.

Happy Birthday, Vini. 🤍
`,
  wishes: []
}
]

export function MessageSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(BIRTHDAY_MESSAGES.length).fill(false)
  )
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    cardRefs.current.forEach((ref, index) => {
      if (!ref) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const next = [...prev]
              next[index] = true
              return next
            })
            observer.disconnect()
          }
        },
        { threshold: 0.2 }
      )
      observer.observe(ref)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section id="wishes" className="relative overflow-hidden">
      {/* Message 1 - Full width with right-side girl */}
      <div
        ref={(el) => { cardRefs.current[0] = el }}
        className={`relative py-20 md:py-28 px-6 md:px-12 overflow-hidden transition-all duration-700 ${
          visibleCards[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Ghibli girl background - right side */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/girl-nature.jpg"
            alt=""
            fill
            className="object-cover object-right opacity-40 md:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-xl">
            <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4" style={{ border: '1.5px solid #f0c850', color: '#f0c850' }}>
              {BIRTHDAY_MESSAGES[0].badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#f0c850' }}>
              {BIRTHDAY_MESSAGES[0].title}
            </h2>
            <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
              {BIRTHDAY_MESSAGES[0].message}
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border/30" />

      {/* Message 2 - Split layout: girl image left, text right */}
      <div
        ref={(el) => { cardRefs.current[1] = el }}
        className={`relative py-16 md:py-24 px-6 md:px-12 bg-dark-surface transition-all duration-700 ${
          visibleCards[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "150ms" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Girl image */}
          <div className="relative w-full md:w-[45%] aspect-[3/4] rounded-2xl overflow-hidden shrink-0">
            <Image
              src="/images/girl-flowers.jpg"
              alt="Cute anime girl smiling among flowers"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4" style={{ border: '1.5px solid #f0c850', color: '#f0c850' }}>
              {BIRTHDAY_MESSAGES[1].badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#f0c850' }}>
              {BIRTHDAY_MESSAGES[1].title}
            </h2>
           <div className="text-foreground/90 text-base md:text-lg leading-relaxed space-y-2">
  {(BIRTHDAY_MESSAGES[1].message as string[]).map((line, i) => (
    <p key={i}>{line}</p>
  ))}
</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border/30" />

      {/* Message 3 - Wishes list with right-side girl */}
      <div
        ref={(el) => { cardRefs.current[2] = el }}
        className={`relative py-20 md:py-28 px-6 md:px-12 overflow-hidden transition-all duration-700 ${
          visibleCards[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        {/* Ghibli girl background - right side */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/girl-stars.jpg"
            alt=""
            fill
            className="object-cover object-right opacity-40 md:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-xl">
            <span className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4" style={{ border: '1.5px solid #f0c850', color: '#f0c850' }}>
              {BIRTHDAY_MESSAGES[2].badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#f0c850' }}>
              {BIRTHDAY_MESSAGES[2].title}
            </h2>
           <p className="text-foreground/90 text-base md:text-lg leading-relaxed whitespace-pre-line">
  {BIRTHDAY_MESSAGES[2].message}
</p>
            <ul className="space-y-3">
              {BIRTHDAY_MESSAGES[2].wishes?.map((wish, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/90 text-base md:text-lg leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-golden shrink-0" />
                  {wish}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
