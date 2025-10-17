"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

interface BrainrotCardProps {
  brainrot: {
    id: string
    name: string
    color: string
    hasTimer: boolean
  }
  onClick: () => void
  delay: number
}

export function BrainrotCard({ brainrot, onClick, delay }: BrainrotCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 ${
        isHovered ? "border-primary" : "border-border"
      }`}
      style={{
        animation: `fadeInUp 0.6s ease-out ${delay}ms both`,
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${brainrot.color} opacity-20`} />

      <div className="relative p-8 flex flex-col items-center justify-center min-h-[280px]">
        {/* Placeholder Image */}
        <div
          className={`w-32 h-32 mb-6 rounded-full bg-gradient-to-br ${brainrot.color} flex items-center justify-center text-6xl animate-float`}
        >
          {brainrot.id === "dragon-canelony" && "🐉"}
          {brainrot.id === "garama-madungdung" && "👾"}
          {brainrot.id === "la-grande-combinacion" && "🎭"}
          {brainrot.id === "esok-secola" && "🎪"}
          {brainrot.id === "spaguetti-toaletti" && "🍝"}
          {brainrot.id === "kepat-ketupat" && "🎁"}
          {brainrot.id === "combinacionas" && "✨"}
        </div>

        <h3 className="text-2xl font-bold text-center mb-2 text-balance">{brainrot.name}</h3>

        {brainrot.hasTimer && (
          <span className="text-sm text-muted-foreground bg-primary/20 px-3 py-1 rounded-full">⏱️ 20s Timer</span>
        )}

        <div
          className={`absolute inset-0 bg-gradient-to-br ${brainrot.color} opacity-0 hover:opacity-10 transition-opacity duration-300`}
        />
      </div>
    </Card>
  )
}
