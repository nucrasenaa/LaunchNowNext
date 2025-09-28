"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

const slides: Slide[] = [
  { src: "/image/0.png", alt: "LaunchNow home view" },
  { src: "/image/1.png", alt: "LaunchNow grid customization" },
  { src: "/image/2.png", alt: "LaunchNow settings overview" },
  { src: "/image/3.png", alt: "LaunchNow app management" },
  { src: "/image/4.png", alt: "LaunchNow backup workflow" },
];

export default function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = (nextIndex: number, nextDirection: number) => {
    setDirection(nextDirection);
    setActiveIndex(nextIndex);
  };

  const handleChange = (move: "prev" | "next") => {
    if (move === "prev") {
      const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
      goToSlide(nextIndex, -1);
    } else {
      const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
      goToSlide(nextIndex, 1);
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[32px] border border-[var(--launch-border)] bg-white shadow-[0_30px_60px_rgba(15,23,42,0.08)]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={slides[activeIndex].src}
            src={slides[activeIndex].src}
            alt={slides[activeIndex].alt}
            custom={direction}
            initial={{ x: direction >= 0 ? 80 : -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction >= 0 ? -80 : 80, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <button
          type="button"
          onClick={() => handleChange("prev")}
          aria-label="Previous screenshot"
          className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/80 text-slate-700 backdrop-blur transition hover:border-slate-300 hover:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => handleChange("next")}
          aria-label="Next screenshot"
          className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/80 text-slate-700 backdrop-blur transition hover:border-slate-300 hover:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex items-center gap-2">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={slide.src}
              type="button"
              onClick={() => goToSlide(index, index > activeIndex ? 1 : -1)}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${
                isActive ? "bg-slate-900" : "bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`View screenshot ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
