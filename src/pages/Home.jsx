import { Link } from "react-router-dom";
import {
  ArrowRight,
  Baby,
  CalendarDays,
  Check,
  Dna,
  HeartHandshake,
  Microscope,
  ScanHeart,
  ShieldCheck,
  Stethoscope,
  Syringe,
  TestTube2,
} from "lucide-react";
import Reveal from "../components/home/Reveal";
import TestimonialsSlider from "../components/home/TestimonialsSlider";
import doctorImage from "../assets/images/doctor.jpg";

import amnioImage from "../assets/images/amniocentesis.jpg";
import cvsImage from "../assets/images/cvs.jpg";
import reductionImage from "../assets/images/fetal-reduction.jpg";

const services = [
  {
    title: "Advanced Fetal Scans",
    icon: ScanHeart,
    items: [
      "Early Pregnancy Scan",
      "NT Scan (Nuchal Translucency)",
      "TIFFA Scan (Anomaly Scan)",
      "Fetal Echocardiography",
      "Growth Scan & Fetal Dopplers",
      "2D / 3D Ultrasound Imaging",
      "Pelvic Ultrasound Scan",
      "Follicular study scan",
    ],
  },
  {
    title: "Screening & Diagnostics",
    icon: Dna,
    items: [
      "Dual Marker Screening",
      "Quadruple Marker Screening",
      "Non-Invasive Prenatal Testing (NIPT)",
      "Couple Karyotyping",
      "Prenatal Genetic Counseling",
    ],
  },
  {
    title: "Specialized Care & Procedures",
    icon: ShieldCheck,
    items: [
      "High Risk Pregnancy Care",
      "TWIN pregnancy care",
      "Workup for Infertility",
      "Advanced Laparoscopy Procedures",
      "Advanced Hysteroscopy Procedures",
      "Family planning and contraception counselling",
      "Menstrual and hormonal disorder management",
      "deliveries",
    ],
  },
];

const fetalTherapy = [
  {
    title: "Amniocentesis",
    icon: Syringe,
    image: amnioImage,
    text: "A carefully planned fetal medicine procedure performed with ultrasound guidance when clinically advised.",
  },
  {
    title: "Chorionic villous sampling",
    icon: TestTube2,
    image: cvsImage,
    text: "A prenatal diagnostic procedure carried out with detailed counselling, planning and image guidance.",
  },
  {
    title: "Fetal reduction",
    icon: Baby,
    image: reductionImage,
    text: "A specialised fetal therapy procedure approached with detailed evaluation, counselling and close clinical care.",
  },
];

const qualifications = [
  "MBBS from prestigious Gandhi Medical College, Hyderabad (Completed 2013)",
  "DNB Obstetrics & Gynecology at Southern Railway Hospital, Chennai (Completed 2020)",
  "Fellowship in Minimal Access Surgery – World Laparoscopy Hospital (WLH), Delhi (2021)",
  "Fellowship in Regenerative Medicine & Cosmetic Gynecology – IASRM, Delhi",
  "Fellowship in Fetal Medicine – Fetal Medicine & Fetal Therapy Department, Yashoda Hospital, Hitech City",
];

const expertise = [
  [ScanHeart, "Scanning / Ultrasound", "Dr. Shanthi performing detailed fetal scan"],
  [Stethoscope, "Surgical Procedures", "Expert Minimal Access & Laparoscopic Surgery"],
  [HeartHandshake, "OPD Consultation", "Compassionate patient consultation & guidance"],
];

const testimonials = [
  {
    quote: "Dr. Shanthi guided us through our high-risk pregnancy with incredible expertise and empathy. The TIFFA and 4D scans were amazing!",
    name: "Anitha & Rajesh K.",
  },
  {
    quote: "Best fetal medicine specialist in Hyderabad. Detailed scanning and excellent genetic counseling for our peace of mind.",
    name: "Priya M.",
  },
  {
    quote: "Sample testimonial placeholder — replace this text with a verified patient review before publishing.",
    name: "Sample Review 1",
  },
  {
    quote: "Sample testimonial placeholder — add a verified patient experience here when available.",
    name: "Sample Review 2",
  },
  {
    quote: "Sample testimonial placeholder — replace with an approved testimonial from an actual patient.",
    name: "Sample Review 3",
  },
];

const blogs = [
  {
    title: "Understanding NT & TIFFA Scans in Early Pregnancy",
    text: "Why timing matters for target anomaly scans...",
    icon: ScanHeart,
  },
  {
    title: "What is NIPT and Who Needs Genetic Counseling?",
    text: "Demystifying non-invasive prenatal screening tests...",
    icon: Microscope,
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-11">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-2">{title}</h2>
      {description && <p className="section-description mx-auto mt-4 max-w-2xl">{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="home-hero relative overflow-hidden">
        <div className="content-shell relative grid min-h-[500px] items-center gap-8 py-10 md:min-h-[470px] lg:grid-cols-[1.08fr_.92fr] lg:gap-10 lg:py-5">
          <div className="hero-content max-w-[790px] py-3 text-left lg:pl-3 lg:py-10 xl:pl-5">
            <p className="hero-rise text-[15px] font-bold text-white/90 sm:text-[16px]">Compassionate Fetal & Maternal Care</p>
            <h1 className="hero-rise hero-delay-1 mt-2 max-w-[760px] text-[clamp(2.15rem,4vw,4rem)] font-bold leading-[1.05] tracking-[-0.045em] text-white">
              Expert <span className="text-[#FFE6A9]">Fetal & Maternal Care</span> for Your Little One
            </h1>
            <p className="hero-rise hero-delay-2 mt-5 max-w-[730px] text-[15px] leading-7 text-white/84 sm:text-[16px] sm:leading-8">
              “As a fetal medicine doctor, I am the first photographer who captures the nurturing womb taking its first breath in this world, and it brings an immense satisfaction and happiness.”
            </p>
            <div className="hero-rise hero-delay-3 mt-7 flex flex-row gap-2.5 sm:gap-3">
              <Link to="/appointment" className="hero-primary-button">
                <CalendarDays size={16} /> <span>Book Appointment</span>
              </Link>
              <Link to="/services" className="hero-secondary-button">
                <span>View Services</span> <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="hero-rise hero-delay-2 relative hidden h-full items-end justify-center self-stretch pt-5 lg:flex">
            <div className="relative flex h-full w-full items-end justify-center">
              <img
                src={doctorImage}
                alt="Dr. Shanthi.G"
                className="hero-doctor-image w-full max-w-[560px] object-contain object-bottom"
              />
              <div className="absolute bottom-7 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-5 py-2.5 shadow-[0_10px_30px_rgba(20,20,40,.16)]">
                <p className="whitespace-nowrap text-[12px] font-bold uppercase tracking-[.13em] text-[#D94C8A]">Dr. Shanthi.G</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise-bridge">
        <div className="content-shell">
          <div className="grid overflow-hidden rounded-[22px] bg-white shadow-[0_16px_44px_rgba(72,38,109,.13)] md:grid-cols-3">
            {expertise.map(([Icon, title, text], index) => (
              <Link to="/about" key={title} className={`group flex items-center gap-4 px-5 py-5 transition hover:bg-[#FFF8FB] sm:px-6 ${index < 2 ? "border-b border-[#663A8E]/10 md:border-b-0 md:border-r" : ""}`}>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#663A8E,#D94C8A)] text-white shadow-[0_8px_22px_rgba(217,76,138,.23)] sm:h-16 sm:w-16"><Icon size={28} strokeWidth={1.7} /></span>
                <div>
                  <h3 className="text-[16px] font-bold text-[#252A44] sm:text-[17px]">{title}</h3>
                  <p className="mt-1 text-[13px] leading-5 text-[#252A44]/62 sm:text-[14px]">{text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white pt-14 sm:pt-16 lg:pt-20">
        <div className="content-shell grid items-stretch gap-9 lg:grid-cols-[.86fr_1.14fr] lg:gap-12">
          <Reveal>
            <div className="relative mx-auto h-full max-h-[620px] w-full max-w-[500px] overflow-hidden rounded-[24px] bg-[#F9F4F7]">
              <img src={doctorImage} alt="Dr. Shanthi.G" className="h-full w-full object-cover object-top" />
              <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm">
                <p className="text-[11px] font-bold uppercase tracking-[.14em] text-[#D94C8A]">Dr. Shanthi.G</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <p className="section-eyebrow">About Dr. Shanthi.G</p>
            <h2 className="section-title mt-2">Advanced maternal and prenatal care with compassionate guidance</h2>
            <p className="content-paragraph mt-5">
              Dr. Shanthi is a highly skilled Specialist in Fetal Medicine, Obstetrics, Gynecology, Minimal Access Surgery, and Cosmetic Gynecology. Dedicated to providing compassionate, advanced evidence-based maternal and prenatal genetic care.
            </p>
            <div className="mt-6 space-y-3">
              {qualifications.map((item) => (
                <div key={item} className="flex items-start gap-3 text-[15px] leading-7 text-[#252A44]/72 sm:text-[16px]">
                  <Check size={18} className="mt-1.5 shrink-0 text-[#24979D]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/about" className="premium-button min-h-[48px]">Read More <ArrowRight size={16} /></Link>
              <Link to="/appointment" className="outline-button min-h-[48px]">Make Appointment</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-[#FBF8FC]" id="services">
        <div className="content-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Services Provided"
              title="Care designed around every stage of pregnancy"
              description="Advanced fetal scans, screening, diagnostics and specialised women's healthcare services from the supplied clinical profile."
            />
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-3">
            {services.map(({ title, icon: Icon, items }, index) => (
              <Reveal key={title} delay={index * 80}>
                <article className="service-premium-card h-full">
                  <div className="flex items-center gap-4 border-b border-[#663A8E]/10 pb-5">
                    <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#663A8E] text-white"><Icon size={24} /></span>
                    <h3 className="text-[19px] font-bold leading-6 text-[#252A44]">{title}</h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[15px] leading-7 text-[#252A44]/72">
                        <Check size={17} className="mt-1.5 shrink-0 text-[#24979D]" /> {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
  <div className="content-shell">
    {/* =========================
        SECTION HEADING
    ========================== */}
    <Reveal>
      <div className="mx-auto mb-10 text-center sm:mb-12">
        <p className="section-eyebrow">
          Fetal Therapy Procedures
        </p>

        <h2 className="mt-2 text-[28px] font-bold leading-tight tracking-[-0.03em] text-[#252A44] sm:text-[34px] lg:whitespace-nowrap lg:text-[38px] xl:text-[42px]">
          A careful, guided process for specialised fetal procedures
        </h2>

        <p className="mx-auto mt-4 max-w-[850px] text-[15px] leading-7 text-[#252A44]/65 sm:text-[16px] sm:leading-8">
          Each procedure is approached through clinical evaluation,
          counselling, planning and ultrasound-guided care as appropriate.
        </p>
      </div>
    </Reveal>

    {/* =========================
        PROCEDURE CARDS
    ========================== */}
    <div className="grid gap-6 lg:grid-cols-3">
      {fetalTherapy.map(
        ({ title, icon: Icon, image, text }, index) => (
          <Reveal key={title} delay={index * 90}>
            <article className="group relative h-[390px] overflow-hidden rounded-[26px] shadow-[0_18px_46px_rgba(72,38,109,.14)] sm:h-[420px]">

              {/* Background Image */}
              <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(35,20,55,.04)_20%,rgba(51,30,76,.22)_48%,rgba(61,33,91,.96)_100%)]" />

              {/* Top Icon */}
              <div className="absolute left-5 top-5 z-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#663A8E] shadow-[0_10px_28px_rgba(25,18,45,.18)]">
                  <Icon size={25} strokeWidth={1.8} />
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
                <span className="text-[11px] font-bold uppercase tracking-[.18em] text-[#7FE0DD]">
                  Procedure {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-2 text-[22px] font-bold leading-tight text-white sm:text-[23px]">
                  {title}
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-white/85 sm:text-[15px]">
                  {text}
                </p>
              </div>
            </article>
          </Reveal>
        )
      )}
    </div>
  </div>
</section>

      <section className="section-space bg-[#FBF8FC]">
        <div className="content-shell">
          <Reveal><SectionHeading eyebrow="Patient Testimonials" title="Care remembered with trust" description="Families share their experience of maternal, fetal medicine and prenatal counselling care." /></Reveal>
          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="content-shell">
          <Reveal><SectionHeading eyebrow="Health Blog & Insights" title="Useful reading for pregnancy and prenatal screening" /></Reveal>
          <div className="mx-auto grid max-w-[1120px] gap-5 md:grid-cols-2">
            {blogs.map(({ title, text, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 90}>
                <Link to="/services" className="group flex h-full gap-4 rounded-[22px] border border-[#663A8E]/10 bg-[#FFFCFE] p-5 shadow-[0_12px_34px_rgba(72,38,109,.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(72,38,109,.11)] sm:p-7">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#663A8E,#D94C8A)] text-white"><Icon size={25} /></span>
                  <div>
                    <h3 className="text-[19px] font-bold leading-7 text-[#252A44] group-hover:text-[#D94C8A]">{title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-[#252A44]/66">{text}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-[#663A8E]">Read more <ArrowRight size={15} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="content-shell">
          <div className="grid items-center gap-6 rounded-[28px] border border-[#663A8E]/10 bg-[linear-gradient(120deg,#fff8fb,#f4fbfb)] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:p-9">
            <div>
              <p className="section-eyebrow">Appointments</p>
              <h2 className="mt-2 text-2xl font-bold tracking-[-.03em] text-[#252A44] sm:text-3xl">Expert fetal & maternal care for your little one</h2>
              <p className="mt-3 text-[15px] leading-7 text-[#252A44]/65 sm:text-[16px]">Available for consultations at Yashoda Hospital, Hitech City, Hyderabad.</p>
            </div>
            <Link to="/appointment" className="premium-button"><CalendarDays size={17} /> Book an Appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
