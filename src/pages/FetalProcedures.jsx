import PageBanner from "../components/common/PageBanner";

import fp1 from "../assets/images/fp1.jpg";
import fp2 from "../assets/images/fp2.jpg";
import fp3 from "../assets/images/fp3.jpg";
import fp4 from "../assets/images/fp4.jpg";
import fp5 from "../assets/images/fp5.jpg";
import fp6 from "../assets/images/fp6.jpg";
import fp7 from "../assets/images/fp7.jpg";
import fp8 from "../assets/images/fp8.jpg";
import fp9 from "../assets/images/fp9.jpg";
import fp10 from "../assets/images/fp10.jpg";

/* =========================================================
   PROCEDURE DATA
========================================================= */

const procedures = [
  {
    title: "Amniocentesis",
    image: fp2,
    description:
      "Amniocentesis is a prenatal diagnostic procedure performed under ultrasound guidance when clinically indicated. Detailed counselling is provided before the procedure.",
  },
  {
    title: "Chorionic Villus Sampling (CVS)",
    image: fp3,
    description:
      "CVS is a prenatal diagnostic procedure in which placental tissue is sampled under image guidance when clinically appropriate.",
  },
  {
    title: "Fetal Reduction",
    image: fp4,
    description:
      "Fetal reduction is a specialised fetal medicine procedure considered in selected multiple pregnancies after detailed evaluation and counselling.",
  },
  {
    title: "Cordocentesis",
    image: fp5,
    description:
      "Cordocentesis may be performed in selected cases to obtain fetal blood for diagnostic assessment or treatment planning.",
  },
  {
    title: "Shunt Insertion (Bladder And Thorax)",
    image: fp6,
    description:
      "Fetal shunt placement may be considered in selected fetal conditions following detailed ultrasound evaluation and specialist counselling.",
  },
  {
    title: "Amniodrainage",
    image: fp7,
    description:
      "Amniodrainage involves removal of excess amniotic fluid in selected pregnancies when clinically indicated.",
  },
  {
    title: "Amnioinfusion",
    image: fp8,
    description:
      "Amnioinfusion may be considered in selected cases where additional amniotic fluid is required for assessment or management.",
  },
  {
    title: "Intrauterine Transfusion",
    image: fp9,
    description:
      "Intrauterine transfusion is a specialised fetal therapy used in selected cases of significant fetal anaemia.",
  },
  {
    title: "Radiofrequency Ablation",
    image: fp10,
    description:
      "Radiofrequency ablation is a specialised minimally invasive fetal therapy that may be considered in carefully selected complicated multiple pregnancies.",
  },
];

/* =========================================================
   TOP PROCEDURE LIST
========================================================= */

const procedureList = [
  "Amniocentesis",
  "Chorionic Villus Sampling (CVS)",
  "Fetal Reduction",
  "Cordocentesis",
  "Shunt Insertion (Bladder And Thorax)",
  "Amniodrainage",
  "Amnioinfusion",
  "Intrauterine Transfusion",
  "Radio-frequency Ablation",
];

/* =========================================================
   COMPONENT
========================================================= */

export default function FetalProcedures() {
  return (
    <>
      {/* =====================================================
          PAGE BANNER / BREADCRUMB
      ===================================================== */}

      <PageBanner
        title="Fetal Procedures"
        subtitle="Specialised diagnostic and therapeutic fetal medicine procedures with careful evaluation and counselling."
      />

      {/* =====================================================
          MAIN SECTION
      ===================================================== */}

      <section className="section-space bg-[#FBF8FC]">
        <div className="content-shell">

          {/* =================================================
              ONLY ONE FETAL PROCEDURES HEADING
          ================================================== */}

          <div className="mb-10 text-center sm:mb-12">
            <p className="section-eyebrow">
              Advanced Fetal Care
            </p>

            <h2
              className="
                mt-2
                text-[24px]
                font-bold
                leading-tight
                text-[#663A8E]
                sm:text-[28px]
                lg:text-[31px]
              "
            >
              Fetal Procedures{" "}
              <span className="text-[#D94C8A]">
                (Diagnostic & Therapeutic)
              </span>
            </h2>

            <div
              className="
                mx-auto
                mt-4
                h-[3px]
                w-16
                rounded-full
                bg-[linear-gradient(90deg,#663A8E,#D94C8A)]
              "
            />
          </div>

          {/* =================================================
              PROCEDURE LIST + IMAGE
              NO WHITE OUTER CARD
          ================================================== */}

          <div
            className="
              mx-auto
              grid
              max-w-6xl
              items-center
              gap-10
              md:grid-cols-[1fr_0.85fr]
              md:gap-12
              lg:grid-cols-[1fr_0.78fr]
              lg:gap-16
            "
          >

            {/* ===============================================
                LEFT SIDE - PROCEDURE NAMES
            ================================================ */}

            <div>
              <p
                className="
                  mb-5
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#D94C8A]
                "
              >
                Our Procedures
              </p>

              <div className="space-y-1">
                {procedureList.map((item, index) => (
                  <div
                    key={item}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      py-2.5
                    "
                  >
                    {/* NUMBER */}

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#FCEAF2]
                        text-[12px]
                        font-bold
                        text-[#D94C8A]
                        transition-all
                        duration-300
                        group-hover:bg-[#D94C8A]
                        group-hover:text-white
                      "
                    >
                      {index + 1}
                    </span>

                    {/* PROCEDURE NAME */}

                    <span
                      className="
                        text-[14px]
                        font-semibold
                        leading-6
                        text-[#252A44]
                        transition-colors
                        duration-300
                        group-hover:text-[#D94C8A]
                        sm:text-[15px]
                        lg:text-[16px]
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ===============================================
                RIGHT SIDE - MEDIUM IMAGE
            ================================================ */}

            <div
  className="
    mx-auto
    w-full
    max-w-[480px]
    md:ml-auto
    md:max-w-[500px]
    lg:max-w-[540px]
    xl:max-w-[570px]
  "
>
  <img
    src={fp1}
    alt="Fetal diagnostic and therapeutic procedures"
    className="
      h-auto
      w-full
      object-contain
    "
  />
</div>
          </div>

          {/* =================================================
              SMALL SPACE BEFORE CARDS
          ================================================== */}

          <div className="h-12 sm:h-14 lg:h-16" />

          {/* =================================================
              PROCEDURE CARDS
              NO SECOND HEADING
          ================================================== */}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {procedures.map((procedure, index) => (
              <article
                key={procedure.title}
                className="
                  group
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#663A8E]/10
                  bg-white
                  shadow-[0_10px_30px_rgba(72,38,109,0.07)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_40px_rgba(72,38,109,0.12)]
                "
              >

                {/* ===========================================
                    CARD IMAGE
                ============================================ */}

                <div
                  className="
                    relative
                    overflow-hidden
                    bg-[#F8F4FA]
                  "
                >
                  <img
                    src={procedure.image}
                    alt={procedure.title}
                    className="
                      h-[250px]
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-[1.02]
                      sm:h-[270px]
                      lg:h-[290px]
                    "
                  />

                  {/* CARD NUMBER */}

                  <span
                    className="
                      absolute
                      left-4
                      top-4
                      flex
                      h-9
                      min-w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-white/95
                      px-3
                      text-[12px]
                      font-bold
                      text-[#D94C8A]
                      shadow-sm
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* ===========================================
                    CARD CONTENT
                ============================================ */}

                <div className="p-5 sm:p-6">
                  <h3
                    className="
                      text-[18px]
                      font-bold
                      leading-7
                      text-[#663A8E]
                      sm:text-[20px]
                    "
                  >
                    {procedure.title}
                  </h3>

                  <div
                    className="
                      mt-3
                      h-[2px]
                      w-12
                      rounded-full
                      bg-[#D94C8A]
                    "
                  />

                  <p
                    className="
                      mt-4
                      text-[14px]
                      leading-7
                      text-[#252A44]/75
                      sm:text-[15px]
                    "
                  >
                    {procedure.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}