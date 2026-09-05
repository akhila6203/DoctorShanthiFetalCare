import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { testimonials } from "../../data/doctorData"
import SectionTitle from "../common/SectionTitle"

export default function TestimonialsPreview() {
  const [active, setActive] = useState(0)
  const total = testimonials.length

  const prev = () => setActive((i) => (i === 0 ? total - 1 : i - 1))
  const next = () => setActive((i) => (i === total - 1 ? 0 : i + 1))

  return (
    <section id="testimonials" className="section-pad bg-[#F8F4FC]">
      <div className="container-site">
        <SectionTitle
          align="center"
          eyebrow="Patient Stories"
          title="The Clinical Journal"
          description="Words from families we care for — real experiences, real trust."
        />

        <div className="relative mx-auto max-w-4xl">
          <button
            type="button"
            onClick={prev}
            className="absolute top-1/2 -left-2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-brand-soft bg-white shadow-md transition hover:border-brand-pink/40 sm:-left-5 sm:size-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="size-5 text-brand-navy" />
          </button>

          <div className="overflow-hidden px-6 sm:px-10">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((item) => (
                <article
                  key={item.id}
                  className="w-full shrink-0 rounded-[20px] border border-brand-soft bg-white p-6 shadow-[0_10px_32px_rgba(102,58,142,0.08)] sm:p-8"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-full bg-brand-teal/15" aria-hidden="true" />
                      <div className="relative flex size-12 items-center justify-center rounded-full bg-linear-to-br from-brand-purple to-brand-pink text-sm font-bold text-white">
                        {item.initials}
                      </div>
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-brand-navy">{item.name}</p>
                      <p className="text-[13px] text-brand-teal">{item.handle}</p>
                    </div>
                  </div>
                  <p className="text-[15px] leading-relaxed text-brand-navy/75">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-2">
                    <span className="text-[13px] font-medium text-brand-navy/70">Rating:</span>
                    <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            className="absolute top-1/2 -right-2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-brand-soft bg-white shadow-md transition hover:border-brand-pink/40 sm:-right-5 sm:size-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="size-5 text-brand-navy" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              className={`h-1.5 rounded-full transition-all ${active === index ? "w-8 bg-brand-pink" : "w-4 bg-brand-pink/25"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
