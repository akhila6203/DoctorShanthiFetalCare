import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { doctor } from "../../data/doctorData";
import { footerQuickLinks, footerServiceLinks } from "../../data/navigation";
import logo from "../../assets/logo/logo2.png";

function Facebook({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-9h3l.5-3h-3.5V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7v3h3v9h3.5Z"/></svg>;
}
function Instagram({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>;
}
function Linkedin({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.3 8.5H2V22h3.3V8.5ZM3.65 2A1.93 1.93 0 1 0 3.65 5.86 1.93 1.93 0 0 0 3.65 2ZM22 14.2c0-4.1-2.2-6-5.1-6-2.35 0-3.4 1.3-4 2.2V8.5H9.6V22h3.3v-6.7c0-1.8.34-3.55 2.58-3.55 2.2 0 2.23 2.06 2.23 3.67V22H22v-7.8Z"/></svg>;
}
function Youtube({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.7 15.4V8.6L15.6 12l-5.9 3.4Z"/></svg>;
}

function WhatsAppIcon({ size = 31 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.04 3C9.42 3 4.03 8.3 4.03 14.82c0 2.3.68 4.54 1.96 6.46L4 28.5l7.43-1.94a12.15 12.15 0 0 0 4.6.9h.01c6.62 0 12.01-5.3 12.01-11.82C28.05 9.1 22.66 3 16.04 3Zm0 22.46h-.01c-1.4 0-2.78-.37-3.98-1.07l-.29-.17-4.41 1.15 1.18-4.23-.19-.3a9.68 9.68 0 0 1-1.5-5.18c0-5.43 4.49-9.85 10.01-9.85 5.52 0 10.01 4.42 10.01 9.85 0 5.43-4.49 9.8-10.82 9.8Zm5.48-7.37c-.3-.15-1.78-.87-2.06-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.46-2.42-1.48-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.68-1.62-.93-2.22-.25-.58-.5-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.49s1.08 2.89 1.23 3.09c.15.2 2.12 3.2 5.13 4.49.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.78-.72 2.03-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z" />
    </svg>
  );
}

function FooterHeading({ title }) {
  return (
    <div>
      <h3 className="text-[20px] font-bold text-white sm:text-[21px]">{title}</h3>
      <span className="mt-3 block h-[3px] w-11 rounded-full bg-[#7FE0DD]" />
    </div>
  );
}

const socials = [
  [Facebook, "Facebook", "https://www.facebook.com/"],
  [Instagram, "Instagram", "https://www.instagram.com/"],
  [Linkedin, "LinkedIn", "https://www.linkedin.com/"],
  [Youtube, "YouTube", "https://www.youtube.com/"],
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
     <>
    <footer className="bg-[linear-gradient(135deg,#48266D_0%,#663A8E_52%,#D94C8A_100%)] text-white">
      <div className="site-shell pt-10 sm:pt-12 lg:pt-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            {/* <Link to="/" className="inline-flex rounded-xl bg-white p-2.5" aria-label="Dr. Shanthi Fetal Care Home ">
              <img src={logo} alt="Dr. Shanthi Fetal Care" className="h-[62px] w-auto max-w-[215px] object-contain" />
            </Link> */}
            <Link
  to="/"
  className="inline-flex"
  aria-label="Dr. Shanthi Fetal Care Home"
>
  <img
    src={logo}
    alt="Dr. Shanthi Fetal Care"
    className="h-[110px] w-auto max-w-[340px] object-contain"
  />
</Link>
            <p className="mt-4 max-w-[350px] text-[15px] leading-7 text-white/82 sm:text-[16px]">
              {doctor.footerDescription || "Compassionate, advanced and evidence-based fetal, maternal and prenatal care for every mother and baby."}
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.map(([Icon, label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/18 bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#663A8E]">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <FooterHeading title="Quick Links" />
            <ul className="mt-5 space-y-2.5">
              {footerQuickLinks.map((item) => (
                <li key={item.path}><Link to={item.path} className="inline-block text-[15px] font-medium text-white/82 transition hover:translate-x-1 hover:text-[#7FE0DD] sm:text-[16px]">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading title="Our Services" />
            <ul className="mt-5 space-y-2.5">
              {footerServiceLinks.map((item) => (
                <li key={item.label}><Link to={item.path} className="inline-block text-[15px] font-medium leading-6 text-white/82 transition hover:translate-x-1 hover:text-[#7FE0DD] sm:text-[16px]">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading title="Contact Us" />
            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#7FE0DD]"><Phone size={17} /></span>
                <div><p className="text-[12px] font-bold uppercase tracking-[.1em] text-white/60">Appointment Phone</p><p className="mt-1 text-[15px] font-semibold sm:text-[16px]">+91 91214 45341</p></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#7FE0DD]"><Mail size={17} /></span>
                <div><p className="text-[12px] font-bold uppercase tracking-[.1em] text-white/60">Email</p><a href="mailto:drshanthifetalcare@gmail.com" className="mt-1 block break-all text-[15px] font-semibold leading-6 text-white hover:text-[#7FE0DD] sm:text-[16px]">drshanthifetalcare@gmail.com</a></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#7FE0DD]"><MapPin size={17} /></span>
                <div><p className="text-[12px] font-bold uppercase tracking-[.1em] text-white/60">Clinical Location</p><p className="mt-1 text-[15px] font-semibold leading-7 sm:text-[16px]"> K/21, 8-3-167, Kalyan Nagar Phase 3 Rd, phase-3, Pramila Enclave, Kalyan Nagar, Moti Nagar, Hyderabad, Telangana 500114.</p></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid overflow-hidden border border-white/18 bg-white/[0.07] md:grid-cols-3">
          <div className="flex min-h-[82px] items-center gap-3 border-b border-white/18 px-5 py-3 md:border-b-0 md:border-r">
            <Phone size={21} className="shrink-0 text-[#FFE6A9]" />
            <div><p className="text-[12px] text-white/70">Need Help? Book Appointment</p><p className="mt-0.5 text-[15px] font-semibold text-[#FFE6A9] sm:text-[16px]">Available for Consultations</p></div>
          </div>
          <a href="mailto:drshanthifetalcare@gmail.com" className="flex min-h-[82px] items-center gap-3 border-b border-white/18 px-5 py-3 transition hover:bg-white/[.05] md:border-b-0 md:border-r">
            <Mail size={21} className="shrink-0" /><span className="break-all text-[15px] font-semibold sm:text-[16px]">drshanthifetalcare@gmail.com</span>
          </a>
          <div className="flex min-h-[82px] items-center gap-3 px-5 py-3"><MapPin size={21} className="shrink-0" /><span className="text-[15px] font-semibold leading-6 sm:text-[16px]">Sunridge Multi-Speciality Hospital, Moti Nagar, Hyderabad</span></div>
        </div>

        <div className="mt-5 border-t border-white/12 py-4">
          <p className="text-center text-[13px] text-white/68 sm:text-left sm:text-[14px]">© {year}, <span className="font-semibold text-[#FFE6A9]">DR. SHANTHI FETAL CARE</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>

    <a
      href="https://wa.me/919121445341?text=Hello%20I%20would%20like%20to%20know%20more."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"  
      title="Chat on WhatsApp"
      className="
        fixed
        right-[26px]
        bottom-[24px]
        z-[9999]
        flex
        h-[58px]
        w-[58px]
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_0_35px_14px_rgba(37,211,102,0.22)]
        transition-all
        duration-300
        hover:scale-105
        hover:bg-[#20c45a]
        max-sm:right-[16px]
        max-sm:bottom-[16px]
        max-sm:h-[54px]
        max-sm:w-[54px]
      "
    >
      <WhatsAppIcon size={31} />
    </a>
  </>

  );
}
