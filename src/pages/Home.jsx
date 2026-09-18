import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Baby,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Dna,
  GraduationCap,
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
import doctorImage from "../assets/images/doctor.jpeg";

import doctor1 from "../assets/images/doctor1.png";
import f2 from "../assets/images/fetal-reduction.jpeg";
import f1 from "../assets/images/f1.jpg";

import amnioImage from "../assets/images/amniocentesis.png";
import cvsImage from "../assets/images/cvs.jpeg";
import reductionImage from "../assets/images/fetal-reduction.jpeg";

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
  "Fellowship in Fetal Medicine – Fetal Medicine & Fetal Therapy Department, Sunridge Multi-Speciality Hospital, Moti Nagar, Hyderabad",
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

const heroSlides = [
  {
    eyebrow: "Compassionate Fetal & Maternal Care",

    titleStart: "Expert",
    titleHighlight: "Fetal & Maternal Care",
    titleEnd: "for Your Little One",

    description:
      "“As a fetal medicine doctor, I am the first photographer who captures the nurturing womb taking its first breath in this world, and it brings an immense satisfaction and happiness.”",

    image: doctor1,

    primaryText: "Book Appointment",
    primaryLink: "/appointment",

    secondaryText: "View Services",
    secondaryLink: "/services",
  },

  {
    eyebrow: "Advanced Fetal Medicine",

    titleStart: "Advanced",
    titleHighlight: "Fetal Scans",
    titleEnd: "for Every Stage of Pregnancy",

    description:
      "Detailed fetal assessment and advanced ultrasound care to support your baby's growth, development and wellbeing throughout pregnancy.",

    image: f1,

    primaryText: "Book Appointment",
    primaryLink: "/appointment",

    secondaryText: "View Fetal Scans",
    secondaryLink: "/services/fetal-scans",
  },

  {
    eyebrow: "Specialised Prenatal Care",

    titleStart: "Expert",
    titleHighlight: "Fetal Procedures",
    titleEnd: "with Compassionate Care",

    description:
      "Specialised diagnostic and therapeutic fetal procedures with careful evaluation, personalised counselling and advanced fetal medicine care.",

    image: f2,

    primaryText: "Book Appointment",
    primaryLink: "/appointment",

    secondaryText: "View Procedures",
    secondaryLink: "/services/fetal-procedures",
  },
];

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = heroSlides.length;

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === totalSlides - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? totalSlides - 1 : current - 1
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveSlide((current) =>
        current === totalSlides - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const slide = heroSlides[activeSlide];
  return (
    <>
      {/* =========================================================
    HOME HERO SLIDER
========================================================= */}

<section
  className="home-hero relative overflow-hidden"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
  {/* =======================================================
      SLIDE CONTENT
  ======================================================== */}

  <div
    key={activeSlide}
    className="
      content-shell
      relative
      grid
      min-h-[500px]
      items-center
      gap-8
      py-10
      md:min-h-[470px]
      lg:grid-cols-[1.08fr_.92fr]
      lg:gap-10
      lg:py-5
    "
  >
    {/* =====================================================
        LEFT CONTENT
    ====================================================== */}

    <div
      className="
        hero-content
        max-w-[790px]
        py-3
        text-left
        lg:pl-3
        lg:py-10
        xl:pl-5
      "
    >
      {/* EYEBROW */}

      <p
        className="
          hero-rise
          text-[15px]
          font-bold
          text-white/90
          sm:text-[16px]
        "
      >
        {slide.eyebrow}
      </p>

      {/* TITLE */}

      <h1
        className="
          hero-rise
          hero-delay-1
          mt-2
          max-w-[790px]
          text-[clamp(2.15rem,4vw,4rem)]
          font-bold
          leading-[1.05]
          tracking-[-0.045em]
          text-white
        "
      >
        {slide.titleStart}{" "}

        <span className="text-[#FFE6A9]">
          {slide.titleHighlight}
        </span>{" "}

        {slide.titleEnd}
      </h1>

      {/* DESCRIPTION */}

      <p
        className="
          hero-rise
          hero-delay-2
          mt-5
          max-w-[730px]
          text-[15px]
          leading-7
          text-white/84
          sm:text-[16px]
          sm:leading-8
        "
      >
        {slide.description}
      </p>

      {/* BUTTONS */}

      <div
        className="
          hero-rise
          hero-delay-3
          mt-7
          flex
          flex-row
          gap-2.5
          sm:gap-3
        "
      >
        <Link
          to={slide.primaryLink}
          className="hero-primary-button"
        >
          <CalendarDays size={16} />

          <span>
            {slide.primaryText}
          </span>
        </Link>

        <Link
          to={slide.secondaryLink}
          className="hero-secondary-button"
        >
          <span>
            {slide.secondaryText}
          </span>

          <ArrowRight size={16} />
        </Link>
      </div>
    </div>

    {/* =====================================================
        RIGHT IMAGE
    ====================================================== */}

    <div
      className="
        hero-rise
        hero-delay-2
        relative
        hidden
        h-full
        items-end
        justify-center
        self-stretch
        pt-5
        lg:flex
      "
    >
      <div
        className="
          relative
          flex
          h-full
          w-full
          items-end
          justify-center
        "
      >
        <img
          src={slide.image}
          alt="Fetal and maternal care"
          className="
            hero-doctor-image
            w-full
            max-w-[560px]
            object-contain
            object-bottom
          "
        />

        {/* DOCTOR LABEL */}

        <div
          className="
            absolute
            bottom-7
            left-1/2
            -translate-x-1/2
            rounded-full
            bg-white/95
            px-5
            py-2.5
            shadow-[0_10px_30px_rgba(20,20,40,.16)]
          "
        >
          <p
            className="
              whitespace-nowrap
              text-[12px]
              font-bold
              uppercase
              tracking-[.13em]
              text-[#D94C8A]
            "
          >
            Dr. Shanthi.G
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* =======================================================
      LEFT ARROW
  ======================================================== */}

  <button
    type="button"
    onClick={previousSlide}
    aria-label="Previous slide"
    className="
      absolute
      left-2
      top-1/2
      z-20
      flex
      h-9
      w-9
      -translate-y-1/2
      items-center
      justify-center
      rounded-full
      border
      border-white/30
      bg-white/10
      text-white
      backdrop-blur-md
      transition-all
      duration-300
      hover:bg-white
      hover:text-[#663A8E]
      sm:left-4
      sm:h-11
      sm:w-11
      lg:left-6
    "
  >
    <ChevronLeft size={21} />
  </button>

  {/* =======================================================
      RIGHT ARROW
  ======================================================== */}

  <button
    type="button"
    onClick={nextSlide}
    aria-label="Next slide"
    className="
      absolute
      right-2
      top-1/2
      z-20
      flex
      h-9
      w-9
      -translate-y-1/2
      items-center
      justify-center
      rounded-full
      border
      border-white/30
      bg-white/10
      text-white
      backdrop-blur-md
      transition-all
      duration-300
      hover:bg-white
      hover:text-[#663A8E]
      sm:right-4
      sm:h-11
      sm:w-11
      lg:right-6
    "
  >
    <ChevronRight size={21} />
  </button>

  {/* =======================================================
      PAGINATION DOTS
  ======================================================== */}

  <div
    className="
      absolute
      bottom-5
      left-1/2
      z-20
      flex
      -translate-x-1/2
      items-center
      gap-2
      lg:bottom-6
    "
  >
    {heroSlides.map((item, index) => (
      <button
        key={`${item.eyebrow}-${index}`}
        type="button"
        onClick={() => setActiveSlide(index)}
        aria-label={`Go to slide ${index + 1}`}
        className={`
          h-[8px]
          rounded-full
          transition-all
          duration-300

          ${
            activeSlide === index
              ? "w-7 bg-[#FFE6A9]"
              : "w-[8px] bg-white/55 hover:bg-white"
          }
        `}
      />
    ))}
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

      {/* =========================================================
    ABOUT DR. SHANTHI.G
========================================================= */}

<section className="section-space bg-white">
  <div
    className="
      content-shell
      grid
      items-stretch
      gap-8
      lg:grid-cols-[0.78fr_1.22fr]
      lg:gap-12
      xl:gap-14
    "
  >
    {/* =====================================================
        LEFT - DOCTOR IMAGE
    ===================================================== */}

    <div
      className="
        relative
        mx-auto
        w-full
        max-w-[440px]
        sm:max-w-[470px]
        md:max-w-[500px]
        lg:mx-0
        lg:max-w-none
      "
    >
      <div
        className="
          h-[400px]
          overflow-hidden
          rounded-[24px]
          bg-[#F9F3F7]
          shadow-[0_18px_48px_rgba(72,38,109,.09)]

          sm:h-[440px]

          md:h-[470px]

          lg:h-[780px]
          lg:min-h-[620px]
          lg:rounded-[26px]
        "
      >
        <img
          src={doctorImage}
          alt="Dr. Shanthi.G"
          className="
            h-full
            w-full
            object-cover
            object-top
          "
        />
      </div>

      {/* DOCTOR NAME */}

      <div
        className="
          absolute
          left-4
          top-4
          rounded-full
          bg-white/95
          px-4
          py-2
          shadow-lg
          backdrop-blur

          sm:left-5
          sm:top-5
        "
      >
        <p
          className="
            text-[11px]
            font-bold
            uppercase
            tracking-[.15em]
            text-[#D94C8A]

            sm:text-[12px]
          "
        >
          Dr. Shanthi.G
        </p>
      </div>
    </div>

    {/* =====================================================
        RIGHT - ABOUT CONTENT
    ===================================================== */}

    <div className="flex h-full flex-col">

      {/* EYEBROW */}

      <p className="section-eyebrow">
        About Dr. Shanthi.G
      </p>

      {/* TITLE */}

      <h2 className="section-title mt-2">
        Advanced maternal and prenatal care with compassionate guidance
      </h2>

      {/* DESCRIPTION */}

      <p className="content-paragraph mt-5">
        Dr. Shanthi is a highly skilled Specialist in Fetal Medicine,
        Obstetrics, Gynecology, Minimal Access Surgery, and Cosmetic
        Gynecology. Dedicated to providing compassionate, advanced
        evidence-based maternal and prenatal genetic care.
      </p>

      {/* ===================================================
          EDUCATION & FELLOWSHIPS
      ==================================================== */}

      <div
        className="
          mt-6
          rounded-[22px]
          border
          border-[#663A8E]/10
          bg-[#FBF8FD]
          p-4

          sm:mt-7
          sm:rounded-[24px]
          sm:p-6

          lg:p-7
        "
      >
        {/* HEADING */}

        <div className="mb-4 flex items-center gap-3 sm:mb-5">
          <span
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[#663A8E]
              text-white

              sm:h-12
              sm:w-12
              sm:rounded-2xl
            "
          >
            <GraduationCap
              size={23}
            />
          </span>

          <h3
            className="
              text-[18px]
              font-bold
              text-[#252A44]

              sm:text-[20px]
            "
          >
            Education & Fellowships
          </h3>
        </div>

        {/* QUALIFICATIONS */}

        <div className="space-y-2.5 sm:space-y-3">
          {qualifications.map((item) => (
            <div
              key={item}
              className="
                group
                flex
                items-start
                gap-3
                rounded-[13px]
                border
                border-[#663A8E]/10
                bg-white
                px-3.5
                py-2.5
                text-[14px]
                font-medium
                leading-6
                text-[#3F4057]
                shadow-[0_4px_14px_rgba(72,38,109,.05)]
                transition-all
                duration-300

                hover:-translate-y-[1px]
                hover:border-[#663A8E]/20
                hover:bg-[#F8F3FB]
                hover:shadow-[0_8px_20px_rgba(72,38,109,.10)]

                sm:gap-3.5
                sm:rounded-[14px]
                sm:px-4
                sm:py-3
                sm:text-[15px]
                sm:leading-7

                lg:py-3.5
                lg:text-[16px]
              "
            >
              <span
                className="
                  mt-0.5
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E9F8F8]
                  text-[#24979D]
                  transition-all
                  duration-300

                  group-hover:bg-[#663A8E]
                  group-hover:text-white

                  sm:mt-1
                "
              >
                <CheckCircle2
                  size={15}
                  strokeWidth={2.2}
                />
              </span>

              <span className="flex-1">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ===================================================
          BUTTONS
          MOBILE + TABLET + DESKTOP = SIDE BY SIDE
      ==================================================== */}

      <div
        className="
          mt-6
          grid
          grid-cols-2
          gap-2.5

          sm:mt-7
          sm:flex
          sm:items-center
          sm:gap-3
        "
      >
        {/* READ MORE */}

        <Link
          to="/about"
          className="
            premium-button
            min-h-[46px]
            w-full
            justify-center
            whitespace-nowrap
            px-3
            text-[12px]

            sm:min-h-[48px]
            sm:w-auto
            sm:px-5
            sm:text-[14px]
          "
        >
          <span>Read More</span>

          <ArrowRight
            size={15}
            className="shrink-0"
          />
        </Link>

        {/* MAKE APPOINTMENT */}

        <Link
          to="/appointment"
          className="
            outline-button
            min-h-[46px]
            w-full
            justify-center
            whitespace-nowrap
            px-2.5
            text-[11px]

            sm:min-h-[48px]
            sm:w-auto
            sm:px-5
            sm:text-[14px]
          "
        >
          <CalendarDays
            size={15}
            className="shrink-0"
          />

          <span>
            Make Appointment
          </span>
        </Link>
      </div>
    </div>
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
              <p className="mt-3 text-[15px] leading-7 text-[#252A44]/65 sm:text-[16px]">Available for consultations at Sunridge Multi-Speciality Hospital, Moti Nagar, Hyderabad.</p>
            </div>
            <Link to="/appointment" className="premium-button"><CalendarDays size={17} /> Book an Appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
}



// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Baby,
//   CalendarDays,
//   Check,
//   Dna,
//   HeartHandshake,
//   Microscope,
//   ScanHeart,
//   ShieldCheck,
//   Stethoscope,
//   Syringe,
//   TestTube2,
// } from "lucide-react";
// import Reveal from "../components/home/Reveal";
// import TestimonialsSlider from "../components/home/TestimonialsSlider";
// import doctorImage from "../assets/images/doctor.jpeg";
// import doctor1 from "../assets/images/doctor1.png";

// import amnioImage from "../assets/images/amniocentesis.png";
// import cvsImage from "../assets/images/cvs.jpeg";
// import reductionImage from "../assets/images/fetal-reduction.jpeg";

// const services = [
//   {
//     title: "Advanced Fetal Scans",
//     icon: ScanHeart,
//     items: [
//       "Early Pregnancy Scan",
//       "NT Scan (Nuchal Translucency)",
//       "TIFFA Scan (Anomaly Scan)",
//       "Fetal Echocardiography",
//       "Growth Scan & Fetal Dopplers",
//       "2D / 3D Ultrasound Imaging",
//       "Pelvic Ultrasound Scan",
//       "Follicular study scan",
//     ],
//   },
//   {
//     title: "Screening & Diagnostics",
//     icon: Dna,
//     items: [
//       "Dual Marker Screening",
//       "Quadruple Marker Screening",
//       "Non-Invasive Prenatal Testing (NIPT)",
//       "Couple Karyotyping",
//       "Prenatal Genetic Counseling",
//     ],
//   },
//   {
//     title: "Specialized Care & Procedures",
//     icon: ShieldCheck,
//     items: [
//       "High Risk Pregnancy Care",
//       "TWIN pregnancy care",
//       "Workup for Infertility",
//       "Advanced Laparoscopy Procedures",
//       "Advanced Hysteroscopy Procedures",
//       "Family planning and contraception counselling",
//       "Menstrual and hormonal disorder management",
//       "deliveries",
//     ],
//   },
// ];

// const fetalTherapy = [
//   {
//     title: "Amniocentesis",
//     icon: Syringe,
//     image: amnioImage,
//     text: "A carefully planned fetal medicine procedure performed with ultrasound guidance when clinically advised.",
//   },
//   {
//     title: "Chorionic villous sampling",
//     icon: TestTube2,
//     image: cvsImage,
//     text: "A prenatal diagnostic procedure carried out with detailed counselling, planning and image guidance.",
//   },
//   {
//     title: "Fetal reduction",
//     icon: Baby,
//     image: reductionImage,
//     text: "A specialised fetal therapy procedure approached with detailed evaluation, counselling and close clinical care.",
//   },
// ];

// const qualifications = [
//   "MBBS from prestigious Gandhi Medical College, Hyderabad (Completed 2013)",
//   "DNB Obstetrics & Gynecology at Southern Railway Hospital, Chennai (Completed 2020)",
//   "Fellowship in Minimal Access Surgery – World Laparoscopy Hospital (WLH), Delhi (2021)",
//   "Fellowship in Regenerative Medicine & Cosmetic Gynecology – IASRM, Delhi",
//   "Fellowship in Fetal Medicine – Fetal Medicine & Fetal Therapy Department, Sunridge Multi-Speciality Hospital, Moti Nagar, Hyderabad",
// ];

// const expertise = [
//   [ScanHeart, "Scanning / Ultrasound", "Dr. Shanthi performing detailed fetal scan"],
//   [Stethoscope, "Surgical Procedures", "Expert Minimal Access & Laparoscopic Surgery"],
//   [HeartHandshake, "OPD Consultation", "Compassionate patient consultation & guidance"],
// ];

// const testimonials = [
//   {
//     quote: "Dr. Shanthi guided us through our high-risk pregnancy with incredible expertise and empathy. The TIFFA and 4D scans were amazing!",
//     name: "Anitha & Rajesh K.",
//   },
//   {
//     quote: "Best fetal medicine specialist in Hyderabad. Detailed scanning and excellent genetic counseling for our peace of mind.",
//     name: "Priya M.",
//   },
//   {
//     quote: "Sample testimonial placeholder — replace this text with a verified patient review before publishing.",
//     name: "Sample Review 1",
//   },
//   {
//     quote: "Sample testimonial placeholder — add a verified patient experience here when available.",
//     name: "Sample Review 2",
//   },
//   {
//     quote: "Sample testimonial placeholder — replace with an approved testimonial from an actual patient.",
//     name: "Sample Review 3",
//   },
// ];

// const blogs = [
//   {
//     title: "Understanding NT & TIFFA Scans in Early Pregnancy",
//     text: "Why timing matters for target anomaly scans...",
//     icon: ScanHeart,
//   },
//   {
//     title: "What is NIPT and Who Needs Genetic Counseling?",
//     text: "Demystifying non-invasive prenatal screening tests...",
//     icon: Microscope,
//   },
// ];

// function SectionHeading({ eyebrow, title, description }) {
//   return (
//     <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-11">
//       <p className="section-eyebrow">{eyebrow}</p>
//       <h2 className="section-title mt-2">{title}</h2>
//       {description && <p className="section-description mx-auto mt-4 max-w-2xl">{description}</p>}
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <>
//       <section className="home-hero relative overflow-hidden">
//         <div className="content-shell relative grid min-h-[500px] items-center gap-8 py-10 md:min-h-[470px] lg:grid-cols-[1.08fr_.92fr] lg:gap-10 lg:py-5">
//           <div className="hero-content max-w-[790px] py-3 text-left lg:pl-3 lg:py-10 xl:pl-5">
//             <p className="hero-rise text-[15px] font-bold text-white/90 sm:text-[16px]">Compassionate Fetal & Maternal Care</p>
//             <h1 className="hero-rise hero-delay-1 mt-2 max-w-[760px] text-[clamp(2.15rem,4vw,4rem)] font-bold leading-[1.05] tracking-[-0.045em] text-white">
//               Expert <span className="text-[#FFE6A9]">Fetal & Maternal Care</span> for Your Little One
//             </h1>
//             <p className="hero-rise hero-delay-2 mt-5 max-w-[730px] text-[15px] leading-7 text-white/84 sm:text-[16px] sm:leading-8">
//               “As a fetal medicine doctor, I am the first photographer who captures the nurturing womb taking its first breath in this world, and it brings an immense satisfaction and happiness.”
//             </p>
//             <div className="hero-rise hero-delay-3 mt-7 flex flex-row gap-2.5 sm:gap-3">
//               <Link to="/appointment" className="hero-primary-button">
//                 <CalendarDays size={16} /> <span>Book Appointment</span>
//               </Link>
//               <Link to="/services" className="hero-secondary-button">
//                 <span>View Services</span> <ArrowRight size={16} />
//               </Link>
//             </div>
//           </div>

//           <div className="hero-rise hero-delay-2 relative hidden h-full items-end justify-center self-stretch pt-5 lg:flex">
//             <div className="relative flex h-full w-full items-end justify-center">
//               <img
//                 src={doctor1}
//                 alt="Dr. Shanthi.G"
//                 className="hero-doctor-image w-full max-w-[560px] object-contain object-bottom"
//               />
//               <div className="absolute bottom-7 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-5 py-2.5 shadow-[0_10px_30px_rgba(20,20,40,.16)]">
//                 <p className="whitespace-nowrap text-[12px] font-bold uppercase tracking-[.13em] text-[#D94C8A]">Dr. Shanthi.G</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="expertise-bridge">
//         <div className="content-shell">
//           <div className="grid overflow-hidden rounded-[22px] bg-white shadow-[0_16px_44px_rgba(72,38,109,.13)] md:grid-cols-3">
//             {expertise.map(([Icon, title, text], index) => (
//               <Link to="/about" key={title} className={`group flex items-center gap-4 px-5 py-5 transition hover:bg-[#FFF8FB] sm:px-6 ${index < 2 ? "border-b border-[#663A8E]/10 md:border-b-0 md:border-r" : ""}`}>
//                 <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#663A8E,#D94C8A)] text-white shadow-[0_8px_22px_rgba(217,76,138,.23)] sm:h-16 sm:w-16"><Icon size={28} strokeWidth={1.7} /></span>
//                 <div>
//                   <h3 className="text-[16px] font-bold text-[#252A44] sm:text-[17px]">{title}</h3>
//                   <p className="mt-1 text-[13px] leading-5 text-[#252A44]/62 sm:text-[14px]">{text}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="section-space bg-white pt-14 sm:pt-16 lg:pt-20">
//         <div className="content-shell grid items-stretch gap-9 lg:grid-cols-[.86fr_1.14fr] lg:gap-12">
//           <Reveal>
//             <div className="relative mx-auto h-full max-h-[620px] w-full max-w-[500px] overflow-hidden rounded-[24px] bg-[#F9F4F7]">
//               <img src={doctorImage} alt="Dr. Shanthi.G" className="h-full w-full object-cover object-top" />
//               <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm">
//                 <p className="text-[11px] font-bold uppercase tracking-[.14em] text-[#D94C8A]">Dr. Shanthi.G</p>
//               </div>
//             </div>
//           </Reveal>

//           <Reveal delay={90}>
//             <p className="section-eyebrow">About Dr. Shanthi.G</p>
//             <h2 className="section-title mt-2">Advanced maternal and prenatal care with compassionate guidance</h2>
//             <div
//   className="
//     relative mt-6 overflow-hidden rounded-[22px]
//     border border-[#D94C8A]/15
//     bg-[linear-gradient(135deg,#FFF7FB_0%,#FBF8FD_55%,#F4FBFB_100%)]
//     px-5 py-5
//     shadow-[0_14px_35px_rgba(102,58,142,0.08)]
//     sm:px-6 sm:py-6
//   "
// >
//   <span
//     className="
//       absolute left-0 top-0 h-full w-[4px]
//       bg-[linear-gradient(180deg,#663A8E,#D94C8A)]
//     "
//   />

//   <p className="text-[16px] font-medium leading-8 text-[#252A44]/80 sm:text-[17px]">
//     <strong className="font-bold text-[#663A8E]">
//       Dr. Shanthi.G
//     </strong>{" "}
//     is a highly skilled Specialist in{" "}
//     <span className="font-semibold text-[#D94C8A]">
//       Fetal Medicine, Obstetrics & Gynecology
//     </span>
//     , Minimal Access Surgery, and Cosmetic Gynecology. She is
//     dedicated to providing compassionate, advanced and
//     evidence-based maternal and prenatal genetic care.
//   </p>
// </div>
//             {/* <p className="content-paragraph mt-5">
//               Dr. Shanthi is a highly skilled Specialist in Fetal Medicine, Obstetrics, Gynecology, Minimal Access Surgery, and Cosmetic Gynecology. Dedicated to providing compassionate, advanced evidence-based maternal and prenatal genetic care.
//             </p> */}
//             <div className="mt-6 space-y-3">
//               {qualifications.map((item) => (
//                 <div key={item} className="flex items-start gap-3 text-[15px] leading-7 text-[#252A44]/72 sm:text-[16px]">
//                   <Check size={18} className="mt-1.5 shrink-0 text-[#24979D]" />
//                   <span>{item}</span>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-7 flex flex-wrap gap-3">
//               <Link to="/about" className="premium-button min-h-[48px]">Read More <ArrowRight size={16} /></Link>
//               <Link to="/appointment" className="outline-button min-h-[48px]">Make Appointment</Link>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       <section className="section-space bg-[#FBF8FC]" id="services">
//         <div className="content-shell">
//           <Reveal>
//             <SectionHeading
//               eyebrow="Services Provided"
//               title="Care designed around every stage of pregnancy"
//               description="Advanced fetal scans, screening, diagnostics and specialised women's healthcare services from the supplied clinical profile."
//             />
//           </Reveal>
//           <div className="grid gap-5 lg:grid-cols-3">
//             {services.map(({ title, icon: Icon, items }, index) => (
//               <Reveal key={title} delay={index * 80}>
//                 <article className="service-premium-card h-full">
//                   <div className="flex items-center gap-4 border-b border-[#663A8E]/10 pb-5">
//                     <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#663A8E] text-white"><Icon size={24} /></span>
//                     <h3 className="text-[19px] font-bold leading-6 text-[#252A44]">{title}</h3>
//                   </div>
//                   <ul className="mt-5 space-y-2.5">
//                     {items.map((item) => (
//                       <li key={item} className="flex items-start gap-2.5 text-[15px] leading-7 text-[#252A44]/72">
//                         <Check size={17} className="mt-1.5 shrink-0 text-[#24979D]" /> {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </article>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="section-space bg-white">
//   <div className="content-shell">
//     {/* =========================
//         SECTION HEADING
//     ========================== */}
//     <Reveal>
//       <div className="mx-auto mb-10 text-center sm:mb-12">
//         <p className="section-eyebrow">
//           Fetal Therapy Procedures
//         </p>

//         <h2 className="mt-2 text-[28px] font-bold leading-tight tracking-[-0.03em] text-[#252A44] sm:text-[34px] lg:whitespace-nowrap lg:text-[38px] xl:text-[42px]">
//           A careful, guided process for specialised fetal procedures
//         </h2>

//         <p className="mx-auto mt-4 max-w-[850px] text-[15px] leading-7 text-[#252A44]/65 sm:text-[16px] sm:leading-8">
//           Each procedure is approached through clinical evaluation,
//           counselling, planning and ultrasound-guided care as appropriate.
//         </p>
//       </div>
//     </Reveal>

//     {/* =========================
//         PROCEDURE CARDS
//     ========================== */}
//     <div className="grid gap-6 lg:grid-cols-3">
//       {fetalTherapy.map(
//         ({ title, icon: Icon, image, text }, index) => (
//           <Reveal key={title} delay={index * 90}>
//             <article className="group relative h-[390px] overflow-hidden rounded-[26px] shadow-[0_18px_46px_rgba(72,38,109,.14)] sm:h-[420px]">

//               {/* Background Image */}
//               <img
//                 src={image}
//                 alt={title}
//                 className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(35,20,55,.04)_20%,rgba(51,30,76,.22)_48%,rgba(61,33,91,.96)_100%)]" />

//               {/* Top Icon */}
//               <div className="absolute left-5 top-5 z-10">
//                 <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#663A8E] shadow-[0_10px_28px_rgba(25,18,45,.18)]">
//                   <Icon size={25} strokeWidth={1.8} />
//                 </span>
//               </div>

//               {/* Bottom Content */}
//               <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7">
//                 <span className="text-[11px] font-bold uppercase tracking-[.18em] text-[#7FE0DD]">
//                   Procedure {String(index + 1).padStart(2, "0")}
//                 </span>

//                 <h3 className="mt-2 text-[22px] font-bold leading-tight text-white sm:text-[23px]">
//                   {title}
//                 </h3>

//                 <p className="mt-3 text-[14px] leading-7 text-white/85 sm:text-[15px]">
//                   {text}
//                 </p>
//               </div>
//             </article>
//           </Reveal>
//         )
//       )}
//     </div>
//   </div>
// </section>

//       <section className="section-space bg-[#FBF8FC]">
//         <div className="content-shell">
//           <Reveal><SectionHeading eyebrow="Patient Testimonials" title="Care remembered with trust" description="Families share their experience of maternal, fetal medicine and prenatal counselling care." /></Reveal>
//           <TestimonialsSlider testimonials={testimonials} />
//         </div>
//       </section>

//       <section className="section-space bg-white">
//         <div className="content-shell">
//           <Reveal><SectionHeading eyebrow="Health Blog & Insights" title="Useful reading for pregnancy and prenatal screening" /></Reveal>
//           <div className="mx-auto grid max-w-[1120px] gap-5 md:grid-cols-2">
//             {blogs.map(({ title, text, icon: Icon }, index) => (
//               <Reveal key={title} delay={index * 90}>
//                 <Link to="/services" className="group flex h-full gap-4 rounded-[22px] border border-[#663A8E]/10 bg-[#FFFCFE] p-5 shadow-[0_12px_34px_rgba(72,38,109,.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(72,38,109,.11)] sm:p-7">
//                   <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#663A8E,#D94C8A)] text-white"><Icon size={25} /></span>
//                   <div>
//                     <h3 className="text-[19px] font-bold leading-7 text-[#252A44] group-hover:text-[#D94C8A]">{title}</h3>
//                     <p className="mt-2 text-[15px] leading-7 text-[#252A44]/66">{text}</p>
//                     <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-[#663A8E]">Read more <ArrowRight size={15} /></span>
//                   </div>
//                 </Link>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="pb-14 sm:pb-16 lg:pb-20">
//         <div className="content-shell">
//           <div className="grid items-center gap-6 rounded-[28px] border border-[#663A8E]/10 bg-[linear-gradient(120deg,#fff8fb,#f4fbfb)] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:p-9">
//             <div>
//               <p className="section-eyebrow">Appointments</p>
//               <h2 className="mt-2 text-2xl font-bold tracking-[-.03em] text-[#252A44] sm:text-3xl">Expert fetal & maternal care for your little one</h2>
//               <p className="mt-3 text-[15px] leading-7 text-[#252A44]/65 sm:text-[16px]">Available for consultations at Sunridge Multi-Speciality Hospital, Moti Nagar, Hyderabad.</p>
//             </div>
//             <Link to="/appointment" className="premium-button"><CalendarDays size={17} /> Book an Appointment</Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
