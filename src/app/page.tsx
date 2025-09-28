import type { JSX } from "react";

type Feature = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const iconClass = "h-5 w-5 stroke-[1.5]";

const features: Feature[] = [
  {
    title: "Customizable Grid",
    description: "Adjust Launchpad columns and rows in real time to keep everything within thumb reach.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={iconClass}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      >
        <rect x="3.75" y="3.75" width="6.5" height="6.5" rx="1.5" />
        <rect x="13.75" y="3.75" width="6.5" height="6.5" rx="1.5" />
        <rect x="3.75" y="13.75" width="6.5" height="6.5" rx="1.5" />
        <rect x="13.75" y="13.75" width="6.5" height="6.5" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Organized Settings",
    description: "Appearance, Grid, Apps, Backup, Maintenance — each in its own calm, navigable section.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={iconClass}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      >
        <rect x="3.5" y="4" width="17" height="16" rx="4" />
        <path d="M4 7h16" />
        <path d="M7 12h10" />
        <path d="M10 17h4" />
      </svg>
    ),
  },
  {
    title: "App Management",
    description: "Add, remove, and reset apps with confirmations so nothing disappears unexpectedly.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={iconClass}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      >
        <rect x="3.5" y="4" width="17" height="16" rx="2" />
        <path d="M4.5 6.5h15" />
        <path d="M12 10v5" />
        <path d="M9 12.5h6" />
      </svg>
    ),
  },
  {
    title: "Backup & Restore",
    description: "Import and export LaunchNow profiles securely so layouts travel with you.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={iconClass}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 11c0-3.314 2.686-6 6-6s6 2.686 6 6" />
        <path d="M19 13v6h-6" />
        <path d="M19 19l-6-6" />
      </svg>
    ),
  },
  {
    title: "Smooth UX",
    description: "Fast, responsive interactions with subtle haptics and attention to detail throughout.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={iconClass}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12c3-6 13-6 16 0" />
        <path d="M4 12c3 6 13 6 16 0" />
        <circle cx="12" cy="12" r="2.25" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-24 pt-20 sm:px-8 md:gap-28 md:pt-24">
      <section className="flex flex-col items-center gap-12 text-center">
        <div className="flex flex-col items-center gap-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--launch-border)] bg-white/80 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
            macOS Utility
          </span>
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              LaunchNow
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              A smarter, cleaner Launchpad for macOS. Customize the grid, keep settings organised, and glide through your apps with zero friction.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://launchnow.app/download"
              className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-medium text-white shadow-[0_14px_24px_rgba(15,23,42,0.18)] transition hover:bg-slate-800"
            >
              Download
            </a>
            <a
              href="https://github.com/launchnowapp/launchnow"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--launch-border)] bg-white/70 px-6 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="w-full max-w-3xl">
          <div className="relative overflow-hidden rounded-[28px] border border-[var(--launch-border)] bg-[var(--launch-card)] shadow-[0_40px_80px_rgba(15,23,42,0.08)]">
            <div className="relative flex flex-col">
              <div className="flex items-center gap-3 border-b border-[var(--launch-border)] px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300" />
                </div>
                <div className="ml-4 flex items-center gap-3 text-xs text-slate-400">
                  <span className="rounded-full border border-slate-200/70 px-3 py-1">LaunchNow</span>
                  <span className="rounded-full border border-slate-200/70 px-3 py-1">Grid</span>
                  <span className="rounded-full border border-slate-200/70 px-3 py-1">Apps</span>
                  <span className="rounded-full border border-slate-200/70 px-3 py-1">Backup</span>
                </div>
                <div className="ml-auto h-8 w-48 rounded-full bg-slate-100" />
              </div>
              <div className="grid gap-4 bg-slate-50/80 px-8 py-10 md:grid-cols-6">
                {Array.from({ length: 18 }).map((_, index) => (
                  <div
                    key={`icon-${index}`}
                    className="aspect-square rounded-2xl border border-[var(--launch-border)] bg-white/90 shadow-[0_12px_20px_rgba(15,23,42,0.08)]"
                  />
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-[var(--launch-border)] bg-white/80 px-6 py-4">
                <div className="flex gap-2 text-xs text-slate-400">
                  <span className="rounded-full bg-slate-100 px-3 py-1">Folders</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">Recents</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">Profiles</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-9 w-9 rounded-full bg-slate-100" />
                  <span className="h-9 w-9 rounded-full bg-slate-100" />
                  <span className="h-9 w-24 rounded-full bg-slate-900/90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/70 to-transparent" />

      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-left md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Key Features
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Everything you need to tame Launchpad again, wrapped in a calm macOS-first design.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-[var(--launch-border)] bg-[var(--launch-card)] p-6 shadow-[0_24px_48px_rgba(15,23,42,0.06)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--launch-border)] bg-white text-slate-700">
                {feature.icon}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/70 to-transparent" />

      <footer className="border-t border-[var(--launch-border)] pt-8 text-center text-xs text-slate-500">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a className="hover:text-slate-900" href="https://github.com/launchnowapp/launchnow">
            GitHub
          </a>
          <span className="text-slate-300">•</span>
          <a className="hover:text-slate-900" href="#">
            Version 0.9.1 beta
          </a>
          <span className="text-slate-300">•</span>
          <a className="hover:text-slate-900" href="#">
            Credits
          </a>
        </div>
      </footer>
    </main>
  );
}
