"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FlowerMark } from "./Flower";

/** Bunga latar: [kelas posisi, kecepatan parallax]. Tiga lapis = kedalaman. */
const LAYERS = [
  { cls: "left-[-6%] top-[12%] h-40 w-40 text-brand-200/50 sm:h-64 sm:w-64", speed: -140 },
  { cls: "right-[-8%] top-[26%] h-56 w-56 text-leaf-300/35 sm:h-80 sm:w-80", speed: -260 },
  { cls: "left-[16%] bottom-[-4%] h-28 w-28 text-brand-300/40 sm:h-44 sm:w-44", speed: -80 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Konten ikut naik lebih lambat + memudar → kesan lapisan (PRD §2: parallax).
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="beranda"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-cream via-cream-200 to-cream pt-24"
    >
      {LAYERS.map((l, i) => (
        <ParallaxFlower key={i} progress={scrollYProgress} {...l} />
      ))}

      {/* Cahaya hangat di belakang bunga utama. */}
      <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[38rem] w-[38rem] -translate-y-1/2 rounded-full bg-brand-200/30 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
        {/* Hanya kolom teks yang parallax + memudar; bunga tetap utuh saat scroll. */}
        <motion.div style={{ y: contentY, opacity: contentOpacity }}>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Ekosistem Kreatif Kabupaten Pasuruan
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]"
          >
            Bunga Sedap Malam:{" "}
            <span className="relative inline-block text-brand-600">
              Inspirasi Tanpa Batas
              <motion.svg
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-brand-300"
              >
                <motion.path
                  d="M2 8 C 70 2, 150 11, 298 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                />
              </motion.svg>
            </span>{" "}
            Ekonomi Kreatif Pasuruan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink/70 sm:text-lg"
          >
            Sebuah inisiatif kolaboratif untuk mengangkat identitas lokal Pasuruan
            melalui beragam ekspresi karya, dari seni, teknologi, hingga gaya hidup.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#etalase"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(242,112,15,0.7)] transition-all hover:-translate-y-0.5 hover:bg-brand-600"
            >
              Jelajahi Karya
              <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
              </svg>
            </a>
            <a
              href="#kolaborasi"
              className="inline-flex items-center justify-center rounded-full border border-leaf-500/40 bg-white/60 px-6 py-3.5 text-sm font-semibold text-leaf-700 transition-all hover:-translate-y-0.5 hover:border-leaf-500 hover:bg-white"
            >
              Ikut Berkolaborasi
            </a>
          </motion.div>
        </motion.div>

        {/* Bunga utama — mekar sekali saat load, lalu bernapas. */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto grid aspect-square w-full max-w-xs place-items-center sm:max-w-sm lg:max-w-md"
        >
          <div className="absolute inset-6 rounded-full border border-brand-200/70 sm:inset-8" />
          <div className="absolute inset-12 rounded-full border border-dashed border-leaf-300/60 sm:inset-16" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <FlowerMark className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 text-brand-300" />
            <FlowerMark className="absolute bottom-6 right-6 h-4 w-4 text-leaf-300" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[86%] sm:w-3/4"
          >
            <Image
              src="/sedap-malam.webp"
              alt="Bunga Sedap Malam"
              width={640}
              height={640}
              priority
              className="h-auto w-full drop-shadow-[0_18px_40px_rgba(172,69,8,0.22)]"
            />
          </motion.div>

          {/* Penanda identitas: nama botani, supaya bunganya tak sekadar dekorasi. */}
          <motion.figcaption
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <span className="block font-display text-sm font-semibold italic text-brand-700">
              Polianthes tuberosa
            </span>
            <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.18em] text-ink/45">
              Mekar &amp; harum saat malam
            </span>
          </motion.figcaption>
        </motion.figure>
      </div>

      <motion.a
        href="#filosofi"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] font-medium uppercase tracking-[0.2em] text-ink/40 hover:text-brand-600"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="block"
        >
          Scroll
        </motion.span>
      </motion.a>
    </section>
  );
}

function ParallaxFlower({
  progress,
  cls,
  speed,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  cls: string;
  speed: number;
}) {
  const y = useTransform(progress, [0, 1], [0, speed]);
  return (
    <motion.div style={{ y }} className={`pointer-events-none absolute ${cls}`}>
      <FlowerMark className="h-full w-full" />
    </motion.div>
  );
}
