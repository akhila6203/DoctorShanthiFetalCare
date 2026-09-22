import { Check } from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================
   FETAL SCAN IMAGES
========================================= */
import fs1 from "../assets/images/fs1.jpg";
import fs2 from "../assets/images/fs2.jpg";
import fs3 from "../assets/images/fs3.jpg";
import fs4 from "../assets/images/fs4.jpg";
import fs5 from "../assets/images/fs5.jpg";
import fs6 from "../assets/images/fs6.jpg";
import fs7 from "../assets/images/fs7.jpg";
import fs8 from "../assets/images/fs8.jpg";
import fs9 from "../assets/images/fs9.jpg";


/* =========================================
   ADVANCED FETAL SCAN SERVICES
========================================= */
const scanServices = [
  "Early Pregnancy Scan",
  "NT Scan (Nuchal Translucency)",
  "TIFFA Scan (Anomaly Scan)",
  "Fetal Echocardiography",
  "Growth Scan & Fetal Dopplers",
  "2D / 3D Ultrasound Imaging",
  "Pelvic Ultrasound Scan",
  "Follicular Study Scan",
];


/* =========================================
   FETAL SCAN IMAGES
========================================= */
const scanImages = [
  fs1,
  fs2,
  fs3,
  fs4,
  fs5,
  fs6,
  fs7,
  fs8,
  fs9,
];


export default function AdvancedFetalScans() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
    PAGE HERO / BREADCRUMB
====================================================== */}
<section
  className="
    relative
    overflow-hidden
    bg-[linear-gradient(120deg,#4B2A72_0%,#663A8E_45%,#D94C8A_100%)]
    px-4
    py-6
    sm:px-4
    sm:py-10
    lg:px-6
    lg:py-10
  "
>
  {/* Background Decoration */}
  <div
    className="
      pointer-events-none
      absolute
      -left-20
      -top-24
      h-[280px]
      w-[280px]
      rounded-full
      bg-white/[0.04]
      blur-2xl
    "
  />

  <div
    className="
      pointer-events-none
      -bottom-28
      absolute
      right-0
      h-[330px]
      w-[330px]
      rounded-full
      bg-[#F8A7C5]/10
      blur-3xl
    "
  />

  <div
    className="
      relative
      mx-auto
      max-w-[1100px]
      text-center
    "
  >
    {/* =========================================
        BREADCRUMB
    ========================================== */}
    <div
      className="
        mb-6
        flex
        flex-wrap
        items-center
        justify-center
        gap-2
        text-[12px]
        font-medium
        sm:text-[13px]
      "
    >
      <Link
        to="/"
        className="
          text-white/85
          transition-colors
          duration-200
          hover:text-[#FFE6A9]
        "
      >
        Home
      </Link>

      <span className="text-white/50">
        /
      </span>

      <span className="text-white/85">
        Services
      </span>

      <span className="text-white/50">
        /
      </span>

      <span
        className="
          font-semibold
          text-[#FFE6A9]
        "
      >
        Advanced Fetal Scans
      </span>
    </div>


    {/* =========================================
        PAGE NAME
    ========================================== */}
    <h1
      className="
        text-[32px]
        font-bold
        leading-tight
        tracking-[-0.02em]
        text-white
        sm:text-[40px]
        lg:text-[52px]
      "
    >
      Advanced Fetal Scans
    </h1>


    {/* =========================================
        DESCRIPTION
    ========================================== */}
    <p
      className="
        mx-auto
        mt-5
        max-w-[760px]
        text-[14px]
        font-normal
        leading-7
        text-white/85
        sm:text-[16px]
        sm:leading-7
        lg:text-[17px]
      "
    >
      Advanced ultrasound imaging for fetal development, growth and
      wellbeing throughout pregnancy.
    </p>
  </div>
</section>

     {/* =====================================================
    ADVANCED FETAL SCANS CONTENT
====================================================== */}
<section
  className="
    relative
    overflow-hidden
    bg-white
    py-12
    sm:py-14
    lg:py-16
  "
>
  <div
    className="
      relative
      mx-auto
      grid
      w-full
      max-w-[1280px]
      items-center
      gap-10
      px-4
      sm:px-6
      lg:grid-cols-[1fr_0.9fr]
      lg:gap-14
      lg:px-8
    "
  >

    {/* =================================================
        LEFT SIDE - NAME + CONTENT
    ================================================== */}
    <div>
      <h2
        className="
          text-[28px]
          font-bold
          leading-[1.18]
          tracking-[-0.02em]
          text-[#252A44]
          sm:text-[34px]
          lg:text-[40px]
        "
      >
        Advanced Fetal{" "}
        <span className="text-[#663A8E]">
          Scans
        </span>
      </h2>

      {/* Heading Line */}
      <div
        className="
          mt-4
          h-[3px]
          w-[65px]
          rounded-full
          bg-[linear-gradient(90deg,#663A8E,#D94C8A)]
        "
      />

      {/* Services */}
      <div className="mt-7 space-y-3">
        {scanServices.map((service) => (
          <div
            key={service}
            className="
              group
              flex
              min-h-[56px]
              items-center
              gap-3
              rounded-[14px]
              border
              border-[#663A8E]/10
              bg-[#FCFAFD]
              px-4
              py-3
              transition-all
              duration-300
              hover:border-[#663A8E]/20
              hover:bg-[#F8F4FB]
            "
          >
            {/* Check Icon */}
            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#663A8E]/10
                text-[#663A8E]
                transition-all
                duration-300
                group-hover:bg-[#663A8E]
                group-hover:text-white
              "
            >
              <Check
                size={15}
                strokeWidth={2.5}
              />
            </div>

            <span
              className="
                text-[14px]
                font-medium
                leading-6
                text-[#252A44]/85
                sm:text-[15px]
              "
            >
              {service}
            </span>
          </div>
        ))}
      </div>
    </div>


    {/* =================================================
        RIGHT SIDE - IMAGE
    ================================================== */}
    <div
      className="
        mx-auto
        w-full
        max-w-[520px]
        lg:max-w-none
      "
    >
      <div
        className="
          overflow-hidden
          rounded-[22px]
          bg-[#F8F5FA]
        "
      >
        <img
          src={fs1}
          alt="Advanced Fetal Scan"
          className="
            h-auto
            w-full
            object-contain
          "
        />
      </div>
    </div>

  </div>
</section>


      {/* =====================================================
          ADVANCED FETAL SCAN IMAGING
      ====================================================== */}
      <section
        className="
          relative
          overflow-hidden
          border-t
          border-[#663A8E]/[0.06]
          bg-[#FCF9FD]
          py-12
          sm:py-14
          lg:py-16
        "
      >

        {/* Background Decoration */}
        <div
          className="
            pointer-events-none
            absolute
            -left-32
            top-10
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#663A8E]/[0.04]
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-28
            bottom-0
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#D94C8A]/[0.05]
            blur-3xl
          "
        />


        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1280px]
            px-4
            sm:px-6
            lg:px-8
          "
        >

          {/* =============================================
              SECTION HEADING
          ============================================== */}
          <div
            className="
              mx-auto
              mb-9
              max-w-[720px]
              text-center
              sm:mb-10
              lg:mb-12
            "
          >
            <h2
              className="
                text-[26px]
                font-bold
                leading-tight
                tracking-[-0.02em]
                text-[#252A44]
                sm:text-[30px]
                lg:text-[34px]
              "
            >
              Advanced Fetal Scan{" "}
              <span className="text-[#663A8E]">
                Imaging
              </span>
            </h2>

            <div
              className="
                mx-auto
                mt-4
                h-[3px]
                w-[70px]
                rounded-full
                bg-[linear-gradient(90deg,#663A8E,#D94C8A)]
              "
            />
          </div>


          {/* =============================================
              ONLY 9 IMAGES
              NO NAMES
              NO NUMBERS
              NO DESCRIPTION
          ============================================== */}
          <div
            className="
              grid
              grid-cols-1
              gap-5

              sm:grid-cols-2
              sm:gap-6

              lg:grid-cols-3
              lg:gap-7
            "
          >
            {scanImages.map((image, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-[#663A8E]/10
                  bg-white
                  p-2

                  shadow-[0_8px_30px_rgba(72,38,109,0.07)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#D94C8A]/20
                  hover:shadow-[0_16px_40px_rgba(72,38,109,0.13)]
                "
              >
                <div
                  className="
                    relative
                    flex
                    h-[245px]
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[15px]
                    bg-[#F7F4F9]

                    sm:h-[255px]
                    lg:h-[270px]
                  "
                >
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-contain
                      transition-transform
                      duration-500
                      ease-out

                      group-hover:scale-[1.025]
                    "
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}