import { Syringe, Dna, Baby } from "lucide-react"
import { fetalTherapyProcedures } from "../../data/doctorData"
import SectionTitle from "../common/SectionTitle"

const icons = {
  amniocentesis: Syringe,
  cvs: Dna,
  reduction: Baby,
}

export default function FetalTherapy() {
  return (
    <section id="fetal-therapy" className="section-pad bg-white">
      <div className="container-site">
        <SectionTitle
          align="center"
          eyebrow="Fetal Medicine"
          title="Fetal Therapy Procedures"
          description="Specialised prenatal procedures offered with careful counselling and a gentle, family-centred approach."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fetalTherapyProcedures.map((item) => {
            const Icon = icons[item.id]
            return (
              <article
                key={item.id}
                className="card-border flex flex-col items-center px-5 py-6 text-center"
              >
                <span className="icon-circle mb-4">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="title-underline text-[16px] font-semibold text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-brand-navy/65">{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
