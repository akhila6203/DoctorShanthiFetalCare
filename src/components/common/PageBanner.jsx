import { ChevronRight, Home as HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageBanner({ title, subtitle }) {
  return (
    <section className="page-banner">
      <div className="content-shell py-9 sm:py-11 lg:py-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 text-[12px] font-semibold text-white/80 sm:text-[13px]">
            <Link to="/" className="inline-flex items-center gap-1.5 transition hover:text-[#FFE6A9]">
              <HomeIcon size={14} /> Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#FFE6A9]">{title}</span>
          </div>
          <h1 className="mt-4 text-[clamp(2rem,4vw,3.45rem)] font-bold leading-tight tracking-[-0.04em] text-white">{title}</h1>
          {subtitle && (
            <p className="mx-auto mt-3 max-w-3xl text-[16px] leading-7 text-white/86 sm:text-[17px] sm:leading-8 lg:text-[18px]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
