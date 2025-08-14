export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-black text-4xl md:text-6xl tracking-tighter mb-8">ABOUT ME</h2>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="font-sans">
                <strong className="font-display font-bold tracking-wide">SEASONED DRUPAL DEVELOPER.</strong>
                <br />
                <strong className="font-display font-bold tracking-wide">DEVOPS ENGINEER.</strong>
                <br />
                <strong className="font-display font-bold tracking-wide">17+ YEARS EXPERIENCE.</strong>
              </p>

              <p className="font-sans text-gray-700">
                I specialize in full-stack web development and cloud infrastructure, with deep expertise in Drupal, PHP,
                and modern DevOps practices. Currently serving as Associate Director of IT at Milken Institute, I bridge
                the gap between development and operations to design & deploy performant, secure, and scalable
                applications.
              </p>

              <p className="font-sans text-gray-700">
                My experience spans translating business requirements into actionable technical solutions, managing
                development teams, and optimizing infrastructure costs. I hold a Computer Science degree from University
                of Michigan and AWS Cloud Practitioner certification.
              </p>

              <div className="pt-4">
                <p className="font-display font-bold text-lg tracking-wide">AVAILABLE FOR CONSULTING & PROJECTS.</p>
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

        <div className="mt-20">
          <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight mb-8">TECH STACK</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "DRUPAL",
              "PHP",
              "SYMFONY",
              "JAVASCRIPT",
              "DOCKER",
              "KUBERNETES",
              "AWS",
              "MYSQL",
              "LINUX",
              "JENKINS",
              "REDIS",
              "VARNISH",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-slate-50 brutalist-border p-4 text-center hover:bg-gray-900 hover:text-white transition-none cursor-default"
              >
                <span className="font-mono font-medium text-sm tracking-wide">{tech}</span>
              </div>
            ))}
            {/* </CHANGE> */}
          </div>
        </div>
      </div>
    </section>
  )
}
