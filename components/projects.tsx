import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    id: "milken-institute-rebuild",
    title: "MILKEN INSTITUTE WEBSITE REBUILD",
    description:
      "Led initiative to rebuild website frontend to improve site reliability and cache performance. Reduced yearly IT spending by over $35,000 through optimization and smart caching layers.",
    tech: ["DRUPAL", "PHP", "AWS", "VARNISH", "REDIS"],
    image: "/milken-website-rebuild.png",
    github: "#",
    live: "https://milkeninstitute.org",
  },
  {
    id: "drupal-migration-platform",
    title: "DRUPAL MIGRATION PLATFORM",
    description:
      "Successfully migrated legacy Drupal 7 websites to Drupal 8/9 and coordinated content migration from Saxotech (Newscycle) systems to Drupal with data integrity verification.",
    tech: ["DRUPAL", "PHP", "MYSQL", "MIGRATION", "TESTING"],
    image: "/drupal-migration-dashboard.png",
    github: "#",
    live: "#",
  },
  {
    id: "3d-video-management",
    title: "3D VIDEO MANAGEMENT SYSTEM",
    description:
      "Designed custom application for managing playback of encrypted 3-D video content on custom hardware, plus healthcare portal for user management and content distribution.",
    tech: ["C#.NET", "SQL CE", "ENCRYPTION", "HEALTHCARE"],
    image: "/3d-video-system.png",
    github: "#",
    live: "#",
  },
]

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
                      {project.title.toLowerCase().replace(/\s+/g, "_")}.jpg
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
