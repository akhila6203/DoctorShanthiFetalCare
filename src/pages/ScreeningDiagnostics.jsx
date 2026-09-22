import { Check, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================
   SCREENING IMAGE
   Change filename here if your image name
   is different
========================================= */
import screeningImage from "../assets/images/hero.jpeg";


/* =========================================
   SCREENING & DIAGNOSTICS SERVICES
========================================= */
const screeningServices = [
  "Dual Marker Screening",
  "Quadruple Marker Screening",
  "Non-Invasive Prenatal Testing (NIPT)",
  "Couple Karyotyping",
  "Prenatal Genetic Counseling",
];


export default function ScreeningDiagnostics() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          PAGE HERO
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
              Screening & Diagnostics
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
            Screening & Diagnostics
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
              lg:text-[17px]
            "
          >
            Specialised prenatal screening and diagnostic assessment
            for informed pregnancy care.
          </p>
        </div>
      </section>


      {/* =====================================================
          SCREENING & DIAGNOSTICS MAIN SECTION
      ====================================================== */}
      <section
        className="
          bg-white
          py-12
          sm:py-14
          lg:py-16
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1280px]
            grid-cols-1
            gap-10
            px-4
            sm:px-6
            lg:grid-cols-2
            lg:items-center
            lg:gap-14
            lg:px-8
          "
        >

          {/* =================================================
              LEFT SIDE CONTENT
          ================================================== */}
          <div>

            {/* =========================================
                HEADING
            ========================================== */}
            <h2
              className="
                text-[28px]
                font-bold
                leading-[1.2]
                tracking-[-0.02em]
                text-[#252A44]
                sm:text-[34px]
                lg:text-[40px]
              "
            >
              Screening{" "}
              <span className="text-[#663A8E]">
                & Diagnostics
              </span>
            </h2>


            {/* =========================================
                UNDERLINE
            ========================================== */}
            <div
              className="
                mt-4
                h-[3px]
                w-[65px]
                rounded-full
                bg-[linear-gradient(90deg,#663A8E,#D94C8A)]
              "
            />


            {/* =========================================
                VISUAL
            ========================================== */}
            {/* <div
              className="
                mt-7
                flex
                items-center
                gap-4
                rounded-[16px]
                border
                border-[#663A8E]/10
                bg-[#FFF8FB]
                px-5
                py-4
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#D94C8A]
                "
              >
                <BarChart3
                  size={19}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-[#D94C8A]
                  "
                >
                  Visual
                </p>

                <p
                  className="
                    mt-1
                    text-[14px]
                    font-semibold
                    leading-5
                    text-[#252A44]
                    sm:text-[15px]
                  "
                >
                  Genetic Screening Analysis Chart
                </p>
              </div>
            </div> */}


            {/* =========================================
                SCREENING SERVICES
            ========================================== */}
            <div
              className="
                mt-7
                space-y-3
              "
            >
              {screeningServices.map((service) => (
                <div
                  key={service}
                  className="
                    flex
                    min-h-[56px]
                    items-center
                    gap-3
                    rounded-[12px]
                    border
                    border-[#663A8E]/10
                    bg-white
                    px-4
                    py-3
                  "
                >
                  {/* CHECK */}
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#FFF0F6]
                      text-[#D94C8A]
                    "
                  >
                    <Check
                      size={15}
                      strokeWidth={2.5}
                    />
                  </div>

                  {/* TEXT */}
                  <p
                    className="
                      text-[14px]
                      font-medium
                      leading-6
                      text-[#252A44]
                      sm:text-[15px]
                    "
                  >
                    {service}
                  </p>
                </div>
              ))}
            </div>

          </div>


          {/* =================================================
              RIGHT SIDE IMAGE
              NORMAL IMAGE - NO EXTRA DESIGN
          ================================================== */}
          <div
            className="
              flex
              w-full
              items-center
              justify-center
            "
          >
            <img
              src={screeningImage}
              alt="Screening and Diagnostics"
              className="
                block
                h-auto
                max-h-[500px]
                w-full
                max-w-[540px]
                object-contain
              "
            />
          </div>

        </div>
      </section>

    </main>
  );
}