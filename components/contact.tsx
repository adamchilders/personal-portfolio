"use client"

import type React from "react"

import { useState } from "react"


export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter mb-4">LET'S WORK</h2>
          <p className="font-display font-bold text-xl tracking-wide text-gray-600">
            READY TO BUILD SOMETHING AMAZING?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display font-black text-2xl tracking-tight mb-6">GET IN TOUCH</h3>

            <div className="space-y-4">
              <div>
                <span className="font-display font-bold text-sm tracking-wide block mb-1">EMAIL</span>
                <a href="mailto:mail@adamchilders.com" className="font-mono text-lg hover:text-blue-600 transition-none">
                  mail@adamchilders.com
                </a>
              </div>

              <div>
                <span className="font-display font-bold text-sm tracking-wide block mb-1">LOCATION</span>
                <span className="font-mono text-lg">Los Angeles, CA</span>
              </div>

              <div>
                <span className="font-display font-bold text-sm tracking-wide block mb-1">RESPONSE TIME</span>
                <span className="font-mono text-lg">Usually within 24 hours</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t-4 border-gray-900">
              <div className="flex gap-6">
                <a
                  href="https://github.com/adamchilders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-medium text-sm tracking-wide hover:text-blue-600 transition-none"
                >
                  GITHUB
                </a>
                <a
                  href="https://linkedin.com/in/adamchilders/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-medium text-sm tracking-wide hover:text-emerald-600 transition-none"
                >
                  LINKEDIN
                </a>
                <a
                  href="https://x.com/adamchilders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-medium text-sm tracking-wide hover:text-blue-600 transition-none"
                >
                  TWITTER
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-white brutalist-border brutalist-shadow">
                <img
                  src="/professional-developer-portrait.jpg"
                  alt="Adam Childers"
                  className="w-80 h-96 object-cover grayscale"
                />
                <div className="p-2 bg-gray-900 text-white">
                  <span className="font-mono text-xs tracking-wide">AWS 2024</span>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-600 brutalist-shadow-green transform rotate-12"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
