"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white brutalist-border border-t-0 border-l-0 border-r-0">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-display font-black text-xl tracking-tight">ALEX.DEV</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("work")}
            className="font-display font-bold text-sm tracking-wide hover:bg-gray-900 hover:text-white transition-none brutalist-border border-transparent hover:border-gray-900"
          >
            WORK
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("about")}
            className="font-display font-bold text-sm tracking-wide hover:bg-gray-900 hover:text-white transition-none brutalist-border border-transparent hover:border-gray-900"
          >
            ABOUT
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("contact")}
            className="font-display font-bold text-sm tracking-wide hover:bg-gray-900 hover:text-white transition-none brutalist-border border-transparent hover:border-gray-900"
          >
            CONTACT
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden font-display font-bold text-sm tracking-wide"
        >
          MENU
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white brutalist-border border-t-4 border-l-0 border-r-0 border-b-0">
          <nav className="flex flex-col p-4 gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("work")}
              className="font-display font-bold text-sm tracking-wide justify-start hover:bg-gray-900 hover:text-white transition-none"
            >
              WORK
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="font-display font-bold text-sm tracking-wide justify-start hover:bg-gray-900 hover:text-white transition-none"
            >
              ABOUT
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="font-display font-bold text-sm tracking-wide justify-start hover:bg-gray-900 hover:text-white transition-none"
            >
              CONTACT
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
