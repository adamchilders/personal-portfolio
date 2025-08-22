"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById("work")
    if (element) {
      const headerHeight = 80 // Approximate header height
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      const headerHeight = 80 // Approximate header height
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="pt-32 pb-16 md:pb-24 flex items-center justify-center relative bg-white">
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600 brutalist-shadow transform rotate-12 opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter mb-6 leading-none">
          HI, I'M <span className="block text-blue-600">ADAM CHILDERS</span>
        </h1>

        <p className="font-display font-bold text-2xl md:text-3xl tracking-wide mb-8 max-w-2xl mx-auto">
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
