import { Link } from "react-router-dom";
import {
  Baby,
  CalendarDays,
  ChevronRight,
  Dna,
  HeartPulse,
  Stethoscope,
} from "lucide-react";

import { doctor, expertiseItems } from "../../data/doctorData";
import { doctorHero } from "../../assets/images";

const serviceIcons = {
  "fetal-medicine": Baby,
  obstetrics: HeartPulse,
  gynecology: Dna,
  mas: Stethoscope,
};

export default function HeroSection() {
  return (
    <section className="relative bg-[#fffafb]">
      {/* =====================================================
          MAIN HERO
      ===================================================== */}
      <div
        className="
          mx-auto
          grid
          min-h-[580px]
          w-full
          max-w-[1380px]
          items-center
          gap-8
          px-4
          pb-24
          pt-10
          sm:px-6
          md:pb-28
          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-4
          lg:px-8
          lg:pb-24
          lg:pt-8
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}
        <div className="order-1 text-center lg:text-left">
          {/* Doctor Name */}
          <p
            className="
              hero-fade-up
              mb-3
              text-[13px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#24979D]
              sm:text-[14px]
            "
          >
            {doctor.heroEyebrow}
          </p>

          {/* Heading */}
          <h1
            className="
              max-w-[760px]
              text-[37px]
              font-bold
              leading-[1.04]
              tracking-[-1.6px]
              text-[#252A44]
              sm:text-[46px]
              md:text-[58px]
              lg:text-[62px]
              xl:text-[68px]
            "
          >
            <span className="hero-fade-up hero-delay-1 block">
              {doctor.heroTitleLead}
            </span>

            <span className="hero-fade-up hero-delay-2 block text-[#D94C8A]">
              {doctor.heroTitleAccent}
            </span>

            <span className="hero-fade-up hero-delay-3 mt-1 block">
              {doctor.heroTitleEnd}
            </span>
          </h1>

          {/* Quote */}
          <p
            className="
              hero-fade-up
              hero-delay-4
              mx-auto
              mt-6
              max-w-[690px]
              text-[14px]
              leading-[1.8]
              text-[#252A44]/70
              sm:text-[15px]
              lg:mx-0
            "
          >
            “{doctor.heroQuote}”
          </p>

          {/* Buttons */}
          <div
            className="
              hero-fade-up
              hero-delay-5
              mt-8
              flex
              flex-col
              justify-center
              gap-3
              sm:flex-row
              lg:justify-start
            "
          >
            <Link
              to="/contact"
              className="
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                gap-2.5
                rounded-full
                bg-[#D94C8A]
                px-7
                text-[14px]
                font-semibold
                text-white
                shadow-[0_10px_24px_rgba(217,76,138,0.22)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#c93f7b]
                hover:shadow-[0_14px_30px_rgba(217,76,138,0.30)]
              "
            >
              Book an Appointment
              <CalendarDays size={17} />
            </Link>

            <Link
              to="/services"
              className="
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                gap-2
                rounded-full
                border-2
                border-[#663A8E]
                bg-white
                px-7
                text-[14px]
                font-semibold
                text-[#663A8E]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#663A8E]
                hover:text-white
              "
            >
              Explore Services
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>

        {/* =================================================
            RIGHT DOCTOR IMAGE
        ================================================== */}
        <div
          className="
            hero-doctor-enter
            order-2
            relative
            mx-auto
            flex
            min-h-[390px]
            w-full
            max-w-[510px]
            items-end
            justify-center
            sm:min-h-[450px]
            lg:min-h-[550px]
            lg:max-w-none
          "
        >
          {/* Soft circle only - no heavy gradient background */}
          <div
            className="
              absolute
              bottom-8
              left-1/2
              h-[285px]
              w-[285px]
              -translate-x-1/2
              rounded-full
              bg-[#FDEAF2]
              sm:h-[350px]
              sm:w-[350px]
              md:h-[390px]
              md:w-[390px]
              lg:h-[430px]
              lg:w-[430px]
            "
          />

          <div
            className="
              absolute
              bottom-[26px]
              left-1/2
              h-[255px]
              w-[255px]
              -translate-x-1/2
              rounded-full
              border
              border-[#D94C8A]/20
              sm:h-[320px]
              sm:w-[320px]
              lg:h-[395px]
              lg:w-[395px]
            "
          />

          <img
            src={doctorHero}
            alt={`${doctor.name} - Fetal Medicine Specialist`}
            className="
              relative
              z-10
              h-[365px]
              w-auto
              max-w-full
              object-contain
              object-bottom
              drop-shadow-[0_14px_18px_rgba(72,38,109,0.12)]
              sm:h-[440px]
              md:h-[475px]
              lg:h-[550px]
            "
          />
        </div>
      </div>

      {/* =====================================================
          BOTTOM EXPERTISE STRIP
      ===================================================== */}
      <div
        className="
          relative
          z-20
          mx-auto
          -mb-[55px]
          -mt-[55px]
          w-[calc(100%-32px)]
          max-w-[1220px]
          sm:w-[calc(100%-48px)]
        "
      >
        <div
          className="
            grid
            overflow-hidden
            rounded-[10px]
            bg-[linear-gradient(90deg,#663A8E_0%,#A44591_45%,#D94C8A_100%)]
            shadow-[0_15px_35px_rgba(72,38,109,0.18)]
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {expertiseItems.map((item, index) => {
            const Icon = serviceIcons[item.id] || Baby;

            return (
              <div
                key={item.id}
                className={`
                  group
                  flex
                  min-h-[105px]
                  items-center
                  gap-4
                  px-5
                  py-4
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white/[0.06]

                  ${
                    index !== expertiseItems.length - 1
                      ? "border-b border-white/20 lg:border-b-0 lg:border-r"
                      : ""
                  }

                  ${
                    index === 1
                      ? "sm:border-r-0 lg:border-r"
                      : ""
                  }
                `}
              >
                <div
                  className="
                    flex
                    h-[58px]
                    w-[58px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#D94C8A]
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                  "
                >
                  <Icon size={28} strokeWidth={1.7} />
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold leading-5 text-white sm:text-[15px]">
                    {item.title}
                  </h3>

                  <p className="mt-1 hidden text-[11px] leading-5 text-white/70 xl:block">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}