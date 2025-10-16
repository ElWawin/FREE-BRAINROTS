"use client"

import { useState } from "react"
import { Menu, X, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BrainrotCard } from "@/components/brainrot-card"
import { LinkModal } from "@/components/link-modal"
import { TimerModal } from "@/components/timer-modal"

const ROBLOX_LINK = "https://www.roblox.com/share?code=a3a148a80aff6142962ea3ad237c4d58&type=Server"

const brainrots = [
  {
    id: "dragon-canelony",
    name: "Dragon Canelony",
    color: "from-orange-500 to-red-600",
    hasTimer: true,
  },
  {
    id: "garama-madungdung",
    name: "Garama Madungdung",
    color: "from-green-500 to-emerald-600",
    hasTimer: false,
  },
  {
    id: "la-grande-combinacion",
    name: "La Grande Combinación",
    color: "from-purple-500 to-pink-600",
    hasTimer: false,
  },
  {
    id: "esok-secola",
    name: "Esok Secola",
    color: "from-blue-500 to-cyan-600",
    hasTimer: false,
  },
  {
    id: "spaguetti-toaletti",
    name: "Spaguetti Toaletti",
    color: "from-yellow-500 to-orange-600",
    hasTimer: false,
  },
  {
    id: "kepat-ketupat",
    name: "Kepat Ketupat",
    color: "from-teal-500 to-green-600",
    hasTimer: false,
  },
  {
    id: "combinacionas",
    name: "Combinacionas",
    color: "from-pink-500 to-purple-600",
    hasTimer: false,
  },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedBrainrot, setSelectedBrainrot] = useState<string | null>(null)
  const [showTimer, setShowTimer] = useState(false)
  const [showLink, setShowLink] = useState(false)

  const handleBrainrotClick = (brainrot: (typeof brainrots)[0]) => {
    if (brainrot.hasTimer) {
      setSelectedBrainrot(brainrot.name)
      setShowTimer(true)
    } else {
      setSelectedBrainrot(brainrot.name)
      setShowLink(true)
    }
  }

  const handleTimerComplete = () => {
    setShowTimer(false)
    setShowLink(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-950/20 to-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            BRAINROT FINDER
          </h1>
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)} className="hover:bg-primary/20">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-card border-l border-border z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 pt-24">
          <h2 className="text-2xl font-bold mb-6 text-primary">Credits</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">Created by:</p>
            <a
              href="https://www.instagram.com/el_wawin_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:scale-105 transition-transform duration-200"
            >
              <Instagram className="h-6 w-6" />
              <span className="font-semibold">@el_wawin_</span>
            </a>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 pt-32 pb-16">
        {/* Brainrot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {brainrots.map((brainrot, index) => (
            <BrainrotCard
              key={brainrot.id}
              brainrot={brainrot}
              onClick={() => handleBrainrotClick(brainrot)}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2 text-primary">Fast</h3>
            <p className="text-muted-foreground">Instant access to servers</p>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border hover:border-secondary transition-colors">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold mb-2 text-secondary">Easy</h3>
            <p className="text-muted-foreground">One click and you're in</p>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border hover:border-accent transition-colors">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-bold mb-2 text-accent">Updated</h3>
            <p className="text-muted-foreground">Always with the best brainrots</p>
          </div>
        </div>
      </main>

      {/* Modals */}
      <TimerModal
        isOpen={showTimer}
        onClose={() => setShowTimer(false)}
        onComplete={handleTimerComplete}
        brainrotName={selectedBrainrot || ""}
      />

      <LinkModal
        isOpen={showLink}
        onClose={() => setShowLink(false)}
        link={ROBLOX_LINK}
        brainrotName={selectedBrainrot || ""}
      />
    </div>
  )
}
