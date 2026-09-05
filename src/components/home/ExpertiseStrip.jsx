import { Baby, HeartPulse, Stethoscope, Scissors } from "lucide-react"
import { expertiseItems } from "../../data/doctorData"

const icons = {
  "fetal-medicine": Baby,
  obstetrics: HeartPulse,
  gynecology: Stethoscope,
  mas: Scissors,
}

export default function ExpertiseStrip() {
  return (
    <section className="relative z-10 -mt-4 pb-2 md:-mt-6">
      <div className="container-site grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {expertiseItems.map((item) => {
          const Icon = icons[item.id]
          return (
            <article
              key={item.id}
              className="card-border flex flex-col items-center px-4 py-5 text-center sm:px-5"
            >
              <span className="icon-circle mb-3">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="title-underline text-[15px] font-semibold text-brand-navy">{item.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-brand-navy/65">{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
