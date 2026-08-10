"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { KONTAK, SUBSEKTOR } from "@/lib/content";
import { Flower } from "./Flower";
import { Reveal } from "./Reveal";
import { Scene } from "./Scene";

export function Kolaborasi() {
  const [terkirim, setTerkirim] = useState(false);

  /**
   * Belum ada backend. Daripada memalsukan sukses dan membuang isian user,
   * submit dirakit jadi mailto ke komite — nol infrastruktur, nol data hilang.
   * ponytail: ganti handler ini dengan Server Action + DB saat CMS siap.
   */
  function kirim(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Nama: ${f.get("nama")}`,
      `Email: ${f.get("email")}`,
      `Subsektor: ${f.get("subsektor")}`,
      "",
      "Ide kolaborasi:",
      `${f.get("ide")}`,
    ].join("\n");

    window.location.href = `mailto:${KONTAK.email}?subject=${encodeURIComponent(
      `[Kolaborasi] ${f.get("subsektor")} — ${f.get("nama")}`,
    )}&body=${encodeURIComponent(body)}`;
    setTerkirim(true);
  }

  return (
    <section
      id="kolaborasi"
      className="relative isolate overflow-hidden bg-night-900 py-16 scroll-mt-16 sm:py-28"
    >
      {/* Mobile: strip utuh; sm+: latar section. Lihat catatan di Filosofi.tsx. */}
      <Scene
        variant="Kolaborasi"
        anchor="bottom"
        className="-mt-16 mb-10 h-48 w-full sm:absolute sm:inset-0 sm:-z-20 sm:mb-0 sm:mt-0 sm:h-full"
      />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-b from-night-900 via-night-900/80 to-night-900/60 sm:block" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-300">
              Ruang Kolaborasi
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-cream sm:text-[2.75rem]">
              Mari Wujudkan Harum Karyamu
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-cream/70 sm:text-base">
              Apakah Anda pelaku Ekraf Pasuruan di bidang Fotografi, Film, Kuliner, atau
              Desain Komunikasi Visual? Mari gunakan{" "}
              <em className="not-italic font-semibold text-brand-300">intellectual property</em>{" "}
              Bunga Sedap Malam dalam karyamu selanjutnya!
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-cream-300 bg-cream/95 p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:p-8">
            {terkirim ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center"
              >
                <Flower className="mx-auto w-20" petal="var(--color-leaf-400)" core="var(--color-brand-400)" />
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  Terima kasih!
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink/60">
                  Aplikasi email Anda terbuka dengan ide yang sudah terisi — tinggal
                  tekan kirim. Komite akan membalas dalam beberapa hari kerja.
                </p>
                <button
                  type="button"
                  onClick={() => setTerkirim(false)}
                  className="mt-5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Kirim ide lain
                </button>
              </motion.div>
            ) : (
              <form onSubmit={kirim} className="space-y-4">
                <Field label="Nama / Nama Kolektif" htmlFor="nama">
                  <input
                    id="nama"
                    name="nama"
                    required
                    maxLength={120}
                    autoComplete="name"
                    placeholder="Mis. Rani Kriya Studio"
                    className={INPUT}
                  />
                </Field>

                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={160}
                    autoComplete="email"
                    placeholder="nama@email.com"
                    className={INPUT}
                  />
                </Field>

                <Field label="Subsektor" htmlFor="subsektor">
                  <select id="subsektor" name="subsektor" required defaultValue="" className={INPUT}>
                    <option value="" disabled>
                      Pilih subsektor…
                    </option>
                    {SUBSEKTOR.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Ide Kolaborasi" htmlFor="ide">
                  <textarea
                    id="ide"
                    name="ide"
                    required
                    rows={4}
                    maxLength={1500}
                    placeholder="Ceritakan singkat medium dan gagasanmu tentang Sedap Malam…"
                    className={`${INPUT} resize-y`}
                  />
                </Field>

                <button
                  type="submit"
                  className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(242,112,15,0.7)] transition-all hover:-translate-y-0.5 hover:bg-brand-600"
                >
                  Kirim Ide Kolaborasi
                  <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                    <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
                  </svg>
                </button>
                <p className="text-center text-[11px] text-ink/45">
                  Data hanya digunakan untuk menindaklanjuti pengajuan kolaborasi.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const INPUT =
  "w-full rounded-xl border border-cream-300 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-brand-400 focus:ring-2 focus:ring-brand-200";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/55"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
