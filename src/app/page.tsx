import type { JSX } from "react";
import GalleryCarousel from "./gallery-carousel";

type Feature = {
  title: string;
  description: string;
  icon: JSX.Element;
  badge?: string;
};

const iconBase = "h-6 w-6 stroke-[1.5]";

const features: Feature[] = [
  {
    title: "Native Launchpad Experience",
    description:
      "Toggle between full-screen and windowed layouts effortlessly.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`${iconBase} text-blue-600`}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="7.5" />
        <circle cx="12" cy="12" r="2" className="fill-current" />
        <path d="M12 4.5v1.5" />
        <path d="M19.5 12h-1.5" />
        <path d="M12 18.5v-1.5" />
        <path d="M6 12H4.5" />
      </svg>
    ),
  },
  {
    title: "Seamless with Liquid Glass",
    description: "Blends with macOS translucency.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`${iconBase} text-blue-600`}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="6" width="9" height="12" rx="3" />
        <rect x="10" y="6" width="9" height="12" rx="3" />
      </svg>
    ),
  },
  {
    title: "SwiftUI Native",
    description: "High-performance UI stack.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`${iconBase} text-blue-600`}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 7c-2 3-5.5 4.5-8.5 1.5 1.5 3 3.5 4.5 6 5-2 0-4 .5-5.5 2 3.5 0 6.5-.5 9-4.5 1-1.6 1.5-3.3 1-5" />
        <circle cx="17.5" cy="6.5" r="1" className="fill-current" />
      </svg>
    ),
  },
  {
    title: "Customizable Grid Layout",
    description: "Tailor columns to fit your flow.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`${iconBase} text-blue-600`}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="5" width="5" height="5" rx="1.5" />
        <rect x="14" y="5" width="5" height="5" rx="1.5" />
        <rect x="5" y="14" width="5" height="5" rx="1.5" />
        <path d="M18 14h-4v5h5v-4" />
      </svg>
    ),
  },
  {
    title: "App Management",
    description: "Add, remove, and reset effortlessly.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`${iconBase} text-blue-600`}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="5" width="16" height="14" rx="3" />
        <path d="M8 10h8" />
        <path d="M12 14v-4" />
      </svg>
    ),
  },
  {
    title: "App Settings Backup",
    description: "Export layouts securely.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`${iconBase} text-blue-600`}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="5" width="16" height="14" rx="3" />
        <path d="M8 10h8" />
        <path d="M12 14v3" />
        <path d="M12 14 9.5 11.5" />
        <path d="M12 14l2.5-2.5" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-24 pt-20 sm:px-8 md:gap-28 md:pt-24">
      <section className="flex flex-col items-center gap-12 text-center">
        <div className="flex flex-col items-center gap-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--launch-border)] bg-white px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-black">
            macOS Utility
          </span>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/icon/64.png"
                alt="LaunchNow icon"
                className="h-16 w-16 rounded-2xl border border-[var(--launch-border)] bg-white shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
              />
              <h1 className="text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                LaunchNow
              </h1>
            </div>
            <p className="max-w-2xl text-lg text-black">
              A smarter, cleaner Launchpad for macOS. Customize the grid, keep
              settings organised, and glide through your apps with zero
              friction.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/nucrasenaa/LaunchNow/releases/tag/1.4.0"
              className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-medium text-white shadow-[0_14px_24px_rgba(15,23,42,0.18)] transition hover:bg-slate-800"
            >
              Download
            </a>
            <a
              href="https://github.com/nucrasenaa/LaunchNow"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--launch-border)] bg-white px-6 text-sm font-medium text-black transition hover:border-slate-300 hover:text-black"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="w-full max-w-3xl">
          <div className="relative overflow-hidden rounded-[28px] border border-[var(--launch-border)] bg-white shadow-[0_40px_80px_rgba(15,23,42,0.08)]">
            <img
              src="/image/0.png"
              alt="LaunchNow interface preview"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/70 to-transparent" />

      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-left md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-black">
              Key Features
            </h2>
            <p className="mt-2 text-base text-black">
              Everything you need to tame Launchpad again, wrapped in a calm
              macOS-first design.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex h-full flex-col items-center gap-3 rounded-3xl border border-[var(--launch-border)] bg-white p-6 text-center shadow-[0_20px_40px_rgba(15,23,42,0.04)]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                {feature.icon}
              </span>
              <div className="flex flex-col items-center gap-1">
                <h3 className="text-base font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-black">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/70 to-transparent" />

      <section className="flex flex-col items-center gap-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-black">
            LaunchNow Gallery
          </h2>
          <p className="mt-2 text-sm text-black">
            A quick look at the polished views you can expect inside the app.
          </p>
        </div>
        <GalleryCarousel />
      </section>

      <section className="rounded-[32px] border border-[var(--launch-border)] bg-slate-50 px-8 py-10 text-center shadow-[0_28px_56px_rgba(15,23,42,0.05)] sm:px-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
            Community First
          </span>
          <h2 className="text-2xl font-semibold text-black">
            LaunchNow, made possible by the community
          </h2>
          <p className="text-sm leading-relaxed text-black">
            This project is a fork of the brilliant work by Kevin on{" "}
            <a
              className="font-medium text-blue-600 underline-offset-4 hover:underline"
              href="https://github.com/ggkevinnnn/LaunchNow"
            >
              github.com/ggkevinnnn/LaunchNow
            </a>
            . A heartfelt thank you for laying the foundation that makes
            LaunchNow even better.
          </p>
        </div>
      </section>

      <footer className="border-t border-[var(--launch-border)] pt-8 text-center text-xs text-black">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            className="hover:text-black"
            href="https://github.com/nucrasenaa/LaunchNow"
          >
            GitHub
          </a>
          <span className="text-black">•</span>
          <a className="hover:text-black" href="#">
            Version 1.4.0 beta
          </a>
        </div>
      </footer>
    </main>
  );
}
