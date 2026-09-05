import { HeartHandshake, Microscope, ShieldPlus } from "lucide-react"
import { whyChooseItems } from "../../data/doctorData"
import SectionTitle from "../common/SectionTitle"

const icons = [HeartHandshake, Microscope, ShieldPlus]

export default function WhyChoose() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="container-site">
        <SectionTitle
          align="center"
          eyebrow="Why Families Choose Us"
          title="Care that puts mother and baby first"
          description="A specialist-led approach to fetal, maternal and women's healthcare — without compromising warmth or clinical rigor."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {whyChooseItems.map((item, index) => {
            const Icon = icons[index]
            return (
              <article
                key={item.id}
                className="rounded-2xl border border-brand-soft bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF6FA_100%)] p-8 shadow-[0_10px_30px_rgba(37,42,68,0.04)]"
              >
                <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-semibold text-brand-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-navy/70">{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
