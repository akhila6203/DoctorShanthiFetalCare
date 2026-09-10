import {
  Baby,
  Check,
  Dna,
  ScanHeart,
  ShieldCheck,
  Syringe,
  TestTube2,
} from "lucide-react";

import PageBanner from "../components/common/PageBanner";

// SAME REAL IMAGES USED IN HOME PAGE
import amnioImage from "../assets/images/amniocentesis.png";
import cvsImage from "../assets/images/cvs.jpeg";
import reductionImage from "../assets/images/amniocentesis.jpeg";


/* =========================================================
   SERVICES
========================================================= */

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


/* =========================================================
   FETAL THERAPY
========================================================= */

const fetal = [
  {
    title: "Amniocentesis",
    icon: Syringe,
    image: amnioImage,
    text:
      "Clinical assessment and counselling are followed by a carefully planned ultrasound-guided procedure when indicated.",
  },

  {
    title: "Chorionic villous sampling",
    icon: TestTube2,
    image: cvsImage,
    text:
      "A specialised prenatal diagnostic procedure supported by image guidance and detailed counselling.",
  },

  {
    title: "Fetal reduction",
    icon: Baby,
    image: reductionImage,
    text:
      "A specialised fetal therapy pathway involving evaluation, counselling, planning and close clinical follow-up.",
  },
];


export default function Services() {
  return (
    <>
      {/* =====================================================
          PAGE BANNER / BREADCRUMB
      ====================================================== */}

      <PageBanner
        title="Services"
        subtitle="Advanced fetal scans, prenatal screening, women's healthcare and specialised fetal therapy procedures."
      />


      {/* =====================================================
          SERVICES PROVIDED
      ====================================================== */}

      <section className="section-space bg-white">
        <div className="content-shell">

          {/* HEADING */}
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">

            <p className="section-eyebrow">
              Services Provided
            </p>

            <h2 className="section-title mt-2">
              Complete care for mother and baby
            </h2>

            <p className="section-description mx-auto mt-4 max-w-2xl">
              A structured range of fetal medicine, prenatal screening,
              gynecology and specialised care services from Dr. Shanthi's
              clinical profile.
            </p>

          </div>


          {/* SERVICE CARDS */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.map(({ title, icon: Icon, items }) => (

              <article
                key={title}
                className="service-premium-card h-full"
              >

                {/* CARD HEADER */}
                <div className="flex items-center gap-4 border-b border-[#663A8E]/10 pb-5">

                  <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#663A8E] text-white">
                    <Icon size={24} />
                  </span>

                  <h3 className="text-[19px] font-bold leading-6 text-[#252A44]">
                    {title}
                  </h3>

                </div>


                {/* CARD ITEMS */}
                <ul className="mt-5 space-y-2.5">

                  {items.map((item) => (

                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[15px] leading-7 text-[#252A44]/72"
                    >

                      <Check
                        size={17}
                        className="mt-1.5 shrink-0 text-[#24979D]"
                      />

                      <span>{item}</span>

                    </li>

                  ))}

                </ul>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          FETAL THERAPY PROCEDURES
      ====================================================== */}

      <section className="section-space bg-[#FBF8FC]">
        <div className="content-shell">

          {/* SECTION HEADING */}
          <div className="mx-auto mb-10 text-center sm:mb-12">

            <p className="section-eyebrow">
              Fetal Therapy Procedures
            </p>

            <h2 className="mt-2 text-[28px] font-bold leading-[1.15] tracking-[-0.035em] text-[#252A44] sm:text-[34px] lg:whitespace-nowrap lg:text-[38px] xl:text-[42px]">
              A careful, guided process for specialised fetal procedures
            </h2>

            <p className="section-description mx-auto mt-4 max-w-[850px]">
              Each procedure is approached through clinical evaluation,
              counselling, planning and ultrasound-guided care as appropriate.
            </p>

          </div>


          {/* =================================================
              FETAL THERAPY CARDS
          ================================================== */}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {fetal.map(
              ({ title, icon: Icon, image, text }, index) => (

                <article
                  key={title}
                  className="
                    group
                    relative
                    h-[390px]
                    overflow-hidden
                    rounded-[26px]
                    bg-[#4A2B68]
                    shadow-[0_18px_45px_rgba(72,38,109,.14)]
                    sm:h-[410px]
                    lg:h-[420px]
                  "
                >

                  {/* ===============================
                      REAL BACKGROUND IMAGE
                  ================================ */}

                  <img
                    src={image}
                    alt={title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      object-center
                      transition
                      duration-700
                      group-hover:scale-[1.05]
                    "
                  />


                  {/* ===============================
                      IMAGE DARK GRADIENT
                  ================================ */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-[linear-gradient(180deg,rgba(34,20,54,.05)_10%,rgba(52,29,77,.20)_42%,rgba(58,31,86,.93)_100%)]
                    "
                  />


                  {/* ===============================
                      SMALL TOP SHADOW
                  ================================ */}

                  <div className="absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-black/10 to-transparent" />


                  {/* ===============================
                      ICON
                  ================================ */}

                  <div className="absolute left-5 top-5 z-20 sm:left-6 sm:top-6">

                    <span
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white
                        text-[#663A8E]
                        shadow-[0_10px_28px_rgba(25,18,45,.18)]
                      "
                    >

                      <Icon
                        size={25}
                        strokeWidth={1.8}
                      />

                    </span>

                  </div>


                  {/* ===============================
                      CONTENT - BOTTOM
                  ================================ */}

                  <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-7">

                    <span
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[.18em]
                        text-[#6FE4E0]
                      "
                    >
                      Procedure {String(index + 1).padStart(2, "0")}
                    </span>


                    <h3
                      className="
                        mt-2
                        text-[22px]
                        font-bold
                        leading-tight
                        text-white
                        sm:text-[23px]
                      "
                    >
                      {title}
                    </h3>


                    <p
                      className="
                        mt-3
                        max-w-[420px]
                        text-[14px]
                        leading-7
                        text-white/85
                        sm:text-[15px]
                      "
                    >
                      {text}
                    </p>

                  </div>


                  {/* ===============================
                      BOTTOM DECORATIVE LINE
                  ================================ */}

                  <div className="absolute bottom-0 left-0 z-30 h-[3px] w-0 bg-[#6FE4E0] transition-all duration-500 group-hover:w-full" />

                </article>

              )
            )}

          </div>

        </div>
      </section>
    </>
  );
}