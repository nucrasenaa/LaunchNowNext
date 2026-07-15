"use client";

import Image from "next/image";
import { useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

const slides: Slide[] = [
  { src: "/image/current/launch-now-1.jpg", alt: "LaunchNow fullscreen app grid with search" },
  { src: "/image/current/launch-now-2.jpg", alt: "LaunchNow general settings with language, shortcut, and search scope" },
  { src: "/image/current/launch-now-3.jpg", alt: "LaunchNow appearance settings with presets and background controls" },
  { src: "/image/current/launch-now-4.jpg", alt: "LaunchNow grid layout settings" },
  { src: "/image/current/launch-now-5.jpg", alt: "LaunchNow app management with rename and icon controls" },
  { src: "/image/current/launch-now-6.jpg", alt: "LaunchNow app sources settings" },
  { src: "/image/current/launch-now-7.jpg", alt: "LaunchNow profiles and cloud backup settings" },
  { src: "/image/current/launch-now-8.jpg", alt: "LaunchNow automatic update settings" },
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
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-[var(--launch-border)] bg-white shadow-[0_30px_60px_rgba(15,23,42,0.08)]">
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: translateValue }}
        >
          {slides.map((slide) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              width={1920}
              height={1248}
              className="h-full w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => handleChange("prev")}
          aria-label="Previous screenshot"
            className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-white/60 bg-white/80 text-slate-700 backdrop-blur transition hover:border-slate-300 hover:text-black"
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
            className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-white/60 bg-white/80 text-slate-700 backdrop-blur transition hover:border-slate-300 hover:text-black"
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
