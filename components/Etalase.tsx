"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { KARYA, SUBSEKTOR, type Karya } from "@/lib/content";
import { FlowerMark } from "./Flower";
import { Scene } from "./Scene";
import { Reveal } from "./Reveal";
import { YouTubeEmbed } from "./YouTubeEmbed";

/** Nama event yang dipakai Header untuk memilih filter dari drop-down nav. */
export const FILTER_EVENT = "etalase:filter";

const FILTERS = ["Semua", ...SUBSEKTOR] as const;

const STATUS_STYLE: Record<Karya["status"], string> = {
  Tersedia: "bg-leaf-500 text-white",
  "In Progress": "bg-brand-100 text-brand-700",
  "Coming Soon": "bg-cream-300 text-ink/55",
};

export function Etalase() {
  const [filter, setFilter] = useState<string>("Semua");

  useEffect(() => {
    const onPilih = (e: Event) => setFilter((e as CustomEvent<string>).detail);
    window.addEventListener(FILTER_EVENT, onPilih);
    return () => window.removeEventListener(FILTER_EVENT, onPilih);
  }, []);

  const tampil =
    filter === "Semua" ? KARYA : KARYA.filter((k) => k.subsektor === filter);

  return (
    <section
      id="etalase"
      className="relative overflow-hidden bg-cream py-20 scroll-mt-16 sm:py-28"
    >
      <FlowerMark className="pointer-events-none absolute -right-20 top-10 h-72 w-72 text-brand-100/70" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-500">
            Etalase Karya
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.75rem]">
            Satu Harum, Beragam Karya
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/65 sm:text-base">
            Setiap kartu adalah satu tafsir atas Sedap Malam. Bagian {" "}
            <em className="not-italic font-medium text-brand-700">Coming Soon</em> sengaja
            dibiarkan terbuka — menunggu kolaborator menumbuhkan karya luar biasanya.
          </p>
        </Reveal>

        {/* Filter kategori. */}
        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Filter subsektor"
            className="mt-9 flex flex-wrap gap-2"
          >
            {FILTERS.map((f) => {
              const aktif = filter === f;
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={aktif}
                  onClick={() => setFilter(f)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    aktif ? "text-white" : "text-ink/60 hover:text-brand-700"
                  }`}
                >
                  {aktif && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-brand-500"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  )}
                  <span className="relative">{f}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/*
          Grid biasa, tanpa `layout`/popLayout. Keduanya memproyeksikan transform
          (dan position:absolute) ke kartu anak — termasuk kartu ber-<iframe>,
          yang membuat hit-test player YouTube di Chrome kacau.
        */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tampil.map((k) => (
            <KaryaCard key={k.id} karya={k} />
          ))}
        </div>

        {tampil.length === 0 && (
          <p className="mt-10 rounded-2xl border border-dashed border-cream-300 bg-white/60 p-8 text-center text-sm text-ink/55">
            Belum ada karya di subsektor ini. Kanvasnya masih kosong —{" "}
            <a href="#kolaborasi" className="font-semibold text-brand-600 underline decoration-brand-300 underline-offset-2">
              jadilah yang pertama
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}

function KaryaCard({ karya }: { karya: Karya }) {
  const [buka, setBuka] = useState(false);
  const adaVideo = !!karya.youtube?.length;
  // Kartu video melebar 2 kolom supaya 2 embed muat berdampingan.
  const lebar = adaVideo ? "sm:col-span-2" : "";

  const KELAS = `group flex flex-col overflow-hidden rounded-3xl border border-cream-300 bg-white p-5 shadow-[0_1px_2px_rgba(36,29,23,0.04)] transition-shadow duration-300 hover:border-brand-300 hover:shadow-[0_18px_40px_-24px_rgba(242,112,15,0.45)] ${lebar}`;

  /**
   * Kartu video sengaja tanpa Framer Motion sama sekali. `layout`, `scale`, dan
   * hover-lift menaruh matrix transform di ancestor <iframe>; Chrome salah
   * menghitung hit-test iframe di bawah ancestor ber-transform, jadi player
   * tidak bisa diklik. Animasi masuk diserahkan ke CSS.
   */
  const isi = (
    <>
      {/* Ilustrasi adegan malam per subsektor. */}
      {/* aspect-video ≈ rasio viewBox Scene (400×260), jadi nyaris tanpa crop. */}
      <div className="-mx-5 -mt-5 mb-4 aspect-video overflow-hidden">
        <Scene
          variant={karya.subsektor}
          className="h-full w-full transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-200 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-leaf-700">
          <FlowerMark className="h-3 w-3 text-brand-400 transition-transform duration-500 group-hover:rotate-180" />
          {karya.subsektor}
        </span>
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${STATUS_STYLE[karya.status]}`}
        >
          {karya.status}
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-brand-700">
        {karya.judul}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">{karya.deskripsi}</p>

      {adaVideo && (
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {karya.youtube!.map((id, i) => (
            <YouTubeEmbed key={id} id={id} judul={`${karya.judul} — lagu ${i + 1}`} />
          ))}
        </div>
      )}

      {/* Micro-interaction: metadata singkat muncul saat kartu dibuka. */}
      {!adaVideo && (
        <div className="mt-auto pt-5">
          <button
            type="button"
            onClick={() => setBuka((v) => !v)}
            aria-expanded={buka}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            {karya.status === "Coming Soon" ? "Isi slot ini" : "Detail"}
            <svg
              viewBox="0 0 16 16"
              className={`h-3.5 w-3.5 transition-transform ${buka ? "rotate-90" : ""}`}
            >
              <path d="M4 3.5 9 8l-5 4.5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
            </svg>
          </button>

          <AnimatePresence initial={false}>
            {buka && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-3 rounded-2xl bg-cream/80 p-3.5 text-[13px] leading-relaxed text-ink/65">
                  {karya.status === "Coming Soon" ? (
                    <>
                      Belum ada pengampu. Ajukan karyamu lewat{" "}
                      <a href="#kolaborasi" className="font-semibold text-brand-600 underline decoration-brand-300 underline-offset-2">
                        Ruang Kolaborasi
                      </a>{" "}
                      dan kartu ini jadi milikmu.
                    </>
                  ) : (
                    <>
                      Dikelola oleh {karya.subsektor}. Dokumentasi dan hasil akhir akan
                      tayang di kartu ini begitu proses selesai.
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );

  if (adaVideo) {
    return (
      <article className={`${KELAS} motion-safe:animate-[munculKartu_0.4s_ease-out]`}>
        {isi}
      </article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={KELAS}
    >
      {isi}
    </motion.article>
  );
}
