"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-display font-bold text-sm tracking-wide block mb-2">NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white brutalist-border font-sans text-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                />
              </div>

              <div>
                <label className="font-display font-bold text-sm tracking-wide block mb-2">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-white brutalist-border font-sans text-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                />
              </div>

              <div>
                <label className="font-display font-bold text-sm tracking-wide block mb-2">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-4 bg-white brutalist-border font-sans text-lg resize-none focus:outline-none focus:ring-0 focus:border-blue-600"
                />
              </div>

              <Button
                type="submit"
                className="w-full font-display font-bold text-lg py-4 bg-gray-900 text-white brutalist-border brutalist-shadow-hover transition-none hover:bg-blue-600"
              >
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
