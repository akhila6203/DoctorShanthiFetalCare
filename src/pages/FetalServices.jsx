import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";

import PageBanner from "../components/common/PageBanner";

import f1 from "../assets/images/f1.jpg";
import f2 from "../assets/images/f2.jpg";

/* =========================================================
   FETAL SCANS
========================================================= */

const scans = [
  "Fetal Viability Scan",
  "Advanced Fetal NT Scan (FMF First Trimester Risk Assessment, Double Marker Test & Quadruple Test)",
  "Advanced Anomaly Scans",
  "Fetal Echocardiography (Advanced Fetal Heart Scans)",
  "Fetal Neurosonogram (Advanced Fetal Brain Scan)",
  "Fetal Growth and Dopplers",
  "3D/4D Scans",
  "Cervical Screenings",
  "High Risk Pregnancies & Multiple Pregnancy Scans",
  "Pre-conceptional Counselling",
  "Comprehensive Genetic Counselling",
  "Genetic Testing (NIPT, Karyotype, FISH, Microarray, WES, Thalassemia Screening, Fetal Blood Grouping)",
  "3D/4D Pelvic Scan",
  "Follicular Studies",
];

/* =========================================================
   FETAL PROCEDURES
========================================================= */

const procedures = [
  "Amniocentesis",
  "Chorionic Villus Sampling (CVS)",
  "Cord Blood Sampling",
  "Fetal Reduction",
  "Intrauterine Blood Transfusion",
  "Fetal Shunting",
  "Amniodrainage",
  "Fetal Ascitic Tap",
  "Fetal Pleural Tap",
  "Fetoscope Procedures (Radiofrequency Ablation, Fetal Laser Procedures)",
  "Follicular Studies",
];

/* =========================================================
   COMMON LIST ITEM
========================================================= */

function ListItem({ children }) {
  return (
    <li
      className="
        flex
        items-start
        gap-2
        text-[14px]
        leading-[1.65]
        text-[#252A44]/85
        sm:text-[14.5px]
        lg:text-[15px]
      "
    >
      <ChevronRight
        size={15}
        strokeWidth={3}
        className="
          mt-[5px]
          shrink-0
          text-[#D94C8A]
        "
      />

      <span>{children}</span>
    </li>
  );
}

/* =========================================================
   FETAL SERVICES PAGE
========================================================= */

export default function FetalServices() {
  return (
    <>
      {/* =====================================================
          PAGE BANNER
      ===================================================== */}

      <PageBanner
        title="Fetal Services"
        subtitle="Advanced fetal scanning, prenatal diagnosis and specialised fetal procedures with compassionate guidance."
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="content-shell">

          {/* =================================================
              INTRODUCTION
          ================================================== */}

          <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
            <p
              className="
                text-[12px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#D94C8A]
              "
            >
              Specialised Fetal Medicine
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
              Comprehensive care for mother and baby
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
              Detailed fetal assessment, screening, counselling
              and specialised procedures tailored to each pregnancy.
            </p>
          </div>

          {/* =================================================
              FETAL SCANS
              IMAGE LEFT + CONTENT RIGHT
          ================================================== */}

          <div
            className="
              mx-auto
              grid
              max-w-[1120px]
              items-start
              gap-6
              md:grid-cols-[0.88fr_1.12fr]
              md:gap-8
              lg:gap-10
            "
          >
            {/* IMAGE */}

            <div className="w-full">
              <img
                src={f1}
                alt="Fetal scans"
                className="
                  block
                  h-auto
                  w-full
                  max-h-[430px]
                  object-contain
                  object-top
                "
              />
            </div>

            {/* CONTENT */}

            <div className="md:pt-0">
              <h2
                className="
                  text-[25px]
                  font-bold
                  leading-tight
                  text-[#D94C8A]
                  sm:text-[28px]
                  lg:text-[30px]
                "
              >
                Fetal Scans :
              </h2>

              <div
                className="
                  mt-3
                  h-[2px]
                  w-12
                  bg-[#D94C8A]
                "
              />

              <ul className="mt-4 space-y-1">
                {scans.map((item) => (
                  <ListItem key={item}>
                    {item}
                  </ListItem>
                ))}
              </ul>

              <Link
                to="/services/fetal-scans"
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  text-[14px]
                  font-bold
                  text-[#663A8E]
                  transition-colors
                  duration-300
                  hover:text-[#D94C8A]
                "
              >
                View Fetal Scans
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* =================================================
              SPACE BETWEEN TWO SECTIONS
          ================================================== */}

          <div className="h-10 sm:h-12 lg:h-14" />

          {/* =================================================
              FETAL PROCEDURES
              CONTENT LEFT + IMAGE RIGHT
          ================================================== */}

          <div
            className="
              mx-auto
              grid
              max-w-[1120px]
              items-start
              gap-6
              md:grid-cols-[1.12fr_0.88fr]
              md:gap-8
              lg:gap-10
            "
          >
            {/* CONTENT */}

            <div>
              <h2
                className="
                  text-[25px]
                  font-bold
                  leading-tight
                  text-[#D94C8A]
                  sm:text-[28px]
                  lg:text-[30px]
                "
              >
                Fetal Procedures{" "}
                <span className="text-[#663A8E]">
                  (In Utero):
                </span>
              </h2>

              <div
                className="
                  mt-3
                  h-[2px]
                  w-12
                  bg-[#D94C8A]
                "
              />

              <ul className="mt-4 space-y-1">
                {procedures.map((item) => (
                  <ListItem key={item}>
                    {item}
                  </ListItem>
                ))}
              </ul>

              <Link
                to="/services/fetal-procedures"
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  text-[14px]
                  font-bold
                  text-[#663A8E]
                  transition-colors
                  duration-300
                  hover:text-[#D94C8A]
                "
              >
                View Fetal Procedures
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* IMAGE */}

            <div className="w-full">
              <img
                src={f2}
                alt="Fetal procedures"
                className="
                  block
                  h-auto
                  w-full
                  max-h-[430px]
                  object-contain
                  object-top
                "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}