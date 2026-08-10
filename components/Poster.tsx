"use client";

import { useRef } from "react";
import Image from "next/image";
import { pecahTanggal, type Agenda } from "@/lib/content";

/**
 * Poster agenda: thumbnail ter-crop di kartu, klik → modal berisi poster utuh.
 * Pakai <dialog> native — backdrop, Esc, dan focus trap sudah gratis.
 */
export function Poster({ agenda }: { agenda: Agenda }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const src = `/agenda/${agenda.poster}`;
  const t = pecahTanggal(agenda.tanggal);

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        aria-label={`Lihat poster ${agenda.nama}`}
        className="h-48 w-full cursor-zoom-in overflow-hidden rounded-2xl ring-1 ring-white/10 transition-all hover:ring-brand-400/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 sm:w-40"
      >
        <Image
          src={src}
          alt={`Poster ${agenda.nama}`}
          width={400}
          height={536}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </button>

      <dialog
        ref={dialog}
        onClick={(e) => {
          // Klik di backdrop (target = dialog itu sendiri) menutup modal.
          if (e.target === dialog.current) dialog.current?.close();
        }}
        className="m-auto max-h-none bg-transparent p-4"
      >
        <div className="relative">
          <Image
            src={src}
            alt={`Poster ${agenda.nama}`}
            width={896}
            height={1200}
            // Poster portrait 3:4 — batasi tinggi agar utuh tanpa scroll.
            className="mx-auto h-auto max-h-[82svh] w-auto rounded-2xl shadow-2xl"
          />

          <button
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label="Tutup poster"
            className="absolute -right-1 -top-1 rounded-full bg-night-900/90 p-2 text-cream/80 ring-1 ring-white/20 transition-colors hover:text-brand-300"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4">
              <path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <p className="mx-auto mt-3 max-w-md text-center text-sm text-cream/70">
          <span className="font-semibold text-cream">{agenda.nama}</span>
          <br />
          {t.hari}, {t.tanggal} {t.bulan} {t.tahun} · {agenda.lokasi}
        </p>
      </dialog>
    </>
  );
}
