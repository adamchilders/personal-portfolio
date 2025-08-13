"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white pt-20">
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600 brutalist-shadow transform rotate-12 opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter mb-8 leading-none">
          HI, I'M <span className="block text-blue-600">ADAM CHILDERS</span>
        </h1>

        <p className="font-display font-bold text-2xl md:text-3xl tracking-wide mb-12 max-w-2xl mx-auto">
          DRUPAL DEVELOPER & DEVOPS ENGINEER WITH 17+ YEARS EXPERIENCE.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToWork}
            className="font-display font-bold text-lg px-8 py-6 bg-gray-900 text-white brutalist-border brutalist-shadow-hover transition-none hover:bg-blue-600"
          >
            VIEW MY WORK
          </Button>

          <Button
            onClick={scrollToContact}
            variant="outline"
            className="font-display font-bold text-lg px-8 py-6 bg-white text-gray-900 brutalist-border brutalist-shadow-hover transition-none hover:bg-gray-900 hover:text-white"
          >
            LET'S BUILD TOGETHER
          </Button>
        </div>
      </div>
    </section>
  )
}
