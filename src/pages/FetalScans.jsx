// import PageBanner from "../components/common/PageBanner";

// /* =========================================================
//    FETAL SCAN IMAGES
// ========================================================= */

// import fs1 from "../assets/images/fs1.jpg";
// import fs2 from "../assets/images/fs2.jpg";
// import fs3 from "../assets/images/fs3.jpg";
// import fs4 from "../assets/images/fs4.jpg";
// import fs5 from "../assets/images/fs5.jpg";
// import fs6 from "../assets/images/fs6.jpg";
// import fs7 from "../assets/images/fs7.jpg";
// import fs8 from "../assets/images/fs8.jpg";
// import fs9 from "../assets/images/fs9.jpg";

// /* =========================================================
//    FETAL SCANS DATA
// ========================================================= */

// const scans = [
//   {
//     number: "01",
//     title: "First Trimester Fetal Profile Assessment",
//     image: fs4,
//     description:
//       "A first-trimester scan provides an early assessment of the developing baby. Fetal profile, growth and selected anatomical markers can be evaluated as part of an appropriate pregnancy screening plan.",
//   },

//   {
//     number: "02",
//     title: "First Trimester Ultrasound Assessment",
//     image: fs3,
//     description:
//       "Early pregnancy ultrasound helps assess fetal development during the first trimester. Depending on the stage of pregnancy and clinical indication, the examination may include fetal measurements and assessment of developing structures.",
//   },

//   {
//     number: "03",
//     title: "Early Fetal Anatomy Assessment",
//     image: fs8,
//     description:
//       "Ultrasound during early pregnancy allows systematic evaluation of visible fetal anatomy and development. The examination can help guide whether routine follow-up or additional specialised assessment is appropriate.",
//   },

//   {
//     number: "04",
//     title: "Detailed Fetal Growth & Anatomy Scan",
//     image: fs9,
//     description:
//       "Detailed ultrasound measurements are used to assess fetal growth and selected anatomical structures. Findings are interpreted together with gestational age, previous scans and the individual pregnancy history.",
//   },

//   {
//     number: "05",
//     title: "Fetal Doppler Assessment",
//     image: fs6,
//     description:
//       "Doppler ultrasound evaluates blood-flow patterns within selected fetal and placental vessels. These measurements can support assessment of fetal wellbeing and circulation when Doppler evaluation is clinically required.",
//   },

//   {
//     number: "06",
//     title: "Colour & Spectral Doppler Evaluation",
//     image: fs7,
//     description:
//       "Colour and spectral Doppler techniques provide information about the direction and pattern of blood flow. They can be used as part of specialised fetal assessment depending on gestational age and clinical findings.",
//   },

//   {
//     number: "07",
//     title: "3D Fetal Development Imaging",
//     image: fs5,
//     description:
//       "Three-dimensional ultrasound can provide additional views of fetal development by reconstructing ultrasound information into a volumetric image. It may be used to complement conventional ultrasound where clinically indicated.",
//   },

//   {
//     number: "08",
//     title: "3D / 4D Fetal Imaging",
//     image: fs1,
//     description:
//       "Advanced 3D and 4D ultrasound provides detailed surface views of the baby during pregnancy. These images can complement routine two-dimensional ultrasound when additional visual assessment of fetal structures is clinically useful.",
//   },

//   {
//     number: "09",
//     title: "Advanced Fetal Surface Imaging",
//     image: fs2,
//     description:
//       "High-resolution surface rendering can provide clearer visualisation of selected fetal features. It is used as an additional imaging technique alongside standard ultrasound assessment when appropriate.",
//   },
// ];

// /* =========================================================
//    FETAL SCANS PAGE
// ========================================================= */

// export default function FetalScans() {
//   return (
//     <>
//       {/* =====================================================
//           PAGE BANNER
//       ===================================================== */}

//       <PageBanner
//         title="Fetal Scans"
//         subtitle="Advanced ultrasound imaging for fetal development, growth and wellbeing throughout pregnancy."
//       />

//       {/* =====================================================
//           MAIN SECTION
//       ===================================================== */}

//       <section className="bg-white py-10 sm:py-12 lg:py-14">
//         <div className="content-shell">

//           {/* =================================================
//               INTRODUCTION
//           ================================================== */}

//           <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
//             <p
//               className="
//                 text-[12px]
//                 font-bold
//                 uppercase
//                 tracking-[0.17em]
//                 text-[#D94C8A]
//               "
//             >
//               Advanced Fetal Imaging
//             </p>

//             <h2
//               className="
//                 mt-2
//                 text-[27px]
//                 font-bold
//                 leading-tight
//                 text-[#663A8E]
//                 sm:text-[31px]
//                 lg:text-[34px]
//               "
//             >
//               Ultrasound Care Through Pregnancy
//             </h2>

//             <div
//               className="
//                 mx-auto
//                 mt-3
//                 h-[3px]
//                 w-14
//                 rounded-full
//                 bg-[linear-gradient(90deg,#663A8E,#D94C8A)]
//               "
//             />

//             <p
//               className="
//                 mx-auto
//                 mt-4
//                 max-w-[700px]
//                 text-[14px]
//                 leading-7
//                 text-[#252A44]/70
//                 sm:text-[15px]
//               "
//             >
//               Fetal ultrasound provides valuable information about the
//               baby's development at different stages of pregnancy.
//               Depending on gestational age and clinical requirements,
//               assessment may include fetal anatomy, growth, circulation
//               and specialised 3D or Doppler imaging.
//             </p>
//           </div>

//           {/* =================================================
//               SCAN SECTIONS
//           ================================================== */}

//           <div className="mx-auto max-w-[1100px]">
//             {scans.map((scan, index) => {
//               const imageOnLeft = index % 2 !== 0;

//               return (
//                 <article
//                   key={scan.title}
//                   className="
//                     grid
//                     items-start
//                     gap-6
//                     border-b
//                     border-[#663A8E]/10
//                     py-7

//                     last:border-b-0

//                     sm:gap-7
//                     sm:py-8

//                     md:grid-cols-[1fr_1fr]
//                     md:gap-9

//                     lg:gap-12
//                     lg:py-10
//                   "
//                 >
//                   {/* =========================================
//                       CONTENT
//                   ========================================== */}

//                   <div
//                     className={`
//                       order-1
//                       md:pt-3

//                       ${
//                         imageOnLeft
//                           ? "md:order-2"
//                           : "md:order-1"
//                       }
//                     `}
//                   >
//                     {/* NUMBER */}

//                     <span
//                       className="
//                         inline-flex
//                         min-w-[42px]
//                         items-center
//                         justify-center
//                         rounded-full
//                         bg-[#F8EDF4]
//                         px-3
//                         py-1.5
//                         text-[11px]
//                         font-bold
//                         tracking-[0.12em]
//                         text-[#D94C8A]
//                       "
//                     >
//                       {scan.number}
//                     </span>

//                     {/* TITLE */}

//                     <h2
//                       className="
//                         mt-3
//                         text-[20px]
//                         font-bold
//                         leading-[1.45]
//                         text-[#252A44]

//                         sm:text-[22px]

//                         lg:text-[24px]
//                       "
//                     >
//                       {scan.title}
//                     </h2>

//                     {/* ACCENT LINE */}

//                     <div
//                       className="
//                         mt-3
//                         h-[3px]
//                         w-12
//                         rounded-full
//                         bg-[linear-gradient(90deg,#D94C8A,#663A8E)]
//                       "
//                     />

//                     {/* DESCRIPTION */}

//                     <p
//                       className="
//                         mt-4
//                         max-w-[510px]
//                         text-[14px]
//                         leading-[1.85]
//                         text-[#252A44]/75

//                         sm:text-[15px]
//                       "
//                     >
//                       {scan.description}
//                     </p>
//                   </div>

//                   {/* =========================================
//                       IMAGE
//                   ========================================== */}

//                   <div
//                     className={`
//                       order-2
//                       flex
//                       items-start

//                       ${
//                         imageOnLeft
//                           ? "md:order-1 md:justify-start"
//                           : "md:order-2 md:justify-end"
//                       }
//                     `}
//                   >
//                     <div
//                       className="
//                         w-full
//                         max-w-[460px]
//                         overflow-hidden
//                         rounded-[18px]
//                         bg-black
//                         shadow-[0_10px_30px_rgba(37,42,68,0.10)]

//                         sm:rounded-[20px]

//                         lg:max-w-[480px]
//                       "
//                     >
//                       <img
//                         src={scan.image}
//                         alt={scan.title}
//                         className="
//                           block
//                           h-[230px]
//                           w-full
//                           object-contain
//                           bg-black

//                           sm:h-[270px]

//                           md:h-[285px]

//                           lg:h-[300px]
//                         "
//                       />
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>

//           {/* =================================================
//               NOTE
//           ================================================== */}

//           <div
//             className="
//               mx-auto
//               mt-8
//               max-w-[900px]
//               rounded-[18px]
//               bg-[#FBF8FD]
//               px-5
//               py-5
//               text-center

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
//               "
//             >
//               The type and timing of an ultrasound examination are
//               determined according to gestational age, pregnancy history
//               and individual clinical requirements.
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }




// // import PageBanner from "../components/common/PageBanner";

// // /* =========================================================
// //    FETAL SCAN IMAGES
// // ========================================================= */

// // import fs1 from "../assets/images/fs1.jpg";
// // import fs2 from "../assets/images/fs2.jpg";
// // import fs3 from "../assets/images/fs3.jpg";
// // import fs4 from "../assets/images/fs4.jpg";
// // import fs5 from "../assets/images/fs5.jpg";
// // import fs6 from "../assets/images/fs6.jpg";
// // import fs7 from "../assets/images/fs7.jpg";
// // import fs8 from "../assets/images/fs8.jpg";
// // import fs9 from "../assets/images/fs9.jpg";

// // /* =========================================================
// //    FETAL SCANS DATA
// // ========================================================= */

// // const scans = [
// //   {
// //     number: "I",
// //     title: "Viability Scan",
// //     timing: "6–10 weeks",
// //     image: fs1,
// //     description:
// //       "This scan is performed during early pregnancy to assess the site of pregnancy, number of babies, size and cardiac activity.",
// //   },
// //   {
// //     number: "II",
// //     title:
// //       "First Trimester Screening for Aneuploidies / Anomalies / Pregnancy Complications",
// //     timing: "11–13+6 weeks",
// //     image: fs2,
// //     description:
// //       "First trimester screening provides important information about fetal development and pregnancy risk assessment. Screening may include ultrasound assessment and blood tests when clinically advised.",
// //   },
// //   {
// //     number: "III",
// //     title: "Early Anomaly Scan / Risk Reassessment Scan",
// //     timing: "16–18 weeks",
// //     image: fs3,
// //     description:
// //       "An early anomaly assessment may be offered to evaluate fetal growth, structural development and markers requiring further assessment.",
// //   },
// //   {
// //     number: "IV",
// //     title: "Anomaly Scan / Level II",
// //     timing: "20–24 weeks",
// //     image: fs4,
// //     description:
// //       "A detailed anomaly scan assesses fetal anatomy, growth and amniotic fluid and helps identify structural concerns requiring further evaluation.",
// //   },
// //   {
// //     number: "V",
// //     title: "Fetal Well Being With Colour Doppler",
// //     timing: "After 26 weeks",
// //     image: fs5,
// //     description:
// //       "Colour Doppler assessment may be used when fetal growth and placental circulation require additional monitoring.",
// //   },
// //   {
// //     number: "VI",
// //     title: "Fetal Echocardiography",
// //     timing: "22–24 weeks",
// //     image: fs6,
// //     description:
// //       "Fetal echocardiography provides a detailed assessment of the baby's heart when clinically indicated.",
// //   },
// //   {
// //     number: "VII",
// //     title:
// //       "Transvaginal Scan For Cervical Screening And Pre-eclampsia Screening",
// //     timing: "From 12 weeks",
// //     image: fs7,
// //     description:
// //       "Ultrasound assessment may be used to evaluate cervical length and maternal uterine artery blood flow in pregnancies requiring additional screening.",
// //   },
// //   {
// //     number: "VIII",
// //     title: "Growth Scan",
// //     timing: "26–40 weeks",
// //     image: fs8,
// //     description:
// //       "Growth scans monitor fetal growth, amniotic fluid and other parameters during the later stages of pregnancy.",
// //   },
// //   {
// //     number: "IX",
// //     title: "Multiple Pregnancy Scan",
// //     timing: "Twins, triplets and higher-order pregnancies",
// //     image: fs9,
// //     description:
// //       "Multiple pregnancies require closer fetal growth and wellbeing monitoring, with scan frequency determined by the pregnancy type and clinical findings.",
// //   },
// // ];

// // /* =========================================================
// //    FETAL SCANS PAGE
// // ========================================================= */

// // export default function FetalScans() {
// //   return (
// //     <>
// //       {/* =====================================================
// //           PAGE BANNER / BREADCRUMB
// //       ===================================================== */}

// //       <PageBanner
// //         title="Fetal Scans"
// //         subtitle="Advanced ultrasound assessment through the different stages of pregnancy."
// //       />

// //       {/* =====================================================
// //           MAIN SECTION
// //       ===================================================== */}

// //       <section className="bg-white py-10 sm:py-11 lg:py-12">
// //         <div className="content-shell">

// //           {/* =================================================
// //               INTRODUCTION
// //           ================================================== */}

// //           <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-10">
// //             <p
// //               className="
// //                 text-[12px]
// //                 font-bold
// //                 uppercase
// //                 tracking-[0.16em]
// //                 text-[#D94C8A]
// //               "
// //             >
// //               Pregnancy Ultrasound
// //             </p>

// //             <h2
// //               className="
// //                 mt-2
// //                 text-[27px]
// //                 font-bold
// //                 leading-tight
// //                 text-[#663A8E]
// //                 sm:text-[31px]
// //                 lg:text-[34px]
// //               "
// //             >
// //               Fetal Scans
// //             </h2>

// //             <div
// //               className="
// //                 mx-auto
// //                 mt-3
// //                 h-[3px]
// //                 w-14
// //                 rounded-full
// //                 bg-[linear-gradient(90deg,#663A8E,#D94C8A)]
// //               "
// //             />

// //             <p
// //               className="
// //                 mx-auto
// //                 mt-4
// //                 max-w-2xl
// //                 text-[14px]
// //                 leading-7
// //                 text-[#252A44]/70
// //                 sm:text-[15px]
// //               "
// //             >
// //               Antenatal ultrasound helps assess fetal development,
// //               growth and wellbeing throughout pregnancy.
// //             </p>
// //           </div>

// //           {/* =================================================
// //               ALL FETAL SCANS
// //           ================================================== */}

// //           <div className="mx-auto max-w-[1080px]">
// //             {scans.map((scan, index) => {
// //               const imageOnLeft = index % 2 !== 0;

// //               return (
// //                 <article
// //                   key={scan.title}
// //                   className="
// //                     grid
// //                     gap-5
// //                     py-5
// //                     sm:gap-6
// //                     sm:py-6
// //                     md:grid-cols-[1fr_1fr]
// //                     md:items-start
// //                     md:gap-7
// //                     lg:gap-9
// //                     lg:py-7
// //                   "
// //                 >
// //                   {/* =========================================
// //                       TEXT
// //                   ========================================== */}

// //                   <div
// //                     className={`
// //                       order-1
// //                       pt-0
// //                       md:pt-2

// //                       ${
// //                         imageOnLeft
// //                           ? "md:order-2"
// //                           : "md:order-1"
// //                       }
// //                     `}
// //                   >
// //                     {/* TITLE + TIMING */}

// //                     <h2
// //                       className="
// //                         m-0
// //                         text-[17px]
// //                         font-bold
// //                         leading-[1.55]
// //                         text-[#D94C8A]
// //                         sm:text-[18px]
// //                         lg:text-[19px]
// //                       "
// //                     >
// //                       <span>{scan.number}. </span>

// //                       {scan.title}

// //                       <span className="ml-1 text-[#24979D]">
// //                         ({scan.timing}):
// //                       </span>
// //                     </h2>

// //                     {/* SMALL LINE */}

// //                     <div
// //                       className="
// //                         mt-2.5
// //                         h-[2px]
// //                         w-10
// //                         rounded-full
// //                         bg-[#D94C8A]
// //                       "
// //                     />

// //                     {/* DESCRIPTION */}

// //                     <p
// //                       className="
// //                         mt-3.5
// //                         max-w-[500px]
// //                         text-[14px]
// //                         leading-[1.8]
// //                         text-[#252A44]/75
// //                         sm:text-[15px]
// //                       "
// //                     >
// //                       {scan.description}
// //                     </p>
// //                   </div>

// //                   {/* =========================================
// //                       IMAGE
// //                   ========================================== */}

// //                   <div
// //                     className={`
// //                       order-2
// //                       flex
// //                       items-start

// //                       ${
// //                         imageOnLeft
// //                           ? "md:order-1 md:justify-start"
// //                           : "md:order-2 md:justify-end"
// //                       }
// //                     `}
// //                   >
// //                     <div
// //                       className="
// //                         w-full
// //                         max-w-[400px]
// //                         sm:max-w-[420px]
// //                         lg:max-w-[440px]
// //                       "
// //                     >
// //                       <img
// //                         src={scan.image}
// //                         alt={scan.title}
// //                         className="
// //                           block
// //                           h-auto
// //                           max-h-[310px]
// //                           w-full
// //                           object-contain
// //                         "
// //                       />
// //                     </div>
// //                   </div>
// //                 </article>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }