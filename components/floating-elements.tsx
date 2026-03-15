"use client"

import { useEffect, useState } from "react"

interface FloatingItem {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  type: "petal" | "sparkle" | "heart"
}

export function FloatingElements() {
  const [items, setItems] = useState<FloatingItem[]>([])

  useEffect(() => {
    const generated: FloatingItem[] = []
    for (let i = 0; i < 15; i++) {
      generated.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 15,
        size: 6 + Math.random() * 12,
        type: i < 5 ? "petal" : i < 10 ? "sparkle" : "heart",
      })
    }
    setItems(generated)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute animate-petal-fall"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            top: "-5%",
          }}
        >
          {item.type === "petal" && (
            <svg
              width={item.size}
              height={item.size}
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-30"
            >
              <ellipse
                cx="12"
                cy="12"
                rx="6"
                ry="10"
                transform="rotate(-30 12 12)"
                fill="#f0c850"
                opacity="0.5"
              />
            </svg>
          )}
          {item.type === "sparkle" && (
            <svg
              width={item.size * 0.8}
              height={item.size * 0.8}
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-25"
            >
              <path
                d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z"
                fill="#e8a060"
              />
            </svg>
          )}
          {item.type === "heart" && (
            <svg
              width={item.size * 0.7}
              height={item.size * 0.7}
              viewBox="0 0 24 24"
              fill="#f0c850"
              className="opacity-20"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}
