import { AGENDA, pecahTanggal } from "@/lib/content";
import { FlowerMark } from "./Flower";
import { Poster } from "./Poster";
import { Reveal } from "./Reveal";

export function Agenda() {
  return (
    <section
      id="agenda"
      className="relative overflow-hidden bg-night-900 py-20 scroll-mt-16 sm:py-28"
    >
      <FlowerMark className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 text-leaf-700/40" />
      <div className="pointer-events-none absolute right-1/4 top-0 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            Agenda
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-cream sm:text-[2.75rem]">
            Agenda Kami
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-cream/60 sm:text-base">
            Kalender gabungan seluruh subsektor. Satu tempat untuk tahu di mana
            ekosistem ini sedang mekar.
          </p>
        </Reveal>

        <ul className="mt-10 space-y-3">
          {AGENDA.map((a, i) => {
            const t = pecahTanggal(a.tanggal);
            return (
              <Reveal key={a.id} delay={i * 0.08}>
                <li className="group grid items-center gap-4 rounded-3xl border border-white/10 bg-white/4 p-4 transition-all duration-300 hover:border-brand-400/60 hover:bg-white/[0.07] sm:grid-cols-[auto_auto_1fr_auto] sm:p-5">
                  {/* Kalender mini. */}
                  <div className="flex w-fit items-center gap-3 sm:flex-col sm:gap-0 sm:rounded-2xl sm:bg-brand-500 sm:px-4 sm:py-3 sm:text-center">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-300 sm:text-white/80">
                      {t.hari}
                    </span>
                    <span className="font-display text-3xl font-semibold leading-none text-cream sm:text-white">
                      {t.tanggal}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-cream/70 sm:text-white/85">
                      {t.bulan} {t.tahun}
                    </span>
                  </div>

                  {/* Poster acara — klik untuk lihat utuh. */}
                  <Poster agenda={a} />

                  <div>
                    <h3 className="font-display text-lg font-semibold leading-snug text-cream transition-colors group-hover:text-brand-300 sm:text-xl">
                      {a.nama}
                    </h3>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-cream/55">
                      <span className="inline-flex items-center gap-1.5">
                        <FlowerMark className="h-3 w-3 text-leaf-300" />
                        {a.penyelenggara}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5">
                          <path
                            d="M8 14.5S13 10 13 6.5a5 5 0 1 0-10 0C3 10 8 14.5 8 14.5Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.3}
                          />
                          <circle cx="8" cy="6.5" r="1.7" fill="currentColor" />
                        </svg>
                        {a.lokasi}
                      </span>
                    </div>
                  </div>

                  <a
                    href={a.linkPendaftaran}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-brand-400/60 px-5 py-2.5 text-sm font-semibold text-brand-300 transition-all hover:bg-brand-500 hover:text-white sm:w-auto"
                  >
                    Daftar / RSVP
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5">
                      <path d="M6 3.5h6.5V10M12.5 3.5 4 12" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
                    </svg>
                  </a>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
