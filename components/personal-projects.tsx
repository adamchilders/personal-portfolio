import { Button } from "@/components/ui/button"
import Link from "next/link"

import { personalProjects as personalProjectsObj } from "@/lib/projects"

// Convert the personal projects object to an array for display, adding the id and using fallback for missing fields
const personalProjects = Object.entries(personalProjectsObj).map(([id, project]) => ({
  id,
  title: project.title,
  description: project.description,
  tech: project.tech,
  image: project.image || "/placeholder.svg",
  imagetitle: project.imagetitle || project.title,
  github: project.github,
  live: project.live,
}))

export function PersonalProjects() {
  return (
    <section id="personal-projects" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter mb-4">PERSONAL PROJECTS</h2>
          <p className="font-display font-bold text-xl tracking-wide text-gray-600">
            EXPLORING NEW TECHNOLOGIES & BUILDING FOR FUN.
          </p>
        </div>

        <div className="grid gap-16 md:gap-20">
          {personalProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-slate-50 p-8 md:p-12 brutalist-border-green brutalist-shadow-green grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <div
                  className={`bg-white overflow-hidden ${index % 3 === 0 ? "brutalist-border-green brutalist-shadow-green" : index % 3 === 1 ? "brutalist-border brutalist-shadow" : "brutalist-border-green brutalist-shadow-green"}`}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-1 bg-emerald-600 text-white">
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
                      className="font-mono text-xs font-medium px-3 py-2 bg-emerald-600 text-white brutalist-border-green"
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
                        ? "bg-emerald-600 brutalist-border-green brutalist-shadow-hover-green"
                        : index % 3 === 1
                          ? "bg-blue-600 brutalist-border brutalist-shadow-hover"
                          : "bg-emerald-600 brutalist-border-green brutalist-shadow-hover-green"
                    }`}
                  >
                    <Link href={`/personal-projects/${project.id}`}>VIEW PROJECT</Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="font-display font-bold text-sm px-6 py-3 bg-white text-gray-900 brutalist-border-green brutalist-shadow-hover-green transition-none hover:bg-emerald-600 hover:text-white"
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
