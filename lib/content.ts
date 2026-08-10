/**
 * Sumber data tunggal untuk landing page.
 * PRD §4: CMS-ready — menambah subsektor/karya/agenda = menambah entri di sini,
 * tanpa menyentuh komponen. Bentuk objek sengaja dibuat mirror tabel `karya`
 * dan `agenda` supaya nanti bisa langsung diganti fetch dari CMS/DB.
 */

export const NAV = [
  { label: "Beranda", href: "#beranda" },
  { label: "Filosofi", href: "#filosofi" },
  { label: "Etalase Karya", href: "#etalase" },
  { label: "Agenda", href: "#agenda" },
  { label: "Ruang Kolaborasi", href: "#kolaborasi" },
] as const;

export type Subsektor =
  | "Musik"
  | "Seni Pertunjukan"
  | "Literasi"
  | "Kriya"
  | "Kuliner"
  | "Lainnya";

/** Urutan tombol filter di Etalase. "Semua" ditambahkan oleh komponen. */
export const SUBSEKTOR: Subsektor[] = [
  "Musik",
  "Seni Pertunjukan",
  "Literasi",
  "Kriya",
  "Kuliner",
  "Lainnya",
];

export type Karya = {
  id: string;
  judul: string;
  subsektor: Subsektor;
  deskripsi: string;
  status: "Tersedia" | "In Progress" | "Coming Soon";
  /** ID video YouTube, boleh lebih dari satu. Kosong = kartu non-video. */
  youtube?: string[];
};

export const KARYA: Karya[] = [
  {
    id: "harmoni-sedap-malam",
    judul: "Harmoni Sedap Malam",
    subsektor: "Musik",
    deskripsi:
      "Dua lagu yang lahir dari aroma malam Pasuruan — interpretasi musikal pertama atas identitas Sedap Malam.",
    status: "Tersedia",
    // ponytail: placeholder ID — ganti dengan 2 ID video asli, tidak ada perubahan kode lain.
    youtube: ["LDvluUT3TuE", "Mel_cHtLElc"],
  },
  {
    id: "gerak-tari",
    judul: "Eksplorasi Gerak Tari Sedap Malam",
    subsektor: "Seni Pertunjukan",
    deskripsi:
      "Riset gerak dan concept art koreografi yang menerjemahkan mekarnya kelopak menjadi bahasa tubuh.",
    status: "In Progress",
  },
  {
    id: "dongeng",
    judul: "Mengenalkan Sedap Malam Lewat Dongeng",
    subsektor: "Literasi",
    deskripsi:
      "Kumpulan dongeng dan pembacaan keliling untuk anak-anak Pasuruan, mengakarkan cerita sejak dini.",
    status: "In Progress",
  },
  {
    id: "batik-motif",
    judul: "Motif Sedap Malam untuk Kriya & Fesyen",
    subsektor: "Kriya",
    deskripsi:
      "Kanvas masih kosong. Batik, tenun, atau perhiasan bermotif Sedap Malam menunggu tangan pertamanya.",
    status: "Coming Soon",
  },
  {
    id: "kuliner",
    judul: "Rasa & Aroma Sedap Malam",
    subsektor: "Kuliner",
    deskripsi:
      "Ruang untuk inovasi minuman, kue, atau sajian yang meminjam wangi Sedap Malam sebagai identitas rasa.",
    status: "Coming Soon",
  },
  {
    id: "lainnya",
    judul: "Fotografi, Film & DKV",
    subsektor: "Lainnya",
    deskripsi:
      "Subsektor lain yang ingin memakai IP Bunga Sedap Malam — menunggu karya luar biasa.",
    status: "Coming Soon",
  },
];

export type Agenda = {
  id: string;
  nama: string;
  penyelenggara: string;
  tanggal: string; // ISO, diformat saat render
  lokasi: string;
  linkPendaftaran: string;
  /** Adegan ilustrasi poster (lihat components/Scene.tsx). */
  adegan: Subsektor;
  poster: string;
};

export const AGENDA: Agenda[] = [
  {
    id: "playdate-literasi",
    nama: "Playdate Literasi Sedap Malam",
    penyelenggara: "Subsektor Literasi",
    tanggal: "2026-09-15",
    lokasi: "TBM Andisya",
    linkPendaftaran: "https://forms.gle/literasi-pasuruan",
    adegan: "Literasi",
    poster: "image1.jpg",
  },
  {
    id: "peluncuran-koreografi",
    nama: "Peluncuran Koreografi Tari",
    penyelenggara: "Subsektor Seni Pertunjukan",
    tanggal: "2026-09-22",
    lokasi: "Taman Chandra",
    linkPendaftaran: "https://forms.gle/tari-pasuruan",
    adegan: "Seni Pertunjukan",
    poster: "image3.jpg",
  },
  {
    id: "bazar-kreatif",
    nama: "Bazar Kreatif Sedap Malam",
    penyelenggara: "Semua Subsektor",
    tanggal: "2026-09-30",
    lokasi: "Alun-Alun Bangil",
    linkPendaftaran: "https://forms.gle/bazar-pasuruan",
    adegan: "Kuliner",
    poster: "image2.jpg",
  },
];

const HARI = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
const BULAN = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

/**
 * Format manual dalam UTC. `Intl` dengan timezone default bisa menggeser
 * tanggal sehari antara render server dan klien (hydration mismatch).
 */
export function pecahTanggal(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  return {
    hari: HARI[d.getUTCDay()],
    tanggal: String(d.getUTCDate()).padStart(2, "0"),
    bulan: BULAN[d.getUTCMonth()],
    tahun: d.getUTCFullYear(),
  };
}

export const SOSMED = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "TikTok", href: "https://tiktok.com/" },
  { label: "YouTube", href: "https://youtube.com/" },
];

export const KONTAK = {
  komite: "Komite Ekonomi Kreatif Kabupaten Pasuruan",
  email: "halo@sedapmalampasuruan.id",
  alamat: "Kabupaten Pasuruan, Jawa Timur",
};
