import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function ComingSoon({ bannerTitle, breadcrumb, title, description }) {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fff7fb_0%,#f8f3fc_55%,#eefafa_100%)] py-14 sm:py-16 lg:py-20">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D94C8A]/10 blur-3xl" />
        <div className="absolute -bottom-28 left-[-60px] h-72 w-72 rounded-full bg-[#24979D]/10 blur-3xl" />
        <div className="site-shell relative z-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D94C8A]">{breadcrumb}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-[#252A44] sm:text-5xl">{bannerTitle}</h1>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="site-shell">
          <div className="mx-auto max-w-2xl rounded-[28px] border border-[#663A8E]/10 bg-white px-6 py-12 text-center shadow-[0_24px_70px_rgba(72,38,109,0.10)] sm:px-10 sm:py-14">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FDEAF2] text-[#D94C8A]">
              <Sparkles size={24} />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-[#252A44] sm:text-3xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#252A44]/65 sm:text-[15px]">{description}</p>
            <Link to="/" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#663A8E] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#572f7c]">
              <ArrowLeft size={17} /> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
