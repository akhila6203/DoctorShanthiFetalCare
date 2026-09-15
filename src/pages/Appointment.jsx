import { CalendarDays, Mail, MapPin } from "lucide-react";
import PageBanner from "../components/common/PageBanner";
import ContactForm from "../components/common/ContactForm";

export default function Appointment() {
  return (
    <>
      <PageBanner title="Book an Appointment" subtitle="Submit your consultation request and the clinic can contact you to confirm availability." />
      <section className="section-space bg-white">
        <div className="content-shell grid items-start gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <div className="rounded-[28px] border border-[#663A8E]/10 bg-[#FBF8FD] p-6 sm:p-8 lg:min-h-[100%]">
            <p className="section-eyebrow">Appointment Request</p>
            <h2 className="section-title mt-2">Expert fetal & maternal care for your little one</h2>
            <p className="content-paragraph mt-5">Use the form to request a consultation with Dr. Shanthi.G. Your preferred date and time are requests and can be confirmed by the clinic.</p>
            <div className="mt-7 space-y-4">
              <div className="contact-row"><CalendarDays size={21} /><div><span>Availability</span><p>Available for consultations</p></div></div>
              <div className="contact-row"><Mail size={21} /><div><span>Email</span><a href="mailto:drshanthifetalcare@gmail.com">drshanthifetalcare@gmail.com</a></div></div>
              {/* <div className="contact-row"><MapPin size={21} /><div><span>Clinical Location</span><p>Sunridge Multi-Speciality Hospital, Moti Nagar, Hyderabad
Address: K/21, 8-3-167, Kalyan Nagar Phase 3 Rd, phase-3, Pramila Enclave, Kalyan Nagar, Moti Nagar, Hyderabad, Telangana 500114</p></div></div> */}
            <div className="contact-row">
  <MapPin size={21} />
  <div>
    <span>Clinical Location</span>
    <p>
      Sunridge Multi-Speciality Hospital
      <br />
      K/21, 8-3-167, Kalyan Nagar Phase 3 Rd, Phase 3,
      Pramila Enclave, Kalyan Nagar, Moti Nagar,
      Hyderabad, Telangana 500114
    </p>
  </div>
</div>
            </div>
          </div>
          <ContactForm appointment />
        </div>
      </section>
    </>
  );
}
