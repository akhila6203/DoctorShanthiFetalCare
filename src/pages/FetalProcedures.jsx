import PageBanner from "../components/common/PageBanner";

/* =========================================================
   TOP FETAL PROCEDURE IMAGE
   ONLY ONE IMAGE
========================================================= */

import amnioImage from "../assets/images/fetal-reduction.jpeg";

const procedures = [
  {
    title: "Amniocentesis",
    description:
      "Amniocentesis is an ultrasound-guided prenatal diagnostic procedure in which a small amount of amniotic fluid is collected for appropriate fetal testing. It may be considered when further genetic, chromosomal or infection-related assessment is clinically required.",
  },

  {
    title: "Chorionic Villus Sampling (CVS)",
    description:
      "Chorionic Villus Sampling is a prenatal diagnostic procedure in which a small sample of placental tissue is obtained under ultrasound guidance for genetic or chromosomal assessment when clinically indicated.",
  },

  {
    title: "Fetal Reduction",
    description:
      "Fetal reduction is a specialised fetal medicine procedure considered in selected multiple pregnancies. Detailed ultrasound assessment and counselling are provided before planning the procedure.",
  },

  {
    title: "Cord Blood Sampling",
    description:
      "Cord blood sampling is an ultrasound-guided fetal procedure used in selected pregnancies to obtain a fetal blood sample from the umbilical cord for specialised diagnostic assessment or treatment planning.",
  },

  {
    title: "Intrauterine Blood Transfusion",
    description:
      "Intrauterine blood transfusion is a specialised fetal therapy used in selected cases of significant fetal anaemia. The procedure is performed under ultrasound guidance following detailed fetal assessment.",
  },

  {
    title: "Fetal Shunting",
    description:
      "Fetal shunting may be considered in selected fetal conditions involving abnormal fluid accumulation or obstruction. The procedure is planned following detailed ultrasound evaluation and specialist counselling.",
  },

  {
    title: "Amniodrainage",
    description:
      "Amniodrainage is an ultrasound-guided procedure in which excess amniotic fluid is carefully removed in selected pregnancies when clinically indicated.",
  },

  {
    title: "Fetal Ascitic Tap",
    description:
      "Fetal ascitic tap is an ultrasound-guided procedure that may be considered when abnormal fluid accumulation is present within the fetal abdomen and drainage is clinically required.",
  },

  {
    title: "Fetal Pleural Tap",
    description:
      "Fetal pleural tap is an ultrasound-guided procedure that may be considered when abnormal fluid has accumulated around the fetal lungs and drainage is clinically required.",
  },

  {
    title: "Fetoscopic Procedures",
    description:
      "Fetoscopic procedures are specialised minimally invasive fetal interventions used in selected pregnancies following detailed fetal and placental assessment.",
  },

  {
    title: "Radiofrequency Ablation",
    description:
      "Radiofrequency ablation is a specialised minimally invasive fetal therapy that may be considered in selected complicated multiple pregnancies after detailed evaluation.",
  },

  {
    title: "Fetal Laser Procedures",
    description:
      "Fetal laser procedures are specialised fetal therapies used in selected fetal and placental conditions following detailed ultrasound assessment and specialist counselling.",
  },
];

/* =========================================================
   TOP PROCEDURE LIST
========================================================= */

const procedureList = [
  "Amniocentesis",
  "Chorionic Villus Sampling (CVS)",
  "Fetal Reduction",
  "Cord Blood Sampling",
  "Intrauterine Blood Transfusion",
  "Fetal Shunting",
  "Amniodrainage",
  "Fetal Ascitic Tap",
  "Fetal Pleural Tap",
  "Fetoscopic Procedures",
  "Radiofrequency Ablation",
  "Fetal Laser Procedures",
];

/* =========================================================
   SINGLE PROCEDURE IMAGE
========================================================= */

function FetalProcedureImage() {
  return (
    <div
      className="
        w-full
        max-w-[340px]
        overflow-hidden

        sm:max-w-[360px]
        md:max-w-[370px]
        lg:max-w-[380px]
      "
    >
      <img
        src={amnioImage}
        alt="Fetal procedure"
        className="
          block
          h-[400px]
          w-full
          object-cover

          sm:h-[420px]
          md:h-[430px]
          lg:h-[440px]
        "
      />
    </div>
  );
}

/* =========================================================
   COMPONENT
========================================================= */

export default function FetalProcedures() {
  return (
    <>
      {/* =====================================================
          PAGE BANNER
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
              MAIN HEADING
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
              TOP PROCEDURE LIST + SINGLE IMAGE
          ================================================== */}

          <div
            className="
              mx-auto
              grid
              max-w-[980px]
              items-start
              gap-7

              md:grid-cols-[minmax(0,1fr)_380px]
              md:gap-9

              lg:grid-cols-[minmax(0,1fr)_380px]
              lg:gap-12
            "
          >
            {/* ===============================================
                LEFT - PROCEDURE LIST
            ================================================ */}

            <div className="w-full">
              <h3
                className="
                  text-[24px]
                  font-bold
                  leading-tight
                  text-[#D94C8A]

                  sm:text-[26px]

                  lg:text-[28px]
                "
              >
                Fetal Procedures{" "}
                <span className="text-[#663A8E]">
                  (In Utero):
                </span>
              </h3>

              <div
                className="
                  mt-2.5
                  h-[2px]
                  w-12
                  bg-[#D94C8A]
                "
              />

              <ul className="mt-5 space-y-2">
                {procedureList.map((item) => (
                  <li
                    key={item}
                    className="
                      flex
                      items-start
                      gap-3
                      text-[14px]
                      font-medium
                      leading-[1.7]
                      text-[#252A44]/85

                      sm:text-[15px]

                      lg:text-[15.5px]
                    "
                  >
                    <span
                      className="
                        mt-[9px]
                        h-[6px]
                        w-[6px]
                        shrink-0
                        rotate-45
                        border-r-2
                        border-t-2
                        border-[#D94C8A]
                      "
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===============================================
                RIGHT - SINGLE IMAGE ONLY
            ================================================ */}

            <div
              className="
                flex
                w-full
                justify-center

                md:justify-end
              "
            >
              <FetalProcedureImage />
            </div>
          </div>

          {/* =================================================
              SPACE BEFORE CARDS
          ================================================== */}

          <div className="h-12 sm:h-14 lg:h-16" />

          {/* =================================================
              PROCEDURE CARDS
              NO IMAGES
          ================================================== */}

          <div
            className="
              grid
              gap-6

              md:grid-cols-2

              xl:grid-cols-3
            "
          >
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
                    CARD CONTENT ONLY
                    ALL INDIVIDUAL IMAGES REMOVED
                ============================================ */}

                <div className="relative p-5 sm:p-6">

                  {/* NUMBER */}

                  <span
                    className="
                      mb-5
                      flex
                      h-9
                      w-fit
                      min-w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-[#FCEAF2]
                      px-3
                      text-[12px]
                      font-bold
                      text-[#D94C8A]
                      shadow-sm
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* TITLE */}

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

                  {/* SMALL LINE */}

                  <div
                    className="
                      mt-3
                      h-[2px]
                      w-12
                      rounded-full
                      bg-[#D94C8A]
                    "
                  />

                  {/* DESCRIPTION */}

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

          {/* =================================================
              BOTTOM NOTE
          ================================================== */}

          <div
            className="
              mx-auto
              mt-10
              max-w-[900px]
              rounded-[18px]
              border
              border-[#663A8E]/10
              bg-white
              px-5
              py-5
              text-center

              sm:mt-12
              sm:px-7
              sm:py-6
            "
          >
            <p
              className="
                text-[13px]
                leading-6
                text-[#252A44]/70

                sm:text-[14px]
                sm:leading-7
              "
            >
              The type and timing of a fetal procedure are determined
              according to the individual pregnancy, ultrasound findings
              and clinical requirements following specialist evaluation
              and counselling.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}


// import PageBanner from "../components/common/PageBanner";

// /* =========================================================
//    PROCEDURE IMAGES
// ========================================================= */

// import fp1 from "../assets/images/fp1.jpg";
// import fp2 from "../assets/images/fp2.jpg";
// import fp3 from "../assets/images/fp3.jpg";
// import fp4 from "../assets/images/fp4.jpg";
// import fp5 from "../assets/images/fp5.jpg";
// import fp6 from "../assets/images/fp6.jpg";
// import fp7 from "../assets/images/fp7.jpg";
// import fp8 from "../assets/images/fp8.jpg";
// import fp9 from "../assets/images/fp9.jpg";
// import fp10 from "../assets/images/fp10.jpg";

// /* =========================================================
//    SAME IMAGES USED IN FETAL SERVICES PROCEDURE COLLAGE
// ========================================================= */

// import amnioImage from "../assets/images/amniocentesis.png";
// import cvsImage from "../assets/images/cvs.jpeg";
// import cvs from "../assets/images/cvs.jpeg";
// import reductionImage from "../assets/images/fetal-reduction.jpeg";

// /* =========================================================
//    SCAN IMAGES USED IN FETAL SERVICES PROCEDURE COLLAGE
// ========================================================= */

// import fs7 from "../assets/images/fs7.jpg";
// import fs8 from "../assets/images/fs8.jpg";
// import fs9 from "../assets/images/fs9.jpg";
// import fetalreduction from "../assets/images/fetalreduction.png";
// // import sampling from "../assets/images/cord-blood-sampling.png";
// // import intrauterine from "../assets/images/intrauterine-blood-transfusion.png";
// // import shunting from "../assets/images/fetal-shunting.png";
// import amniodrainage from "../assets/images/amniodrainage.png";
// import fetalascitic from "../assets/images/fetal-ascitic-tap.png";
// import fetalpleural from "../assets/images/fetal-pleural-tap.png";
// import fetoscopicprocedures from "../assets/images/fetoscopic-procedures.png";
// import radiofrequencyablation from "../assets/images/radiofrequency-ablation.png";
// import fetallaserprocedures from "../assets/images/fetal-laser-procedures.png";

// /* =========================================================
//    PROCEDURE DATA
// ========================================================= */

// const procedures = [
//   {
//     title: "Amniocentesis",
//     image: amnioImage,
//     description:
//       "Amniocentesis is an ultrasound-guided prenatal diagnostic procedure in which a small amount of amniotic fluid is collected for appropriate fetal testing. It may be considered when further genetic, chromosomal or infection-related assessment is clinically required.",
//   },

//   {
//     title: "Chorionic Villus Sampling (CVS)",
//     image: cvs,
//     description:
//       "Chorionic Villus Sampling is a prenatal diagnostic procedure in which a small sample of placental tissue is obtained under ultrasound guidance for genetic or chromosomal assessment when clinically indicated.",
//   },

//   {
//     title: "Fetal Reduction",
//     image: fetalreduction,
//     description:
//       "Fetal reduction is a specialised fetal medicine procedure considered in selected multiple pregnancies. Detailed ultrasound assessment and counselling are provided before planning the procedure.",
//   },

//   {
//     title: "Cord Blood Sampling",
//     // image: sampling,
//     description:
//       "Cord blood sampling is an ultrasound-guided fetal procedure used in selected pregnancies to obtain a fetal blood sample from the umbilical cord for specialised diagnostic assessment or treatment planning.",
//   },

//   {
//     title: "Intrauterine Blood Transfusion",
//     // image: intrauterine,
//     description:
//       "Intrauterine blood transfusion is a specialised fetal therapy used in selected cases of significant fetal anaemia. The procedure is performed under ultrasound guidance following detailed fetal assessment.",
//   },

//   {
//     title: "Fetal Shunting",
//     // image: shunting,
//     description:
//       "Fetal shunting may be considered in selected fetal conditions involving abnormal fluid accumulation or obstruction. The procedure is planned following detailed ultrasound evaluation and specialist counselling.",
//   },

//   {
//     title: "Amniodrainage",
//     image: amniodrainage,
//     description:
//       "Amniodrainage is an ultrasound-guided procedure in which excess amniotic fluid is carefully removed in selected pregnancies when clinically indicated.",
//   },

//   {
//     title: "Fetal Ascitic Tap",
//     image: fetalascitic,
//     description:
//       "Fetal ascitic tap is an ultrasound-guided procedure that may be considered when abnormal fluid accumulation is present within the fetal abdomen and drainage is clinically required.",
//   },

//   {
//     title: "Fetal Pleural Tap",
//     image: fetalpleural,
//     description:
//       "Fetal pleural tap is an ultrasound-guided procedure that may be considered when abnormal fluid has accumulated around the fetal lungs and drainage is clinically required.",
//   },

//   {
//     title: "Fetoscopic Procedures",
//     image: fetoscopicprocedures,
//     description:
//       "Fetoscopic procedures are specialised minimally invasive fetal interventions used in selected pregnancies following detailed fetal and placental assessment.",
//   },

//   {
//     title: "Radiofrequency Ablation",
//     image: radiofrequencyablation,
//     description:
//       "Radiofrequency ablation is a specialised minimally invasive fetal therapy that may be considered in selected complicated multiple pregnancies after detailed evaluation.",
//   },

//   {
//     title: "Fetal Laser Procedures",
//     image: fetallaserprocedures,
//     description:
//       "Fetal laser procedures are specialised fetal therapies used in selected fetal and placental conditions following detailed ultrasound assessment and specialist counselling.",
//   },
// ];

// /* =========================================================
//    TOP PROCEDURE LIST
//    SAME AS FETAL SERVICES PAGE
// ========================================================= */

// const procedureList = [
//   "Amniocentesis",
//   "Chorionic Villus Sampling (CVS)",
//   "Fetal Reduction",
//   "Cord Blood Sampling",
//   "Intrauterine Blood Transfusion",
//   "Fetal Shunting",
//   "Amniodrainage",
//   "Fetal Ascitic Tap",
//   "Fetal Pleural Tap",
//   "Fetoscopic Procedures",
//   "Radiofrequency Ablation",
//   "Fetal Laser Procedures",
// ];

// /* =========================================================
//    PROCEDURE COLLAGE
//    EXACT SAME IMAGES AS FETAL SERVICES PAGE
// ========================================================= */

// function FetalProcedureCollage() {
//   const images = [
//     amnioImage,
//     cvsImage,
//     reductionImage,
//     fs7,
//     fs8,
//     fs9,
//   ];

//   return (
//     <div
//       className="
//         grid
//         w-full
//         max-w-[340px]
//         grid-cols-2
//         overflow-hidden
//         bg-black

//         sm:max-w-[360px]

//         md:max-w-[370px]

//         lg:max-w-[380px]
//       "
//     >
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className="
//             h-[112px]
//             overflow-hidden
//             border
//             border-white/25

//             sm:h-[120px]

//             md:h-[125px]

//             lg:h-[130px]
//           "
//         >
//           <img
//             src={image}
//             alt={`Fetal procedure ${index + 1}`}
//             className="
//               block
//               h-full
//               w-full
//               object-cover
//             "
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// /* =========================================================
//    COMPONENT
// ========================================================= */

// export default function FetalProcedures() {
//   return (
//     <>
//       {/* =====================================================
//           PAGE BANNER
//       ===================================================== */}

//       <PageBanner
//         title="Fetal Procedures"
//         subtitle="Specialised diagnostic and therapeutic fetal medicine procedures with careful evaluation and counselling."
//       />

//       {/* =====================================================
//           MAIN SECTION
//       ===================================================== */}

//       <section className="section-space bg-[#FBF8FC]">
//         <div className="content-shell">

//           {/* =================================================
//               MAIN HEADING
//           ================================================== */}

//           <div className="mb-10 text-center sm:mb-12">
//             <p className="section-eyebrow">
//               Advanced Fetal Care
//             </p>

//             <h2
//               className="
//                 mt-2
//                 text-[24px]
//                 font-bold
//                 leading-tight
//                 text-[#663A8E]

//                 sm:text-[28px]

//                 lg:text-[31px]
//               "
//             >
//               Fetal Procedures{" "}
//               <span className="text-[#D94C8A]">
//                 (Diagnostic & Therapeutic)
//               </span>
//             </h2>

//             <div
//               className="
//                 mx-auto
//                 mt-4
//                 h-[3px]
//                 w-16
//                 rounded-full
//                 bg-[linear-gradient(90deg,#663A8E,#D94C8A)]
//               "
//             />
//           </div>

//           {/* =================================================
//               TOP PROCEDURE LIST + COLLAGE

//               SAME CONTENT AND SAME COLLAGE AS
//               FETAL SERVICES PAGE
//           ================================================== */}

//           <div
//             className="
//               mx-auto
//               grid
//               max-w-[980px]
//               items-start
//               gap-7

//               md:grid-cols-[minmax(0,1fr)_380px]
//               md:gap-9

//               lg:grid-cols-[minmax(0,1fr)_380px]
//               lg:gap-12
//             "
//           >
//             {/* ===============================================
//                 LEFT - PROCEDURE LIST
//             ================================================ */}

//             <div className="w-full">
//               <h3
//                 className="
//                   text-[24px]
//                   font-bold
//                   leading-tight
//                   text-[#D94C8A]

//                   sm:text-[26px]

//                   lg:text-[28px]
//                 "
//               >
//                 Fetal Procedures{" "}
//                 <span className="text-[#663A8E]">
//                   (In Utero):
//                 </span>
//               </h3>

//               <div
//                 className="
//                   mt-2.5
//                   h-[2px]
//                   w-12
//                   bg-[#D94C8A]
//                 "
//               />

//               <ul className="mt-5 space-y-2">
//                 {procedureList.map((item) => (
//                   <li
//                     key={item}
//                     className="
//                       flex
//                       items-start
//                       gap-3
//                       text-[14px]
//                       font-medium
//                       leading-[1.7]
//                       text-[#252A44]/85

//                       sm:text-[15px]

//                       lg:text-[15.5px]
//                     "
//                   >
//                     <span
//                       className="
//                         mt-[9px]
//                         h-[6px]
//                         w-[6px]
//                         shrink-0
//                         rotate-45
//                         border-r-2
//                         border-t-2
//                         border-[#D94C8A]
//                       "
//                     />

//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* ===============================================
//                 RIGHT - EXACT SAME COLLAGE
//             ================================================ */}

//             <div
//               className="
//                 flex
//                 w-full
//                 justify-center

//                 md:justify-end
//               "
//             >
//               <FetalProcedureCollage />
//             </div>
//           </div>

//           {/* =================================================
//               SPACE BEFORE CARDS
//           ================================================== */}

//           <div className="h-12 sm:h-14 lg:h-16" />

//           {/* =================================================
//               PROCEDURE CARDS
//           ================================================== */}

//           <div
//             className="
//               grid
//               gap-6

//               md:grid-cols-2

//               xl:grid-cols-3
//             "
//           >
//             {procedures.map((procedure, index) => (
//               <article
//                 key={procedure.title}
//                 className="
//                   group
//                   overflow-hidden
//                   rounded-[24px]
//                   border
//                   border-[#663A8E]/10
//                   bg-white
//                   shadow-[0_10px_30px_rgba(72,38,109,0.07)]
//                   transition-all
//                   duration-300

//                   hover:-translate-y-1
//                   hover:shadow-[0_18px_40px_rgba(72,38,109,0.12)]
//                 "
//               >
//                 {/* ===========================================
//                     CARD IMAGE
//                 ============================================ */}

//                 <div
//                   className="
//                     relative
//                     overflow-hidden
//                     bg-[#F8F4FA]
//                   "
//                 >
//                   <img
//                     src={procedure.image}
//                     alt={procedure.title}
//                     className="
//                       h-[230px]
//                       w-full
//                       object-cover
//                       transition-transform
//                       duration-500

//                       group-hover:scale-[1.02]

//                       sm:h-[250px]

//                       lg:h-[270px]
//                     "
//                   />

//                   {/* NUMBER */}

//                   <span
//                     className="
//                       absolute
//                       left-4
//                       top-4
//                       flex
//                       h-9
//                       min-w-9
//                       items-center
//                       justify-center
//                       rounded-full
//                       bg-white/95
//                       px-3
//                       text-[12px]
//                       font-bold
//                       text-[#D94C8A]
//                       shadow-sm
//                     "
//                   >
//                     {String(index + 1).padStart(2, "0")}
//                   </span>
//                 </div>

//                 {/* ===========================================
//                     CARD CONTENT
//                 ============================================ */}

//                 <div className="p-5 sm:p-6">
//                   <h3
//                     className="
//                       text-[18px]
//                       font-bold
//                       leading-7
//                       text-[#663A8E]

//                       sm:text-[20px]
//                     "
//                   >
//                     {procedure.title}
//                   </h3>

//                   <div
//                     className="
//                       mt-3
//                       h-[2px]
//                       w-12
//                       rounded-full
//                       bg-[#D94C8A]
//                     "
//                   />

//                   <p
//                     className="
//                       mt-4
//                       text-[14px]
//                       leading-7
//                       text-[#252A44]/75

//                       sm:text-[15px]
//                     "
//                   >
//                     {procedure.description}
//                   </p>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {/* =================================================
//               BOTTOM NOTE
//           ================================================== */}

//           <div
//             className="
//               mx-auto
//               mt-10
//               max-w-[900px]
//               rounded-[18px]
//               border
//               border-[#663A8E]/10
//               bg-white
//               px-5
//               py-5
//               text-center

//               sm:mt-12
//               sm:px-7
//               sm:py-6
//             "
//           >
//             <p
//               className="
//                 text-[13px]
//                 leading-6
//                 text-[#252A44]/70

//                 sm:text-[14px]
//                 sm:leading-7
//               "
//             >
//               The type and timing of a fetal procedure are determined
//               according to the individual pregnancy, ultrasound findings
//               and clinical requirements following specialist evaluation
//               and counselling.
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


// // import PageBanner from "../components/common/PageBanner";

// // import fp1 from "../assets/images/fp1.jpg";
// // import fp2 from "../assets/images/fp2.jpg";
// // import fp3 from "../assets/images/fp3.jpg";
// // import fp4 from "../assets/images/fp4.jpg";
// // import fp5 from "../assets/images/fp5.jpg";
// // import fp6 from "../assets/images/fp6.jpg";
// // import fp7 from "../assets/images/fp7.jpg";
// // import fp8 from "../assets/images/fp8.jpg";
// // import fp9 from "../assets/images/fp9.jpg";
// // import fp10 from "../assets/images/fp10.jpg";

// // /* =========================================================
// //    PROCEDURE DATA
// // ========================================================= */

// // const procedures = [
// //   {
// //     title: "Amniocentesis",
// //     image: fp2,
// //     description:
// //       "Amniocentesis is a prenatal diagnostic procedure performed under ultrasound guidance when clinically indicated. Detailed counselling is provided before the procedure.",
// //   },
// //   {
// //     title: "Chorionic Villus Sampling (CVS)",
// //     image: fp3,
// //     description:
// //       "CVS is a prenatal diagnostic procedure in which placental tissue is sampled under image guidance when clinically appropriate.",
// //   },
// //   {
// //     title: "Fetal Reduction",
// //     image: fp4,
// //     description:
// //       "Fetal reduction is a specialised fetal medicine procedure considered in selected multiple pregnancies after detailed evaluation and counselling.",
// //   },
// //   {
// //     title: "Cordocentesis",
// //     image: fp5,
// //     description:
// //       "Cordocentesis may be performed in selected cases to obtain fetal blood for diagnostic assessment or treatment planning.",
// //   },
// //   {
// //     title: "Shunt Insertion (Bladder And Thorax)",
// //     image: fp6,
// //     description:
// //       "Fetal shunt placement may be considered in selected fetal conditions following detailed ultrasound evaluation and specialist counselling.",
// //   },
// //   {
// //     title: "Amniodrainage",
// //     image: fp7,
// //     description:
// //       "Amniodrainage involves removal of excess amniotic fluid in selected pregnancies when clinically indicated.",
// //   },
// //   {
// //     title: "Amnioinfusion",
// //     image: fp8,
// //     description:
// //       "Amnioinfusion may be considered in selected cases where additional amniotic fluid is required for assessment or management.",
// //   },
// //   {
// //     title: "Intrauterine Transfusion",
// //     image: fp9,
// //     description:
// //       "Intrauterine transfusion is a specialised fetal therapy used in selected cases of significant fetal anaemia.",
// //   },
// //   {
// //     title: "Radiofrequency Ablation",
// //     image: fp10,
// //     description:
// //       "Radiofrequency ablation is a specialised minimally invasive fetal therapy that may be considered in carefully selected complicated multiple pregnancies.",
// //   },
// // ];

// // /* =========================================================
// //    TOP PROCEDURE LIST
// // ========================================================= */

// // const procedureList = [
// //   "Amniocentesis",
// //   "Chorionic Villus Sampling (CVS)",
// //   "Fetal Reduction",
// //   "Cordocentesis",
// //   "Shunt Insertion (Bladder And Thorax)",
// //   "Amniodrainage",
// //   "Amnioinfusion",
// //   "Intrauterine Transfusion",
// //   "Radio-frequency Ablation",
// // ];

// // /* =========================================================
// //    COMPONENT
// // ========================================================= */

// // export default function FetalProcedures() {
// //   return (
// //     <>
// //       {/* =====================================================
// //           PAGE BANNER / BREADCRUMB
// //       ===================================================== */}

// //       <PageBanner
// //         title="Fetal Procedures"
// //         subtitle="Specialised diagnostic and therapeutic fetal medicine procedures with careful evaluation and counselling."
// //       />

// //       {/* =====================================================
// //           MAIN SECTION
// //       ===================================================== */}

// //       <section className="section-space bg-[#FBF8FC]">
// //         <div className="content-shell">

// //           {/* =================================================
// //               ONLY ONE FETAL PROCEDURES HEADING
// //           ================================================== */}

// //           <div className="mb-10 text-center sm:mb-12">
// //             <p className="section-eyebrow">
// //               Advanced Fetal Care
// //             </p>

// //             <h2
// //               className="
// //                 mt-2
// //                 text-[24px]
// //                 font-bold
// //                 leading-tight
// //                 text-[#663A8E]
// //                 sm:text-[28px]
// //                 lg:text-[31px]
// //               "
// //             >
// //               Fetal Procedures{" "}
// //               <span className="text-[#D94C8A]">
// //                 (Diagnostic & Therapeutic)
// //               </span>
// //             </h2>

// //             <div
// //               className="
// //                 mx-auto
// //                 mt-4
// //                 h-[3px]
// //                 w-16
// //                 rounded-full
// //                 bg-[linear-gradient(90deg,#663A8E,#D94C8A)]
// //               "
// //             />
// //           </div>

// //           {/* =================================================
// //               PROCEDURE LIST + IMAGE
// //               NO WHITE OUTER CARD
// //           ================================================== */}

// //           <div
// //             className="
// //               mx-auto
// //               grid
// //               max-w-6xl
// //               items-center
// //               gap-10
// //               md:grid-cols-[1fr_0.85fr]
// //               md:gap-12
// //               lg:grid-cols-[1fr_0.78fr]
// //               lg:gap-16
// //             "
// //           >

// //             {/* ===============================================
// //                 LEFT SIDE - PROCEDURE NAMES
// //             ================================================ */}

// //             <div>
// //               <p
// //                 className="
// //                   mb-5
// //                   text-[12px]
// //                   font-bold
// //                   uppercase
// //                   tracking-[0.14em]
// //                   text-[#D94C8A]
// //                 "
// //               >
// //                 Our Procedures
// //               </p>

// //               <div className="space-y-1">
// //                 {procedureList.map((item, index) => (
// //                   <div
// //                     key={item}
// //                     className="
// //                       group
// //                       flex
// //                       items-center
// //                       gap-4
// //                       py-2.5
// //                     "
// //                   >
// //                     {/* NUMBER */}

// //                     <span
// //                       className="
// //                         flex
// //                         h-8
// //                         w-8
// //                         shrink-0
// //                         items-center
// //                         justify-center
// //                         rounded-full
// //                         bg-[#FCEAF2]
// //                         text-[12px]
// //                         font-bold
// //                         text-[#D94C8A]
// //                         transition-all
// //                         duration-300
// //                         group-hover:bg-[#D94C8A]
// //                         group-hover:text-white
// //                       "
// //                     >
// //                       {index + 1}
// //                     </span>

// //                     {/* PROCEDURE NAME */}

// //                     <span
// //                       className="
// //                         text-[14px]
// //                         font-semibold
// //                         leading-6
// //                         text-[#252A44]
// //                         transition-colors
// //                         duration-300
// //                         group-hover:text-[#D94C8A]
// //                         sm:text-[15px]
// //                         lg:text-[16px]
// //                       "
// //                     >
// //                       {item}
// //                     </span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* ===============================================
// //                 RIGHT SIDE - MEDIUM IMAGE
// //             ================================================ */}

// //             <div
// //   className="
// //     mx-auto
// //     w-full
// //     max-w-[480px]
// //     md:ml-auto
// //     md:max-w-[500px]
// //     lg:max-w-[540px]
// //     xl:max-w-[570px]
// //   "
// // >
// //   <img
// //     src={fp1}
// //     alt="Fetal diagnostic and therapeutic procedures"
// //     className="
// //       h-auto
// //       w-full
// //       object-contain
// //     "
// //   />
// // </div>
// //           </div>

// //           {/* =================================================
// //               SMALL SPACE BEFORE CARDS
// //           ================================================== */}

// //           <div className="h-12 sm:h-14 lg:h-16" />

// //           {/* =================================================
// //               PROCEDURE CARDS
// //               NO SECOND HEADING
// //           ================================================== */}

// //           <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
// //             {procedures.map((procedure, index) => (
// //               <article
// //                 key={procedure.title}
// //                 className="
// //                   group
// //                   overflow-hidden
// //                   rounded-[24px]
// //                   border
// //                   border-[#663A8E]/10
// //                   bg-white
// //                   shadow-[0_10px_30px_rgba(72,38,109,0.07)]
// //                   transition-all
// //                   duration-300
// //                   hover:-translate-y-1
// //                   hover:shadow-[0_18px_40px_rgba(72,38,109,0.12)]
// //                 "
// //               >

// //                 {/* ===========================================
// //                     CARD IMAGE
// //                 ============================================ */}

// //                 <div
// //                   className="
// //                     relative
// //                     overflow-hidden
// //                     bg-[#F8F4FA]
// //                   "
// //                 >
// //                   <img
// //                     src={procedure.image}
// //                     alt={procedure.title}
// //                     className="
// //                       h-[250px]
// //                       w-full
// //                       object-cover
// //                       transition-transform
// //                       duration-500
// //                       group-hover:scale-[1.02]
// //                       sm:h-[270px]
// //                       lg:h-[290px]
// //                     "
// //                   />

// //                   {/* CARD NUMBER */}

// //                   <span
// //                     className="
// //                       absolute
// //                       left-4
// //                       top-4
// //                       flex
// //                       h-9
// //                       min-w-9
// //                       items-center
// //                       justify-center
// //                       rounded-full
// //                       bg-white/95
// //                       px-3
// //                       text-[12px]
// //                       font-bold
// //                       text-[#D94C8A]
// //                       shadow-sm
// //                     "
// //                   >
// //                     {String(index + 1).padStart(2, "0")}
// //                   </span>
// //                 </div>

// //                 {/* ===========================================
// //                     CARD CONTENT
// //                 ============================================ */}

// //                 <div className="p-5 sm:p-6">
// //                   <h3
// //                     className="
// //                       text-[18px]
// //                       font-bold
// //                       leading-7
// //                       text-[#663A8E]
// //                       sm:text-[20px]
// //                     "
// //                   >
// //                     {procedure.title}
// //                   </h3>

// //                   <div
// //                     className="
// //                       mt-3
// //                       h-[2px]
// //                       w-12
// //                       rounded-full
// //                       bg-[#D94C8A]
// //                     "
// //                   />

// //                   <p
// //                     className="
// //                       mt-4
// //                       text-[14px]
// //                       leading-7
// //                       text-[#252A44]/75
// //                       sm:text-[15px]
// //                     "
// //                   >
// //                     {procedure.description}
// //                   </p>
// //                 </div>
// //               </article>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }