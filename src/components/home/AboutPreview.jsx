import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { doctor } from "../../data/doctorData";
import { doctorAbout } from "../../assets/images";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="
        bg-white
        pb-16
        pt-24
        sm:pb-20
        sm:pt-28
        lg:pb-24
        lg:pt-32
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1280px]
          items-center
          gap-10
          px-4
          sm:px-6
          lg:grid-cols-[0.95fr_1.05fr]
          lg:gap-14
          lg:px-8
        "
      >
        {/* =================================================
            LEFT IMAGE
        ================================================== */}
        <div className="relative mx-auto w-full max-w-[540px] lg:mx-0">
          {/* Image Card */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[20px]
              bg-[#FFF7FA]
              shadow-[0_18px_45px_rgba(72,38,109,0.10)]
            "
          >
            <img
              src={doctorAbout}
              alt={`${doctor.name} - Fetal Medicine Specialist`}
              className="
                aspect-[1.08/1]
                h-full
                w-full
                object-cover
                object-center
              "
            />

            {/* Small image bottom line */}
            <div className="absolute bottom-0 left-0 h-[5px] w-full bg-[linear-gradient(90deg,#663A8E,#D94C8A,#24979D)]" />
          </div>

          {/* Specialist Badge */}
          <div
            className="
              absolute
              -bottom-5
              left-4
              flex
              h-[112px]
              w-[112px]
              flex-col
              items-center
              justify-center
              rounded-full
              border-[7px]
              border-[#D94C8A]
              bg-white
              text-center
              shadow-[0_12px_30px_rgba(72,38,109,0.18)]
              sm:-bottom-6
              sm:left-5
              sm:h-[128px]
              sm:w-[128px]
            "
          >
            <span className="text-[16px] font-bold leading-tight text-[#D94C8A] sm:text-[18px]">
              Specialist
            </span>

            <span className="mt-1 px-2 text-[10px] font-semibold uppercase tracking-[0.11em] text-[#663A8E]">
              Fetal Medicine
            </span>
          </div>
        </div>

        {/* =================================================
            RIGHT CONTENT
        ================================================== */}
        <div className="pt-5 lg:pt-0">
          <p
            className="
              text-[13px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#D94C8A]
            "
          >
            {doctor.aboutEyebrow}
          </p>

          <h2
            className="
              mt-2
              max-w-[700px]
              text-[30px]
              font-bold
              leading-[1.15]
              tracking-[-0.8px]
              text-[#252A44]
              sm:text-[36px]
              lg:text-[40px]
            "
          >
            {doctor.aboutHeading}
          </h2>

          {/* Decorative line */}
          <div className="mt-4 flex items-center gap-2">
            <span className="h-[3px] w-10 rounded-full bg-[#D94C8A]" />
            <span className="h-[3px] w-4 rounded-full bg-[#24979D]" />
          </div>

          <p
            className="
              mt-5
              max-w-[720px]
              text-[14px]
              leading-[1.9]
              text-[#252A44]/72
              sm:text-[15px]
            "
          >
            {doctor.aboutBody}
          </p>

          {/* Qualifications */}
          <div className="mt-6 grid gap-3">
            {doctor.qualifications.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-[#663A8E]/10
                  bg-[#FFFAFC]
                  px-4
                  py-3
                  transition-all
                  duration-300
                  hover:border-[#D94C8A]/30
                  hover:shadow-[0_8px_20px_rgba(72,38,109,0.06)]
                "
              >
                <div
                  className="
                    mt-0.5
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EAF8F8]
                    text-[#24979D]
                  "
                >
                  <CheckCircle2 size={16} />
                </div>

                <span className="text-[13px] font-medium leading-6 text-[#252A44]/80 sm:text-[14px]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Read More */}
          <div className="mt-7">
            <Link
              to="/about"
              className="
                inline-flex
                min-h-[50px]
                items-center
                justify-center
                gap-2.5
                rounded-full
                bg-[#D94C8A]
                px-7
                text-[14px]
                font-semibold
                text-white
                shadow-[0_10px_24px_rgba(217,76,138,0.20)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#c93f7b]
                hover:shadow-[0_14px_28px_rgba(217,76,138,0.28)]
              "
            >
              Read More
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}