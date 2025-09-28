"use client";

import { useMemo, useState } from "react";

type Slide = {
  title: string;
  caption: string;
  accent: string;
};

const slides: Slide[] = [
  {
    title: "Adaptive layouts",
    caption: "Preview custom grids with live column and row adjustments.",
    accent: "from-slate-900/90 via-slate-900/70 to-slate-900/40",
  },
  {
    title: "Organized settings",
    caption: "Switch between Appearance, Apps, and Backup sections effortlessly.",
    accent: "from-slate-800/90 via-slate-800/70 to-slate-900/30",
  },
  {
    title: "Safe restores",
    caption: "Import existing LaunchNow profiles and roll back in seconds.",
    accent: "from-slate-900/80 via-slate-900/60 to-slate-800/25",
  },
];

function SlidePreview({ accent }: { accent: string }) {
  const iconRows = useMemo(
    () =>
      Array.from({ length: 3 }).map((_, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex gap-2">
          {Array.from({ length: 5 }).map((__, iconIndex) => (
            <div
              key={`icon-${rowIndex}-${iconIndex}`}
              className="h-10 w-10 rounded-[14px] border border-white/20 bg-white/10 backdrop-blur-sm"
            />
          ))}
        </div>
      )),
    []
  );

  return (
    <div className="relative h-60 w-full overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-[0_40px_80px_rgba(15,23,42,0.18)]">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="relative flex h-full flex-col gap-4 p-6">
        <div className="flex h-3 w-full items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
          <div className="ml-auto h-1.5 w-16 rounded-full bg-white/25" />
        </div>
        <div className="grid flex-1 place-items-center">
          <div className="flex flex-col gap-3 rounded-3xl border border-white/20 bg-white/10 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.25)] backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="h-8 w-40 rounded-xl bg-white/20" />
              <div className="flex gap-2">
                <span className="h-8 w-16 rounded-xl bg-white/10" />
                <span className="h-8 w-16 rounded-xl bg-white/10" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <span className="h-10 w-10 rounded-xl bg-white/20" />
                <div className="flex flex-1 flex-col gap-2">
                  <span className="h-3 w-24 rounded bg-white/25" />
                  <span className="h-3 w-20 rounded bg-white/20" />
                </div>
              </div>
              <div className="flex gap-3">
                <span className="h-10 w-10 rounded-xl bg-white/10" />
                <div className="flex flex-1 flex-col gap-2">
                  <span className="h-3 w-32 rounded bg-white/20" />
                  <span className="h-3 w-28 rounded bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto flex justify-center">
          <div className="flex gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
            {iconRows}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];

  const handleChange = (direction: "prev" | "next") => {
    setActiveIndex((current) => {
      if (direction === "prev") {
        return current === 0 ? slides.length - 1 : current - 1;
      }
      return current === slides.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="relative flex flex-col gap-6">
        <SlidePreview accent={slide.accent} />
        <div className="flex flex-col items-center gap-3 text-center">
          <h4 className="text-lg font-semibold tracking-tight text-slate-900">
            {slide.title}
          </h4>
          <p className="max-w-xl text-sm text-slate-500">{slide.caption}</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => handleChange("prev")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--launch-border)] bg-white/80 text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
            aria-label="Previous screenshot"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <span
                key={`dot-${index}`}
                className={`h-1.5 w-5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-slate-900"
                    : "bg-slate-200"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => handleChange("next")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--launch-border)] bg-white/80 text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
            aria-label="Next screenshot"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
