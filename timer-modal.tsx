"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"

interface TimerModalProps {
  isOpen: boolean
  onClose: () => void
  onComplete: () => void
  brainrotName: string
}

export function TimerModal({ isOpen, onClose, onComplete, brainrotName }: TimerModalProps) {
  const [timeLeft, setTimeLeft] = useState(20)

  useEffect(() => {
    if (!isOpen) {
      setTimeLeft(20)
      return
    }

    if (timeLeft === 0) {
      onComplete()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [isOpen, timeLeft, onComplete])

  const progress = ((20 - timeLeft) / 20) * 100

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {brainrotName}
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            Wait {timeLeft} seconds to unlock the link...
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-6">
          <div className="text-center">
            <div className="text-6xl font-black text-primary animate-pulse-glow">{timeLeft}</div>
            <p className="text-muted-foreground mt-2">seconds remaining</p>
          </div>

          <Progress value={progress} className="h-3" />

          <div className="text-center text-sm text-muted-foreground">⏳ The link will unlock automatically</div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
