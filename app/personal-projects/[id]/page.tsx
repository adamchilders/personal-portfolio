import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { personalProjects } from "@/lib/projects"

export default function PersonalProjectPage({ params }: { params: { id: string } }) {
  const project = personalProjects[params.id as keyof typeof personalProjects]

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-black text-4xl mb-4">PROJECT NOT FOUND</h1>
          <Link href="/" className="font-display font-bold text-emerald-600 hover:underline">
            BACK TO HOME
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white brutalist-border-green border-b-4 border-t-0 border-l-0 border-r-0 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button asChild variant="ghost" className="font-display font-bold brutalist-border-green brutalist-shadow-hover-green">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              BACK
            </Link>
          </Button>
          <div className="flex gap-4">
            <Button
              asChild
              className="font-display font-bold bg-emerald-600 text-white brutalist-border-green brutalist-shadow-hover-green"
            >
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                LIVE DEMO
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="font-display font-bold brutalist-border-green brutalist-shadow-hover-green bg-transparent"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GITHUB
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display font-black text-4xl md:text-6xl tracking-tighter mb-6">{project.title}</h1>
              <p className="font-sans text-xl leading-relaxed mb-8 text-gray-700">{project.longDescription}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs font-medium px-3 py-2 bg-emerald-600 text-white brutalist-border-green"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white brutalist-border-green brutalist-shadow-green overflow-hidden">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight mb-8">KEY FEATURES</h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-emerald-600 brutalist-border-green flex-shrink-0 mt-1"></div>
                    <span className="font-sans text-lg text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight mb-8">CHALLENGES SOLVED</h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-600 brutalist-border flex-shrink-0 mt-1"></div>
                    <span className="font-sans text-lg text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight mb-6">
            LIKE WHAT YOU SEE?
          </h2>
          <p className="font-sans text-xl leading-relaxed mb-8 text-emerald-100">
            Check out more of my personal projects or get in touch to discuss how we can work together on your next idea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="font-display font-bold text-lg px-8 py-4 bg-white text-emerald-600 brutalist-border-green brutalist-shadow-hover-green"
            >
              <Link href="/#contact">GET IN TOUCH</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="font-display font-bold text-lg px-8 py-4 bg-transparent text-white border-white brutalist-border brutalist-shadow-hover hover:bg-white hover:text-emerald-600"
            >
              <Link href="/#personal-projects">VIEW MORE PROJECTS</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
