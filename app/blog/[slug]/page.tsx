import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { blogPosts } from "@/lib/blog"
import { notFound } from "next/navigation"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  // Convert markdown-like content to HTML (basic implementation)
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return `<h1 key=${index} class="font-display font-black text-3xl md:text-4xl tracking-tight mb-6 mt-12 first:mt-0">${line.slice(2)}</h1>`
        }
        if (line.startsWith('## ')) {
          return `<h2 key=${index} class="font-display font-black text-2xl md:text-3xl tracking-tight mb-4 mt-10">${line.slice(3)}</h2>`
        }
        if (line.startsWith('### ')) {
          return `<h3 key=${index} class="font-display font-bold text-xl md:text-2xl tracking-tight mb-3 mt-8">${line.slice(4)}</h3>`
        }
        
        // Lists
        if (line.startsWith('- ')) {
          return `<li key=${index} class="font-sans text-lg leading-relaxed mb-2 ml-6">${line.slice(2)}</li>`
        }
        
        // Bold text
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
        
        // Code blocks (inline)
        line = line.replace(/`(.*?)`/g, '<code class="font-mono text-sm bg-gray-100 px-2 py-1 rounded">$1</code>')
        
        // Empty lines
        if (line.trim() === '') {
          return `<br key=${index} />`
        }
        
        // Regular paragraphs
        return `<p key=${index} class="font-sans text-lg leading-relaxed mb-6">${line}</p>`
      })
      .join('')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white brutalist-border border-b-4 border-t-0 border-l-0 border-r-0 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button asChild variant="ghost" className="font-display font-bold brutalist-border brutalist-shadow-hover">
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              BACK TO BLOG
            </Link>
          </Button>
          <Button
            variant="outline"
            className="font-display font-bold brutalist-border brutalist-shadow-hover bg-transparent"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: post.title,
                  url: window.location.href,
                })
              } else {
                navigator.clipboard.writeText(window.location.href)
              }
            }}
          >
            <Share2 className="w-4 h-4 mr-2" />
            SHARE
          </Button>
        </div>
      </header>

      {/* Article Header */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs font-medium px-3 py-2 bg-gray-900 text-white brutalist-border"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display font-black text-3xl md:text-5xl tracking-tighter mb-6">
            {post.title}
          </h1>

          <p className="font-sans text-xl leading-relaxed mb-8 text-gray-700">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-600 pb-8 border-b-2 border-gray-200">
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
            <div className="font-mono">By {post.author}</div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-black text-3xl md:text-5xl tracking-tight mb-6">
            ENJOYED THIS POST?
          </h2>
          <p className="font-sans text-xl leading-relaxed mb-8 text-gray-300">
            Let's connect and discuss these topics further. I'm always interested in hearing different perspectives.
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
              <Link href="/blog">READ MORE POSTS</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
