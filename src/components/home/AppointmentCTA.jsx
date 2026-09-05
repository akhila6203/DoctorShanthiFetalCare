import { CalendarDays } from "lucide-react"
import { doctor } from "../../data/doctorData"
import Button from "../common/Button"

export default function AppointmentCTA() {
  return (
    <section className="bg-white pb-16 md:pb-20">
      <div className="container-site">
        <div className="overflow-hidden rounded-[28px] bg-linear-to-r from-brand-purple-dark via-brand-purple to-brand-pink px-6 py-12 text-center shadow-[0_24px_50px_rgba(72,38,109,0.25)] md:px-16 md:py-16">
          <h2 className="text-3xl font-bold text-white md:text-4xl">{doctor.ctaHeading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">{doctor.ctaText}</p>
          <div className="mt-8 flex justify-center">
            <Button to="/contact" variant="light" icon={CalendarDays}>
              Book an Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
