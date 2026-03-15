"use client"

import { useRef, useState } from "react"

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {
        // Browser may block autoplay
      })
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      {/* Replace the src with your own music file if desired */}
      <audio
        ref={audioRef}
        loop
        preload="none"
        src="https://cdn.pixabay.com/audio/2024/11/28/audio_1e6c08e625.mp3"
      />
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full border-2 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-golden focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
        style={{ backgroundColor: '#2a2a40', borderColor: '#f0c850' }}
        aria-label={isPlaying ? "Mute background music" : "Play background music"}
      >
        {isPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-golden">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>
    </>
  )
}
