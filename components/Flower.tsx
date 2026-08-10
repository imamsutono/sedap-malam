"use client";

import { motion } from "framer-motion";

/**
 * Bunga Sedap Malam sebagai SVG. Enam kelopak identik yang dirotasi.
 * Kedua varian `d` punya struktur perintah yang sama, jadi Framer Motion
 * bisa meng-interpolasi bentuknya (PRD §2: SVG morphing).
 */
const PETAL_BLOOM = "M0 0 C 10 -14, 8 -34, 0 -46 C -8 -34, -10 -14, 0 0 Z";
const PETAL_CLOSED = "M0 0 C 4 -16, 3 -30, 0 -38 C -3 -30, -4 -16, 0 0 Z";

const ANGLES = [0, 60, 120, 180, 240, 300];

type Props = {
  className?: string;
  /** true = kelopak mekar penuh, false = menguncup. */
  bloom?: boolean;
  /** Warna kelopak. */
  petal?: string;
  /** Warna inti bunga. */
  core?: string;
};

export function Flower({
  className,
  bloom = true,
  petal = "currentColor",
  core = "var(--color-brand-400)",
}: Props) {
  return (
    <svg
      viewBox="-60 -60 120 120"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <g>
        {ANGLES.map((a) => (
          <motion.path
            key={a}
            d={PETAL_CLOSED}
            animate={{ d: bloom ? PETAL_BLOOM : PETAL_CLOSED }}
            transition={{
              duration: 1.1,
              delay: a / 900,
              ease: [0.22, 1, 0.36, 1],
            }}
            transform={`rotate(${a})`}
            fill={petal}
          />
        ))}
      </g>
      <motion.circle
        r={7}
        fill={core}
        animate={{ r: bloom ? 7 : 4 }}
        transition={{ duration: 0.8 }}
      />
    </svg>
  );
}

/** Varian statis & ringan untuk dekorasi latar (tanpa animasi per-kelopak). */
export function FlowerMark({ className }: { className?: string }) {
  return (
    <svg viewBox="-60 -60 120 120" className={className} aria-hidden="true">
      {ANGLES.map((a) => (
        <path key={a} d={PETAL_BLOOM} transform={`rotate(${a})`} fill="currentColor" />
      ))}
      <circle r={7} fill="currentColor" fillOpacity={0.45} />
    </svg>
  );
}
