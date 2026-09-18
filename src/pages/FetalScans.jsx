import PageBanner from "../components/common/PageBanner";

/* =========================================================
   FETAL SCAN IMAGES
========================================================= */

import fs1 from "../assets/images/fs1.jpg";
import fs2 from "../assets/images/fs2.jpg";
import fs3 from "../assets/images/fs3.jpg";
import fs4 from "../assets/images/fs4.jpg";
import fs5 from "../assets/images/fs5.jpg";
import fs6 from "../assets/images/fs6.jpg";
import fs7 from "../assets/images/fs7.jpg";
import fs8 from "../assets/images/fs8.jpg";
import fs9 from "../assets/images/fs9.jpg";

/* =========================================================
   FETAL SCANS DATA
========================================================= */

const scans = [
  {
    number: "I",
    title: "Viability Scan",
    timing: "6–10 weeks",
    image: fs1,
    description:
      "This scan is performed during early pregnancy to assess the site of pregnancy, number of babies, size and cardiac activity.",
  },
  {
    number: "II",
    title:
      "First Trimester Screening for Aneuploidies / Anomalies / Pregnancy Complications",
    timing: "11–13+6 weeks",
    image: fs2,
    description:
      "First trimester screening provides important information about fetal development and pregnancy risk assessment. Screening may include ultrasound assessment and blood tests when clinically advised.",
  },
  {
    number: "III",
    title: "Early Anomaly Scan / Risk Reassessment Scan",
    timing: "16–18 weeks",
    image: fs3,
    description:
      "An early anomaly assessment may be offered to evaluate fetal growth, structural development and markers requiring further assessment.",
  },
  {
    number: "IV",
    title: "Anomaly Scan / Level II",
    timing: "20–24 weeks",
    image: fs4,
    description:
      "A detailed anomaly scan assesses fetal anatomy, growth and amniotic fluid and helps identify structural concerns requiring further evaluation.",
  },
  {
    number: "V",
    title: "Fetal Well Being With Colour Doppler",
    timing: "After 26 weeks",
    image: fs5,
    description:
      "Colour Doppler assessment may be used when fetal growth and placental circulation require additional monitoring.",
  },
  {
    number: "VI",
    title: "Fetal Echocardiography",
    timing: "22–24 weeks",
    image: fs6,
    description:
      "Fetal echocardiography provides a detailed assessment of the baby's heart when clinically indicated.",
  },
  {
    number: "VII",
    title:
      "Transvaginal Scan For Cervical Screening And Pre-eclampsia Screening",
    timing: "From 12 weeks",
    image: fs7,
    description:
      "Ultrasound assessment may be used to evaluate cervical length and maternal uterine artery blood flow in pregnancies requiring additional screening.",
  },
  {
    number: "VIII",
    title: "Growth Scan",
    timing: "26–40 weeks",
    image: fs8,
    description:
      "Growth scans monitor fetal growth, amniotic fluid and other parameters during the later stages of pregnancy.",
  },
  {
    number: "IX",
    title: "Multiple Pregnancy Scan",
    timing: "Twins, triplets and higher-order pregnancies",
    image: fs9,
    description:
      "Multiple pregnancies require closer fetal growth and wellbeing monitoring, with scan frequency determined by the pregnancy type and clinical findings.",
  },
];

/* =========================================================
   FETAL SCANS PAGE
========================================================= */

export default function FetalScans() {
  return (
    <>
      {/* =====================================================
          PAGE BANNER / BREADCRUMB
      ===================================================== */}

      <PageBanner
        title="Fetal Scans"
        subtitle="Advanced ultrasound assessment through the different stages of pregnancy."
      />

      {/* =====================================================
          MAIN SECTION
      ===================================================== */}

      <section className="bg-white py-10 sm:py-11 lg:py-12">
        <div className="content-shell">

          {/* =================================================
              INTRODUCTION
          ================================================== */}

          <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-10">
            <p
              className="
                text-[12px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#D94C8A]
              "
            >
              Pregnancy Ultrasound
            </p>

            <h2
              className="
                mt-2
                text-[27px]
                font-bold
                leading-tight
                text-[#663A8E]
                sm:text-[31px]
                lg:text-[34px]
              "
            >
              Fetal Scans
            </h2>

            <div
              className="
                mx-auto
                mt-3
                h-[3px]
                w-14
                rounded-full
                bg-[linear-gradient(90deg,#663A8E,#D94C8A)]
              "
            />

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-[14px]
                leading-7
                text-[#252A44]/70
                sm:text-[15px]
              "
            >
              Antenatal ultrasound helps assess fetal development,
              growth and wellbeing throughout pregnancy.
            </p>
          </div>

          {/* =================================================
              ALL FETAL SCANS
          ================================================== */}

          <div className="mx-auto max-w-[1080px]">
            {scans.map((scan, index) => {
              const imageOnLeft = index % 2 !== 0;

              return (
                <article
                  key={scan.title}
                  className="
                    grid
                    gap-5
                    py-5
                    sm:gap-6
                    sm:py-6
                    md:grid-cols-[1fr_1fr]
                    md:items-start
                    md:gap-7
                    lg:gap-9
                    lg:py-7
                  "
                >
                  {/* =========================================
                      TEXT
                  ========================================== */}

                  <div
                    className={`
                      order-1
                      pt-0
                      md:pt-2

                      ${
                        imageOnLeft
                          ? "md:order-2"
                          : "md:order-1"
                      }
                    `}
                  >
                    {/* TITLE + TIMING */}

                    <h2
                      className="
                        m-0
                        text-[17px]
                        font-bold
                        leading-[1.55]
                        text-[#D94C8A]
                        sm:text-[18px]
                        lg:text-[19px]
                      "
                    >
                      <span>{scan.number}. </span>

                      {scan.title}

                      <span className="ml-1 text-[#24979D]">
                        ({scan.timing}):
                      </span>
                    </h2>

                    {/* SMALL LINE */}

                    <div
                      className="
                        mt-2.5
                        h-[2px]
                        w-10
                        rounded-full
                        bg-[#D94C8A]
                      "
                    />

                    {/* DESCRIPTION */}

                    <p
                      className="
                        mt-3.5
                        max-w-[500px]
                        text-[14px]
                        leading-[1.8]
                        text-[#252A44]/75
                        sm:text-[15px]
                      "
                    >
                      {scan.description}
                    </p>
                  </div>

                  {/* =========================================
                      IMAGE
                  ========================================== */}

                  <div
                    className={`
                      order-2
                      flex
                      items-start

                      ${
                        imageOnLeft
                          ? "md:order-1 md:justify-start"
                          : "md:order-2 md:justify-end"
                      }
                    `}
                  >
                    <div
                      className="
                        w-full
                        max-w-[400px]
                        sm:max-w-[420px]
                        lg:max-w-[440px]
                      "
                    >
                      <img
                        src={scan.image}
                        alt={scan.title}
                        className="
                          block
                          h-auto
                          max-h-[310px]
                          w-full
                          object-contain
                        "
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}