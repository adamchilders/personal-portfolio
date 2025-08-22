import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { blogPosts } from "@/lib/blog"

// Convert blog posts object to array and sort by date
const posts = Object.entries(blogPosts)
  .map(([id, post]) => ({ id, ...post }))
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white brutalist-border border-b-4 border-t-0 border-l-0 border-r-0 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button asChild variant="ghost" className="font-display font-bold brutalist-border brutalist-shadow-hover">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              BACK TO HOME
            </Link>
          </Button>
          <div className="font-display font-black text-xl tracking-tight">BLOG</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display font-black text-4xl md:text-6xl tracking-tighter mb-6">
            THOUGHTS & INSIGHTS
          </h1>
          <p className="font-display font-bold text-xl tracking-wide text-gray-600 mb-8">
            SHARING LESSONS LEARNED FROM 17+ YEARS IN TECH.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {posts.map((post, index) => (
              <article
                key={post.id}
                className="bg-slate-50 p-8 md:p-12 brutalist-border brutalist-shadow hover:brutalist-shadow-hover transition-all duration-200"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs font-medium px-3 py-1 bg-gray-900 text-white brutalist-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="font-display font-black text-2xl md:text-3xl tracking-tight mb-4 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="font-sans text-lg leading-relaxed mb-6 text-gray-700">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-mono">{post.readTime}</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="font-display font-bold text-sm px-6 py-3 bg-blue-600 text-white brutalist-border brutalist-shadow-hover transition-none hover:bg-gray-900"
                  >
                    <Link href={`/blog/${post.id}`}>
                      READ MORE
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight mb-6">
            WANT TO DISCUSS THESE TOPICS?
          </h2>
          <p className="font-sans text-xl leading-relaxed mb-8 text-gray-300">
            I'm always interested in connecting with fellow developers and sharing experiences. Let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="font-display font-bold text-lg px-8 py-4 bg-blue-600 text-white brutalist-border brutalist-shadow-hover"
            >
              <Link href="/#contact">GET IN TOUCH</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="font-display font-bold text-lg px-8 py-4 bg-white text-gray-900 brutalist-border brutalist-shadow-hover"
            >
              <Link href="/#work">VIEW MY WORK</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
