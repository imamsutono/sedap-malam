import { Reveal } from "./Reveal";
import { Scene } from "./Scene";

const POIN = [
  {
    judul: "Kanvas Kosong Inklusif",
    isi: "Harum Sedap Malam memberi kebebasan interpretasi. Ia menunggu diisi — oleh nada, kain, rasa, kata, atau kode.",
  },
  {
    judul: "Satu Akar",
    isi: "Sekaya apa pun ragamnya, semua karya terikat pada satu identitas: keharuman Pasuruan.",
  },
  {
    judul: "Mekar di Malam",
    isi: "Seperti bunganya, ekosistem ini memberi ruang tenang untuk berkembang utuh. Mekarnya menginspirasi dunia.",
  },
];

export function Filosofi() {
  return (
    <section
      id="filosofi"
      className="relative isolate overflow-hidden bg-night-900 py-16 sm:py-32"
    >
      {/*
        Mobile: strip utuh — viewBox landscape akan ter-crop ~64% kalau dipakai
        sebagai latar di layar potret, ilustrasinya jadi tak terbaca.
        sm+: rasio layar sudah cocok, jadi kembali jadi latar section.
      */}
      <Scene
        variant="Filosofi"
        anchor="bottom"
        className="-mt-16 mb-10 h-52 w-full sm:absolute sm:inset-0 sm:-z-20 sm:mb-0 sm:mt-0 sm:h-full"
      />
      {/* Scrim: teks harus tetap terbaca di atas ilustrasi. */}
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-night-900 via-night-900/85 to-night-900/45 sm:block" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-300">
              Filosofi
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-cream sm:text-[2.75rem]">
              Bukan sekadar flora, ia adalah metafora
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 border-l-2 border-brand-400/60 pl-5 text-[15px] leading-relaxed text-cream/70 sm:text-base">
              <p>
                Seperti malam yang memberikan ruang bagi wewangian untuk mekar utuh,
                platform ini menyediakan{" "}
                <em className="not-italic font-semibold text-brand-300">&ldquo;kanvas kosong&rdquo;</em>{" "}
                bagi para kreator.
              </p>
              <p>
                Setiap seniman, pengrajin, dan pemikir bebas menginterpretasikan esensi
                Sedap Malam ke dalam medium mereka masing-masing, menciptakan ekosistem
                karya yang kaya namun terikat oleh satu akar identitas.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {POIN.map((p, i) => (
            <Reveal key={p.judul} delay={0.15 + i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/60 hover:bg-white/[0.1]">
                <h3 className="font-display text-base font-semibold text-cream">
                  {p.judul}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-cream/60">
                  {p.isi}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
