"use client"
import { MatrixCanvas } from "@/components/matrix-canvas"
import { Terminal } from "@/components/terminal"

export default function MatrixTerminalPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <MatrixCanvas />
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <Terminal />
        </div>
      </div>
    </div>
  )
}
