import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import PageBanner from "../components/common/PageBanner";

/* =========================================================
   FETAL SCAN IMAGE
========================================================= */

// Change only this image if you want another scan image
import fs1 from "../assets/images/fs1.jpg";

/* =========================================================
   FETAL PROCEDURE IMAGE
========================================================= */

// Change only this image if you want another procedure image
import amnioImage from "../assets/images/amniocentesis.png";

/* =========================================================
   FETAL SCANS
========================================================= */

const scans = [
  "First Trimester Fetal Profile Assessment",
  "First Trimester Ultrasound Assessment",
  "Early Fetal Anatomy Assessment",
  "Detailed Fetal Growth & Anatomy Scan",
  "Fetal Doppler Assessment",
  "Colour & Spectral Doppler Evaluation",
  "3D Fetal Development Imaging",
  "3D / 4D Fetal Imaging",
  "Advanced Fetal Surface Imaging",
];

/* =========================================================
   FETAL PROCEDURES
========================================================= */

const procedures = [
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
   COMMON LIST ITEM
========================================================= */

function ListItem({ children }) {
  return (
    <li
      className="
        flex
        items-start
        gap-2.5
        text-[14px]
        font-medium
        leading-[1.7]
        text-[#252A44]/85
        sm:text-[15px]
        lg:text-[15.5px]
      "
    >
      <ChevronRight
        size={16}
        strokeWidth={2.8}
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
   FETAL SCAN SINGLE IMAGE
========================================================= */

function FetalScanImage() {
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
        src={fs1}
        alt="Fetal ultrasound scan"
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
   FETAL PROCEDURE SINGLE IMAGE
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
   FETAL SERVICES
========================================================= */

export default function FetalServices() {
  return (
    <>
      {/* =====================================================
          PAGE BANNER
      ===================================================== */}

      <PageBanner
        title="Fetal Services"
        subtitle="Specialised fetal assessment, advanced imaging and fetal procedures with personalised maternal care."
      />

      {/* =====================================================
          MAIN SECTION
      ===================================================== */}

      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="content-shell">

          {/* =================================================
              INTRODUCTION
          ================================================== */}

          <div
            className="
              mx-auto
              mb-10
              max-w-[800px]
              text-center
              sm:mb-12
              lg:mb-14
            "
          >
            <p
              className="
                text-[12px]
                font-bold
                uppercase
                tracking-[0.17em]
                text-[#D94C8A]
                sm:text-[13px]
              "
            >
              Fetal Medicine Services
            </p>

            <h1
              className="
                mt-2
                text-[28px]
                font-bold
                leading-[1.25]
                text-[#663A8E]
                sm:text-[32px]
                lg:text-[35px]
              "
            >
              Comprehensive care for mother and baby
            </h1>

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
                max-w-[720px]
                text-[14px]
                leading-7
                text-[#252A44]/75
                sm:text-[15px]
                lg:text-[16px]
              "
            >
              Detailed fetal assessment, specialised ultrasound imaging,
              counselling and fetal procedures tailored to the individual
              requirements of each pregnancy.
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
              w-full
              max-w-[980px]
              items-start
              gap-7

              md:grid-cols-[380px_minmax(0,1fr)]
              md:gap-9

              lg:grid-cols-[380px_minmax(0,1fr)]
              lg:gap-12
            "
          >
            {/* SCAN IMAGE */}

            <div
              className="
                flex
                w-full
                justify-center

                md:justify-start
              "
            >
              <FetalScanImage />
            </div>

            {/* SCAN CONTENT */}

            <div className="w-full">
              <h2
                className="
                  text-[24px]
                  font-bold
                  leading-tight
                  text-[#D94C8A]
                  sm:text-[26px]
                  lg:text-[28px]
                "
              >
                Fetal Scans:
              </h2>

              <div
                className="
                  mt-2.5
                  h-[2px]
                  w-12
                  bg-[#D94C8A]
                "
              />

              <ul className="mt-5 space-y-2">
                {scans.map((scan) => (
                  <ListItem key={scan}>
                    {scan}
                  </ListItem>
                ))}
              </ul>

              <Link
                to="/services/fetal-scans"
                className="
                  mt-6
                  inline-flex
                  min-h-[42px]
                  items-center
                  gap-2
                  text-[14px]
                  font-bold
                  text-[#663A8E]
                  transition-colors
                  duration-300

                  hover:text-[#D94C8A]

                  sm:text-[15px]
                "
              >
                View Fetal Scans

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>

          {/* =================================================
              GAP BETWEEN SCANS AND PROCEDURES
          ================================================== */}

          <div className="h-12 sm:h-14 lg:h-16" />

          {/* =================================================
              FETAL PROCEDURES
              CONTENT LEFT + IMAGE RIGHT
          ================================================== */}

          <div
            className="
              mx-auto
              grid
              w-full
              max-w-[980px]
              items-start
              gap-7

              md:grid-cols-[minmax(0,1fr)_380px]
              md:gap-9

              lg:grid-cols-[minmax(0,1fr)_380px]
              lg:gap-12
            "
          >
            {/* PROCEDURE CONTENT */}

            <div
              className="
                order-2
                w-full

                md:order-1
              "
            >
              <h2
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
              </h2>

              <div
                className="
                  mt-2.5
                  h-[2px]
                  w-12
                  bg-[#D94C8A]
                "
              />

              <ul className="mt-5 space-y-2">
                {procedures.map((procedure) => (
                  <ListItem key={procedure}>
                    {procedure}
                  </ListItem>
                ))}
              </ul>

              <Link
                to="/services/fetal-procedures"
                className="
                  mt-6
                  inline-flex
                  min-h-[42px]
                  items-center
                  gap-2
                  text-[14px]
                  font-bold
                  text-[#663A8E]
                  transition-colors
                  duration-300

                  hover:text-[#D94C8A]

                  sm:text-[15px]
                "
              >
                View Fetal Procedures

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                />
              </Link>
            </div>

            {/* PROCEDURE IMAGE */}

            <div
              className="
                order-1
                flex
                w-full
                justify-center

                md:order-2
                md:justify-end
              "
            >
              <FetalProcedureImage />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


// import { Link } from "react-router-dom";
// import { ArrowRight, ChevronRight } from "lucide-react";
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
//    FETAL PROCEDURE IMAGES
// ========================================================= */

// import amnioImage from "../assets/images/amniocentesis.png";
// import cvsImage from "../assets/images/cvs.jpeg";
// import reductionImage from "../assets/images/fetal-reduction.jpeg";

// /* =========================================================
//    FETAL SCANS
// ========================================================= */

// const scans = [
//   "First Trimester Fetal Profile Assessment",
//   "First Trimester Ultrasound Assessment",
//   "Early Fetal Anatomy Assessment",
//   "Detailed Fetal Growth & Anatomy Scan",
//   "Fetal Doppler Assessment",
//   "Colour & Spectral Doppler Evaluation",
//   "3D Fetal Development Imaging",
//   "3D / 4D Fetal Imaging",
//   "Advanced Fetal Surface Imaging",
// ];

// /* =========================================================
//    FETAL PROCEDURES
// ========================================================= */

// const procedures = [
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
//    COMMON LIST ITEM
// ========================================================= */

// function ListItem({ children }) {
//   return (
//     <li
//       className="
//         flex
//         items-start
//         gap-2.5
//         text-[14px]
//         font-medium
//         leading-[1.7]
//         text-[#252A44]/85
//         sm:text-[15px]
//         lg:text-[15.5px]
//       "
//     >
//       <ChevronRight
//         size={16}
//         strokeWidth={2.8}
//         className="
//           mt-[5px]
//           shrink-0
//           text-[#D94C8A]
//         "
//       />

//       <span>{children}</span>
//     </li>
//   );
// }

// /* =========================================================
//    FETAL SCAN COLLAGE
// ========================================================= */

// function FetalScanCollage() {
//   const images = [
//     fs4,
//     fs3,
//     fs8,
//     fs9,
//     fs6,
//     fs7,
//     fs5,
//     fs1,
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
//             h-[100px]
//             overflow-hidden
//             border
//             border-white/25

//             sm:h-[108px]

//             md:h-[112px]

//             lg:h-[118px]
//           "
//         >
//           <img
//             src={image}
//             alt={`Fetal ultrasound ${index + 1}`}
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
//    FETAL PROCEDURE COLLAGE
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
//    FETAL SERVICES
// ========================================================= */

// export default function FetalServices() {
//   return (
//     <>
//       {/* =====================================================
//           PAGE BANNER
//       ===================================================== */}

//       <PageBanner
//         title="Fetal Services"
//         subtitle="Specialised fetal assessment, advanced imaging and fetal procedures with personalised maternal care."
//       />

//       {/* =====================================================
//           MAIN SECTION
//       ===================================================== */}

//       <section className="bg-white py-10 sm:py-12 lg:py-14">
//         <div className="content-shell">

//           {/* =================================================
//               INTRODUCTION
//           ================================================== */}

//           <div
//             className="
//               mx-auto
//               mb-10
//               max-w-[800px]
//               text-center
//               sm:mb-12
//               lg:mb-14
//             "
//           >
//             <p
//               className="
//                 text-[12px]
//                 font-bold
//                 uppercase
//                 tracking-[0.17em]
//                 text-[#D94C8A]
//                 sm:text-[13px]
//               "
//             >
//               Fetal Medicine Services
//             </p>

//             <h1
//               className="
//                 mt-2
//                 text-[28px]
//                 font-bold
//                 leading-[1.25]
//                 text-[#663A8E]
//                 sm:text-[32px]
//                 lg:text-[35px]
//               "
//             >
//               Comprehensive care for mother and baby
//             </h1>

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
//                 max-w-[720px]
//                 text-[14px]
//                 leading-7
//                 text-[#252A44]/75
//                 sm:text-[15px]
//                 lg:text-[16px]
//               "
//             >
//               Detailed fetal assessment, specialised ultrasound imaging,
//               counselling and fetal procedures tailored to the individual
//               requirements of each pregnancy.
//             </p>
//           </div>

//           {/* =================================================
//               FETAL SCANS
//               IMAGE LEFT + CONTENT RIGHT
//           ================================================== */}

//           <div
//             className="
//               mx-auto
//               grid
//               w-full
//               max-w-[980px]
//               items-start
//               gap-7

//               md:grid-cols-[380px_minmax(0,1fr)]
//               md:gap-9

//               lg:grid-cols-[380px_minmax(0,1fr)]
//               lg:gap-12
//             "
//           >
//             {/* SCAN IMAGE */}

//             <div
//               className="
//                 flex
//                 w-full
//                 justify-center

//                 md:justify-start
//               "
//             >
//               <FetalScanCollage />
//             </div>

//             {/* SCAN CONTENT */}

//             <div className="w-full">
//               <h2
//                 className="
//                   text-[24px]
//                   font-bold
//                   leading-tight
//                   text-[#D94C8A]
//                   sm:text-[26px]
//                   lg:text-[28px]
//                 "
//               >
//                 Fetal Scans:
//               </h2>

//               <div
//                 className="
//                   mt-2.5
//                   h-[2px]
//                   w-12
//                   bg-[#D94C8A]
//                 "
//               />

//               <ul className="mt-5 space-y-2">
//                 {scans.map((scan) => (
//                   <ListItem key={scan}>
//                     {scan}
//                   </ListItem>
//                 ))}
//               </ul>

//               <Link
//                 to="/services/fetal-scans"
//                 className="
//                   mt-6
//                   inline-flex
//                   min-h-[42px]
//                   items-center
//                   gap-2
//                   text-[14px]
//                   font-bold
//                   text-[#663A8E]
//                   transition-colors
//                   duration-300

//                   hover:text-[#D94C8A]

//                   sm:text-[15px]
//                 "
//               >
//                 View Fetal Scans

//                 <ArrowRight
//                   size={17}
//                   strokeWidth={2}
//                 />
//               </Link>
//             </div>
//           </div>

//           {/* =================================================
//               GAP BETWEEN SCANS AND PROCEDURES
//           ================================================== */}

//           <div className="h-12 sm:h-14 lg:h-16" />

//           {/* =================================================
//               FETAL PROCEDURES
//               CONTENT LEFT + IMAGE RIGHT
//           ================================================== */}

//           <div
//             className="
//               mx-auto
//               grid
//               w-full
//               max-w-[980px]
//               items-start
//               gap-7

//               md:grid-cols-[minmax(0,1fr)_380px]
//               md:gap-9

//               lg:grid-cols-[minmax(0,1fr)_380px]
//               lg:gap-12
//             "
//           >
//             {/* PROCEDURE CONTENT */}

//             <div
//               className="
//                 order-2
//                 w-full

//                 md:order-1
//               "
//             >
//               <h2
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
//               </h2>

//               <div
//                 className="
//                   mt-2.5
//                   h-[2px]
//                   w-12
//                   bg-[#D94C8A]
//                 "
//               />

//               <ul className="mt-5 space-y-2">
//                 {procedures.map((procedure) => (
//                   <ListItem key={procedure}>
//                     {procedure}
//                   </ListItem>
//                 ))}
//               </ul>

//               <Link
//                 to="/services/fetal-procedures"
//                 className="
//                   mt-6
//                   inline-flex
//                   min-h-[42px]
//                   items-center
//                   gap-2
//                   text-[14px]
//                   font-bold
//                   text-[#663A8E]
//                   transition-colors
//                   duration-300

//                   hover:text-[#D94C8A]

//                   sm:text-[15px]
//                 "
//               >
//                 View Fetal Procedures

//                 <ArrowRight
//                   size={17}
//                   strokeWidth={2}
//                 />
//               </Link>
//             </div>

//             {/* PROCEDURE IMAGE */}

//             <div
//               className="
//                 order-1
//                 flex
//                 w-full
//                 justify-center

//                 md:order-2
//                 md:justify-end
//               "
//             >
//               <FetalProcedureCollage />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


