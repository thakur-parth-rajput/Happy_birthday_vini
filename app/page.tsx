import { LandingSection } from "@/components/landing-section"
import { MessageSection } from "@/components/message-section"
import { SurpriseSection } from "@/components/surprise-section"
import { GallerySection } from "@/components/gallery-section"
import { EndingSection } from "@/components/ending-section"
import { FloatingElements } from "@/components/floating-elements"
import { MusicToggle } from "@/components/music-toggle"

export default function BirthdayPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <FloatingElements />
      <MusicToggle />
      <LandingSection />
      <MessageSection />
      <SurpriseSection />
      <GallerySection />
      <EndingSection />
    </main>
  )
}
