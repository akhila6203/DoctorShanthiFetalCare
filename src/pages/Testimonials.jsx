import {
  HeartHandshake,
  ScanHeart,
  Stethoscope,
} from "lucide-react";

import PageBanner from "../components/common/PageBanner";
import TestimonialsSlider from "../components/home/TestimonialsSlider";

/* REAL CLINICAL IMAGES */
import scanImage from "../assets/images/amniocentesis.png";
import motherBabyImage from "../assets/images/cvs.jpeg";
import consultationImage from "../assets/images/pregnancy-consultation.jpeg";


const testimonials = [
  {
    quote:
      "Dr. Shanthi guided us through our high-risk pregnancy with incredible expertise and empathy. The TIFFA and 4D scans were amazing!",
    name: "Anitha & Rajesh K.",
  },
  {
    quote:
      "Best fetal medicine specialist in Hyderabad. Detailed scanning and excellent genetic counseling for our peace of mind.",
    name: "Priya M.",
  },
  // {
  //   quote:
  //     "Sample testimonial placeholder — replace this text with a verified patient review before publishing.",
  //   name: "Sample Review 1",
  // },
  // {
  //   quote:
  //     "Sample testimonial placeholder — add a verified patient experience here when available.",
  //   name: "Sample Review 2",
  // },
  // {
  //   quote:
  //     "Sample testimonial placeholder — replace with an approved testimonial from an actual patient.",
  //   name: "Sample Review 3",
  // },
];


const gallery = [
  {
    title: "Scanning / Ultrasound",
    icon: ScanHeart,
    image: scanImage,
    text:
      "Detailed fetal ultrasound assessment supporting the health, growth and wellbeing of mother and baby.",
  },

  {
    title: "Mother & Baby Care",
    icon: HeartHandshake,
    image: motherBabyImage,
    text:
      "Compassionate maternal and newborn care focused on comfort, safety and a healthy beginning.",
  },

  {
    title: "Pregnancy Consultation",
    icon: Stethoscope,
    image: consultationImage,
    text:
      "Personalised pregnancy consultation, counselling and guidance through every stage of maternal care.",
  },
];


export default function Testimonials() {
  return (
    <>
      {/* ==========================================
          PAGE BANNER
      ========================================== */}

      <PageBanner
        title="Testimonials"
        subtitle="Words shared by families who experienced Dr. Shanthi's maternal and fetal care."
      />


      {/* ==========================================
          PATIENT TESTIMONIALS
      ========================================== */}

      <section className="section-space bg-white">
        <div className="content-shell">

          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="section-eyebrow">
              Patient Testimonials
            </p>

            <h2 className="section-title mt-2">
              Care remembered with trust
            </h2>

            <p className="section-description mx-auto mt-4 max-w-2xl">
              Thoughts from families about consultation, scan guidance,
              prenatal counselling and pregnancy care.
            </p>
          </div>

          <TestimonialsSlider testimonials={testimonials} />

        </div>
      </section>


      {/* ==========================================
          CLINICAL GALLERY
      ========================================== */}

      <section className="section-space bg-[#FBF8FC] pt-10 sm:pt-12 lg:pt-14">
        <div className="content-shell">

          {/* HEADING */}
          <div className="mx-auto mb-10 max-w-3xl text-center">

            <p className="section-eyebrow">
              Clinical Gallery
            </p>

            <h2 className="section-title mt-2">
              A glimpse of fetal, maternal and newborn care
            </h2>

            <p className="section-description mx-auto mt-4 max-w-2xl">
              Visual moments representing fetal scanning, pregnancy
              consultation and compassionate mother and baby care.
            </p>

          </div>


          {/* GALLERY CARDS */}
          <div className="grid gap-6 md:grid-cols-3">

            {gallery.map(
              ({ title, icon: Icon, image, text }) => (

                <article
                  key={title}
                  className="
                    group
                    relative
                    h-[360px]
                    overflow-hidden
                    rounded-[26px]
                    bg-[#4A2B68]
                    shadow-[0_16px_42px_rgba(72,38,109,.13)]
                    sm:h-[390px]
                  "
                >

                  {/* REAL IMAGE */}
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


                  {/* DARK BOTTOM OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-[linear-gradient(180deg,rgba(34,20,54,.02)_20%,rgba(44,26,66,.18)_48%,rgba(44,26,66,.94)_100%)]
                    "
                  />


                  {/* CONTENT */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white sm:p-6">

                    <span
                      className="
                        mb-4
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-white
                        text-[#663A8E]
                        shadow-[0_10px_26px_rgba(20,15,35,.18)]
                      "
                    >
                      <Icon size={22} />
                    </span>

                    <h3 className="text-[20px] font-bold leading-tight sm:text-[21px]">
                      {title}
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-white/85 sm:text-[15px]">
                      {text}
                    </p>

                  </div>


                  {/* HOVER BOTTOM LINE */}
                  <div className="absolute bottom-0 left-0 z-20 h-[3px] w-0 bg-[#72DCD8] transition-all duration-500 group-hover:w-full" />

                </article>

              )
            )}

          </div>

        </div>
      </section>
    </>
  );
}