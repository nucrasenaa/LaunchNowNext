"use client";

import { useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

const slides: Slide[] = [
  { src: "/image/0.png", alt: "LaunchNow command center overview" },
  { src: "/image/1.png", alt: "LaunchNow workspace customization" },
  { src: "/image/2.png", alt: "LaunchNow automation builder" },
  { src: "/image/3.png", alt: "LaunchNow app management suite" },
  { src: "/image/4.png", alt: "LaunchNow backup workflow" },
  { src: "/image/5.png", alt: "LaunchNow analytics dashboard" },
  { src: "/image/6.png", alt: "LaunchNow release timeline" },
  { src: "/image/7.png", alt: "LaunchNow team collaboration" },
  { src: "/image/8.png", alt: "LaunchNow notification center" },
  { src: "/image/9.png", alt: "LaunchNow mobile launch preview" },
];

export default function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (move: "prev" | "next") => {
    if (move === "prev") {
      setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
    } else {
      setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
    }
  };

  const translateValue = `translateX(-${activeIndex * 100}%)`;

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[32px] border border-[var(--launch-border)] bg-white shadow-[0_30px_60px_rgba(15,23,42,0.08)]">
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: translateValue }}
        >
          {slides.map((slide) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>
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
              onClick={() => setActiveIndex(index)}
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
