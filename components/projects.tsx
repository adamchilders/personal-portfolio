import { Button } from "@/components/ui/button"
import Link from "next/link"

import { projects as projectsObj } from "@/lib/projects"

// Convert the projects object to an array for display, adding the id and using fallback for missing fields
const projects = Object.entries(projectsObj).map(([id, project]) => ({
  id,
  title: project.title,
  description: project.description,
  tech: project.tech,
  image: project.image || "/placeholder.svg",
  imagetitle: project.imagetitle || project.title,
  github: project.github,
  live: project.live,
}))

export function Projects() {
  return (
    <section id="work" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter mb-4">SELECTED WORK</h2>
          <p className="font-display font-bold text-xl tracking-wide text-gray-600">
            17+ YEARS OF ENTERPRISE SOLUTIONS & INFRASTRUCTURE.
          </p>
        </div>

        <div className="grid gap-12 md:gap-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <div
                  className={`bg-white overflow-hidden ${index % 3 === 0 ? "brutalist-border brutalist-shadow" : index % 3 === 1 ? "brutalist-border-green brutalist-shadow-green" : "brutalist-border brutalist-shadow"}`}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-1 bg-gray-900 text-white">
                    <span className="font-mono text-xs tracking-wide">
                      {project.imagetitle}
                    </span>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight mb-4">{project.title}</h3>

                <p className="font-sans text-lg leading-relaxed mb-6 text-gray-700">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs font-medium px-3 py-2 bg-gray-900 text-white brutalist-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    asChild
                    className={`font-display font-bold text-sm px-6 py-3 text-white transition-none hover:bg-gray-900 ${
                      index % 3 === 0
                        ? "bg-blue-600 brutalist-border brutalist-shadow-hover"
                        : index % 3 === 1
                          ? "bg-emerald-600 brutalist-border-green brutalist-shadow-hover-green"
                          : "bg-blue-600 brutalist-border brutalist-shadow-hover"
                    }`}
                  >
                    <Link href={`/projects/${project.id}`}>VIEW PROJECT</Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="font-display font-bold text-sm px-6 py-3 bg-white text-gray-900 brutalist-border brutalist-shadow-hover transition-none hover:bg-gray-900 hover:text-white"
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      LIVE DEMO
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
