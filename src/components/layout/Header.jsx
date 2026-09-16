import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  CalendarDays,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";

import { navigation } from "../../data/navigation";

/* =========================================================
   DIRECT LOGO IMPORT
   No Logo.jsx component required
========================================================= */
import logo from "../../assets/logo/logo.jpg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          TOP HEADER
      ===================================================== */}
      <div className="relative z-[70] bg-[linear-gradient(90deg,#663A8E_0%,#D94C8A_48%,#E35387_100%)] text-white">
        <div
          className="
            mx-auto
            flex
            min-h-[42px]
            w-full
            max-w-[1380px]
            items-center
            justify-between
            gap-4
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* ================================================
              LEFT SIDE
          ================================================= */}
          <div className="flex min-w-0 items-center gap-5">
            {/* Doctor Name + Profession */}
            <p
              className="
                hidden
                whitespace-nowrap
                text-[11px]
                font-medium
                uppercase
                tracking-[0.02em]
                lg:block
                xl:text-[12px]
              "
            >
              DR. SHANTHI.G IS A{" "}
              <span className="font-semibold text-[#FFE6A9]">
                FETAL MEDICINE SPECIALIST
              </span>
            </p>

            {/* Divider */}
            <span className="hidden h-4 w-px bg-white/30 lg:block" />

            {/* Phone */}
            <div
              className="
                flex
                shrink-0
                items-center
                gap-2
                text-[11px]
                font-semibold
                sm:text-[12px]
              "
            >
              <Phone
                size={14}
                strokeWidth={1.8}
                className="shrink-0"
              />

              {/* 
                Document currently provides only +91-
                Replace with actual number when available.
              */}
              <span>+91 91214 45341</span>
            </div>
          </div>

          {/* ================================================
              RIGHT SIDE
          ================================================= */}
          <div
            className="
              flex
              min-w-0
              items-center
              justify-end
              gap-3
              text-[10px]
              sm:text-[12px]
            "
          >
            {/* Email */}
            <a
              href="mailto:drshanthifetalcare@gmail.com"
              className="
                flex
                min-w-0
                items-center
                gap-1.5
                transition-opacity
                duration-200
                hover:opacity-80
              "
            >
              <Mail
                size={15}
                strokeWidth={1.8}
                className="shrink-0"
              />

              <span
                className="
                  inline
                  max-w-[190px]
                  truncate
                  sm:max-w-[230px]
                "
              >
                drshanthifetalcare@gmail.com
              </span>

              
            </a>

            {/* Divider */}
            <span className="hidden h-4 w-px bg-white/35 md:block" />

            {/* Address */}
            <div
              className="
                hidden
                items-center
                gap-1.5
                lg:flex
              "
            >
              <MapPin
                size={15}
                strokeWidth={1.8}
                className="shrink-0"
              />

              <span>
                Sunridge Multi-Speciality Hospital, Moti Nagar, Hyderabad
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN HEADER
      ===================================================== */}
      <header
        className="
          sticky
          top-0
          z-[60]
          border-b
          border-[#663A8E]/[0.07]
          bg-white
          shadow-[0_4px_20px_rgba(72,38,109,0.07)]
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[70px]
            w-full
            max-w-[1380px]
            items-center
            justify-between
            gap-5
            px-4
            sm:h-[80px]
            sm:px-6
            lg:h-[90px]
            lg:px-8
          "
        >
          {/* =================================================
              LOGO
              Direct import - no Logo.jsx
          ================================================== */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="
              flex
              shrink-0
              items-center
            "
            aria-label="Dr. Shanthi Fetal Care Home"
          >
            <img
              src={logo}
              alt="Dr. Shanthi Fetal Care"
              className="
                h-[54px]
                w-auto
                max-w-[185px]
                object-contain
                sm:h-[62px]
                sm:max-w-[215px]
                lg:h-[79px]
                lg:max-w-[260px]
              "
            />
          </NavLink>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}
          <nav
            className="
              hidden
              flex-1
              items-center
              justify-end
              lg:flex
            "
            aria-label="Primary Navigation"
          >
            <div className="flex items-center gap-8 xl:gap-10">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `
                      group
                      relative
                      py-2
                      text-[16px]
                      font-medium
                      transition-colors
                      duration-300
                      xl:text-[16px]

                      ${
                        isActive
                          ? "text-[#D94C8A]"
                          : "text-[#252A44] hover:text-[#D94C8A]"
                      }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}

                      <span
                        className={`
                          absolute
                          bottom-0
                          left-0
                          h-[2px]
                          bg-[#D94C8A]
                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }
                        `}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Vertical Divider */}
            <span
              className="
                mx-7
                h-11
                w-px
                bg-[#252A44]/10
                xl:mx-8
              "
            />

            {/* Appointment Button */}
            <NavLink
              to="/appointment"
              className="
                inline-flex
                min-h-[50px]
                shrink-0
                items-center
                justify-center
                gap-2.5
                rounded-full
                bg-[linear-gradient(135deg,#663A8E_0%,#D94C8A_100%)]
                px-6
                text-[13px]
                font-semibold
                text-white
                shadow-[0_8px_22px_rgba(217,76,138,0.22)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_12px_28px_rgba(217,76,138,0.30)]
                xl:px-7
                xl:text-[14px]
              "
            >
              <CalendarDays
                size={17}
                strokeWidth={2}
              />

              <span>
                Make Appointment
              </span>
            </NavLink>
          </nav>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#663A8E]/15
              bg-[#FFF6FA]
              text-[#663A8E]
              transition
              duration-200
              hover:bg-[#FDEAF2]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#D94C8A]
              lg:hidden
            "
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU OVERLAY
      ===================================================== */}
      <div
        className={`
          fixed
          inset-0
          z-[100]
          lg:hidden

          ${
            menuOpen
              ? "pointer-events-auto"
              : "pointer-events-none"
          }
        `}
      >
        {/* Dark Overlay */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMenu}
          className={`
            absolute
            inset-0
            bg-[#252A44]/45
            backdrop-blur-[2px]
            transition-opacity
            duration-300

            ${
              menuOpen
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />

        {/* Mobile Drawer */}
        <aside
          className={`
            absolute
            right-0
            top-0
            flex
            h-full
            w-[min(88vw,360px)]
            flex-col
            bg-white
            shadow-2xl
            transition-transform
            duration-300
            ease-out

            ${
              menuOpen
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        >
          {/* Mobile Menu Header */}
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-[#663A8E]/10
              px-5
              py-4
            "
          >
            <img
              src={logo}
              alt="Dr. Shanthi Fetal Care"
              className="
                h-[52px]
                w-auto
                max-w-[180px]
                object-contain
              "
            />

            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#FFF6FA]
                text-[#663A8E]
                transition
                hover:bg-[#FDEAF2]
              "
            >
              <X size={21} />
            </button>
          </div>

          {/* Mobile Links */}
          <nav
            className="
              flex
              flex-1
              flex-col
              gap-1
              overflow-y-auto
              px-4
              py-6
            "
          >
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `
                    rounded-xl
                    px-4
                    py-3.5
                    text-[14px]
                    font-medium
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? "bg-[#FFF0F6] text-[#D94C8A]"
                        : "text-[#252A44] hover:bg-[#FFF6FA] hover:text-[#D94C8A]"
                    }
                  `
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Contact Info */}
          <div
            className="
              border-t
              border-[#663A8E]/10
              bg-[#FFF9FC]
              px-5
              py-5
            "
          >
            <div className="space-y-3">
              <a
                href="mailto:drshanthifetalcare@gmail.com"
                className="
                  flex
                  items-start
                  gap-3
                  text-[12px]
                  leading-5
                  text-[#252A44]/80
                "
              >
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0 text-[#D94C8A]"
                />

                <span>
                  drshanthifetalcare@gmail.com
                </span>
              </a>

              <div
                className="
                  flex
                  items-start
                  gap-3
                  text-[12px]
                  leading-5
                  text-[#252A44]/80
                "
              >
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-[#D94C8A]"
                />

                <span>
                   Sunridge Multi-Speciality Hospital, Moti Nagar, Hyderabad
                </span>
              </div>
            </div>

            <NavLink
              to="/appointment"
              onClick={closeMenu}
              className="
                mt-5
                flex
                min-h-[50px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[linear-gradient(135deg,#663A8E,#D94C8A)]
                px-5
                text-[13px]
                font-semibold
                text-white
                shadow-[0_8px_20px_rgba(217,76,138,0.20)]
              "
            >
              <CalendarDays size={17} />

              Make Appointment
            </NavLink>
          </div>
        </aside>
      </div>
    </>
  );
}