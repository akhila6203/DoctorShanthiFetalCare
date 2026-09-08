import { Mail, MapPin, Phone } from "lucide-react";
import PageBanner from "../components/common/PageBanner";
import ContactForm from "../components/common/ContactForm";

export default function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" subtitle="Reach Dr. Shanthi Fetal Care for consultations, appointment requests and enquiries." />
      <section className="section-space bg-white">
        <div className="content-shell">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
            <div>
              <p className="section-eyebrow">Contact & Clinical Location</p>
              <h2 className="section-title mt-2">We are here to help you plan your consultation</h2>
              <p className="content-paragraph mt-5">For consultation enquiries, appointment requests or clinic information, use the contact details below or send a message through the form.</p>
              <div className="mt-7 space-y-4">
                <div className="contact-row"><Phone size={21} /><div><span>Appointment Phone</span><p>+91 91214 45341</p><small className="text-[13px] text-[#252A44]/55">Available for consultations</small></div></div>
                <div className="contact-row"><Mail size={21} /><div><span>Email</span><a href="mailto:drshanthifetalcare@gmail.com">drshanthifetalcare@gmail.com</a></div></div>
                <div className="contact-row"><MapPin size={21} /><div><span>Correspondence Address</span><p>Yashoda Hospital, Hitech City, Hyderabad</p></div></div>
              </div>
            </div>
            <div>
              <p className="section-eyebrow">Send an Enquiry</p>
              <h2 className="mb-6 mt-2 text-[28px] font-bold tracking-[-.03em] text-[#252A44] sm:text-[32px]">Tell us how we can assist you</h2>
              <ContactForm />
            </div>
          </div>

          <div className="mt-10 sm:mt-12">
            <div className="mb-5 text-center">
              <p className="section-eyebrow">Map Location</p>
              <h2 className="mt-2 text-[26px] font-bold tracking-[-.03em] text-[#252A44] sm:text-[30px]">Yashoda Hospital, Hitech City, Hyderabad</h2>
            </div>
            <div className="overflow-hidden rounded-[26px] border border-[#663A8E]/10 bg-[#F7F4FA] shadow-[0_14px_40px_rgba(72,38,109,.07)]">
              <iframe
                title="Yashoda Hospital Hitech City Hyderabad map"
                src="https://www.google.com/maps?q=Yashoda%20Hospital%20Hitech%20City%20Hyderabad&output=embed"
                className="h-[360px] w-full border-0 sm:h-[420px] lg:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
