"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { NAV, SUBSEKTOR } from "@/lib/content";
import { FILTER_EVENT } from "./Etalase";

function pilihFilter(subsektor: string) {
  window.dispatchEvent(new CustomEvent(FILTER_EVENT, { detail: subsektor }));
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setSolid(y > 24));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-cream/85 backdrop-blur-md border-b border-cream-300 shadow-[0_1px_20px_rgba(36,29,23,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a
          href="#beranda"
          className="group flex items-center gap-2.5 text-ink"
          aria-label="Sedap Malam Pasuruan — ke beranda"
        >
          {/* Foto bunga asli, bukan SVG — identitas terbawa di seluruh halaman. */}
          <Image
            src="/sedap-malam.png"
            alt=""
            width={72}
            height={72}
            priority
            className="h-9 w-9 object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <span className="leading-none">
            <span className="block font-display text-lg font-semibold tracking-tight">
              Sedap Malam
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-leaf-500">
              Ekraf Pasuruan
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.href === "#etalase" ? (
              <EtalaseDropdown key={item.href} label={item.label} />
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-brand-100/70 hover:text-brand-700"
              >
                {item.label}
              </a>
            ),
          )}
          <a
            href="#kolaborasi"
            className="ml-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-600 hover:shadow-md"
          >
            Ikut Berkolaborasi
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Buka menu navigasi"
          className="grid h-10 w-10 place-items-center rounded-full border border-cream-300 bg-white/70 lg:hidden"
        >
          <span className="relative block h-3.5 w-4.5">
            <span
              className={`absolute left-0 h-0.5 w-full rounded bg-ink transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full rounded bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-full rounded bg-ink transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-cream-300 bg-cream/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4 sm:px-8">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink/80 hover:bg-brand-100/70 hover:text-brand-700"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-1 flex flex-wrap gap-1.5 px-3">
                {SUBSEKTOR.map((s) => (
                  <a
                    key={s}
                    href="#etalase"
                    onClick={() => {
                      pilihFilter(s);
                      setOpen(false);
                    }}
                    className="rounded-full border border-cream-300 bg-white px-2.5 py-1 text-xs text-ink/60"
                  >
                    {s}
                  </a>
                ))}
              </div>
              <a
                href="#kolaborasi"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full bg-brand-500 px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Ikut Berkolaborasi
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

/**
 * Drop-down filter subsektor (PRD Modul 1). Hover + focus-within, tanpa state.
 * Pilihan dikirim ke <Etalase> lewat CustomEvent — lebih murah daripada
 * mengangkat state filter ke root hanya untuk satu menu.
 */
function EtalaseDropdown({ label }: { label: string }) {
  return (
    <div className="group relative">
      <a
        href="#etalase"
        className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-brand-100/70 hover:text-brand-700 group-focus-within:bg-brand-100/70"
      >
        {label}
        <svg viewBox="0 0 12 12" className="h-3 w-3 transition-transform group-hover:rotate-180">
          <path d="M2 4.5 6 8.5 10 4.5" fill="none" stroke="currentColor" strokeWidth={1.6} />
        </svg>
      </a>
      <div className="invisible absolute left-0 top-full w-52 translate-y-1 rounded-2xl border border-cream-300 bg-white p-1.5 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {["Semua", ...SUBSEKTOR].map((s) => (
          <a
            key={s}
            href="#etalase"
            onClick={() => pilihFilter(s)}
            className="block rounded-xl px-3 py-2 text-sm text-ink/70 hover:bg-cream-200 hover:text-brand-700"
          >
            {s}
          </a>
        ))}
      </div>
    </div>
  );
}
