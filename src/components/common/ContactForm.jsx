import { useState } from "react";
import { Send } from "lucide-react";

const initialForm = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactForm({ appointment = false }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", text: "" });

    try {
      const response = await fetch("/api/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, form_type: appointment ? "Appointment Request" : "Contact Enquiry" }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Unable to send your enquiry.");
      setStatus({ type: "success", text: data.message || "Thank you. Your request has been sent successfully." });
      setForm(initialForm);
    } catch (error) {
      setStatus({ type: "error", text: error.message || "Unable to send. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-[28px] border border-[#663A8E]/10 bg-white p-5 shadow-[0_18px_55px_rgba(72,38,109,.08)] sm:p-7 lg:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="form-field">
          <span>Full Name *</span>
          <input name="name" value={form.name} onChange={onChange} required placeholder="Enter your full name" />
        </label>
        <label className="form-field">
          <span>Mobile Number *</span>
          <input name="phone" value={form.phone} onChange={onChange} required inputMode="tel" placeholder="Enter mobile number" />
        </label>
        <label className="form-field">
          <span>Email Address *</span>
          <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="Enter email address" />
        </label>
        {/* <label className="form-field">
          <span>{appointment ? "Preferred Date / Time" : "Subject"}</span>
          <input
            name="subject"
            value={form.subject}
            onChange={onChange}
            placeholder={appointment ? "Example: 12 Sep, morning" : "How can we help?"}
          />
        </label> */}
        <label className="form-field">
  <span>{appointment ? "Subject / Reason *" : "Subject"}</span>

  <input
    name="subject"
    value={form.subject}
    onChange={onChange}
    required={appointment}
    placeholder={
      appointment
        ? "Enter subject / reason"
        : "How can we help?"
    }
  />
</label>
      </div>
      <label className="form-field mt-4">
        <span>{appointment ? "Reason for Appointment" : "Message"} *</span>
        <textarea name="message" value={form.message} onChange={onChange} required rows="5" placeholder="Write your message here" />
      </label>

      {status.text && (
        <div className={`mt-4 rounded-xl px-4 py-3 text-sm ${status.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
          {status.text}
        </div>
      )}

      <button type="submit" disabled={sending} className="premium-button mt-5 disabled:cursor-not-allowed disabled:opacity-60">
        <Send size={17} /> {sending ? "Sending..." : appointment ? "Request Appointment" : "Send Message"}
      </button>
    </form>
  );
}
