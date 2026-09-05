import { ScanHeart, Sparkles, HeartPulse } from "lucide-react"
import { serviceCategories } from "../../data/services"
import SectionTitle from "../common/SectionTitle"

const icons = {
  scan: ScanHeart,
  dna: Sparkles,
  care: HeartPulse,
}

export default function ServicesPreview() {
  return (
    <section id="services" className="section-pad bg-brand-blush/50">
      <div className="container-site">
        <SectionTitle
          align="center"
          eyebrow="Services Provided"
          title="Our Expertise"
          description="Advanced prenatal diagnosis, fetal care and comprehensive women's health — delivered with precision and compassion."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category) => {
            const Icon = icons[category.icon]
            return (
              <article key={category.id} className="service-card relative">
                <span className="absolute -top-px -right-px rounded-bl-xl rounded-tr-[17px] bg-brand-pink px-2.5 py-1 text-[11px] font-bold text-white">
                  {category.number}
                </span>
                <div className="flex items-center gap-3 border-b border-brand-soft pb-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-pink text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="title-underline text-[17px] font-semibold text-brand-navy">
                    {category.title}
                  </h3>
                </div>
                <ul className="mt-3.5 space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[13px] leading-snug text-brand-navy/70 before:mt-1.5 before:size-1.5 before:shrink-0 before:rounded-full before:bg-brand-teal before:content-['']"
                    >
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
