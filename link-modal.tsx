"use client"

import { useState } from "react"
import { Copy, ExternalLink, Check } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface LinkModalProps {
  isOpen: boolean
  onClose: () => void
  link: string
  brainrotName: string
}

export function LinkModal({ isOpen, onClose, link, brainrotName }: LinkModalProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleOpen = () => {
    window.open(link, "_blank")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {brainrotName} Unlocked! 🎉
          </DialogTitle>
          <DialogDescription className="text-center text-lg">Here's the Roblox server link</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="flex gap-2">
            <Input value={link} readOnly className="font-mono text-sm" />
            <Button variant="outline" size="icon" onClick={handleCopy} className="shrink-0 bg-transparent">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" onClick={handleCopy} className="w-full bg-transparent">
              <Copy className="mr-2 h-4 w-4" />
              Copy Link
            </Button>
            <Button onClick={handleOpen} className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <ExternalLink className="mr-2 h-4 w-4" />
              Open Now
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
            💡 Tip: Click "Open Now" to join the server directly
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
