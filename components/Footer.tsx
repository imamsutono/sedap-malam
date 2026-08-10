import { KONTAK, NAV, SOSMED } from "@/lib/content";
import { FlowerMark } from "./Flower";

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
            <div className="mt-5 flex flex-wrap gap-2">
              {SOSMED.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium transition-colors hover:border-brand-400 hover:text-brand-300"
                >
                  {s.label}
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
