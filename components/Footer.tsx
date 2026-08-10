import { KONTAK, NAV, SOSMED } from "@/lib/content";
import { FlowerMark } from "./Flower";

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .56.04.82.12v-3.6a6.37 6.37 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 3.76 1.42V6.69z" />
    </svg>
  );
}

function YouTubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function ThreadsIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.75c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25s9.75 4.365 9.75 9.75c0 2.584-.966 4.945-2.58 6.732-1.39 1.542-3.253 2.38-5.326 2.38-1.503 0-2.78-.445-3.696-1.289-.92-.848-1.398-2.023-1.346-3.308.06-1.488.75-2.736 1.897-3.424 1.05-.63 2.46-.867 3.974-.667l.797.106v-.667c0-1.265-.487-2.222-1.37-2.693-.655-.35-1.53-.45-2.463-.284-.903.16-1.637.643-2.068 1.36l-1.657-.962c.732-1.22 1.954-2.04 3.44-2.302 1.508-.266 2.977-.105 4.137.456 1.562.756 2.44 2.298 2.44 4.343v4.615c0 .914.36 1.346.818 1.346.544 0 1.282-.544 1.85-1.472 1.107-1.808 1.685-3.968 1.685-6.251 0-4.273-3.477-7.75-7.75-7.75S4.25 7.727 4.25 12s3.477 7.75 7.75 7.75c1.86 0 3.63-.66 5.035-1.876l1.353 1.353C16.666 20.9 14.385 21.75 12 21.75z" />
    </svg>
  );
}

function SocialIcon({ label, className = "h-4 w-4" }: { label: string; className?: string }) {
  switch (label.toLowerCase()) {
    case "instagram":
      return <InstagramIcon className={className} />;
    case "tiktok":
      return <TikTokIcon className={className} />;
    case "youtube":
      return <YouTubeIcon className={className} />;
    case "threads":
      return <ThreadsIcon className={className} />;
    default:
      return null;
  }
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night-900 pt-16 text-cream/70">
      <FlowerMark className="pointer-events-none absolute -bottom-24 right-16 h-72 w-72 text-leaf-700/35" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <FlowerMark className="h-9 w-9 text-brand-400" />
              <span className="leading-none">
                <span className="block font-display text-lg font-semibold text-cream">
                  Sedap Malam
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-leaf-300">
                  Ekraf Pasuruan
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {KONTAK.komite}. Wadah kolektif lintas subsektor — satu akar identitas,
              ragam karya tak terbatas.
            </p>
          </div>

          <nav>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-cream">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-brand-300">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-cream">
              Kontak
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${KONTAK.email}`}
                  className="transition-colors hover:text-brand-300"
                >
                  {KONTAK.email}
                </a>
              </li>
              <li>{KONTAK.alamat}</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {SOSMED.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream/80 transition-all duration-200 hover:border-brand-400 hover:bg-brand-500/10 hover:text-brand-300 hover:scale-105"
                >
                  <SocialIcon label={s.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {KONTAK.komite}.</p>
          <p className="text-cream/45">
            Dibangun kolektif oleh subsektor Aplikasi &amp; Pengembang Permainan.
          </p>
        </div>
      </div>
    </footer>
  );
}

