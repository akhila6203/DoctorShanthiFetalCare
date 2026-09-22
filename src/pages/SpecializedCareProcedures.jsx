import { Check, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

// import specializedCareImage from "../assets/images/amniocentesis.png";
import specializedCareImage from "../assets/images/cvs1.jpeg";


/* =========================================
   SPECIALIZED CARE & PROCEDURES CONTENT
========================================= */
const specializedServices = [
  "High Risk Pregnancy Care",
  "TWIN pregnancy care",
  "Workup for Infertility",
  "Advanced Laparoscopy Procedures",
  "Advanced Hysteroscopy Procedures",
  "Family planning and contraception counselling",
  "Menstrual and hormonal disorder management",
  "deliveries",
];


export default function SpecializedCareProcedures() {
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
              Specialized Care & Procedures
            </span>
          </div>


          {/* =========================================
              PAGE NAME
          ========================================== */}
          <h1
            className="
              text-[30px]
              font-bold
              leading-tight
              tracking-[-0.02em]
              text-white
              sm:text-[40px]
              lg:text-[52px]
            "
          >
            Specialized Care & Procedures
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
            Specialized care and procedures for comprehensive
            pregnancy and women&apos;s healthcare.
          </p>

        </div>
      </section>


      {/* =====================================================
          SPECIALIZED CARE & PROCEDURES
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
              Specialized{" "}
              <span className="text-[#663A8E]">
                Care & Procedures
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
            <div
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
                <Stethoscope
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
                  Clinical Procedure Room
                </p>
              </div>
            </div>


            {/* =========================================
                SPECIALIZED SERVICES LIST
            ========================================== */}
            <div
              className="
                mt-7
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
              "
            >
              {specializedServices.map((service) => (
                <div
                  key={service}
                  className="
                    flex
                    min-h-[60px]
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
                  {/* CHECK ICON */}
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


                  {/* CONTENT */}
                  <p
                    className="
                      text-[14px]
                      font-medium
                      leading-5
                      text-[#252A44]
                      sm:text-[14px]
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

              NORMAL IMAGE
              NO CARD
              NO BORDER
              NO SHADOW
              NO DECORATION
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
              src={specializedCareImage}
              alt="Specialized Care and Procedures"
              className="
                block
                h-auto
                max-h-[540px]
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