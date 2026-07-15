import Image from "next/image";
import GalleryCarousel from "./gallery-carousel";

type Feature = {
  eyebrow: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    eyebrow: "Layout",
    title: "A cleaner Launchpad that stays yours",
    description:
      "Tune columns, rows, fullscreen spacing, search scope, and scroll sensitivity without touching the real apps on disk.",
  },
  {
    eyebrow: "Personalization",
    title: "Rename apps, change icons, and shape folders",
    description:
      "Use contextual actions to rename apps or folders, change app and folder icons, reset icons, remove items, and open apps in Finder.",
  },
  {
    eyebrow: "Appearance",
    title: "Themes, backgrounds, opacity, and blur",
    description:
      "Choose Glass, Dark, Light, Compact, or Classic Launchpad presets, then refine the background image, opacity, and blur.",
  },
  {
    eyebrow: "Profiles",
    title: "Save multiple launch setups",
    description:
      "Keep Work, Personal, Gaming, or any other layout as profiles you can save, rename, apply, delete, export, and restore.",
  },
  {
    eyebrow: "Cloud",
    title: "Cloud folder backup for profiles",
    description:
      "Point LaunchNow at iCloud Drive, Google Drive, Dropbox, OneDrive, or another synced folder for profile backups.",
  },
  {
    eyebrow: "Updates",
    title: "Automatic update checks",
    description:
      "LaunchNow can check GitHub releases in the background, notify you when a new version is available, and install ZIP updates in-app.",
  },
  {
    eyebrow: "Apps",
    title: "Add, remove, reset, and auto-organize",
    description:
      "Search app lists, add apps from custom sources, remove items safely, or group your current apps into category folders.",
  },
  {
    eyebrow: "Languages",
    title: "Built for multilingual setups",
    description:
      "Switch between English, Thai, Japanese, Korean, Simplified Chinese, Spanish, French, German, Portuguese, Indonesian, Vietnamese, or system language.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-20 px-5 pb-20 pt-10 sm:px-8 md:gap-24 md:pt-16">
      <section className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Image
                src="/icon/64.png"
                alt="LaunchNow icon"
                width={64}
                height={64}
                className="h-16 w-16 rounded-lg border border-[var(--launch-border)] bg-white shadow-sm"
              />
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                LaunchNow
              </p>
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-tight text-slate-950 sm:text-6xl">
              A modern Launchpad replacement for macOS.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              Organize apps, customize your grid, save profiles, back up to a
              cloud folder, and keep LaunchNow updated from one lightweight
              macOS-first utility.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/nucrasenaa/LaunchNow/releases/latest"
              className="inline-flex h-11 items-center justify-center rounded-md bg-slate-950 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Download Latest
            </a>
            <a
              href="https://github.com/nucrasenaa/LaunchNow"
              className="inline-flex h-11 items-center justify-center rounded-md border border-[var(--launch-border)] bg-white px-6 text-sm font-semibold text-slate-950 transition hover:border-slate-300"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-[var(--launch-border)] bg-white p-2 shadow-[0_28px_80px_rgba(15,23,42,0.12)]">
          <Image
            src="/image/current/launch-now-1.jpg"
            alt="LaunchNow fullscreen app grid with search"
            width={1920}
            height={1248}
            priority
            className="aspect-[16/10] w-full rounded-md object-cover"
          />
        </div>
      </section>

      <section className="grid gap-6 border-y border-[var(--launch-border)] py-10 sm:grid-cols-3">
        <div>
          <p className="text-3xl font-semibold text-slate-950">1.5.2</p>
          <p className="mt-1 text-sm text-slate-600">Latest release</p>
        </div>
        <div>
          <p className="text-3xl font-semibold text-slate-950">11</p>
          <p className="mt-1 text-sm text-slate-600">Completed 1.x roadmap features</p>
        </div>
        <div>
          <p className="text-3xl font-semibold text-slate-950">12</p>
          <p className="mt-1 text-sm text-slate-600">Language choices including system language</p>
        </div>
      </section>

      <section className="flex flex-col gap-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
            Current Functions
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Everything in the app today, not a wishlist.
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-700">
            The website now reflects the LaunchNow 1.5.x feature set: profiles,
            cloud folder sync, automatic update checks, background customization,
            search controls, app sources, and safer app management.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-lg border border-[var(--launch-border)] bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {feature.eyebrow}
              </p>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid items-center gap-8 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="rounded-lg border border-[var(--launch-border)] bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <Image
            src="/image/current/launch-now-7.jpg"
            alt="LaunchNow profiles and cloud backup settings"
            width={1920}
            height={1248}
            className="aspect-[16/10] w-full rounded-md object-cover"
          />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
            Data Safety
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Profiles and cloud folder backup are built into Settings.
          </h2>
          <p className="text-base leading-7 text-slate-700">
            Save layouts as profiles, restore them later, and keep a backup in a
            synced folder. LaunchNow stores profile data separately from your
            installed apps, so layout experiments stay reversible.
          </p>
          <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <li className="rounded-md bg-slate-50 p-3">Save and rename profiles</li>
            <li className="rounded-md bg-slate-50 p-3">Restore from cloud folder</li>
            <li className="rounded-md bg-slate-50 p-3">Export and import data</li>
            <li className="rounded-md bg-slate-50 p-3">Backup Now for synced folders</li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6">
        <div className="max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Gallery
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Real screenshots from the current app.
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Browse the app grid, settings, appearance controls, app management,
            data backup, and update panels from LaunchNow 1.5.2.
          </p>
        </div>
        <GalleryCarousel />
      </section>

      <section className="rounded-lg border border-[var(--launch-border)] bg-slate-950 px-6 py-10 text-white sm:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Ready for macOS
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Download LaunchNow 1.5.2.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Install with the DMG, then let the built-in updater keep future
              versions current with automatic checks and in-app ZIP updates.
            </p>
          </div>
          <a
            href="https://github.com/nucrasenaa/LaunchNow/releases/latest"
            className="inline-flex h-11 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Get the latest release
          </a>
        </div>
      </section>

      <footer className="border-t border-[var(--launch-border)] pt-8 text-center text-xs text-slate-600">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a className="hover:text-slate-950" href="https://github.com/nucrasenaa/LaunchNow">
            GitHub
          </a>
          <span>Version 1.5.2</span>
          <a className="hover:text-slate-950" href="https://github.com/ggkevinnnn/LaunchNow">
            Original project
          </a>
        </div>
      </footer>
    </main>
  );
}
