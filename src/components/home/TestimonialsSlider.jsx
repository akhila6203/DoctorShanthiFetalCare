import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function TestimonialsSlider({ testimonials = [] }) {
  const [visible, setVisible] = useState(3);
  const [position, setPosition] = useState(3);
  const [animate, setAnimate] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    const updateVisible = () => {
      const nextVisible = window.innerWidth < 768 ? 1 : window.innerWidth < 1100 ? 2 : 3;
      setVisible(nextVisible);
      setPosition(nextVisible);
      setAnimate(false);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const canSlide = testimonials.length > visible;
  const itemWidth = 100 / visible;

  const track = useMemo(() => {
    if (!canSlide) return testimonials;
    const before = testimonials.slice(-visible);
    const after = testimonials.slice(0, visible);
    return [...before, ...testimonials, ...after];
  }, [testimonials, visible, canSlide]);

  const stopTimer = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
  };

  useEffect(() => {
    stopTimer();
    if (!canSlide) return undefined;
    timerRef.current = window.setInterval(() => {
      setAnimate(true);
      setPosition((prev) => prev + 1);
    }, 4200);
    return stopTimer;
  }, [canSlide, visible, testimonials.length]);

  const next = () => {
    if (!canSlide) return;
    setAnimate(true);
    setPosition((prev) => prev + 1);
  };

  const prev = () => {
    if (!canSlide) return;
    setAnimate(true);
    setPosition((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (!canSlide) return;
    const firstReal = visible;
    const afterLastReal = visible + testimonials.length;

    if (position >= afterLastReal) {
      setAnimate(false);
      setPosition(firstReal);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    } else if (position < firstReal) {
      setAnimate(false);
      setPosition(firstReal + testimonials.length - 1);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    }
  };

  const activeDot = canSlide
    ? ((position - visible) % testimonials.length + testimonials.length) % testimonials.length
    : 0;

  return (
    <div className="testimonials-slider-wrap relative mx-auto w-full">
      <div className="overflow-hidden px-1 py-3 sm:px-2">
        <div
          className={`flex ${animate ? "transition-transform duration-700 ease-out" : "transition-none"}`}
          style={{ transform: `translateX(-${(canSlide ? position : 0) * itemWidth}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {track.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="shrink-0 px-2.5 sm:px-3"
              style={{ width: `${itemWidth}%` }}
            >
              <blockquote className="h-full min-h-[270px] rounded-[26px] border border-[#663A8E]/10 bg-white p-6 shadow-[0_12px_36px_rgba(72,38,109,.07)] sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FDEAF2] text-[#D94C8A]"><Quote size={20} /></span>
                  <span className="flex gap-1 text-[#E8A52B]">{[1,2,3,4,5].map((n) => <Star key={n} size={14} fill="currentColor" />)}</span>
                </div>
                <p className="mt-5 text-[15px] leading-8 text-[#252A44]/74 sm:text-[16px]">“{item.quote}”</p>
                <p className="mt-5 text-[14px] font-bold text-[#663A8E] sm:text-[15px]">— {item.name}</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {canSlide && (
        <>
          <button type="button" onClick={prev} aria-label="Previous testimonial" className="slider-arrow left-1 sm:left-2 md:-left-3"><ChevronLeft size={20} /></button>
          <button type="button" onClick={next} aria-label="Next testimonial" className="slider-arrow right-1 sm:right-2 md:-right-3"><ChevronRight size={20} /></button>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, dot) => (
              <button
                key={dot}
                type="button"
                aria-label={`Go to testimonial ${dot + 1}`}
                onClick={() => {
                  setAnimate(true);
                  setPosition(visible + dot);
                }}
                className={`h-2 rounded-full transition-all ${dot === activeDot ? "w-7 bg-[#D94C8A]" : "w-2 bg-[#663A8E]/20"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
