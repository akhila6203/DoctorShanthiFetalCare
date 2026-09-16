import { CheckCircle2, GraduationCap, HeartHandshake, ScanHeart, Stethoscope } from "lucide-react";
import PageBanner from "../components/common/PageBanner";
import doctorImage from "../assets/images/doctor.jpeg";

const qualifications = [
  "MBBS from prestigious Gandhi Medical College, Hyderabad (Completed 2013)",
  "DNB Obstetrics & Gynecology at Southern Railway Hospital, Chennai (Completed 2020)",
  "Fellowship in Minimal Access Surgery – World Laparoscopy Hospital (WLH), Delhi (2021)",
  "Fellowship in Regenerative Medicine & Cosmetic Gynecology – IASRM, Delhi",
  "Fellowship in Fetal Medicine – Fetal Medicine & Fetal Therapy Department, Sunridge Multi-Speciality Hospital, Moti Nagar, Hyderabad",
];

const moments = [
  [ScanHeart, "Scanning / Ultrasound", "Dr. Shanthi performing detailed fetal scan"],
  [Stethoscope, "Surgical Procedures", "Expert Minimal Access & Laparoscopic Surgery"],
  [HeartHandshake, "OPD Consultation", "Compassionate patient consultation & guidance"],
];

export default function About() {
  return (
    <>
      <PageBanner title="About Me" subtitle="Know more about Dr. Shanthi.G, her training, clinical interests and approach to maternal and fetal care." />
      <section className="section-space bg-white">
        <div className="content-shell grid items-center gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-14">
          {/* <div className="relative mx-auto w-full max-w-[390px] sm:max-w-[410px] lg:max-w-[400px]"> */}
          <div className="relative mx-auto w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px]">
            <div className="overflow-hidden rounded-[26px] bg-[#F9F3F7] shadow-[0_18px_48px_rgba(72,38,109,.09)]">
              <img
  src={doctorImage}
  alt="Dr. Shanthi.G"
  className="
    h-[500px]
    w-full
    object-cover
    object-top
    sm:h-[560px]
    lg:h-[650px]
  "
/>
              {/* <img src={doctorImage} alt="Dr. Shanthi.G" className="w-full object-cover object-top" /> */}
            </div>
            <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur">
              <p className="text-[12px] font-bold uppercase tracking-[.15em] text-[#D94C8A]">Dr. Shanthi.G</p>
            </div>
          </div>

          <div>
            <p className="section-eyebrow">About Dr. Shanthi.G</p>
            <h2 className="section-title mt-2">Expertise built around compassionate maternal and prenatal care</h2>
            <p className="content-paragraph mt-5">
              Dr. Shanthi is a highly skilled Specialist in Fetal Medicine, Obstetrics, Gynecology, Minimal Access Surgery, and Cosmetic Gynecology. Dedicated to providing compassionate, advanced evidence-based maternal and prenatal genetic care.
            </p>

            <div className="mt-7 rounded-[24px] border border-[#663A8E]/10 bg-[#FBF8FD] p-5 sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#663A8E] text-white"><GraduationCap size={24} /></span>
                <h3 className="text-[20px] font-bold text-[#252A44]">Education & Fellowships</h3>
              </div>
              {/* <div className="space-y-3.5">
                {qualifications.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[15px] leading-7 text-[#252A44]/72 sm:text-[16px]">
                    <CheckCircle2 size={18} className="mt-1.5 shrink-0 text-[#24979D]" /> {item}
                  </div>
                ))}
              </div> */}
              <div className="space-y-3">
  {qualifications.map((item) => (
    <div
      key={item}
      className="
        group
        flex
        items-start
        gap-3.5
        rounded-[14px]
        border
        border-[#663A8E]/10
        bg-white
        px-4
        py-3
        text-[15px]
        font-medium
        leading-7
        text-[#3F4057]
        shadow-[0_4px_14px_rgba(72,38,109,.05)]
        transition-all
        duration-300
        hover:-translate-y-[1px]
        hover:border-[#663A8E]/20
        hover:bg-[#F8F3FB]
        hover:shadow-[0_8px_20px_rgba(72,38,109,.10)]
        sm:px-4
        sm:py-3.5
        sm:text-[16px]
      "
    >
      <span
        className="
          mt-1
          flex
          h-6
          w-6
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#E9F8F8]
          text-[#24979D]
          transition-all
          duration-300
          group-hover:bg-[#663A8E]
          group-hover:text-white
        "
      >
        <CheckCircle2 size={15} strokeWidth={2.2} />
      </span>

      <span className="flex-1">
        {item}
      </span>
    </div>
  ))}
</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="content-shell">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <p className="section-eyebrow">Clinical Focus</p>
            <h2 className="section-title mt-2">Care across scanning, procedures and consultation</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {moments.map(([Icon, title, text]) => (
              <article key={title} className="about-focus-card">
                <span className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-[linear-gradient(135deg,#663A8E,#D94C8A)] text-white shadow-[0_12px_28px_rgba(217,76,138,.22)]"><Icon size={38} strokeWidth={1.55} /></span>
                <h3 className="mt-5 text-[20px] font-bold text-[#252A44]">{title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-[#252A44]/68 sm:text-[16px]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
