import { Pin, Clock3 } from "lucide-react"
import { blogPosts } from "../../data/doctorData"
import SectionTitle from "../common/SectionTitle"

export default function BlogPreview() {
  return (
    <section id="blog" className="section-pad bg-white">
      <div className="container-site">
        <SectionTitle
          align="center"
          eyebrow="Health Blog & Insights"
          title="Guidance for a Healthier Pregnancy"
          description="Expert articles on prenatal scans, genetic screening, and maternal wellness."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-[20px] border-2 border-brand-pink/25 bg-brand-blush/30 transition hover:border-brand-pink/45 hover:shadow-[0_8px_28px_rgba(217,76,138,0.1)]"
            >
              <div className="border-b border-brand-pink/15 bg-linear-to-r from-brand-purple/90 to-brand-pink/85 px-6 py-4">
                <div className="flex items-start gap-2">
                  <Pin className="mt-0.5 size-4 shrink-0 text-white/90" aria-hidden="true" />
                  <div>
                    <span className="text-[11px] font-semibold tracking-wide text-white/75 uppercase">
                      {post.tag}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold leading-snug text-white">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[14px] leading-relaxed text-brand-navy/75">{post.excerpt}</p>
                <div className="mt-4 space-y-3">
                  {post.content.map((paragraph, index) => (
                    <p key={index} className="text-[14px] leading-relaxed text-brand-navy/70">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <p className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-medium text-brand-purple/70">
                  <Clock3 className="size-3.5" aria-hidden="true" />
                  {post.readTime}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
