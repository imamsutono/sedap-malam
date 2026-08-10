/**
 * Cek minimal: jalankan `node --test lib/content.test.ts`.
 * Yang dijaga: format tanggal agenda (satu-satunya logika non-trivial) dan
 * integritas data terhadap tipe filter Etalase.
 */
import assert from "node:assert/strict";
import test from "node:test";
import { AGENDA, KARYA, SUBSEKTOR, pecahTanggal } from "./content.ts";

test("pecahTanggal tidak bergeser hari lintas timezone", () => {
  assert.deepEqual(pecahTanggal("2026-09-15"), {
    hari: "Sel",
    tanggal: "15",
    bulan: "Sep",
    tahun: 2026,
  });
  // Tanggal 1 digit harus dipad, dan tidak jatuh ke bulan sebelumnya.
  assert.deepEqual(pecahTanggal("2026-01-01"), {
    hari: "Kam",
    tanggal: "01",
    bulan: "Jan",
    tahun: 2026,
  });
});

test("setiap karya punya subsektor yang ada di daftar filter", () => {
  for (const k of KARYA) assert.ok(SUBSEKTOR.includes(k.subsektor), k.id);
});

test("kartu berstatus Tersedia wajib punya media", () => {
  for (const k of KARYA) {
    if (k.status === "Tersedia") assert.ok(k.youtube?.length, `${k.id} tanpa media`);
  }
});

test("setiap agenda punya link pendaftaran absolut", () => {
  for (const a of AGENDA) assert.match(a.linkPendaftaran, /^https:\/\//, a.id);
});
